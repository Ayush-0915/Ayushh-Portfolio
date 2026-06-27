'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    Calendar,
    GraduationCap,
    Award,
    Sparkles,
    Code,
    Cpu,
    Server,
    Layers,
    ExternalLink,
    Github,
    Maximize2,
    CheckCircle2,
    BookOpen,
    Rocket,
    Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Certifications Data
const certificationsData = [
    {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "May 2025",
        image: "/certificate/AZ900.png",
        description: "Foundational knowledge of cloud services and Azure architecture."
    },
    {
        title: "Oracle Cloud Infrastructure AI Foundations",
        issuer: "Oracle",
        date: "June 2025",
        image: "/certificate/Oracle database .jpeg",
        description: "Core competency in machine learning and OCI AI services."
    },
    {
        title: "Google Cloud Generative AI Certification",
        issuer: "Google Cloud",
        date: "July 2025",
        image: "/certificate/google-cloud-engineering-certificate.png",
        description: "Large language models, semantic analysis, and responsible AI."
    },
    {
        title: "Red Hat Academy Certification (RH134)",
        issuer: "Red Hat",
        date: "April 2025",
        image: "/certificate/red-hat-system-administration-ii-rh134-rha-ver-10.png",
        description: "Enterprise system administration and RHEL environment setups."
    }
];

// Projects & Achievements Data
const projectsData = [
    { 
        name: "NEXUS AI", 
        type: "AI Operating System", 
        desc: "Cognitive desktop assistant with low-latency Voice AI, screen perception, and vector memory.",
        tags: ["Python", "FastAPI", "RAG", "AI Agents"],
        image: "/project/nexusai1.png",
        github: "https://github.com/Ayush-0915/NEXUS-AI",
        demo: "https://nexus-ai-web-page.vercel.app/"
    },
    { 
        name: "CareerNova", 
        type: "AI SaaS Platform", 
        desc: "ATS compatibility reviewer and resume analyzer leveraging LLM recommendation engines.",
        tags: ["React", "TypeScript", "Supabase", "Gemini API"],
        image: "/project/careernova1.png",
        github: "https://github.com/Ayush-0915/CareerNova",
        demo: "https://career-nova-cyan.vercel.app/"
    },
    { 
        name: "CreditWise Loan Dashboard", 
        type: "Predictive ML Model", 
        desc: "Stacked classifier ensemble evaluating credit defaults with interactive SHAP risk insights.",
        tags: ["Python", "Scikit-learn", "Streamlit", "XGBoost"],
        image: "/project/creditwise1.png",
        github: "https://github.com/Ayush-0915/CreditWise",
        demo: "https://credit-wise-loanapp.streamlit.app/"
    },
    { 
        name: "Bitcoin Sentiment Trader", 
        type: "Financial ML Model", 
        desc: "Predicting market trends by combining time-series indicators with NLP public sentiment.",
        tags: ["Python", "Sentiment Analysis", "XGBoost", "NLP"],
        image: "/project/bitcoinsentimenttraderanalysis1.jpg",
        github: "https://github.com/Ayush-0915/Bitcoin-sentiment-trader-analysis",
        demo: ""
    },
    { 
        name: "Car Evaluation System", 
        type: "Classification Model", 
        desc: "Machine learning classifier assessing vehicle qualities using multi-criteria attributes.",
        tags: ["Python", "Scikit-learn", "Random Forest"],
        image: "/project/carevaluation1.jpg",
        github: "https://github.com/Ayush-0915/Car-evaluation",
        demo: ""
    },
    { 
        name: "Fake News Detection ML", 
        type: "NLP Text Pipeline", 
        desc: "Supervised classification model analyzing news articles validity using custom TF-IDF matrices.",
        tags: ["Python", "Scikit-learn", "TF-IDF", "NLTK"],
        image: "/project/fakenewsdetectionusingml1.png",
        github: "https://github.com/Ayush-0915/Detecting-Fake-News-Using-ML",
        demo: ""
    },
    { 
        name: "Healthcare Risk Management", 
        type: "Clinical Predictor", 
        desc: "Clinical decision support system evaluating patient risk profiles from high-dimensional lab data.",
        tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
        image: "/project/healthcareriskmanagement1.png",
        github: "https://github.com/Ayush-0915/Healthcare-Risk-Management",
        demo: ""
    },
    { 
        name: "Netflix Data Analysis", 
        type: "Exploratory Analytics", 
        desc: "Temporal content trend mapping, release mapping, and TF-IDF content recommendation system.",
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        image: "/project/netflixdataanalysis1.png",
        github: "https://github.com/Ayush-0915/Netflix-Data-Analysis",
        demo: ""
    },
    { 
        name: "Uber Trips Analysis", 
        type: "Exploratory Analytics", 
        desc: "Exploratory ride-sharing data analysis identifying demand patterns, peaks, and drop-off spaces.",
        tags: ["Python", "Pandas", "NumPy", "Plotly"],
        image: "/project/ubertripsanalysis1.png",
        github: "https://github.com/Ayush-0915/Uber-Data-Analysis",
        demo: ""
    }
];

