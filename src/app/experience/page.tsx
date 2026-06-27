'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from 'framer-motion';
import Image from "next/image";
import {
    Calendar,
    GraduationCap,
    Briefcase,
    Award,
    Sparkles,
    ChevronRight,
    Code,
    Cpu,
    Server,
    Layers,
    ExternalLink,
    BookOpen,
    Rocket,
    Brain,
    Play,
    Github,
    Maximize2,
    Shield,
    TrendingUp,
    Tv,
    Car,
    Activity,
    Map
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Counter Component powered by Framer Motion's HMR-safe, lightweight engine
function CountUp({ value, suffix = "", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
    const count = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        const controls = animate(count, value, {
            duration: duration,
            ease: "easeOut",
            onUpdate: (latest) => {
                if (value % 1 !== 0) {
                    setDisplayValue(latest.toFixed(1));
                } else {
                    setDisplayValue(Math.round(latest).toString());
                }
            }
        });
        return () => controls.stop();
    }, [value, duration]);

    return (
        <span>
            {displayValue}
            {suffix}
        </span>
    );
}

// Academic Data
const educationData = [
    {
        degree: "B.Tech in Artificial Intelligence & Machine Learning",
        institution: "Sage University, Indore",
        period: "2024 — Present",
        metrics: "CGPA: 7.0",
        logoLetters: "SU",
        logoColor: "from-blue-600 to-cyan-500 shadow-blue-500/20",
        badge: "Academic Major",
        details: "Currently in 2nd Year, 4th Semester. Focused on advanced neural architectures, computer vision pipelines, and scalable AI applications."
    },
    {
        degree: "Class 12 (Senior Secondary)",
        institution: "Sunflower English Medium School",
        period: "Year: 2024",
        metrics: "Percentage: 70%",
        logoLetters: "SF",
        logoColor: "from-amber-500 to-orange-600 shadow-orange-500/20",
        badge: "Science Stream",
        details: "Focused on Physics, Chemistry, and Mathematics. Established logical and mathematical foundations for algorithms."
    },
    {
        degree: "Class 10 (Secondary)",
        institution: "Bhansali Vidhya Mandir Public School",
        period: "Year: 2022",
        metrics: "Percentage: 70%",
        logoLetters: "BV",
        logoColor: "from-purple-600 to-pink-600 shadow-purple-500/20",
        badge: "General Studies",
        details: "General science and foundational mathematics. Developed early interest in computer programming and logical thinking."
    }
];

// Experience Data
const experienceData = [
    {
        role: "AI Developer",
        company: "HUMIC (Human Centric Engineering Research Center)",
        period: "Sep 2025 — Present",
        logoLetters: "HM",
        logoColor: "from-purple-600 to-indigo-600 shadow-purple-500/20",
        description: "Designing and optimizing machine learning pipelines, deep learning models, and custom transformer models. Focused on high-accuracy threat detection systems.",
        tech: ["Python", "TensorFlow", "Transformers", "Threat Detection", "Deep Learning"]
    },
    {
        role: "Computer Network Practicum Assistant",
        company: "Informatics Laboratory, Telkom University",
        period: "Sep 2025 — Present",
        logoLetters: "IL",
        logoColor: "from-blue-600 to-indigo-600 shadow-blue-500/20",
        description: "Mentoring undergraduate students in networking practicals, protocol architectures, and socket programming projects using C/Python.",
        tech: ["Socket Programming", "TCP/IP", "Wireshark", "C", "Network Architectures"]
    },
    {
        role: "AI & Big Data Research Assistant",
        company: "Cyber Physical System Laboratory",
        period: "May 2025 — Present",
        logoLetters: "CP",
        logoColor: "from-emerald-600 to-teal-600 shadow-emerald-500/20",
        description: "Leading advanced data analysis and machine learning research initiatives. Exploring multi-modal AI systems and high-throughput data processing.",
        tech: ["Python", "Pandas", "Scikit-learn", "Research Methods", "Big Data Analytics"]
    },
    {
        role: "Project Officer",
        company: "Digistar Club by Telkom Indonesia",
        period: "Feb 2024 — Aug 2024",
        logoLetters: "DC",
        logoColor: "from-crimson-600 to-rose-600 shadow-rose-500/20",
        description: "Directed DigiCourse program planning, speaker coordination, and digital event management. Streamlined cross-department workflows.",
        tech: ["Project Management", "Event Planning", "Workflow Automation", "Stakeholder Mgmt"]
    }
];

