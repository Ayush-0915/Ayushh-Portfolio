"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Brain, Cpu, Binary, Sparkles } from "lucide-react";
import gsap from "gsap";

const DOMAINS = [
  {
    id: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Engineering intelligent systems that combine machine learning, reasoning, automation, and real-world problem solving.",
    icon: Brain,
    skills: [
      {
        name: "Machine Learning",
        level: "expert",
        description: "Develop predictive models, classification systems, regression algorithms, ensemble learning techniques, and intelligent decision-making solutions using Scikit-learn and modern ML frameworks."
      },
      {
        name: "Deep Learning",
        level: "advanced",
        description: "Design neural network architectures using TensorFlow and PyTorch for image recognition, sequence modeling, feature extraction, and advanced AI applications."
      },
      {
        name: "Computer Vision",
        level: "advanced",
        description: "Build real-time computer vision systems including object detection, image classification, OCR, pose estimation, and visual intelligence using OpenCV and deep learning."
      },
      {
        name: "Generative AI & LLMs",
        level: "expert",
        description: "Develop AI assistants, Retrieval-Augmented Generation (RAG) pipelines, prompt engineering workflows, AI agents, and intelligent automation using Gemini APIs and modern LLM technologies."
      }
    ]
  },
  {
    id: "02",
    title: "FULL STACK AI",
    description: "Building complete AI-powered products using React, TypeScript, FastAPI, Supabase, cloud services, and scalable backend architectures.",
    icon: Cpu,
    skills: [
      {
        name: "Frontend Engineering",
        level: "expert",
        description: "Design and implement premium, responsive, and dynamic user interfaces using React, Next.js, TypeScript, and modern styling libraries."
      },
      {
        name: "Backend Architecture",
        level: "expert",
        description: "Build scalable, secure, and production-ready APIs and microservices using Python, FastAPI, Node.js, and serverless architectures."
      },
      {
        name: "Database & Knowledge Bases",
        level: "advanced",
        description: "Orchestrate structured and unstructured databases including PostgreSQL, Supabase, and vector databases like Pinecone/Chroma for semantic search."
      },
      {
        name: "Cloud & DevOps",
        level: "advanced",
        description: "Deploy and manage containerized systems and continuous integration/delivery pipelines using Docker, AWS, and modern hosting solutions."
      }
    ]
  },
  {
    id: "03",
    title: "DATA SCIENCE & ANALYTICS",
    description: "Transforming raw data into actionable insights through statistical analysis, visualization, predictive modeling, and business intelligence.",
    icon: Binary,
    skills: [
      {
        name: "Exploratory Data Analysis",
        level: "expert",
        description: "Perform comprehensive data auditing, cleaning, correlation analysis, and engineering using Pandas, NumPy, and SciPy."
      },
      {
        name: "Data Visualization",
        level: "expert",
        description: "Communicate insights effectively with interactive dashboards and custom visualizations using Matplotlib, Seaborn, Plotly, and Streamlit."
      },
      {
        name: "Statistical Modeling",
        level: "advanced",
        description: "Apply regression, hypothesis testing, A/B testing, and mathematical modeling to validate hypotheses and uncover patterns."
      },
      {
        name: "Business Intelligence",
        level: "advanced",
        description: "Translate complex technical metrics into actionable business strategies and performance dashboards for stakeholders."
      }
    ]
  },
  {
    id: "04",
    title: "RESEARCH & INNOVATION",
    description: "Exploring Computer Vision, Large Language Models, AI Agents, Deep Learning, and emerging technologies to build next-generation AI products.",
    icon: Sparkles,
    skills: [
      {
        name: "Agentic Systems",
        level: "expert",
        description: "Research and implement autonomous multi-agent environments, tool calling loops, and self-correcting cognitive architectures."
      },
      {
        name: "Large Language Models",
        level: "expert",
        description: "Experiment with fine-tuning, retrieval optimization (RAG), and advanced prompt engineering paradigms to unlock new model capabilities."
      },
      {
        name: "Advanced Deep Learning",
        level: "advanced",
        description: "Investigate novel neural networks, custom loss functions, and transformer-based architectures for sequence and vision tasks."
      },
      {
        name: "Emerging Tech & R&D",
        level: "advanced",
        description: "Constantly evaluate academic papers and integrate cutting-edge open-source AI advancements into production software."
      }
    ]
  }
];

const AUTO_PLAY_DURATION = 8000;

const ProgressBar = ({ duration, activeIndex }: { duration: number, activeIndex: number }) => {
  const lineRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { scaleY: 0, opacity: 0 }, 
          { 
            scaleY: 1, 
            opacity: 1, 
            duration: duration / 1000, 
            ease: "none",
            force3D: true 
          }
        );
      }
    });

    return () => ctx.revert();
  }, [duration, activeIndex]);

  return (
    <div 
      ref={lineRef}
      className="absolute top-0 left-0 bottom-0 w-[2px] bg-primary z-20 origin-top will-change-transform"
    />
  );
};

