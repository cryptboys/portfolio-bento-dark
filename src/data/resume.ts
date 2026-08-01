export const profile = {
  name: "Herman Donawan",
  role: "AI Engineer",
  location: "Boyolali, Central Java, Indonesia",
  email: "kangmaswawan21@gmail.com",
  github: "https://github.com/cryptboys",
  linkedin: "https://linkedin.com/in/herman-donawan-731554",
  summary:
    "AI Engineer building production LLM systems: RAG pipelines, RLHF evaluation frameworks, autonomous agents. Shipped voice-driven AI avatar serving 10k+ daily interactions. Full-stack (Next.js, FastAPI, Docker, Vercel/AWS).",
  tagline:
    "Building intelligent agents, voice-driven experiences, and the infrastructure that trains the models behind them.",
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
      "Designed autonomous agent architectures using Hermes/Meridian for on-chain DeFi operations.",
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
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Interactive AI Avatar / Radio DJ System",
    blurb:
      "Real-time streaming app where a live AI avatar reads chat, responds to comments, and runs a 24/7 radio show. 10k+ daily interactions, <200ms latency.",
    stack: ["Python", "TikTokLive", "TTS", "LLM", "FastAPI", "WebSockets"],
    accent: "violet",
    links: [{ label: "GitHub", href: "https://github.com/cryptboys/ai-avatar" }],
  },
  {
    title: "Autonomous DeFi Liquidity Agent",
    blurb:
      "Self-running agent analyzing DLMM liquidity positions on Solana, executing data-driven rebalancing. Hermes/Meridian orchestration, on-chain execution.",
    stack: ["Python", "Hermes", "Meridian", "Solana", "DLMM", "Docker"],
    accent: "cyan",
    links: [{ label: "GitHub", href: "https://github.com/cryptboys/defi-liquidity-agent" }],
  },
  {
    title: "Data Science & EDA Portfolio",
    blurb:
      "Collection of Kaggle notebooks: cleaning, exploration, feature engineering, model evaluation on real-world datasets. 15+ notebooks, 500+ views.",
    stack: ["Kaggle", "Jupyter", "pandas", "scikit-learn", "XGBoost"],
    accent: "white",
    links: [{ label: "Kaggle", href: "https://kaggle.com/cryptboys" }],
  },
  {
    title: "RAG SaaS — Multi-tenant Document Q&A",
    blurb:
      "Production RAG system: hybrid search (vector + BM25), multi-tenant auth, usage billing, admin dashboard. Deployed on Vercel + Railway, 99.9% uptime, <500ms p95.",
    stack: ["Next.js", "FastAPI", "LangChain", "Weaviate", "PostgreSQL", "Stripe", "Docker"],
    accent: "emerald",
    links: [
      { label: "Live Demo", href: "https://rag-saas.vercel.app" },
      { label: "GitHub", href: "https://github.com/cryptboys/rag-saas" },
    ],
  },
];

export type SkillGroup = {
  label: string;
  icon: "code" | "brain" | "mic" | "chain" | "server" | "data";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Engineering",
    icon: "code",
    items: [
      "Python",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "Docker",
      "Git/GitHub",
      "CI/CD (GitHub Actions)",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    label: "AI & LLM",
    icon: "brain",
    items: [
      "LLM Evaluation (RLHF)",
      "Prompt Engineering",
      "RAG Pipelines (LangChain, LlamaIndex)",
      "Vector Databases (Weaviate, Pinecone)",
      "Autonomous Agents (Hermes, Meridian, CrewAI)",
      "Model Fine-tuning (LoRA/QLoRA)",
      "Model Serving (vLLM, TGI)",
    ],
  },
  {
    label: "Voice & Audio",
    icon: "mic",
    items: [
      "Multilingual Voice Actor (EN / ID / JV)",
      "AI Voice Data Generation",
      "TTS Pipeline (Coqui, ElevenLabs, OpenAI)",
      "ASR (Whisper, Faster-Whisper)",
      "Real-time Voice Streaming",
    ],
  },
  {
    label: "Web3 & Data",
    icon: "chain",
    items: ["DeFi Protocols", "Solana Development", "Smart Contracts (Rust)", "On-chain Analytics"],
  },
  {
    label: "MLOps & Infra",
    icon: "server",
    items: ["Kubernetes (basics)", "Monitoring (Prometheus/Grafana)", "CI/CD Pipelines", "Cloud (Vercel, Railway, AWS)"],
  },
  {
    label: "Data Science",
    icon: "data",
    items: ["EDA & Feature Engineering", "XGBoost / LightGBM", "Experiment Tracking (MLflow/W&B)", "Kaggle Competitions"],
  },
];