// Certifications Data
const certificationsData = [
    {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        image: "/certificate/AZ900.png",
        description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure."
    },
    {
        title: "Oracle Cloud Infrastructure AI Foundations",
        issuer: "Oracle",
        image: "/certificate/Oracle database .jpeg",
        description: "Demonstrated core competency in artificial intelligence, machine learning concepts, and OCI AI services."
    },
    {
        title: "Google Cloud Generative AI Certification",
        issuer: "Google Cloud",
        image: "/certificate/google-cloud-engineering-certificate.png",
        description: "Completed Google Cloud pathway covering large language models, image generation, and responsible AI principles."
    },
    {
        title: "Red Hat Academy Certification (RH134)",
        issuer: "Red Hat",
        image: "/certificate/red-hat-system-administration-ii-rh134-rha-ver-10.png",
        description: "Validated key command-line concepts, network configuration, and enterprise administration of RHEL."
    }
];

// Projects & Achievements Data
const projectsData = [
    { 
        name: "NEXUS AI", 
        type: "AI Operating System", 
        desc: "Cognitive desktop assistant with low-latency Voice AI, screen perception, and vector memory.",
        icon: Brain,
        github: "https://github.com/Ayush-0915/NEXUS-AI",
        demo: "https://nexus-ai-web-page.vercel.app/"
    },
    { 
        name: "CareerNova", 
        type: "AI SaaS Platform", 
        desc: "ATS compatibility reviewer and resume analyzer leveraging LLM recommendation engines.",
        icon: Briefcase,
        github: "https://github.com/Ayush-0915/CareerNova",
        demo: "https://career-nova-cyan.vercel.app/"
    },
    { 
        name: "CreditWise Loan Dashboard", 
        type: "Predictive ML Model", 
        desc: "Stacked classifier ensemble evaluating credit defaults with interactive SHAP risk insights.",
        icon: TrendingUp,
        github: "https://github.com/Ayush-0915/CreditWise",
        demo: "https://credit-wise-loanapp.streamlit.app/"
    },
    { 
        name: "Bitcoin Sentiment Trader", 
        type: "Financial ML Model", 
        desc: "Predicting market trends by combining time-series indicators with NLP public sentiment.",
        icon: Layers,
        github: "https://github.com/Ayush-0915/Bitcoin-sentiment-trader-analysis",
        demo: ""
    },
    { 
        name: "Car Evaluation System", 
        type: "Classification Model", 
        desc: "Machine learning classifier assessing vehicle qualities using multi-criteria attributes.",
        icon: Car,
        github: "https://github.com/Ayush-0915/Car-evaluation",
        demo: ""
    },
    { 
        name: "Fake News Detection ML", 
        type: "NLP Text Pipeline", 
        desc: "Supervised classification model analyzing news articles validity using custom TF-IDF matrices.",
        icon: Shield,
        github: "https://github.com/Ayush-0915/Detecting-Fake-News-Using-ML",
        demo: ""
    },
    { 
        name: "Healthcare Risk Management", 
        type: "Clinical Predictor", 
        desc: "Clinical decision support system evaluating patient risk profiles from high-dimensional lab data.",
        icon: Activity,
        github: "https://github.com/Ayush-0915/Healthcare-Risk-Management",
        demo: ""
    },
    { 
        name: "Netflix Data Analysis", 
        type: "Exploratory Analytics", 
        desc: "Temporal content trend mapping, release mapping, and TF-IDF content recommendation system.",
        icon: Tv,
        github: "https://github.com/Ayush-0915/Netflix-Data-Analysis",
        demo: ""
    },
    { 
        name: "Uber Trips Analysis", 
        type: "Exploratory Analytics", 
        desc: "Exploratory ride-sharing data analysis identifying demand patterns, peaks, and drop-off spaces.",
        icon: Map,
        github: "https://github.com/Ayush-0915/Uber-Data-Analysis",
        demo: ""
    }
];

// Skills List for Technical Universe
const skillsList = [
    "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", 
    "NLP", "Transformers", "Generative AI", "LangChain", "FastAPI", "Streamlit", 
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Docker", 
    "Kubernetes", "Git", "GitHub", "AWS", "Azure", "GCP", "SQL", "Power BI", 
    "Tableau", "Jupyter", "Vercel", "Supabase", "Linux", "MLOps"
];

// Timeline Milestones
const milestonesData = [
    { year: "2024", title: "Started B.Tech in AI & ML", desc: "Sage University, Indore" },
    { year: "2024", title: "Core Programming & Data Analytics", desc: "Python, NumPy, Pandas, EDA" },
    { year: "2025", title: "ML, DL & AI Research", desc: "Supervised systems, neural nets, paper reviews" },
    { year: "2025", title: "Research & Real-world Projects", desc: "Internships, Assistantships, Model Tuning" },
    { year: "2026", title: "Intelligent Systems & Impact", desc: "GenAI, local RAG, MLOps, deployment" }
];