const ExpertiseIndicator = ({ level, delay }: { level: string; delay: number }) => {
  const percentage = level === "expert" ? "95%" : level === "advanced" ? "85%" : "75%";
  
  return (
    <div className="w-full h-[6px] bg-muted/20 rounded-full overflow-hidden relative mt-4">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: percentage }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay }}
        style={{ backgroundSize: "200% 100%" }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        className="h-full bg-gradient-to-r from-primary/30 via-primary/80 to-primary rounded-full relative"
      >
        {/* Glowing tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff,0_0_12px_rgba(var(--primary-rgb),0.8)]" />
      </motion.div>
    </div>
  );
};

export const HardSkills = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % DOMAINS.length);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [mounted, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "10%" : "-10%",
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        y: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-10%" : "10%",
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        y: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.3 }
      }
    }),
  };

  if (!mounted) return <div className="min-h-[850px]" />;

  return (
    <section id="hard-skills" className="w-full bg-background pt-32 md:pt-52 lg:pt-64 pb-8 md:pb-0 relative overflow-hidden min-h-screen md:min-h-[850px] lg:min-h-[950px]">
      <div className="w-full max-w-[2000px] px-6 md:px-12 lg:px-16 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-start gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] uppercase"
          >
            CORE EXPERTISE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-foreground text-sm font-sans uppercase tracking-[0.2em] block leading-relaxed border-t border-border pt-4 w-64"
          >
            Artificial Intelligence Engineering
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Skills Cards */}
          <div className="lg:col-span-7 flex flex-col justify-start order-2 lg:order-1">
            <div className="relative group/gallery w-full">
              <div 
                className="relative w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-card/5 border border-border/40 shadow-2xl"
                data-lenis-prevent
                style={{ overflowAnchor: 'none' }}
              >
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative w-full bg-gradient-to-br from-background via-card/10 to-muted/20"
                  >
                    <div className="w-full p-4 md:p-6 lg:p-8 overflow-hidden h-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                        {DOMAINS[activeIndex].skills.map((skill, idx) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.03 }}
                            className="p-4 md:p-5 bg-card/30 hover:bg-card/40 border border-border/30 hover:border-primary/40 rounded-xl transition-all duration-500 group shadow-sm hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.1)] flex flex-col justify-start"
                          >
                            <div className="mb-2">
                              <div className="flex justify-between items-start mb-2 gap-2">
                                <h5 className="font-sans font-bold text-sm tracking-tight text-foreground/90 leading-tight">{skill.name}</h5>
                                <span className={cn(
                                  "text-[8px] md:text-[9px] font-sans font-bold px-2 py-1 border rounded uppercase tracking-wider whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0",
                                  skill.level === 'beginner' && "bg-blue-500/10 border-blue-500/20 text-blue-400",
                                  skill.level === 'intermediate' && "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
                                  skill.level === 'advanced' && "bg-amber-500/10 border-amber-500/20 text-amber-400",
                                  skill.level === 'expert' && "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
                                  (!skill.level || (skill.level as string) === 'Exp') && "bg-background/80 border-border/40 text-muted-foreground"
                                )}>
                                  {skill.level}
                                </span>
                              </div>
                              
                              {/* Glowing Animated Expertise Indicator */}
                              <ExpertiseIndicator level={skill.level} delay={idx * 0.05} />
                            </div>
                            <p className="text-[11px] md:text-xs font-sans text-muted-foreground/80 leading-relaxed mt-2">
                              {skill.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Panel: Domains Switches */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2 lg:pl-12 mb-8 lg:mb-0">
            <div className="space-y-1 mb-6 md:mb-10">
              <h2 className="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-foreground uppercase">
                ENGINEERING DOMAINS
              </h2>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.3em] block ml-0.5">
                (Focus Areas)
              </span>
            </div>

            <div className="flex flex-col space-y-0">
              {DOMAINS.map((category, index) => {
                const isActive = activeIndex === index;
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      if (index === activeIndex) return;
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0",
                      isActive ? "text-foreground" : "text-muted-foreground/60 hover:text-foreground"
                    )}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20">
                      {isActive && <ProgressBar duration={AUTO_PLAY_DURATION} activeIndex={activeIndex} />}
                    </div>
                    <div className="flex-1 pl-4 md:pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={cn(
                          "text-[10px] md:text-xs font-bold tracking-widest transition-colors duration-500 font-mono",
                          isActive ? "text-primary" : "text-muted-foreground/40"
                        )}>
                          /{category.id}
                        </span>
                        
                        {/* Premium AI-inspired Icon for each domain */}
                        <Icon className={cn(
                          "w-4 h-4 md:w-5 md:h-5 transition-all duration-500",
                          isActive ? "text-primary scale-110" : "text-muted-foreground/40 group-hover:text-foreground/75"
                        )} />

                        <h3 className={cn(
                          "text-xl md:text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-500",
                          isActive ? "scale-105 origin-left" : "scale-100"
                        )}>
                          {category.title.toUpperCase()}
                        </h3>
                      </div>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 5 }}
                            transition={{ duration: 0.4 }}
                            className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-sm font-sans"
                          >
                            {category.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
