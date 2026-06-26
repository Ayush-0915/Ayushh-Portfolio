import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Ayush Singh',
        title: 'AI & Machine Learning Engineer',
        subtitle: 'AI & Machine Learning Engineer | Deep Learning & Generative AI Developer',
        bio: 'An Artificial Intelligence and Machine Learning student with a distinctive profile in deep learning, computer vision, data science, and generative AI. Driven to design and build intelligent systems, machine learning applications, and robust data-driven solutions.',
        avatar: '/about/ayush.png',
        location: 'Indore, India',
        email: 'ayushofficaluse@gmail.com',
        phone: '+919999999999',
        resumeUrl: '/resume/Ayush_Singh_Resume.pdf',
        website: 'https://github.com/Ayush-0915',
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Hindi', level: 'Native' }
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Ayush-0915',
                icon: 'github',
                username: 'Ayush-0915',
            },
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/in/ayush-singh-0915ap',
                icon: 'linkedin',
                username: 'Ayush Singh',
            },
            {
                platform: 'Instagram',
                url: 'https://instagram.com/ayush_singh', // optional placeholder
                icon: 'instagram',
                username: 'ayush_singh',
            }
        ],
    },
    projects: [
        {
            id: 'project-1',
            slug: 'nexus-ai',
            title: 'NEXUS AI',
            description: 'A next-generation AI operating system built to unify Voice AI, Vision Intelligence, Memory, Retrieval-Augmented Generation (RAG), and intelligent desktop automation into one seamless experience.',
            subtitle: 'An AI Operating System designed to unify Voice AI, Vision Intelligence, Memory, RAG, and intelligent desktop automation into a seamless experience.',
            longDescription: 'Nexus AI is a state-of-the-art cognitive desktop assistant designed to operate as a secure personal operating system. It features low-latency voice intelligence for natural conversations, vision-based screen perception to assist with active tasks, and an adaptive memory engine to maintain multi-turn context. Nexus AI is built with local vector embeddings and Retrieval-Augmented Generation (RAG) to safely parse, index, and query personal documents without external cloud exposure.',
            techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Gemini API', 'RAG', 'Supabase', 'AI Agents'],
            tools: ['VS Code', 'Git', 'Conda'],
            status: 'ongoing',
            repoUrl: 'https://github.com/Ayush-0915/NEXUS-AI',
            demoUrl: 'https://nexus-ai-web-page.vercel.app/',
            startDate: '2026-03-01',
            customTimeline: 'March 2026 – Present',
            role: 'AI & ML Engineer',
            team: 'Individual Developer',
            version: 'Beta',
            platform: 'Web & Desktop',
            projectType: 'Personal Flagship Project',
            highlights: ['Integrated Voice & Vision AI', 'Secure Local RAG Pipeline', 'Adaptive Long-term Memory'],
            category: 'AI Operating System',
            features: [
                {
                    title: 'Cognitive Features',
                    items: [
                        '**Voice Interaction**: Natural language speech processing with custom text-to-speech (TTS) and speech-to-text (STT) models.',
                        '**Vision Intelligence**: Real-time screen capture, object detection, and visual QA capabilities using vision-language models.',
                        '**Memory Engine**: Vector-based semantic search to recall past user requests and conversations.'
                    ]
                },
                {
                    title: 'System & Security',
                    items: [
                        '**Local RAG**: Enterprise-grade retrieval-augmented generation running fully on-device via ChromaDB.',
                        '**Desktop Controls**: Secure execution of system commands and application launching using natural language.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone and Setup',
                    code: 'git clone https://github.com/Ayush-0915/Nexus-AI.git\ncd Nexus-AI\npip install -r requirements.txt',
                    type: 'code'
                },
                {
                    title: 'Run Agent',
                    code: 'python main.py',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Low-Latency Speech Processing",
                    solution: "Implemented asynchronous streaming for audio inputs and cached frequently generated voice responses to reduce latency below 500ms."
                },
                {
                    problem: "Secure Document Indexing",
                    solution: "Developed local vector tokenization using ChromaDB, eliminating external cloud data transfers to preserve privacy."
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'careernova',
            title: 'CareerNova',
            description: 'CareerNova is a comprehensive AI-powered career platform designed to help students, graduates, and professionals improve their career readiness. The platform combines Generative AI, Natural Language Processing (NLP), and semantic analysis to deliver personalized career recommendations, resume optimization, interview preparation, and skill gap analysis.',
            subtitle: 'An AI-powered career development platform that helps students and professionals optimize resumes, prepare for interviews, receive personalized career guidance, and accelerate their job search through intelligent AI assistance.',
            longDescription: 'CareerNova is a comprehensive AI-powered career platform designed to help students, graduates, and professionals improve their career readiness.\n\nThe platform combines Generative AI, Natural Language Processing (NLP), and semantic analysis to deliver personalized career recommendations, resume optimization, interview preparation, and skill gap analysis.\n\nKey capabilities include:\n• AI-powered Resume Analysis\n• ATS Compatibility Review\n• Intelligent Career Guidance\n• Personalized Learning Roadmaps\n• Interview Preparation & Mock Questions\n• Skill Gap Detection\n• Resume Optimization Suggestions\n• AI Career Assistant powered by Gemini\n\nCareerNova focuses on helping users make data-driven career decisions through an intuitive, modern, and AI-first experience.',
            techStack: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind CSS', 'AI', 'Vercel', 'NLP'],
            tools: ['VS Code', 'Git', 'Vercel'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/CareerNova',
            demoUrl: 'https://career-nova-cyan.vercel.app/',
            startDate: '2026-06-01',
            endDate: '2026-06-30',
            customTimeline: 'June 2026 (Completed)',
            role: 'Founder & AI Developer',
            team: 'Individual Developer',
            platform: 'Web Application',
            projectType: 'AI SaaS Platform',
            deployment: 'Production Ready',
            category: 'AI SaaS Platform',
            highlights: ['AI-Powered Resume Parsing', 'Dynamic Skill-Gap Analysis', 'Interactive Mock Interviews'],
            features: [
                {
                    title: 'KEY FEATURES',
                    items: [
                        '**AI Resume Analyzer**: Scan and audit resume files dynamically using semantic evaluation.',
                        '**ATS Resume Evaluation**: Review ATS formatting guidelines, keywords density, and score.',
                        '**Career Recommendations**: Tailored career choices based on extracted skills.',
                        '**Interview Prep**: Mock technical interview generator tailored to role descriptions.',
                        '**Personalized Learning**: Custom generated study roadmaps and key references.',
                        '**Skill Gap Analysis**: Detect missing tools, languages, and frameworks for targeted jobs.',
                        '**Modern Responsive Dashboard**: Glassmorphic, modern responsive frontend dashboard.',
                        '**Secure Authentication & Cloud Database**: User logins and profiles persistence using Supabase auth and DB.'
                    ]
                },
                {
                    title: 'TECHNICAL IMPLEMENTATION',
                    items: [
                        '**React + TypeScript frontend**: Responsive, component-based frontend client.',
                        '**Supabase backend**: Back-end services for secure authentication and cloud database.',
                        '**Gemini API integration**: Gemini API integration for advanced LLM reasoning.',
                        '**Responsive UI**: Modern interface with fluid transitions and custom layouts.',
                        '**Secure authentication**: OAuth and secure email/password credential controls.',
                        '**Cloud deployment on Vercel**: Production ready deployment on Vercel edge.',
                        '**Component-based architecture**: Reusable, component-based modular structure.',
                        '**AI-powered recommendation engine**: Intelligent matching and gap analysis logics.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone and Run Backend',
                    code: 'cd backend\npip install -r requirements.txt\nuvicorn main:app --reload',
                    type: 'code'
                },
                {
                    title: 'Run Frontend',
                    code: 'cd frontend\nnpm install\nnpm run dev',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Parsing Multi-Column Resume Formats",
                    solution: "Engineered a custom parsing rule to detect layout bounding boxes, ensuring text reading order is preserved."
                }
            ],
            outcome: 'CareerNova demonstrates the practical application of Generative AI in career development by combining modern web technologies with intelligent recommendation systems. The project showcases full-stack development, AI integration, cloud deployment, and user-focused product design.'
        },
        {
            id: 'project-3',
            slug: 'creditwise',
            title: 'CreditWise Loan Dashboard',
            description: 'A machine learning dashboard for predicting loan approvals with interactive analytics, visual insights, and real-time decision support.',
            subtitle: 'A machine learning-powered loan approval prediction dashboard that analyzes applicant risk, predicts loan eligibility, and provides interactive financial insights through real-time analytics.',
            longDescription: 'CreditWise is a high-precision credit risk analysis dashboard engineered to predict loan defaults. It implements a robust machine learning pipeline including SMOTE for class imbalance handling and stacked classifier ensembles (XGBoost, Random Forest, Logistic Regression). The Streamlit dashboard visualizes critical financial metrics, scenario risk assessments, and model feature importances using SHAP values.',
            techStack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Matplotlib', 'Machine Learning'],
            tools: ['Jupyter Notebook', 'VS Code', 'Git'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/CreditWise',
            demoUrl: '#',
            startDate: '2026-05-01',
            endDate: '2026-05-31',
            customTimeline: 'May 2026 (Completed)',
            role: 'Machine Learning Engineer',
            team: 'Individual Developer',
            platform: 'Web Dashboard',
            projectType: 'Machine Learning Project',
            highlights: ['Stacked Ensemble Classifiers', 'SHAP Explainable AI', 'Interactive Scenario Modeling'],
            category: 'Predictive Analytics',
            features: [
                {
                    title: 'Prediction Models',
                    items: [
                        '**Stacked Ensembles**: Blends predictions from XGBoost and Random Forests for superior AUC.',
                        '**Class Imbalance**: Resolves skewed default records using Synthetic Minority Over-sampling.'
                    ]
                },
                {
                    title: 'Visual Insights',
                    items: [
                        '**SHAP Explanations**: Explains exactly why a specific applicant was flagged as high-risk.',
                        '**What-If Simulator**: Allows loan officers to tweak salary or debt ratios and observe risk shifts in real-time.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Install & Run',
                    code: 'pip install streamlit scikit-learn xgboost pandas matplotlib\nstreamlit run app.py',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "High False Negative Rate",
                    solution: "Shifted optimization metrics from simple accuracy to Recall/AUC, utilizing SMOTE to boost default detection by 25%."
                }
            ]
        },
        {
            id: 'project-4',
            slug: 'healthcare-risk-management',
            title: 'Healthcare Risk Management',
            description: 'An intelligent healthcare analytics platform designed to assess patient risk using machine learning techniques and interactive dashboards. The system analyzes healthcare data to identify potential risks, support clinical decision-making, and improve predictive healthcare insights through data-driven analytics.',
            subtitle: 'An intelligent healthcare analytics platform designed to assess patient risk using machine learning techniques and interactive dashboards.',
            longDescription: 'Healthcare Risk Management is a machine learning-powered clinical decision support system designed to assess patient risk categories. The platform processes high-dimensional clinical data (such as vitals, demographics, and labs), handles missing records, and trains predictive classifiers. A dashboard visualizes patient risk distributions and provides physicians with explanation overlays for clinical assessment.',
            techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Matplotlib', 'Machine Learning'],
            tools: ['VS Code', 'Git', 'Streamlit'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/Healthcare-Risk-Management',
            demoUrl: '#',
            startDate: '2026-01-01',
            endDate: '2026-06-01',
            customTimeline: 'Completed • 2026',
            role: 'Machine Learning Engineer',
            team: 'Individual Developer',
            platform: 'Web Dashboard',
            projectType: 'Machine Learning Project',
            highlights: ['Patient Risk Prediction', 'Interactive Analytics Dashboard', 'Predictive Machine Learning Models'],
            category: 'Healthcare AI',
            features: [
                {
                    title: 'KEY FEATURES',
                    items: [
                        '**Patient Risk Prediction**: Dynamic hazard binning and classifier predictions based on clinical vitals.',
                        '**Interactive Analytics Dashboard**: Live metrics rendering of patient risk groups and trends.',
                        '**Data Visualization**: Custom Matplotlib charts illustrating risk correlations and clinical features.',
                        '**Healthcare Data Analysis**: Detailed feature scaling, imputation, and processing pipelines.',
                        '**Predictive Machine Learning Models**: Supervised classifiers optimized for clinical sensitivity.',
                        '**Decision Support System**: Actionable risk scores to aid physicians in care prioritization.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Setup & Run',
                    code: 'git clone https://github.com/Ayush-0915/Healthcare-Risk-Management.git\ncd Healthcare-Risk-Management\npip install -r requirements.txt\nstreamlit run app.py',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Imbalanced Risk Bins & Missing Labs",
                    solution: "Applied custom KNN imputation for missing data and optimized models using precision-recall curves to minimize false negatives."
                }
            ],
            outcome: 'Healthcare Risk Management provides an end-to-end demonstration of data science applied to clinical workflows. It showcases data cleaning, predictive modeling, interactive dashboard design, and decision support analytics.'
        },
        {
            id: 'project-5',
            slug: 'fake-news-detection-using-ml',
            title: 'Fake News Detection Using ML',
            description: 'A Natural Language Processing (NLP) project that classifies news articles as genuine or fake using supervised machine learning. The project focuses on text preprocessing, feature engineering, and predictive modeling to combat misinformation.',
            subtitle: 'A Natural Language Processing (NLP) project that automatically classifies news articles as genuine or fake using supervised machine learning techniques.',
            longDescription: 'Fake News Detection is an advanced text classification pipeline designed to combat digital misinformation. It processes raw textual corpora, applies cleaning algorithms (stopword removal, stemming/lemmatization), and converts text to sparse feature matrices using TF-IDF vectorization. The system trains supervised classifiers to categorize articles with high precision.',
            techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'TF-IDF', 'Machine Learning'],
            tools: ['Jupyter Notebook', 'VS Code', 'Git'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/Detecting-Fake-News-Using-ML',
            demoUrl: '#',
            startDate: '2026-01-01',
            endDate: '2026-06-01',
            customTimeline: 'Completed • 2026',
            role: 'Machine Learning Engineer',
            team: 'Individual Developer',
            platform: 'Python / Jupyter Notebook',
            projectType: 'Natural Language Processing Project',
            highlights: ['Supervised Text Classification', 'TF-IDF Feature Extraction', 'Text Cleansing Pipelines'],
            category: 'Natural Language Processing',
            features: [
                {
                    title: 'KEY FEATURES',
                    items: [
                        '**Fake News Classification**: Supervised classification models training to separate real and fake articles.',
                        '**Natural Language Processing**: Linguistic feature engineering and semantic checks.',
                        '**Text Cleaning & Preprocessing**: Clean noise, HTML tags, punctuation, and non-alphabetic tokens.',
                        '**TF-IDF Vectorization**: Text conversion to statistical importance matrices using term frequency.',
                        '**Machine Learning Classification**: Ensembles and Naive Bayes classifiers optimization.',
                        '**Model Performance Evaluation**: Complete auditing with confusion matrices and F1 logs.',
                        '**Real vs Fake News Prediction**: Input arbitrary text to verify validity.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Setup & Run',
                    code: 'git clone https://github.com/Ayush-0915/Detecting-Fake-News-Using-ML.git\ncd Detecting-Fake-News-Using-ML\npip install -r requirements.txt\njupyter notebook',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "High Feature Dimensionality",
                    solution: "Tuned TF-IDF max_features and applied L2 regularization, reducing feature space by 60% while maintaining 94% classification accuracy."
                }
            ],
            outcome: 'This project demonstrates structured text processing and machine learning applied to social media auditing. It covers corpus cleaning, TF-IDF vector extraction, classification tuning, and validation.'
        },
        {
            id: 'project-6',
            slug: 'space-portfolio',
            title: '3D Space Portfolio',
            description: 'An immersive 3D portfolio experience showcasing modern web design, interactive animations, and responsive user interfaces.',
            longDescription: 'An interactive, space-themed developer portfolio built to showcase engineering work. It utilizes Three.js (React Three Fiber) to render 3D gravitational simulations, interactive orbital paths, and custom GLSL shader materials, providing a highly premium visual experience with optimized performance across mobile and desktop browsers.',
            techStack: ['React', 'Three.js', 'Tailwind CSS'],
            tools: ['VS Code', 'Git', 'Vercel'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/Space-Portfolio',
            demoUrl: '#',
            startDate: '2025-01-01',
            role: 'Frontend Developer',
            highlights: ['Three.js Gravitational Orbitals', 'Custom GLSL Fragment Shaders', 'Smooth Lenis Scroll'],
            category: 'Frontend Experience',
            features: [
                {
                    title: '3D Graphics',
                    items: [
                        '**Gravity Orbits**: Interactive planets that react to scroll depth and hover forces.',
                        '**Particle Nebulas**: High-density star particles rendering dynamically in WebGL canvas.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Run Locally',
                    code: 'npm install\nnpm run dev',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Low FPS on Mobile Browsers",
                    solution: "Implemented low-poly assets, turned off shadows on mobile devices, and reduced particle counts dynamically based on performance."
                }
            ]
        },
        {
            id: 'project-7',
            slug: 'netflix-data-analysis',
            title: 'Netflix Data Analysis',
            description: 'Exploratory data analysis and visualization of Netflix content trends using Python, Pandas, and Matplotlib to uncover meaningful business insights.',
            longDescription: 'An in-depth data analytics and visualization project focusing on the Netflix movies and TV shows catalog. This system processes unstructured content metadata, performs temporal trend analysis, maps global release distributions, and implements a content-based recommendation system using TF-IDF vectorization and cosine similarity.',
            techStack: ['Python', 'Pandas', 'Matplotlib'],
            tools: ['Jupyter Notebook', 'Git', 'VS Code'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/Netflix-Data-Analysis',
            demoUrl: '#',
            startDate: '2025-06-01',
            role: 'Data Analyst',
            highlights: ['Geospatial Content Mapping', 'Temporal Release Trends', 'Content-Based Filtering Recommendation'],
            category: 'Data Analytics',
            features: [
                {
                    title: 'Data Pipelines',
                    items: [
                        '**EDA**: Deep data cleaning and parsing of cast, countries, and genre listings.',
                        '**Geospatial Maps**: Visualizes release volumes by country using Choropleth mapping.'
                    ]
                },
                {
                    title: 'Recommendation Engine',
                    items: [
                        '**TF-IDF Vectorizer**: Converts plot summaries into numerical vectors.',
                        '**Cosine Similarity**: Measures closeness between descriptions to recommend similar movies/shows.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Run Notebook',
                    code: 'pip install pandas numpy seaborn matplotlib scikit-learn jupyter\njupyter notebook',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Messy Text and Missing Cast Details",
                    solution: "Designed custom Pandas extraction layers to handle multi-valued cells and fill missing locations with mode values."
                }
            ]
        },
        {
            id: 'project-8',
            slug: 'uber-trips-analysis',
            title: 'Uber Trips Analysis',
            description: 'Uber Trips Analysis is a comprehensive data analytics project focused on understanding ride-sharing behavior through Exploratory Data Analysis (EDA) and interactive data visualization. The project processes real-world Uber trip datasets to identify travel trends, peak demand periods, trip frequency, seasonal patterns, and operational insights.',
            subtitle: 'An end-to-end exploratory data analysis project that uncovers ride demand patterns, peak hours, trip distribution, and operational insights from Uber trip datasets using Python and interactive visualizations.',
            longDescription: 'Uber Trips Analysis is a comprehensive data analytics project focused on understanding ride-sharing behavior through Exploratory Data Analysis (EDA) and interactive data visualization.\n\nThe project processes real-world Uber trip datasets to identify travel trends, peak demand periods, trip frequency, seasonal patterns, and operational insights. Using Python and modern data analysis libraries, the project transforms raw transportation data into meaningful business intelligence.\n\nThe analysis enables a deeper understanding of customer behavior, trip demand, and operational efficiency while demonstrating practical data analytics skills used in real-world business environments.',
            techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter Notebook'],
            tools: ['Jupyter Notebook', 'Git'],
            status: 'completed',
            repoUrl: 'https://github.com/Ayush-0915/Uber-Data-Analysis',
            demoUrl: '#',
            startDate: '2026-01-01',
            endDate: '2026-01-31',
            customTimeline: 'January 2026 (Completed)',
            role: 'Data Analyst',
            team: 'Individual Developer',
            platform: 'Python / Jupyter Notebook',
            projectType: 'Exploratory Data Analysis',
            category: 'Data Analytics',
            highlights: ['Exploratory Data Analysis', 'Ride Demand Analysis', 'Peak Hour Identification'],
            features: [
                {
                    title: 'KEY FEATURES',
                    items: [
                        '**Exploratory Data Analysis (EDA)**: Dive deep into ride logs to parse schedules and patterns.',
                        '**Data Cleaning & Preprocessing**: Clean coordinate structures and filter null parameters.',
                        '**Ride Demand Analysis**: Discover demand volumes segmented by temporal indexes.',
                        '**Peak Hour Identification**: Pinpoint hours of maximum customer trip requests.',
                        '**Trip Distribution**: Analyze spatial distribution of taxi drop-off locations.',
                        '**Trend Analysis**: Evaluate monthly and weekly ride frequency behaviors.',
                        '**Interactive Charts**: Design custom plots and dashboards to represent variables.',
                        '**Business Insight**: Formulate operational recommendations for fleet staging.'
                    ]
                },
                {
                    title: 'TECHNICAL IMPLEMENTATION',
                    items: [
                        '**Data preprocessing using Pandas**: Data manipulation, aggregation, and merging pipelines.',
                        '**Statistical analysis with NumPy**: Array processing and mathematical operations.',
                        '**Interactive visualizations**: Matplotlib, Seaborn, and Plotly visualizations.',
                        '**Feature engineering**: Temporal extraction of hour, day, week, and month fields.',
                        '**Time-series trend analysis**: Moving averages and seasonal demand fluctuations.',
                        '**Business intelligence reporting**: Analytical summaries for operational support.',
                        '**Jupyter Notebook workflow**: Modular, reproducible notebooks showcasing visual progress.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Setup & Run',
                    code: 'pip install pandas numpy matplotlib seaborn plotly jupyter\njupyter notebook',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Processing Millions of Rows Efficiently",
                    solution: "Utilized chunked reading and memory optimizations in Pandas, cutting processing memory footprints by 40%."
                }
            ],
            outcome: 'This project demonstrates strong analytical thinking by converting raw ride-sharing data into actionable business insights. It showcases practical experience in data cleaning, exploratory data analysis, statistical interpretation, visualization, and communicating insights through professional dashboards.'
        }
    ],
    experiences: [
        {
            id: 'exp-ai',
            company: 'AI Projects',
            position: 'AI System Architect',
            description: 'Architected and developed Nexus AI, a secure, local cognitive desktop assistant integrating voice, vision, and vector-search based document RAG.',
            skills: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenCV', 'PyTorch'],
            startDate: '2025-08-01',
            isOngoing: true,
            location: 'Self-employed',
            type: 'self-employed',
            logo: '',
            externalLink: 'https://github.com/Ayush-0915/Nexus-AI',
            responsibilities: [
                'Integrated PyTorch-based voice models with OpenCV screen capture pipelines.',
                'Built a secure Retrieval-Augmented Generation (RAG) system running entirely on local CPU/GPU.',
                'Designed vector search indexing using ChromaDB for persistent contextual memory.'
            ]
        },
        {
            id: 'exp-ml',
            company: 'Machine Learning',
            position: 'ML Engineer',
            description: 'Built CreditWise, a predictive classifier system evaluating loan default probabilities with complex financial data analytics.',
            skills: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Streamlit'],
            startDate: '2025-07-01',
            endDate: '2025-08-01',
            isOngoing: false,
            location: 'Self-employed',
            type: 'self-employed',
            logo: '',
            externalLink: 'https://github.com/Ayush-0915/CreditWise',
            responsibilities: [
                'Engineered robust pre-processing pipelines including SMOTE for class imbalance.',
                'Tuned XGBoost and Random Forest hyper-parameters using grid search.',
                'Deployed an interactive Streamlit dashboard showing model risk insights.'
            ]
        },
        {
            id: 'exp-open-source',
            company: 'Open Source',
            position: 'Core Contributor',
            description: 'Contributing to open-source tools and developer workflows on GitHub, optimizing data scripts and ML models.',
            skills: ['Git', 'GitHub', 'Python', 'Markdown'],
            startDate: '2024-01-01',
            isOngoing: true,
            location: 'Remote',
            type: 'freelance',
            logo: '',
            externalLink: 'https://github.com/Ayush-0915',
            responsibilities: [
                'Published open-source templates and utility scripts for machine learning pipelines.',
                'Collaborated on code optimization and performance fixes in public repositories.',
                'Maintained clean documentation and automation workflows using GitHub Actions.'
            ]
        },
        {
            id: 'exp-products',
            company: 'Personal Products',
            position: 'Lead Creator',
            description: 'Created CareerNova, an AI-powered resume analyzer and career roadmap assistant.',
            skills: ['Next.js', 'FastAPI', 'LangChain', 'Gemini API', 'TypeScript'],
            startDate: '2025-05-01',
            isOngoing: true,
            location: 'Self-employed',
            type: 'self-employed',
            logo: '',
            externalLink: 'https://github.com/Ayush-0915/CareerNova',
            responsibilities: [
                'Developed Next.js frontend with modern glassmorphic dashboard interface.',
                'Built FastAPI endpoints parsing PDF resumes and returning structural JSON data.',
                'Leveraged Large Language Models for automated skill gap analysis and mock interviews.'
            ]
        },
        {
            id: 'exp-research',
            company: 'Research',
            position: 'AI Researcher',
            description: 'Conducted exploratory data analyses and predictive modeling on high-volume real-world datasets.',
            skills: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Scikit-learn'],
            startDate: '2024-06-01',
            isOngoing: true,
            location: 'Sage University',
            type: 'internship',
            logo: '',
            externalLink: '',
            responsibilities: [
                'Analyzed millions of rides and catalog items for Netflix and Uber data logs.',
                'Applied spatial clustering algorithms (K-Means, DBSCAN) for demand forecasting.',
                'Visualized complex data distributions and feature importances for research presentations.'
            ]
        }
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Sage University',
            degree: 'B.Tech',
            major: 'Artificial Intelligence & Machine Learning',
            startDate: '2024-07-01',
            endDate: '2028-06-30',
            isOngoing: true,
            gpa: '7.0 CGPA',
            activities: ['AI/ML Projects', 'Open Source Contributions', 'Data Analysis Hackathons'],
            achievements: [
                'Maintaining 7.0 CGPA throughout academic coursework',
                'Completed multiple advanced AI/ML project implementations',
                'Active member of technical student chapters'
            ]
        }
    ],
    achievements: [
        {
            id: 'cert-1',
            title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
            issuer: 'Microsoft',
            date: '2025-05-01',
            category: 'certification'
        },
        {
            id: 'cert-2',
            title: 'Oracle Cloud Infrastructure AI Foundations Associate',
            issuer: 'Oracle',
            date: '2025-06-01',
            category: 'certification'
        },
        {
            id: 'cert-3',
            title: 'Red Hat OpenShift Certificate',
            issuer: 'Red Hat',
            date: '2025-04-01',
            category: 'certification'
        }
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow', category: 'library' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch', category: 'library' },
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn', category: 'library' },
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas', category: 'library' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy', category: 'library' },
        { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv', category: 'library' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'framework' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'tool' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'tool' }
    ],
    hardSkills: [
        { name: 'Machine Learning', level: 'advanced', category: 'ai', description: 'Developing predictive classifiers, ensemble algorithms, and regression systems.' },
        { name: 'Deep Learning', level: 'intermediate', category: 'ai', description: 'Architecting neural networks using PyTorch and TensorFlow.' },
        { name: 'Computer Vision', level: 'intermediate', category: 'ai', description: 'Implementing real-time object tracking and skeletal pose estimation using OpenCV.' },
        { name: 'Natural Language Processing (NLP)', level: 'intermediate', category: 'ai', description: 'Building Retrieval-Augmented Generation (RAG) pipelines and LLM applications.' },
        { name: 'Data Engineering & Analytics', level: 'advanced', category: 'data', description: 'Processing large datasets using Pandas, NumPy, and databases.' }
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Algorithmic efficiency and model performance optimization' },
        { name: 'Analytical Thinking', description: 'Formulating data hypotheses and validating with metric outcomes' },
        { name: 'Continuous Learning', description: 'Eagerly researching and adopting state-of-the-art AI papers' },
        { name: 'Collaboration', description: 'Pair programming and open source contributions' }
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter', category: 'ide' },
        { name: 'Google Colab', icon: 'https://cdn.simpleicons.org/googlecolab', category: 'ide' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'devops' },
        { name: 'Conda', icon: 'https://cdn.simpleicons.org/anaconda', category: 'devops' }
    ],
    faqs: [
        {
            question: 'What fields do you specialize in?',
            answer: 'I focus on AI Engineering, Machine Learning model development, exploratory data science, and full-stack integration using Next.js and FastAPI.',
        },
        {
            question: 'What is your stack for AI developments?',
            answer: 'My primary stack is Python (PyTorch, TensorFlow, Scikit-learn, OpenCV), combined with ChromaDB, LangChain, and API-driven AI integrations.',
        },
        {
            question: 'Are you open for projects and internships?',
            answer: 'Yes! I am actively looking for AI/ML engineering internships, research collaborations, and open-source contributions.',
        }
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'understanding-rag-pipelines',
            title: 'Building Secure Local RAG Pipelines',
            excerpt: 'How to query personal documents privately using local vector databases and LLMs.',
            content: 'Retrieval-Augmented Generation is a powerful technique...',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-20',
            category: 'applied-ai',
            tags: ['RAG', 'ChromaDB', 'LLM'],
            author: { name: 'Ayush Singh', avatar: '/about/ayush.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-2',
            slug: 'credit-risk-ml-modeling',
            title: 'Credit Risk Classification using Ensembles',
            excerpt: 'How to handle highly imbalanced datasets and evaluate risk metrics with Scikit-learn.',
            content: 'In financial domains, predicting defaults is critical...',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-15',
            category: 'applied-ai',
            tags: ['ML', 'Classifiers', 'Python'],
            author: { name: 'Ayush Singh', avatar: '/about/ayush.jpeg' },
            readTime: '8'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'AI/ML Development Space',
            description: 'Building deep learning models and custom desktop assistants.',
            date: '2025-08-01',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        }
    ],
};
