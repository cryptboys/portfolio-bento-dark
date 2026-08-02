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
      "Self-running agent analyzing DLMM liquidity positions on Solana, executing data-driven rebalancing. Hermes orchestration, on-chain execution.",
    stack: ["Python", "Hermes", "Solana", "DLMM", "Docker"],
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
      { label: "Live Demo", href: "https://herman-rag-saas.vercel.app" },
      { label: "GitHub", href: "https://github.com/cryptboys/rag-saas" },
    ],
  },
];

export type SkillItem = {
  name: string;
  link?: string;
};

export type SkillGroup = {
  label: string;
  icon: "code" | "brain" | "mic" | "chain" | "server" | "data";
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Engineering",
    icon: "code",
    items: [
      { name: "Python", link: "https://github.com/python" },
      { name: "TypeScript", link: "https://github.com/microsoft/TypeScript" },
      { name: "Next.js", link: "https://github.com/vercel/next.js" },
      { name: "FastAPI", link: "https://github.com/fastapi/fastapi" },
      { name: "Docker", link: "https://github.com/docker" },
      { name: "Git/GitHub", link: "https://github.com/git" },
      { name: "CI/CD (GitHub Actions)", link: "https://github.com/features/actions" },
      { name: "PostgreSQL", link: "https://github.com/postgres/postgres" },
      { name: "Redis", link: "https://github.com/redis/redis" },
    ],
  },
  {
    label: "AI & LLM",
    icon: "brain",
    items: [
      { name: "LLM Evaluation (RLHF)", link: "https://github.com/huggingface/trl" },
      { name: "Prompt Engineering" },
      { name: "RAG Pipelines (LangChain, LlamaIndex)", link: "https://github.com/langchain-ai/langchain" },
      { name: "Vector Databases (Weaviate, Pinecone)", link: "https://github.com/weaviate/weaviate" },
      { name: "Autonomous Agents (Hermes, CrewAI)", link: "https://github.com/nousresearch/hermes-agent" },
      { name: "Model Fine-tuning (LoRA/QLoRA)", link: "https://github.com/huggingface/peft" },
      { name: "Model Serving (vLLM, TGI)", link: "https://github.com/vllm-project/vllm" },
    ],
  },
  {
    label: "Voice & Audio",
    icon: "mic",
    items: [
      { name: "Multilingual Voice Actor (EN / ID / JV)" },
      { name: "AI Voice Data Generation" },
      { name: "TTS Pipeline (Coqui, ElevenLabs, OpenAI)", link: "https://github.com/coqui-ai/TTS" },
      { name: "ASR (Whisper, Faster-Whisper)", link: "https://github.com/openai/whisper" },
      { name: "Real-time Voice Streaming" },
    ],
  },
  {
    label: "Web3 & Data",
    icon: "chain",
    items: [
      { name: "DeFi Protocols", link: "https://github.com/solana-labs/solana" },
      { name: "Solana Development", link: "https://github.com/solana-developers" },
      { name: "Smart Contracts (Rust)" },
      { name: "On-chain Analytics" },
    ],
  },
  {
    label: "MLOps & Infra",
    icon: "server",
    items: [
      { name: "Kubernetes (basics)", link: "https://github.com/kubernetes/kubernetes" },
      { name: "Monitoring (Prometheus/Grafana)", link: "https://github.com/prometheus/prometheus" },
      { name: "CI/CD Pipelines" },
      { name: "Cloud (Vercel, Railway, AWS)" },
    ],
  },
  {
    label: "Data Science",
    icon: "data",
    items: [
      { name: "EDA & Feature Engineering" },
      { name: "XGBoost / LightGBM", link: "https://github.com/dmlc/xgboost" },
      { name: "Experiment Tracking (MLflow/W&B)", link: "https://github.com/mlflow/mlflow" },
      { name: "Kaggle Competitions", link: "https://www.kaggle.com" },
    ],
  },
];