import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Terminal, Database, Bot, Sparkles } from 'lucide-react';

interface TechItem {
    name: string;
    description: string;
    badge?: 'Core' | 'Advanced' | 'Currently Building';
    icon: any;
}

interface TechCategory {
    id: string;
    title: string;
    skills: TechItem[];
}

// Clean engineering stack organized into categories, verified against portfolio project usages
export const TECH_CATEGORIES: TechCategory[] = [
    {
        id: "01",
        title: "AI & MACHINE LEARNING",
        skills: [
            {
                name: "Python",
                description: "Build intelligent applications, machine learning pipelines, automation systems, and AI-powered solutions.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                name: "LangChain",
                description: "Framework for building LLM applications and chains.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg"
            },
            {
                name: "Scikit-learn",
                description: "Develop predictive models, classification algorithms, regression systems, and feature engineering workflows.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
            },
            {
                name: "TensorFlow",
                description: "Train deep learning models for computer vision, neural networks, and production AI systems.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            },
            {
                name: "PyTorch",
                description: "Research, experimentation, and modern deep learning development.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
            }
        ]
    },
    {
        id: "02",
        title: "DATA SCIENCE",
        skills: [
            {
                name: "Pandas",
                description: "Efficient data manipulation, preprocessing, and exploratory data analysis.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
            },
            {
                name: "NumPy",
                description: "Scientific computing, numerical operations, and optimized mathematical processing.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
            },
            {
                name: "Matplotlib",
                description: "Professional data visualization and statistical reporting.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
            }
        ]
    },
    {
        id: "03",
        title: "COMPUTER VISION",
        skills: [
            {
                name: "OpenCV",
                description: "Image processing, object detection, OCR, tracking, and real-time computer vision applications.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
            }
        ]
    },
    {
        id: "04",
        title: "FULL STACK DEVELOPMENT",
        skills: [
            {
                name: "React",
                description: "Modern interactive user interfaces.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                name: "Next.js",
                description: "High-performance React applications with server-side rendering.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            },
            {
                name: "TypeScript",
                description: "Scalable, type-safe application development.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                name: "Streamlit",
                description: "Rapid prototyping and data app deployment with Python.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"
            },
            {
                name: "JavaScript (ES6+)",
                description: "Dynamic frontend engineering and application logic.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "Tailwind CSS",
                description: "Modern responsive UI development.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            }
        ]
    },
    {
        id: "05",
        title: "BACKEND & CLOUD",
        skills: [
            {
                name: "FastAPI",
                description: "High-performance APIs for AI and machine learning applications.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
            },
            {
                name: "Supabase",
                description: "Authentication, PostgreSQL database, storage, and backend services.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
            },
            {
                name: "Kubernetes",
                description: "Container orchestration for scalable deployments.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg"
            },
            {
                name: "AWS",
                description: "Amazon Web Services cloud platform.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
            },
            {
                name: "Azure",
                description: "Microsoft Azure cloud services.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
            },
            {
                name: "GCP",
                description: "Google Cloud Platform services.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
            },
            {
                name: "PostgreSQL",
                description: "Reliable relational database management.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            },
            {
                name: "Vercel",
                description: "Deployment and hosting for modern web applications.",
                badge: "Core",
                icon: "https://cdn.simpleicons.org/vercel"
            }
        ]
    },
    {
        id: "06",
        title: "DEVELOPER TOOLS",
        skills: [
            {
                name: "Git",
                description: "Version control and collaborative development.",
                badge: "Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            },
            {
                name: "GitHub",
                description: "Open-source collaboration and project management.",
                badge: "Core",
                icon: "https://cdn.simpleicons.org/github"
            },
            {
                name: "Docker",
                description: "Containerization and reproducible development environments.",
                badge: "Advanced",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            }
        ]
    },
    {
        id: "07",
        title: "GENERATIVE AI",
        skills: [
            {
                name: "Gemini API",
                description: "Large Language Model integration and AI-powered applications.",
                badge: "Currently Building",
                icon: "https://cdn.simpleicons.org/googlegemini"
            },
            {
                name: "Prompt Engineering",
                description: "Designing reliable prompts and intelligent workflows.",
                badge: "Currently Building",
                icon: Terminal
            },
            {
                name: "Retrieval-Augmented Generation (RAG)",
                description: "Building AI systems with contextual memory and knowledge retrieval.",
                badge: "Currently Building",
                icon: Database
            },
            {
                name: "AI Agents",
                description: "Developing autonomous assistants capable of reasoning and task execution.",
                badge: "Currently Building",
                icon: Bot
            }
        ]
    }
];

interface KineticTechGridProps {
    className?: string;
}

export const KineticTechGrid = ({ className }: KineticTechGridProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className={cn("space-y-16 w-full text-left", className)}>
            {TECH_CATEGORIES.map((category) => (
                <div key={category.id} className="space-y-6">
                    {/* Subtle category separator */}
                    <div className="flex items-center gap-4 select-none">
                        <span className="text-xs md:text-sm font-mono text-primary font-bold">
                            /{category.id}
                        </span>
                        <h4 className="text-xs md:text-sm font-bold tracking-widest text-foreground uppercase opacity-80">
                            {category.title}
                        </h4>
                        <div className="flex-grow h-[1px] bg-border/40" />
                    </div>

                    {/* Grid Category Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.skills.map((tech, idx) => (
                            <TechCard
                                key={tech.name}
                                tech={tech}
                                idx={idx}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const TechCard = ({ tech, idx }: { tech: TechItem, idx: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isComponentIcon = typeof tech.icon !== 'string';

    const badgeStyles = {
        'Core': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
        'Advanced': 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
        'Currently Building': 'bg-amber-500/10 border-amber-500/20 text-amber-400'
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
            whileHover={{ 
                scale: 1.02, 
                zIndex: 10,
                transition: { type: 'spring', stiffness: 400, damping: 30 }
            }}
            className="group relative rounded-[20px] bg-white dark:bg-card border border-gray-100 dark:border-border/50 flex flex-row items-center gap-4 p-3 transition-all hover:border-gray-200 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-muted/50 shadow-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[20px]" />

            {/* Left Icon Container - Grayscale/Monochrome */}
            <div className="w-[60px] h-[60px] rounded-[14px] flex-shrink-0 flex items-center justify-center bg-gray-50 dark:bg-background relative overflow-hidden transition-all group-hover:bg-white dark:group-hover:bg-background/80 shadow-inner group-hover:shadow-md">
                <div className="w-8 h-8 relative flex items-center justify-center">
                    {isComponentIcon ? (
                        <tech.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                    ) : (
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className="object-contain group-hover:scale-110 transition-all duration-300 unoptimized"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }}
                            unoptimized
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src = "/icons/fallback-tech.svg";
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Right Text Content Container */}
            <div className="flex flex-col flex-grow text-left justify-center pr-2 relative z-10 overflow-hidden">
                <div className="flex items-center justify-between gap-2 w-full">
                    <span className="text-[13px] sm:text-sm font-bold text-gray-900 dark:text-foreground group-hover:text-primary transition-colors truncate">
                        {tech.name}
                    </span>
                    {tech.badge && (
                        <span className={cn(
                            "text-[8px] font-sans font-bold px-1.5 py-0.5 border rounded uppercase tracking-wider whitespace-nowrap",
                            badgeStyles[tech.badge] || 'bg-background border-border text-muted-foreground'
                        )}>
                            {tech.badge}
                        </span>
                    )}
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 dark:text-muted-foreground mt-[2px] leading-snug line-clamp-2">
                    {tech.description}
                </span>
            </div>
        </motion.div>
    );
};

export default KineticTechGrid;
