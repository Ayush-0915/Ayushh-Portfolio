import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
  slug: string;
  impact: string;
  repoUrl?: string;
  demoUrl?: string;
  techStack: string[];
  metrics: string[];
  flagship?: boolean;
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "NEXUS AI",
    image: "/project/nexusai1.png",
    category: "AI Operating System",
    year: "2026",
    description: "A next-generation AI operating system built to unify Voice AI, Vision Intelligence, Memory, Retrieval-Augmented Generation (RAG), and intelligent desktop automation into one seamless experience.",
    slug: "nexus-ai",
    impact: "Unifying Voice AI, Vision, and local RAG into a secure desktop OS.",
    repoUrl: "https://github.com/Ayush-0915/NEXUS-AI",
    demoUrl: "https://nexus-ai-web-page.vercel.app/",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Gemini API", "RAG", "Supabase", "AI Agents"],
    metrics: ["AI Powered", "Local Security", "Voice & Vision"],
    flagship: true
  },
  {
    title: "CareerNova",
    image: "/project/careernova1.png",
    category: "AI SaaS Platform",
    year: "2026",
    description: "An AI-powered career assistant that helps users analyze resumes, prepare for interviews, receive career guidance, and improve employability through intelligent recommendations.",
    slug: "careernova",
    impact: "Optimizing career growth with real-time AI resume audits and mock interviews.",
    repoUrl: "https://github.com/Ayush-0915/CareerNova",
    demoUrl: "https://career-nova-cyan.vercel.app/",
    techStack: ["React", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS", "AI", "Vercel", "NLP"],
    metrics: ["SaaS Platform", "Gemini LLM", "Career Assistant"]
  },
  {
    title: "CreditWise Loan Dashboard",
    image: "/project/creditwise1.png",
    category: "Predictive Analytics",
    year: "2026",
    description: "A machine learning dashboard for predicting loan approvals with interactive analytics, visual insights, and real-time decision support.",
    slug: "creditwise",
    impact: "Empowering loan officers with explainable AI default predictions.",
    repoUrl: "https://github.com/Ayush-0915/CreditWise",
    demoUrl: "#",
    techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib", "Machine Learning"],
    metrics: ["Stacked Ensembles", "SHAP Explainability", "Predictive Model"]
  },
  {
    title: "Healthcare Risk Management",
    image: "/project/healthcareriskmanagement1.png",
    category: "Healthcare AI",
    year: "2026",
    description: "An intelligent healthcare analytics platform designed to assess patient risk using machine learning techniques and interactive dashboards. The system analyzes healthcare data to identify potential risks, support clinical decision-making, and improve predictive healthcare insights through data-driven analytics.",
    slug: "healthcare-risk-management",
    impact: "Assessing patient clinical risks using machine learning models and Streamlit dashboard.",
    repoUrl: "https://github.com/Ayush-0915/Healthcare-Risk-Management",
    demoUrl: "#",
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Matplotlib", "Machine Learning"],
    metrics: ["Risk Prediction", "Clinical Analytics", "Decision Support"]
  },
  {
    title: "Fake News Detection Using ML",
    image: "/project/fakenewsdetectionusingml1.png",
    category: "Natural Language Processing",
    year: "2026",
    description: "A Natural Language Processing (NLP) project that automatically classifies news articles as genuine or fake using supervised machine learning techniques. The project focuses on text preprocessing, feature engineering, and predictive modeling to combat misinformation through intelligent text classification.",
    slug: "fake-news-detection-using-ml",
    impact: "Combating misinformation using supervised text classifiers and TF-IDF.",
    repoUrl: "https://github.com/Ayush-0915/Detecting-Fake-News-Using-ML",
    demoUrl: "#",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "TF-IDF", "Machine Learning"],
    metrics: ["Text Classifiers", "Supervised NLP", "Misinformation Guard"]
  },
  {
    title: "Car Evaluation",
    image: "/project/carevaluation1.jpg",
    category: "Machine Learning",
    year: "2026",
    description: "A machine learning project developed to classify vehicle quality based on multiple automotive attributes using Decision Tree and Random Forest.",
    slug: "car-evaluation",
    impact: "Automating vehicle evaluation using Decision Tree and Random Forest models.",
    repoUrl: "https://github.com/Ayush-0915/Car-evaluation",
    demoUrl: "#",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Decision Tree", "Random Forest", "Streamlit"],
    metrics: ["Decision Tree", "Random Forest", "Classification"]
  },
  {
    title: "Netflix Data Analysis",
    image: "/project/netflixdataanalysis1.png",
    category: "Data Analytics",
    year: "2025",
    description: "Exploratory data analysis and visualization of Netflix content trends using Python, Pandas, and Matplotlib to uncover meaningful business insights.",
    slug: "netflix-data-analysis",
    impact: "Uncovering global streaming trends and release pattern insights.",
    repoUrl: "https://github.com/Ayush-0915/Netflix-Data-Analysis",
    demoUrl: "#",
    techStack: ["Python", "Pandas", "Matplotlib"],
    metrics: ["EDA Pipeline", "TF-IDF Recommendation", "Geospatial Mapping"]
  },
  {
    title: "Uber Trips Analysis",
    image: "/project/ubertripsanalysis1.png",
    category: "Data Analytics",
    year: "2026",
    description: "Comprehensive analysis of ride-sharing datasets to identify travel patterns, peak demand periods, and operational insights through interactive visualizations.",
    slug: "uber-trips-analysis",
    impact: "Optimizing ride-sharing demand hubs using spatial clustering.",
    repoUrl: "https://github.com/Ayush-0915/Uber-Data-Analysis",
    demoUrl: "#",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook"],
    metrics: ["DBSCAN Clustering", "Folium Heatmaps", "Demand Forecast"]
  },
  {
    title: "Bitcoin Sentiment Trader Analysis",
    image: "/project/bitcoinsentimenttraderanalysis1.jpg",
    category: "AI Trading • Financial Analytics",
    year: "2026",
    description: "An AI-powered financial analytics project that combines cryptocurrency market data with sentiment analysis to understand market psychology and identify trading opportunities.",
    slug: "bitcoin-sentiment-trader-analysis",
    impact: "Uncovering Bitcoin market psychology through sentiment-driven ML models.",
    repoUrl: "https://github.com/Ayush-0915/Bitcoin-sentiment-trader-analysis",
    demoUrl: "#",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Sentiment Analysis", "NLP"],
    metrics: ["Sentiment Analysis", "Ensemble ML", "Crypto Analytics"]
  }
];