export default function ExperiencePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Memoize skills to prevent unnecessary recalculation of indexes
    const memoizedSkills = useMemo(() => skillsList, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 relative overflow-hidden pb-32">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Hero Section */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Hero Content */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
                        >
                            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                            <span>Academic & Experience sequence</span>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans"
                        >
                            Education & <br className="hidden md:block"/> Experience Journey
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed font-medium"
                        >
                            My academic path, certifications, research work, internships, and continuous growth in Artificial Intelligence and Machine Learning.
                        </motion.p>
                    </div>

                    {/* Right Hero Interactive Cap Graphic (Framer Motion slow float, prefers-reduced-motion safe) */}
                    <div className="lg:col-span-5 flex justify-center items-center relative min-h-[300px]">
                        <motion.div
                            className="relative w-56 h-56 bg-neutral-900/30 border border-neutral-800/80 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <GraduationCap className="w-24 h-24 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.3)]" />
                            
                            {/* Satellites */}
                            {/* Satellite 1: Book */}
                            <motion.div
                                className="absolute -top-4 -left-4 p-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-blue-400"
                                animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <BookOpen className="w-5 h-5" />
                            </motion.div>
                            
                            {/* Satellite 2: Rocket */}
                            <motion.div
                                className="absolute -bottom-2 -right-4 p-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-rose-400"
                                animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <Rocket className="w-5 h-5" />
                            </motion.div>

                            {/* Satellite 3: AI Brain */}
                            <motion.div
                                className="absolute top-8 -right-8 p-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-amber-400"
                                animate={{ y: [0, 6, 0], x: [0, 6, 0] }}
                                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Brain className="w-5 h-5" />
                            </motion.div>

                            {/* Satellite 4: Code */}
                            <motion.div
                                className="absolute -bottom-6 -left-2 p-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-emerald-400"
                                animate={{ y: [0, -6, 0], x: [0, -6, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                <Code className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Row (Count Up once, HMR and Performance Safe) */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    
                    {/* Stat Card 1: CGPA */}
                    <div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md text-center group hover:border-blue-500/20 transition-colors">
                        <div className="mx-auto w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-3xl font-black text-white font-mono leading-none">
                            <CountUp value={7.0} />
                        </h3>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-2">CGPA</p>
                        <p className="text-[10px] text-neutral-500 font-medium">Academic Score</p>
                    </div>

                    {/* Stat Card 2: Projects */}
                    <div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md text-center group hover:border-rose-500/20 transition-colors">
                        <div className="mx-auto w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-3">
                            <Rocket className="w-5 h-5" />
                        </div>
                        <h3 className="text-3xl font-black text-white font-mono leading-none">
                            <CountUp value={10} suffix="+" />
                        </h3>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-2">Projects Built</p>
                        <p className="text-[10px] text-neutral-500 font-medium">End-to-End Projects</p>
                    </div>

                    {/* Stat Card 3: Certifications */}
                    <div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md text-center group hover:border-amber-500/20 transition-colors">
                        <div className="mx-auto w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                            <Award className="w-5 h-5" />
                        </div>
                        <h3 className="text-3xl font-black text-white font-mono leading-none">
                            <CountUp value={4} suffix="+" />
                        </h3>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-2">Certifications</p>
                        <p className="text-[10px] text-neutral-500 font-medium">Professional Certificates</p>
                    </div>

                    {/* Stat Card 4: Technologies */}
                    <div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md text-center group hover:border-emerald-500/20 transition-colors">
                        <div className="mx-auto w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                            <Code className="w-5 h-5" />
                        </div>
                        <h3 className="text-3xl font-black text-white font-mono leading-none">
                            <CountUp value={40} suffix="+" />
                        </h3>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-2">Technologies</p>
                        <p className="text-[10px] text-neutral-500 font-medium">Tools & Libraries</p>
                    </div>

                </div>
            </section>

            {/* Journey Highlights Timeline (Responsive, Static, Observers Free) */}
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
                <div className="text-center md:text-left space-y-1">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Milestone Highlights</h2>
                    <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider font-mono">Continuous learning progression</p>
                </div>
                
                {/* Horizontal on Desktop, Vertical on Mobile */}
                <div className="relative">
                    
                    {/* Connecting line on desktop */}
                    <div className="hidden md:block absolute top-12 left-6 right-6 h-[2px] bg-neutral-900" />
                    
                    {/* Vertical connecting line on mobile */}
                    <div className="md:hidden absolute top-6 bottom-6 left-6 w-[2px] bg-neutral-900" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                        {milestonesData.map((mile, i) => (
                            <div key={i} className="flex md:flex-col gap-4 md:gap-0 items-start">
                                
                                {/* Point indicator */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center text-neutral-400 text-sm font-bold font-mono group-hover:border-indigo-500 transition-colors">
                                    {mile.year}
                                </div>
                                
                                {/* Text Details */}
                                <div className="mt-0 md:mt-4 text-left">
                                    <h4 className="text-sm font-bold text-white leading-tight">{mile.title}</h4>
                                    <p className="text-xs text-neutral-500 font-semibold mt-1">{mile.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 mt-12">
                
                {/* 1. Academic Journey */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400 shadow-lg shadow-blue-500/5">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Academic Journey</h2>
                            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5 font-mono">Degrees & Credentials</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {educationData.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group relative flex flex-col justify-between p-6 rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300 hover:scale-[1.01]"
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-2">
                                        <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            {edu.period}
                                        </span>
                                        <span className="text-[10px] font-bold text-neutral-400 font-mono">
                                            {edu.metrics}
                                        </span>
                                    </div>
                                    
                                    <div className="flex gap-4 items-center pt-2">
                                        {/* Styled Logo Placeholder */}
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br font-black font-sans shadow-lg",
                                            edu.logoColor
                                        )}>
                                            {edu.logoLetters}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-neutral-900/60 pt-4 space-y-3">
                                    <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                                        {edu.badge}
                                    </span>
                                    <p className="text-neutral-400 text-xs leading-relaxed font-medium">
                                        {edu.details}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 2. Professional Experience */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-400 shadow-lg shadow-purple-500/5">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Professional Experience</h2>
                            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5 font-mono">Research, Assistantships & Leadership</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experienceData.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group p-6 md:p-8 rounded-[2rem] border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        {/* Styled Logo Placeholder */}
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br font-black font-sans shadow-lg shrink-0",
                                            exp.logoColor
                                        )}>
                                            {exp.logoLetters}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors leading-tight truncate">
                                                    {exp.role}
                                                </h3>
                                                <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-xs font-semibold text-neutral-500 mt-1">
                                                {exp.company}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-neutral-400 text-xs leading-relaxed font-medium pt-2">
                                        {exp.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-1.5 mt-6 border-t border-neutral-900/60 pt-4">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-0.5 rounded bg-neutral-900 text-[9px] font-bold font-mono text-neutral-500 uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. Certifications */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400 shadow-lg shadow-rose-500/5">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Certifications</h2>
                            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5 font-mono">Industry Credentials ({certificationsData.length} total)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certificationsData.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group flex flex-col justify-between rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-rose-500/20 transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedImage(cert.image)}
                            >
                                <div className="relative h-40 bg-neutral-900 overflow-hidden border-b border-neutral-900">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-w-768px) 100vw, 25vw"
                                        unoptimized
                                    />
                                    {/* Hover Preview Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                            <Maximize2 className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                    <div>
                                        <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors line-clamp-2 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-[9px] font-bold font-mono text-rose-500 uppercase mt-1">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                    <p className="text-neutral-400 text-xs leading-relaxed font-medium line-clamp-3">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 4. Achievements & Projects */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 shadow-lg shadow-amber-500/5">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Achievements & Flagship Projects</h2>
                            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5 font-mono">Applied AI & Software Engineering Outcomes</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.map((project, idx) => {
                            const IconComponent = project.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="group p-6 rounded-3xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/40 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[9px] font-bold font-mono text-amber-500 uppercase bg-amber-500/10 border border-amber-500/10 px-2 py-0.5 rounded">
                                                {project.type}
                                            </span>
                                            <div className="flex gap-2">
                                                {project.github && (
                                                    <a 
                                                        href={project.github} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="p-1 rounded bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                                                    >
                                                        <Github className="w-3.5 h-3.5" />
                                                    </a>
                                                )}
                                                {project.demo && (
                                                    <a 
                                                        href={project.demo} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="p-1 rounded bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                                                    >
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-3 items-center pt-2">
                                            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-500/10 transition-colors">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                                                {project.name}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-neutral-400 text-xs leading-relaxed font-medium pt-2">
                                            {project.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* 5. Technical Universe (Floating Skills Pills, Loop-Free, Performance Safe) */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 shadow-lg shadow-emerald-500/5">
                            <Layers className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Technical Universe</h2>
                            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5 font-mono">Competency Matrix & Frameworks</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2rem] border border-neutral-900 bg-neutral-950/40 backdrop-blur-md flex flex-wrap justify-center gap-3 relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] blur-3xl" />
                        
                        {memoizedSkills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    default: { duration: 0.3, delay: (idx % 10) * 0.03 },
                                    y: {
                                        duration: 4 + (idx % 4),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: (idx % 3) * 0.4
                                    }
                                }}
                                className="px-4 py-2 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-emerald-500/30 text-xs font-bold font-mono text-neutral-400 hover:text-emerald-400 shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] cursor-default transition-all duration-300"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

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
