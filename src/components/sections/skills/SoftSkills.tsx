'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Brain, Cpu, Rocket, Github } from 'lucide-react';

const allCards = [
  {
    id: 1,
    title: "AI-FIRST THINKING",
    description: "Design intelligent systems that transform data into actionable decisions using Machine Learning, Deep Learning, and Generative AI.",
    Icon: Brain,
    illustration: (
      <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 stroke-primary/30 group-hover:stroke-primary/60 transition-all duration-700 fill-none" xmlns="http://www.w3.org/2000/svg">
        <g className="translate-x-[40px] translate-y-[40px]">
          <circle cx="160" cy="160" r="140" strokeWidth="1" strokeDasharray="4 8" className="animate-[spin_100s_linear_infinite]" />
          <circle cx="160" cy="160" r="100" strokeWidth="1.5" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite_reverse]" />
          <circle cx="160" cy="60" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="60" cy="160" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="260" cy="160" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="160" cy="260" r="8" className="fill-background stroke-primary stroke-2" />
          <circle cx="160" cy="160" r="14" className="fill-primary/20 stroke-primary stroke-[3] animate-pulse" />
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
          <path d="M160 60 L260 110 L160 160 L60 110 Z" strokeWidth="2" className="fill-background/40" />
          <path d="M60 110 L60 125 L160 175 L260 125 L260 110" stroke="currentColor" strokeWidth="2" />
          <line x1="160" y1="160" x2="160" y2="175" stroke="currentColor" strokeWidth="2" />

          <path d="M160 120 L260 170 L160 220 L60 170 Z" strokeWidth="1.5" className="fill-background/20" opacity="0.8" />
          <path d="M60 170 L60 185 L160 235 L260 185 L260 170" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
          <line x1="160" y1="220" x2="160" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />

          <path d="M160 180 L260 230 L160 280 L60 230 Z" strokeWidth="1" className="fill-background/10" opacity="0.6" />
          <path d="M60 230 L60 245 L160 295 L260 245 L260 230" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <line x1="160" y1="280" x2="160" y2="295" stroke="currentColor" strokeWidth="1" opacity="0.6" />

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
          <ellipse cx="160" cy="160" rx="130" ry="50" strokeWidth="1.5" className="rotate-[35deg] origin-[160px_160px]" />
          <ellipse cx="160" cy="160" rx="130" ry="50" strokeWidth="1.2" className="rotate-[-35deg] origin-[160px_160px] opacity-75" strokeDasharray="5 5" />
          
          <circle cx="160" cy="160" r="70" strokeWidth="1" strokeDasharray="3 9" className="animate-[spin_20s_linear_infinite]" />
          <circle cx="160" cy="160" r="100" strokeWidth="1" className="animate-[spin_40s_linear_infinite_reverse]" strokeDasharray="10 10" />

          <path d="M160 100 L180 160 L160 150 L140 160 Z" strokeWidth="2" className="fill-primary/10" />
          <path d="M160 150 L160 180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />

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
          <circle cx="160" cy="160" r="120" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="160" cy="160" r="80" strokeWidth="0.5" strokeDasharray="2 4" />

          <path d="M80 230 C 120 230, 140 180, 160 180" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M160 180 L240 180" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M120 205 C 140 150, 160 120, 200 120 L240 120" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M60 230 L80 230" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          
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

export const SoftSkills = () => {
    return (
        <section id="soft-skills" className="py-32 px-6 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - Refined Theme-Aware Layout */}
                <div className="mb-24 flex flex-col items-start gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] max-w-5xl uppercase"
                    >
                        Engineering <br /> Principles
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-foreground text-lg font-sans max-w-2xl pt-6 leading-relaxed border-t border-border mt-4"
                    >
                        Every intelligent system I build is driven by practical engineering, continuous learning, and a commitment to creating AI solutions that deliver measurable real-world impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allCards.map((card, idx) => (
                        <BentoSkillCard 
                            key={card.id} 
                            card={card} 
                            index={idx + 1} 
                        />
                    ))}
                </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/2 rounded-full blur-[120px] pointer-events-none opacity-20" />
        </section>
    );
};

const BentoSkillCard = ({
    card,
    index,
    className
}: {
    card: typeof allCards[0],
    index: number,
    className?: string
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "group relative bg-card/10 hover:bg-card/20 border border-border/80 hover:border-primary/40 rounded-[32px] p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] min-h-[500px]",
                className
            )}
        >
            {/* Top Area */}
            <div className="space-y-2 relative z-10 flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground transition-colors duration-500 uppercase">
                    {card.title}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors">#{String(index).padStart(2, '0')}</span>
            </div>

            {/* Illustration Area */}
            <div className="relative z-0 flex items-center justify-center w-full h-60 my-6 transition-all duration-700 ease-out">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                        {card.illustration}
                    </div>
                </div>
            </div>

            {/* Bottom: Description & Terminology */}
            <div className="relative z-10 space-y-4">
                <div className="h-[1px] w-8 bg-border group-hover:w-24 transition-all duration-500" />
                <p className="text-muted-foreground leading-relaxed text-[15px] group-hover:text-foreground transition-colors duration-500">
                    {card.description}
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-muted-foreground/80 transition-colors">Engineering Principle</span>
                </div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/[0.02] pointer-events-none" />
        </motion.div>
    );
};

export default SoftSkills;
