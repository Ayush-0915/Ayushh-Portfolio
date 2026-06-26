"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Rocket, Github } from "lucide-react";

// Premium AI & Engineering Principles Cards
const allCards = [
  {
    id: 1,
    title: "AI-FIRST THINKING",
    description: "Design intelligent systems that transform data into actionable decisions using Machine Learning, Deep Learning, and Generative AI.",
    Icon: Brain,
    illustration: (
      <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 stroke-primary/30 group-hover:stroke-primary/60 transition-all duration-700 fill-none" xmlns="http://www.w3.org/2000/svg">
        <g className="translate-x-[40px] translate-y-[40px]">
          {/* Outer Ring */}
          <circle cx="160" cy="160" r="140" strokeWidth="1" strokeDasharray="4 8" className="animate-[spin_100s_linear_infinite]" />
          <circle cx="160" cy="160" r="100" strokeWidth="1.5" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite_reverse]" />
          {/* Nodes */}
          <circle cx="160" cy="60" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="60" cy="160" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="260" cy="160" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="160" cy="260" r="8" className="fill-background stroke-primary stroke-2" />
          {/* Central node */}
          <circle cx="160" cy="160" r="14" className="fill-primary/20 stroke-primary stroke-[3] animate-pulse" />
          {/* Connecting Lines */}
          <line x1="160" y1="60" x2="60" y2="160" stroke="currentColor" strokeWidth="2" />
          <line x1="160" y1="60" x2="260" y2="160" stroke="currentColor" strokeWidth="2" />
          <line x1="160" y1="260" x2="60" y2="160" stroke="currentColor" strokeWidth="2" />
          <line x1="160" y1="260" x2="260" y2="160" stroke="currentColor" strokeWidth="2" />
          
          <line x1="160" y1="60" x2="160" y2="146" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="160" y1="260" x2="160" y2="174" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="60" y1="160" x2="146" y2="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="260" y1="160" x2="174" y2="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      </svg>
    )
  },
  {
    id: 2,
    title: "SCALABLE ENGINEERING",
    description: "Build modular, maintainable, and production-ready software architectures designed for long-term scalability and performance.",
    Icon: Cpu,
    illustration: (
      <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 stroke-primary/30 group-hover:stroke-primary/60 transition-all duration-700 fill-none" xmlns="http://www.w3.org/2000/svg">
        <g className="translate-x-[40px] translate-y-[40px]">
          {/* Isometric Server Stacks */}
          {/* Layer 1 (Top) */}
          <path d="M160 60 L260 110 L160 160 L60 110 Z" strokeWidth="2" className="fill-background/40" />
          <path d="M60 110 L60 125 L160 175 L260 125 L260 110" stroke="currentColor" strokeWidth="2" />
          <line x1="160" y1="160" x2="160" y2="175" stroke="currentColor" strokeWidth="2" />

          {/* Layer 2 (Middle) */}
          <path d="M160 120 L260 170 L160 220 L60 170 Z" strokeWidth="1.5" className="fill-background/20" opacity="0.8" />
          <path d="M60 170 L60 185 L160 235 L260 185 L260 170" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
          <line x1="160" y1="220" x2="160" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />

          {/* Layer 3 (Bottom) */}
          <path d="M160 180 L260 230 L160 280 L60 230 Z" strokeWidth="1" className="fill-background/10" opacity="0.6" />
          <path d="M60 230 L60 245 L160 295 L260 245 L260 230" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <line x1="160" y1="280" x2="160" y2="295" stroke="currentColor" strokeWidth="1" opacity="0.6" />

          {/* Support Columns / Architecture Lines */}
          <line x1="60" y1="122" x2="60" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="260" y1="122" x2="260" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="160" y1="172" x2="160" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </g>
      </svg>
    )
  },
  {
    id: 3,
    title: "CONTINUOUS INNOVATION",
    description: "Continuously explore emerging technologies including LLMs, Computer Vision, AI Agents, and Retrieval-Augmented Generation (RAG).",
    Icon: Rocket,
    illustration: (
      <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 stroke-primary/30 group-hover:stroke-primary/60 transition-all duration-700 fill-none" xmlns="http://www.w3.org/2000/svg">
        <g className="translate-x-[40px] translate-y-[40px]">
          {/* Orbital path */}
          <ellipse cx="160" cy="160" rx="130" ry="50" strokeWidth="1.5" className="rotate-[35deg] origin-[160px_160px]" />
          <ellipse cx="160" cy="160" rx="130" ry="50" strokeWidth="1.2" className="rotate-[-35deg] origin-[160px_160px] opacity-75" strokeDasharray="5 5" />
          
          {/* Speed orbits */}
          <circle cx="160" cy="160" r="70" strokeWidth="1" strokeDasharray="3 9" className="animate-[spin_20s_linear_infinite]" />
          <circle cx="160" cy="160" r="100" strokeWidth="1" className="animate-[spin_40s_linear_infinite_reverse]" strokeDasharray="10 10" />

          {/* Rocket/Spaceship abstract geometry */}
          <path d="M160 100 L180 160 L160 150 L140 160 Z" strokeWidth="2" className="fill-primary/10" />
          <path d="M160 150 L160 180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Orbit Nodes */}
          <circle cx="230" cy="110" r="5" className="fill-primary" />
          <circle cx="90" cy="210" r="4" className="fill-primary animate-ping" />
        </g>
      </svg>
    )
  },
  {
    id: 4,
    title: "OPEN SOURCE & COLLABORATION",
    description: "Create impactful products, contribute to open-source projects, and collaborate with the developer community while constantly improving technical expertise.",
    Icon: Github,
    illustration: (
      <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 stroke-primary/30 group-hover:stroke-primary/60 transition-all duration-700 fill-none" xmlns="http://www.w3.org/2000/svg">
        <g className="translate-x-[40px] translate-y-[40px]">
          {/* Collaboration rings */}
          <circle cx="160" cy="160" r="120" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="160" cy="160" r="80" strokeWidth="0.5" strokeDasharray="2 4" />

          {/* Git Branches & Merges */}
          <path d="M80 230 C 120 230, 140 180, 160 180" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M160 180 L240 180" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M120 205 C 140 150, 160 120, 200 120 L240 120" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M60 230 L80 230" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Nodes */}
          <circle cx="60" cy="230" r="5" className="fill-background stroke-primary stroke-2" />
          <circle cx="120" cy="230" r="5" className="fill-background stroke-primary stroke-2" />
          <circle cx="160" cy="180" r="6" className="fill-primary stroke-none" />
          <circle cx="240" cy="180" r="7" className="fill-background stroke-primary stroke-2" />
          <circle cx="200" cy="120" r="5" className="fill-background stroke-primary stroke-2" />
          <circle cx="240" cy="120" r="7" className="fill-primary stroke-none animate-pulse" />
        </g>
      </svg>
    )
  }
];

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Updated translation boundary for 4 cards instead of 10 to ensure natural scroll bounds
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section 
        ref={targetRef} 
        className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden">
        
        {/* Title Section */}
        <div className="w-full px-6 md:px-24 pt-6 md:pt-8 lg:pt-12 z-20 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40 leading-[0.9] uppercase">
                  Engineering <br /> Principles
              </h2>
              <div className="w-20 h-1.5 bg-primary mt-4 mb-4 rounded-full opacity-80"></div>
              <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
                  Every intelligent system I build is driven by practical engineering, continuous learning, and a commitment to creating AI solutions that deliver measurable real-world impact.
              </p>
            </motion.div>
        </div>

        {/* Carousel Items */}
        <div className="flex-1 flex items-start w-full relative mt-8 lg:mt-12">
          <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 md:px-24 absolute left-0 w-max">
            {allCards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: typeof allCards[0] }) => {
  const { Icon } = card;
  return (
    <div
      key={card.id}
      className="group relative h-[320px] w-[240px] sm:h-[360px] sm:w-[280px] md:h-[400px] md:w-[320px] lg:h-[440px] lg:w-[380px] overflow-hidden bg-card/10 hover:bg-card/20 border border-border/80 hover:border-primary/40 shadow-sm hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] flex-shrink-0 transition-all duration-500 rounded-none max-h-[55vh]"
    >
      {/* Premium Backing Glow and Illustration */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-6 sm:p-8 transition-transform duration-700 group-hover:scale-[1.03] opacity-65 group-hover:opacity-100">
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          {card.illustration}
        </div>
      </div>
      
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100 pointer-events-none"></div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 lg:p-10 pointer-events-none">
        <div className="flex items-center gap-3 mb-3 lg:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="p-2 border border-border bg-background/50 backdrop-blur-sm rounded-none">
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-foreground" />
            </div>
            <span className="text-[10px] lg:text-xs font-mono text-muted-foreground uppercase tracking-widest">
                #{String(card.id).padStart(2, '0')}
            </span>
        </div>
        
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-foreground mb-2 lg:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 leading-tight">
          {card.title}
        </h3>
        
        <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 border-t border-border/50 pt-3 lg:pt-4">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
