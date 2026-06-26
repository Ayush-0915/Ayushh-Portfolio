# Ayush Singh — AI & Machine Learning Engineer Portfolio

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Next.js Version](https://img.shields.io/badge/next.js-v16.2-blue.svg)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush%20Singh-blue.svg)](https://linkedin.com/in/ayush-singh-0915ap)
[![GitHub](https://img.shields.io/badge/GitHub-Ayush--0915-black.svg)](https://github.com/Ayush-0915)

Welcome to the official repository of my personal engineering portfolio. This platform serves as a showcase of my projects, core competencies, and continuous learning journey in Artificial Intelligence, Deep Learning, Generative AI, and software engineering.

## 🚀 Key Features

*   **🟢 Live Developer Analytics Dashboard**: Fully functional WakaTime real-time analytics sync displaying coding streak, active days, projects, editor, and operating system metrics. Backed by a secure, server-side cached API route.
*   **🌌 Dynamic SVG & Interactive Charts**: Features custom-drawn, fluidly animated weekly and monthly SVG charts tracking development intensity.
*   **📊 Kinetic AI Stack Showcase**: A categorized showcase highlighting core proficiencies across AI & ML, Data Science, Computer Vision, Full Stack, Backend, and Generative AI.
*   **📂 Flagship Project Case Studies**: Deep-dive summaries and links to flagship applications like *NEXUS AI*, *CareerNova*, *Healthcare Risk Management*, and others.
*   **📄 Embedded PDF Resume Viewer**: Fast-loading, fully zoomable, dark-themed local PDF embed with direct download capability.
*   **✉️ Secure SMTP Contact Form**: Multi-field validation contact handler integrated with Nodemailer.

---

## 🛠️ Technology Stack

*   **Core Logic**: Next.js 16 (App Router), React 19, TypeScript
*   **Styling & Motion**: Tailwind CSS, Framer Motion, GSAP, React Spring
*   **AI/ML Pipelines**: Python, TensorFlow, PyTorch, Scikit-learn, OpenCV
*   **Databases & Services**: PostgreSQL, Supabase, Vercel
*   **API Integrations**: WakaTime API, Gemini API (for NLP workflows)

---

## ⚙️ Environment Configuration

To enable contact form deliveries and real-time developer statistics, configure a `.env.local` file in the project root:

```env
# WakaTime API Integration
WAKATIME_API_KEY=waka_your_wakatime_api_key_here

# Contact Email Setup (SMTP)
EMAIL_USER=your_configured_smtp_gmail_account@gmail.com
EMAIL_APP_PASSWORD=your_secure_google_app_password
```

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                # Next.js pages & App Router paths
│   │   ├── api/            # Server-side API endpoints (WakaTime, Contact)
│   │   ├── resume/         # Resume visual landing layout
│   │   └── projects/       # Flagship project detail routes
│   ├── components/
│   │   ├── layout/         # Shell components (Navbar, Footer)
│   │   ├── sections/       # Modular page sections (Hero, About, Stack)
│   │   └── ui/             # Animated custom cards, widgets, and charts
│   ├── data/               # Unified portfolio state definition
│   └── hooks/              # Custom reactive hooks (CountUp, scroll detectors)
├── public/
│   ├── resume/             # Contains Ayush_Singh_Resume.pdf
│   └── project/            # Flagship projects high-res previews
└── eslint.config.mjs       # ESLint 9 configuration rules
```

---

## 💻 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Ayush-0915/Ayushh-Portfolio.git
    cd Ayushh-Portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```
    Access the page at `http://localhost:3000`.

4.  **Production Compilation**
    ```bash
    npm run build
    npm run start
    ```

---

## 🛡️ License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 📬 Contact & Networks

*   **Email**: [ayushofficaluse@gmail.com](mailto:ayushofficaluse@gmail.com)
*   **GitHub**: [@Ayush-0915](https://github.com/Ayush-0915)
*   **LinkedIn**: [Ayush Singh](https://linkedin.com/in/ayush-singh-0915ap)
