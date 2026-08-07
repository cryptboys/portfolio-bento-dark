export const profile = {
  name: "Herman Donawan",
  role: "AI Developer & Programmer",
  location: "Boyolali, Central Java, Indonesia",
  email: "kangmaswawan21@gmail.com",
  github: "https://github.com/cryptboys",
  linkedin: "https://linkedin.com/in/herman-donawan-731554",
  calendly: "https://calendly.com/placeholder", // ponytail: replace with real Calendly URL
  summary:
    "AI Engineer building production LLM systems: RAG pipelines, RLHF evaluation frameworks, autonomous agents. Shipped voice-driven AI avatar serving 10k+ daily interactions. Full-stack (Next.js, FastAPI, Docker, Vercel/AWS).",
  tagline:
    "Building low-latency AI agents & RAG systems that run 24/7 in production.",
  availability: "available" as const,
  avatar: "/avatar.jpg",
  socials: [
    {
      label: "GitHub",
      handle: "@cryptboys",
      href: "https://github.com/cryptboys",
    },
    {
      label: "LinkedIn",
      handle: "herman-donawan",
      href: "https://linkedin.com/in/herman-donawan-731554",
    },
    {
      label: "Email",
      handle: "kangmaswawan21@gmail.com",
      href: "mailto:kangmaswawan21@gmail.com",
    },
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Freelance AI Contributor",
    company: "Outlier",
    period: "2023 — Present",
    points: [
      "Designed RLHF evaluation pipeline for 50k+ coding samples; improved model pass@1 by 14% on HumanEval.",
      "Built automated quality gates reducing annotation cost 30% via prompt engineering & model-based eval.",
      "Curated multilingual audio datasets (EN/ID/JV) for voice AI training; 200+ hours validated.",
    ],
  },
  {
    role: "Freelance Python & AI Developer",
    company: "Upwork",
    period: "2023 — Present",
    points: [
      "Delivered 12+ client projects: LLM-powered automation (FastAPI + LangChain), voice AI pipelines (TTS + Whisper), DeFi analytics dashboards (React + Python).",
      "Maintained 5.0/5.0 rating across 15+ contracts; 100% on-time delivery.",
      "Designed autonomous agent architectures using Hermes for on-chain DeFi operations.",
    ],
  },
  {
    role: "Community Ambassador",
    company: "Base Ecosystem",
    period: "2023 — Present",
    points: [
      "Drove Web3 education & DeFi awareness across 5k+ community members; organized 8+ technical workshops.",
      "Fostered developer engagement: guided 50+ builders through Base onboarding, smart contract deployment.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  accent: "violet" | "cyan" | "white" | "emerald";
  thumbnail: string;
  metrics?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Interactive AI Avatar / Radio DJ System",
    blurb:
      "Real-time streaming app where a live AI avatar reads chat, responds to comments, and runs a 24/7 radio show. 10k+ daily interactions, <200ms latency.",
    stack: ["Python", "TikTokLive", "TTS", "LLM", "FastAPI", "WebSockets"],
    accent: "violet",
    thumbnail: "/projects/placeholder-1.jpg",
    metrics: [
      { label: "Daily Interactions", value: "10k+" },
      { label: "Latency", value: "<200ms" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/cryptboys/ai-avatar" }],
  },
  {
    title: "Autonomous DeFi Liquidity Agent",
    blurb:
      "Self-running agent analyzing DLMM liquidity positions on Solana, executing data-driven rebalancing. Hermes orchestration, on-chain execution.",
    stack: ["Python", "Hermes", "Solana", "DLMM", "Docker"],
    accent: "cyan",
    thumbnail: "/projects/placeholder-2.jpg",
    metrics: [
      { label: "Protocol", value: "Solana DLMM" },
      { label: "Orchestration", value: "Hermes" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/cryptboys/defi-liquidity-agent" }],
  },
  {
    title: "Data Science & EDA Portfolio",
    blurb:
      "Collection of Kaggle notebooks: cleaning, exploration, feature engineering, model evaluation on real-world datasets. 15+ notebooks, 500+ views.",
    stack: ["Kaggle", "Jupyter", "pandas", "scikit-learn", "XGBoost"],
    accent: "white",
    thumbnail: "/projects/placeholder-3.jpg",
    metrics: [
      { label: "Notebooks", value: "15+" },
      { label: "Views", value: "500+" },
    ],
    links: [{ label: "Kaggle", href: "https://kaggle.com/cryptboys" }],
  },
  {
    title: "RAG SaaS — Multi-tenant Document Q&A",
    blurb:
      "Production RAG system: hybrid search (vector + BM25), multi-tenant auth, usage billing, admin dashboard. Deployed on Vercel + Railway, 99.9% uptime, <500ms p95.",
    stack: ["Next.js", "FastAPI", "LangChain", "Weaviate", "PostgreSQL", "Stripe", "Docker"],
    accent: "emerald",
    thumbnail: "/projects/placeholder-4.jpg",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "p95 Latency", value: "<500ms" },
    ],
    links: [
      { label: "Live Demo", href: "https://herman-rag-saas.vercel.app" },
      { label: "GitHub", href: "https://github.com/cryptboys/rag-saas" },
    ],
  },
  {
    title: "Voice Data Exploration: Gujarati Digits",
    blurb:
      "Exploratory Data Analysis (EDA) on audio data, extracting key metrics like duration, sample rate, RMS energy, Signal-to-Noise Ratio (SNR), and Voice Activity Detection (VAD). Visualizes audio characteristics and quality.",
    stack: ["Python", "Librosa", "Pandas", "Matplotlib", "Seaborn", "Kaggle Notebooks"],
    accent: "cyan",
    thumbnail: "/projects/placeholder-5.jpg",
    metrics: [
      { label: "Notebook", value: "Kaggle" },
      { label: "Audio Features", value: "EDA" },
    ],
    links: [
      { label: "Kaggle Notebook", href: "https://www.kaggle.com/code/kangmaswawan/voice-data-exploration-gujarati-spoken-digits" },
      { label: "GitHub Repo", href: "https://github.com/cryptboys/voice-data-project" },
    ],
  },
];

export type SkillItem = {
  name: string;
};

export type SkillGroup = {
  label: string;
  icon: "code" | "brain" | "mic";
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Engineering",
    icon: "code",
    items: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "Docker" },
      { name: "Git/GitHub" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
  },
  {
    label: "AI & LLM",
    icon: "brain",
    items: [
      { name: "LLM Evaluation (RLHF)" },
      { name: "Prompt Engineering" },
      { name: "RAG Pipelines (LangChain, LlamaIndex)" },
      { name: "Vector Databases (Weaviate, Pinecone)" },
      { name: "Autonomous Agents (Hermes, CrewAI)" },
      { name: "Hermes Agent Framework" },
      { name: "Model Fine-tuning (LoRA/QLoRA)" },
      { name: "Model Serving (vLLM, TGI)" },
    ],
  },
  {
    label: "Voice & Audio",
    icon: "mic",
    items: [
      { name: "Multilingual Voice Actor (EN / ID / JV)" },
      { name: "AI Voice Data Generation" },
      { name: "TTS Pipeline (Coqui, ElevenLabs, OpenAI)" },
      { name: "ASR (Whisper, Faster-Whisper)" },
      { name: "Real-time Voice Streaming" },
    ],
  },
];