export function ArgentLoopInfiniteSlider() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 30, mass: 1 });

  const projectArea = 0.85;
  const projectStep = projectArea / PROJECT_DATA.length; 
  const transWindow = 0.05; 

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [showFinalButtons, setShowFinalButtons] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest / projectStep), PROJECT_DATA.length - 1);
      setActiveIndex(idx);
      setShowFinalButtons(latest > projectArea);
    });
    return () => unsubscribe();
  }, [scrollYProgress, projectStep, projectArea]);

  const handleProjectFocus = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollRange = container.offsetHeight - window.innerHeight;
    const targetScroll = scrollTop + rect.top + (index * projectStep) * scrollRange;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  const handleFinalButtonsFocus = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollRange = container.offsetHeight - window.innerHeight;
    const targetScroll = scrollTop + rect.top + (projectArea + 0.05) * scrollRange;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  }; 

  const scrollMap = [0];
  const yMap = ["0vh"];
  const internalYMap = ["0px"];

  PROJECT_DATA.forEach((_, i) => {
    if (i === 0) return;
    const boundary = i * projectStep;
    scrollMap.push(boundary - transWindow / 2, boundary + transWindow / 2);
    yMap.push(`-${(i-1)*100}vh`, `-${i*100}vh`);
    internalYMap.push(`-${(i-1)*250}px`, `-${i*250}px`);
  });

  scrollMap.push(projectArea, 1);
  yMap.push(`-${(PROJECT_DATA.length-1)*100}vh`, `-${(PROJECT_DATA.length-1)*100}vh`);
  internalYMap.push(`-${(PROJECT_DATA.length-1)*250}px`, `-${(PROJECT_DATA.length-1)*250}px`);

  const currentY = useTransform(smoothProgress, scrollMap, yMap);
  const contentInternalY = useTransform(smoothProgress, scrollMap, internalYMap);

  const bgOpacity = useTransform(smoothProgress, [0, 0.05, projectArea, 1], [0, 1, 1, 0]);
  const mainUIOpacity = useTransform(smoothProgress, [0, 0.05, projectArea, 1], [0, 1, 1, 0]);
  const buttonOpacity = useTransform(smoothProgress, [projectArea, projectArea + 0.05], [0, 1]);
  const finalContainerY = useTransform(smoothProgress, [projectArea, projectArea + 0.05], ["0px", "-250px"]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={containerRef} className="relative h-[800vh]">
      <style>{`
        .argent-slider-wrapper {
            position: sticky;
            top: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background: hsl(var(--background));
            z-index: 20;
        }
        .project-list {
            position: absolute;
            width: 100%;
            height: 100%;
            will-change: transform;
        }
        .project {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        .project img {
            width: 100%;
            height: 124%;
            object-fit: cover;
            filter: brightness(0.3) blur(10px);
            transform: scale(1.05);
            will-change: transform;
        }
        .mist-overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 20%, hsl(var(--background) / 0.8) 100%);
            z-index: 5;
            pointer-events: none;
        }
        .minimap-bar-outer {
            width: 85vw;
            height: 250px;
            background: white !important;
            box-shadow: 0 50px 120px -30px rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            overflow: hidden;
        }
        .minimap-content-viewport {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .minimap-img-preview {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 440px;
            height: 100%;
            overflow: hidden;
            z-index: 10;
        }
        .minimap-img-item {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 0.8rem 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .minimap-img-item img {
            display: block;
            margin: 0;
            will-change: transform;
        }
        .minimap-info-list {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 5;
        }
        .minimap-item-info {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2.25rem 3.5%;
            font-family: 'Inter', sans-serif;
            color: black !important;
            text-transform: uppercase;
        }
        .minimap-item-info-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
        .minimap-item-info-row p {
            margin: 0;
            font-size: 10px;
            letter-spacing: 0.2em;
            font-weight: 800;
        }
        .minimap-item-info-row:nth-child(2) p { color: #666; font-weight: 700; }
        .minimap-item-info-row:nth-child(3) p { color: #999; font-weight: 500; font-size: 9.5px; text-transform: lowercase; }
        
        .custom-btn {
            background: #c1e44a;
            color: black;
            border-radius: 9999px;
            padding: 1.25rem 3rem;
            font-weight: 800;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .custom-btn-arrow,
        .custom-btn-github {
            background: #c1e44a;
            color: black;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Independent GitHub hover */
        .dark .custom-btn-github:hover {
            background: white !important;
            color: black !important;
        }
        .dark .custom-btn-github:hover svg {
            color: black !important;
        }

        /* Synchronized View More + Arrow hover */
        .dark .group-projects:hover .custom-btn,
        .dark .group-projects:hover .custom-btn-arrow {
            background: white !important;
            color: black !important;
        }

        .dark .group-projects:hover .custom-btn-arrow svg {
            color: black !important;
        }

        .slide-overlay {
            position: absolute;
            bottom: 3rem;
            left: 5%;
            z-index: 110;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        .slide-line {
            width: 140px;
            height: 1px;
            position: relative;
        }
        .slide-progress {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            will-change: width;
        }
        @media (max-width: 768px) {
            .minimap-img-preview {
                display: none !important;
            }
        }
      `}</style>
      
      <div className="argent-slider-wrapper">
        <motion.div style={{ opacity: bgOpacity }}>
          <div className="mist-overlay" />
          <motion.div className="project-list" style={{ y: currentY }}>
            {PROJECT_DATA.map((data, i) => (
              <div key={i} className="project" style={{ top: `${i * 100}vh` }}>
                {data.image ? (
                  <motion.img src={data.image} alt={`${data.title} - ${data.category} Full View`} style={{ y: imageY }} loading="lazy" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 border border-white/5">
                    <span className="text-zinc-500 font-bold tracking-widest text-lg uppercase">No Preview Available</span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ y: finalContainerY, willChange: "transform" }}
            className="flex flex-col items-center"
          >
            <motion.div style={{ opacity: mainUIOpacity }} className="minimap-bar-outer group/minimap">
              <div className="minimap-content-viewport">
                <div className="minimap-img-preview">
                  <motion.div style={{ y: contentInternalY }} className="w-full h-full relative">
                    {PROJECT_DATA.map((data, i) => (
                      <div key={i} className="minimap-img-item" style={{ top: `${i * 250}px` }}>
                        {data.image ? (
                          <img 
                            src={data.image} 
                            alt={`${data.title} preview`} 
                            className="block w-full h-full object-cover transition-transform duration-700 ease-out group-hover/minimap:scale-105" 
                            loading="lazy" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-zinc-900 border border-white/5 text-zinc-500 font-bold text-xs uppercase select-none">
                            No Preview
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div className="minimap-info-list">
                  <motion.div style={{ y: contentInternalY }} className="w-full h-full relative">
                    {PROJECT_DATA.map((data, i) => {
                      const num = (i + 1).toString().padStart(2, "0");
                      return (
                        <div key={i} className="minimap-item-info" style={{ top: `${i * 250}px` }}>
                          <div className="minimap-item-info-row items-center">
                            <div className="flex items-center gap-2 md:gap-3">
                              <p className="font-medium opacity-100">{num}</p>
                              {data.flagship && (
                                <span className="px-2 py-0.5 rounded-full bg-red-600/10 dark:bg-red-500/15 text-red-600 dark:text-red-400 text-[8px] font-mono tracking-widest font-extrabold uppercase border border-red-600/20 dark:border-red-500/30">
                                  FLAGSHIP PROJECT
                                </span>
                              )}
                            </div>
                            <h4 className="text-xl md:text-2xl font-medium tracking-tight uppercase text-right max-w-[45%] leading-tight select-text">
                              {data.title}
                            </h4>
                          </div>
                          <div className="minimap-item-info-row items-center">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-neutral-600 font-bold tracking-wider text-[10px]">{data.category}</p>
                              <div className="hidden sm:flex items-center gap-1.5 opacity-70">
                                {data.metrics.map((metric) => (
                                  <span key={metric} className="text-[7.5px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-300 text-neutral-500 select-none">
                                    {metric}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <p className="font-bold tabular-nums text-neutral-600 text-xs">{data.year}</p>
                          </div>
                          <div className="minimap-item-info-row items-end">
                            <div className="flex flex-col gap-2 max-w-[65%] sm:max-w-[35%] text-left">
                              <p className="text-neutral-500 italic text-[9.5px] leading-snug lowercase tracking-normal">
                                {data.impact}
                              </p>
                              <p className="lowercase opacity-85 font-medium leading-relaxed text-[9.5px] select-text tracking-normal">
                                {data.description}
                              </p>
                              <div className="flex flex-wrap gap-1 pointer-events-auto select-none">
                                {data.techStack.map(tech => (
                                  <span key={tech} className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-200/60 text-[7.5px] font-mono text-neutral-500 uppercase tracking-wider">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                             <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3.5 pointer-events-auto select-none shrink-0">
                              <div className="flex items-center gap-2">
                                {data.repoUrl && data.repoUrl !== '#' && (
                                  <a 
                                    href={data.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-black hover:scale-110 transition-all p-1 hover:bg-neutral-100 rounded focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                                    title="GitHub Repository"
                                    tabIndex={i === activeIndex ? 0 : -1}
                                    onFocus={() => handleProjectFocus(i)}
                                  >
                                    <Github className="w-3.5 h-3.5" />
                                  </a>
                                )}
                                {data.demoUrl && data.demoUrl !== '#' && (
                                  <a 
                                    href={data.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-black hover:scale-110 transition-all p-1 hover:bg-neutral-100 rounded focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                                    title="Live Demo"
                                    tabIndex={i === activeIndex ? 0 : -1}
                                    onFocus={() => handleProjectFocus(i)}
                                  >
                                    <Globe className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>
                              <Link 
                                  href={`/projects/${data.slug}`} 
                                  className="font-bold text-[10px] opacity-70 hover:opacity-100 hover:text-black transition-all duration-300 text-right group/link uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                                  tabIndex={i === activeIndex ? 0 : -1}
                                  onFocus={() => handleProjectFocus(i)}
                              >
                                <span className="border-b border-black/15 group-hover/link:border-black pb-0.5">View Case Study</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
 
            <div className="h-[200px] w-full flex items-center justify-center pt-10">
              <motion.div 
                style={{ 
                  opacity: buttonOpacity,
                  pointerEvents: useTransform(smoothProgress, (v) => v > projectArea ? "auto" : "none")
                }}
              >
                <div className="flex items-center gap-4 pointer-events-auto">
                  <a 
                    href="https://github.com/Ayush-0915" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="custom-btn-github hover:scale-110 active:scale-95 transition-transform shadow-xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                    title="GitHub Profile"
                    tabIndex={showFinalButtons ? 0 : -1}
                    onFocus={handleFinalButtonsFocus}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  
                  <div className="group-projects flex items-center gap-2">
                    <Link 
                      href="/projects" 
                      className="custom-btn group-hover:scale-105 active:scale-95 group-hover:shadow-[0_0_30px_rgba(193,228,74,0.3)] focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                      tabIndex={showFinalButtons ? 0 : -1}
                      onFocus={handleFinalButtonsFocus}
                    >
                      View More
                    </Link>
                    <Link 
                      href="/projects" 
                      className="custom-btn-arrow group-hover:scale-110 active:scale-95 group-hover:rotate-45 transition-transform shadow-xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                      tabIndex={showFinalButtons ? 0 : -1}
                      onFocus={handleFinalButtonsFocus}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05, projectArea, projectArea + 0.05], [0, 1, 1, 0]) }}
          className="slide-overlay"
        >
           <span className="text-foreground/40 font-mono text-[10px] tracking-[0.5em] uppercase">Page</span>
           <div className="slide-line bg-foreground/10">
              <motion.div 
                className="slide-progress bg-foreground" 
                style={{ width: useTransform(smoothProgress, [0, projectArea], ["0%", "100%"]) }} 
              />
           </div>
           <motion.span className="text-foreground font-mono text-[11px] tabular-nums font-bold">
              {useTransform(smoothProgress, (v) => {
               const idx = Math.min(Math.floor(v / projectStep), PROJECT_DATA.length - 1);
               return `${idx + 1} / ${PROJECT_DATA.length}`;
             })}
           </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
