"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
}: {
  data: TimelineEntry[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Height measurement to stop precisely at the last node's dot
  useEffect(() => {
    const container = itemsContainerRef.current;
    if (!container) return;

    const updateHeight = () => {
      const items = container.querySelectorAll(".timeline-item");
      if (items.length > 0) {
        const lastItem = items[items.length - 1];
        const lastItemHeight = lastItem.getBoundingClientRect().height;
        const containerHeight = container.getBoundingClientRect().height;
        // Height from the center of the first dot (top-[24px] of first item) 
        // to the center of the last dot (top-[24px] of last item).
        // Since the track line starts at top-[24px], its length is containerHeight - lastItemHeight.
        setLineHeight(containerHeight - lastItemHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data]);

  // IntersectionObserver Scroll Spy to track active index
  useEffect(() => {
    const container = itemsContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px", // Focal area of scroll viewport
        threshold: [0.1, 0.5],
      }
    );

    const items = container.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [data]);

  // Framer Motion useScroll on the items container for scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-background font-sans" ref={containerRef}>
      <div ref={itemsContainerRef} className="relative max-w-7xl mx-auto pb-20">
        
        {/* Timeline Vertical Track Line */}
        <div
          style={{ height: lineHeight + "px" }}
          className="absolute left-[19px] md:left-[159px] top-[24px] w-[2px] bg-neutral-200 dark:bg-neutral-800/80 pointer-events-none rounded-full"
        >
          {/* Scroll-driven gradient fill line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* Timeline Items Loop */}
        {data.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              data-index={index}
              className={cn(
                "grid grid-cols-[40px_1fr] md:grid-cols-[140px_40px_1fr] gap-0 md:gap-0 pt-8 first:pt-4 timeline-item transition-all duration-500",
                isActive ? "opacity-100" : "opacity-30"
              )}
            >
              {/* Desktop Left Side: Date/Timeline label */}
              <div className="hidden md:flex justify-end pr-6 text-right items-start pt-2">
                <span
                  className={cn(
                    "text-sm font-bold tracking-tight transition-all duration-300 font-mono",
                    isActive
                      ? "text-blue-500 dark:text-blue-400 scale-105 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                      : "text-neutral-400 dark:text-neutral-500"
                  )}
                >
                  {item.title}
                </span>
              </div>

              {/* Middle Track Col: Dot container */}
              <div className="flex justify-center items-start pt-2 relative z-10 w-10">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 border bg-background",
                    isActive
                      ? "border-blue-500 dark:border-blue-400 scale-125 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      : "border-neutral-300 dark:border-neutral-700"
                  )}
                >
                  <div
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-colors duration-500",
                      isActive
                        ? "bg-blue-500 dark:bg-blue-400"
                        : "bg-neutral-300 dark:bg-neutral-700"
                    )}
                  />
                </div>
              </div>

              {/* Right Side: Content Card */}
              <div className="pl-4 pr-4 md:pl-6 w-full pb-8">
                {/* Mobile-only Date header */}
                <div className="md:hidden block mb-2">
                  <span
                    className={cn(
                      "text-xs font-bold tracking-tight transition-colors duration-300 font-mono",
                      isActive ? "text-blue-500 dark:text-blue-400" : "text-neutral-500"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
                
                <div className="w-full">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
