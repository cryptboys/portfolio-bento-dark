import Link from "next/link";
import { ArrowLeft, Bot, Zap, Brain, Terminal, CheckCircle } from "lucide-react";

const capabilities = [
  { icon: Bot, title: "Autonomous Agents", desc: "Self-improving agents with persistent memory across sessions. Learns from experience via skills." },
  { icon: Zap, title: "Multi-Platform", desc: "Runs on Telegram, Discord, Slack, WhatsApp, Signal, Email, Matrix, Webhooks, CLI." },
  { icon: Brain, title: "Skill System", desc: "Extensible skills — any workflow saved as markdown, version-controlled." },
  { icon: Terminal, title: "Full System Access", desc: "Terminal, browser automation, file ops, code execution, vision, TTS." },
];

const customSkills = [
  "YouTube Research Pipeline → NotebookLM → Obsidian sync",
  "Job Hunter: auto-scan listings, tailor applications",
  "RAG SaaS: production multi-tenant document Q&A",
  "Voice AI: TTS/ASR pipeline for avatar system",
  "DeFi Agent: on-chain analysis & execution",
  "MLOps: fine-tune & deploy to HF Spaces / Vercel",
];

export default function HermesPage() {
  return (
    <div className="min-h-screen bg-[#08080A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-10">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm font-mono text-violet-300 mb-6">
            Built with Hermes Agent
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Hermes Agent</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            This portfolio — design, code, deployment — was built with{" "}
            <span className="font-medium text-violet-300">Hermes Agent</span>, an open-source AI agent framework by Nous Research.
            Hermes runs in your terminal, messaging platforms, and IDE — not just chat, but full tool access.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Core Capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card p-6">
                <cap.icon className="h-5 w-5 text-violet-300 mb-3" />
                <h3 className="font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-zinc-400">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Custom Skills & Automations</h2>
          <p className="text-zinc-400 mb-6">Custom skills I built on top of Hermes to automate day-to-day workflows:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {customSkills.map((skill, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                <p className="text-sm text-zinc-300">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          <p>Built with <span className="text-violet-300">Hermes Agent</span> — AI agent framework by Nous Research.</p>
          <p className="mt-2">Source code: <a href="https://github.com/cryptboys/portfolio-bento-dark" className="hover:text-white underline">GitHub</a></p>
        </div>
      </div>
    </div>
  );
}