// Technical Universe Skills Data
const technicalSkills = [
    "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "NLP", 
    "Transformers", "Generative AI", "LangChain", "FastAPI", "Streamlit", "React", "Next.js", 
    "TypeScript", "JavaScript", "Tailwind CSS", "Docker", "Kubernetes", "Git", "GitHub", 
    "AWS", "Azure", "GCP", "SQL", "Power BI", "Tableau", "Jupyter", "Vercel", "Supabase", 
    "Linux", "MLOps"
];

export default function ExperiencePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-100 relative overflow-hidden pb-40">
            
            {/* Minimal Background Glows */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* 1. HERO SECTION */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-left border-b border-neutral-900">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase font-sans">
                        Education & <br /> Learning Journey
                    </h1>
                    <p className="text-neutral-400 max-w-2xl text-base md:text-lg mt-4 leading-relaxed font-medium">
                        My academic growth, certifications, and experiences in Artificial Intelligence and Machine Learning.
                    </p>
                </motion.div>
            </section>

            {/* 2. EDUCATION & LEARNING TIMELINE */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
                <div className="relative">
                    
                    {/* The Timeline Line (offset left side) */}
                    <div className="absolute left-[30px] md:left-[90px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-emerald-500/40" />

                    {/* Timeline Entries Loop */}
                    <div className="space-y-24">

                        {/* ENTRY: 2026 - Production AI Systems */}
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12 relative group">
                            
                            {/* Left Year Badge */}
                            <div className="sticky top-28 h-fit text-right">
                                <span className="inline-block text-sm md:text-base font-black font-mono px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    2026
                                </span>
                            </div>

                            {/* Right Content */}
                            <div className="pl-6 md:pl-8 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)] transition-all duration-300"
                                >
                                    <div className="flex gap-2 items-center text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-2">
                                        <Server className="w-4 h-4" />
                                        <span>Production AI Systems</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                                        Building Intelligent AI Systems
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 mb-4">
                                        Scale, Deployments & Cloud MLOps
                                    </p>
                                    
                                    <div className="text-sm text-neutral-400 leading-relaxed font-medium space-y-2 mb-6">
                                        <p>• **AI Engineering**: Designing multi-agent cognitive patterns, planning layers, and local memory engines.</p>
                                        <p>• **Full Stack AI**: Building low-latency Next.js client interfaces and robust FastAPI API backends.</p>
                                        <p>• **LLMs & RAG**: Implementing semantic retrieval chains using LangChain, sentence embeddings, and vector stores.</p>
                                        <p>• **MLOps & Cloud**: Containerizing models with Docker, running local cluster pods using Kubernetes, and deploying to AWS, Azure, or GCP instances.</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900/60">
                                        {["LangChain", "FastAPI", "Docker", "Kubernetes", "AWS", "Azure", "GCP"].map((tag, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono uppercase bg-neutral-900 text-neutral-400 border border-neutral-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ENTRY: 2025 - ML & AI Research */}
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12 relative group">
                            
                            {/* Left Year Badge */}
                            <div className="sticky top-28 h-fit text-right">
                                <span className="inline-block text-sm md:text-base font-black font-mono px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                    2025
                                </span>
                            </div>

                            {/* Right Content */}
                            <div className="pl-6 md:pl-8 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.02)] transition-all duration-300"
                                >
                                    <div className="flex gap-2 items-center text-xs font-bold font-mono text-purple-400 uppercase tracking-wider mb-2">
                                        <Cpu className="w-4 h-4" />
                                        <span>Research & Development</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                                        Deep Dive into Machine Learning & AI Research
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 mb-4">
                                        Advanced Algorithmic Modeling
                                    </p>
                                    
                                    <div className="text-sm text-neutral-400 leading-relaxed font-medium space-y-2 mb-6">
                                        <p>• Built predictive classification pipelines using Scikit-Learn (Decision Trees, Random Forests, XGBoost).</p>
                                        <p>• Constructed neural network architectures and multi-layered models in TensorFlow and PyTorch.</p>
                                        <p>• Developed real-time object classification and image processing routines using OpenCV.</p>
                                        <p>• Explored NLP pipelines including TF-IDF representations, lemmatization, and basic transformers.</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900/60">
                                        {["Machine Learning", "Deep Learning", "Computer Vision", "NLP"].map((tag, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono uppercase bg-neutral-900 text-neutral-400 border border-neutral-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ENTRY: 2024 - Sage University */}
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12 relative group">
                            
                            {/* Left Year Badge */}
                            <div className="sticky top-28 h-fit text-right">
                                <span className="inline-block text-sm md:text-base font-black font-mono px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                                    2024
                                </span>
                            </div>

                            {/* Right Content */}
                            <div className="pl-6 md:pl-8 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.02)] transition-all duration-300"
                                >
                                    <div className="flex gap-2 items-center text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider mb-2">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>B.Tech Commencement</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                                        B.Tech in Artificial Intelligence & Machine Learning
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 mb-4">
                                        Sage University, Indore | CGPA: 7.0 (Currently in 2nd Year, 4th Semester)
                                    </p>
                                    
                                    <div className="text-sm text-neutral-400 leading-relaxed font-medium space-y-2 mb-6">
                                        <p>• Beginning of AI & ML journey, establishing core theoretical foundations.</p>
                                        <p>• Learned Python fundamentals, object-oriented concepts, and computational logic.</p>
                                        <p>• Started Data Structures and Algorithms to resolve complex split and timing constraints.</p>
                                        <p>• Explored Data Science structures and matrices using NumPy and Pandas.</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900/60">
                                        {["Python", "Data Structures", "NumPy", "Data Science"].map((tag, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono uppercase bg-neutral-900 text-neutral-400 border border-neutral-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ENTRY: 2024 - Sunflower School */}
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12 relative group">
                            
                            {/* Left Year Badge */}
                            <div className="sticky top-28 h-fit text-right">
                                <span className="inline-block text-sm md:text-base font-black font-mono px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                    2024
                                </span>
                            </div>

                            {/* Right Content */}
                            <div className="pl-6 md:pl-8 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-amber-500/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.02)] transition-all duration-300"
                                >
                                    <div className="flex gap-2 items-center text-xs font-bold font-mono text-amber-400 uppercase tracking-wider mb-2">
                                        <Award className="w-4 h-4" />
                                        <span>Senior Secondary Education</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                                        Class 12 Completion
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 mb-4">
                                        Sunflower English Medium School | Percentage: 70%
                                    </p>
                                    
                                    <p className="text-sm text-neutral-400 leading-relaxed font-medium mb-6">
                                        Completed senior secondary education focusing on Science and Mathematics. Established logical and analytical reasoning methods vital for computing and algorithms.
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900/60">
                                        {["Science", "Mathematics", "Computer Fundamentals"].map((tag, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono uppercase bg-neutral-900 text-neutral-400 border border-neutral-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ENTRY: 2022 - Bhansali School */}
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12 relative group">
                            
                            {/* Left Year Badge */}
                            <div className="sticky top-28 h-fit text-right">
                                <span className="inline-block text-sm md:text-base font-black font-mono px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                                    2022
                                </span>
                            </div>

                            {/* Right Content */}
                            <div className="pl-6 md:pl-8 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-rose-500/20 hover:shadow-[0_0_30px_rgba(244,63,94,0.02)] transition-all duration-300"
                                >
                                    <div className="flex gap-2 items-center text-xs font-bold font-mono text-rose-400 uppercase tracking-wider mb-2">
                                        <Award className="w-4 h-4" />
                                        <span>Secondary Education</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                                        Class 10 Completion
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 mb-4">
                                        Bhansali Vidhya Mandir Public School | Percentage: 70%
                                    </p>
                                    
                                    <p className="text-sm text-neutral-400 leading-relaxed font-medium mb-6">
                                        Completed secondary education laying down scientific, mathematical, and algorithmic reasoning frameworks.
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900/60">
                                        {["Science", "Mathematics", "English"].map((tag, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono uppercase bg-neutral-900 text-neutral-400 border border-neutral-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. CERTIFICATIONS & PROFESSIONAL GROWTH SECTION */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 mt-32 pt-16 border-t border-white/[0.08]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                            Certifications & <br /> Professional Growth
                        </h2>
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider font-mono mt-3">
                            Industry Credentials
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {certificationsData.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onClick={() => setSelectedImage(cert.image)}
                            className="group cursor-pointer flex flex-col md:flex-row rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-rose-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.015)] overflow-hidden"
                        >
                            <div className="relative w-full md:w-44 h-48 md:h-auto bg-neutral-900 overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-neutral-900">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-w-768px) 100vw, 25vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                        <Maximize2 className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors leading-tight">
                                        {cert.title}
                                    </h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-bold font-mono text-rose-500 uppercase">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-neutral-700 font-mono text-xs">•</span>
                                        <span className="text-[10px] font-bold font-mono text-neutral-500 uppercase">
                                            {cert.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-neutral-900/60 pt-4">
                                    <span className="text-neutral-400 text-sm leading-relaxed font-medium">
                                        {cert.description}
                                    </span>
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. PROJECTS & RESEARCH JOURNEY SECTION */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 mt-32 pt-16 border-t border-white/[0.08]">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                        Projects & <br /> Research Journey
                    </h2>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider font-mono mt-3">
                        Flagship Software & AI Engineering
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group flex flex-col justify-between rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-amber-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.015)] overflow-hidden"
                        >
                            <div className="relative h-44 bg-neutral-900 overflow-hidden border-b border-neutral-900">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-w-768px) 100vw, 30vw"
                                    unoptimized
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold font-mono text-amber-500 uppercase bg-amber-500/10 px-2 py-0.5 rounded">
                                            {project.type}
                                        </span>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <a 
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-all"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a 
                                                    href={project.demo} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-all"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                                        {project.name}
                                    </h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed font-medium line-clamp-3">
                                        {project.desc}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900/60">
                                    {project.tags.map((t, i) => (
                                        <span key={i} className="px-2.5 py-0.5 rounded-lg text-[9px] font-bold font-mono bg-neutral-900 text-neutral-500 uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. TECHNICAL UNIVERSE SECTION */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 mt-32 pt-16 border-t border-white/[0.08]">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                        Technical Universe
                    </h2>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider font-mono mt-3">
                        Competency Matrix & Developer Tools
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-8 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md flex flex-wrap gap-3"
                >
                    {technicalSkills.map((skill, idx) => (
                        <div 
                            key={idx}
                            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs md:text-sm font-semibold font-mono uppercase text-neutral-400 hover:text-white rounded-2xl transition-all duration-300 cursor-default shadow-sm"
                        >
                            {skill}
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Lightbox / Certificate Preview Overlay (AnimatePresence supported) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative max-w-4xl w-[90vw] md:w-auto h-fit max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Certificate Expanded Preview"
                                className="w-full h-full object-contain max-h-[80vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
