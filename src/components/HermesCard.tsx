"use client";

import { useState } from "react";
import { Bot, Zap, Brain, Terminal, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const capabilities = [
  {
    icon: Bot,
    label: "Autonomous Agents",
    desc: "Self-improving agents dengan persistent memory lintas sesi. Belajar dari pengalaman lewat skill, bisa didelegasi kerja paralel ke sub-agent.",
  },
  {
    icon: Zap,
    label: "Multi-Platform",
    desc: "Satu agent jalan di Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI, sampai webhooks. Full tool access, bukan cuma chat.",
  },
  {
    icon: Brain,
    label: "Skill System",
    desc: "Prosedur reusable disimpan sebagai skill markdown. Skill kustom saya: riset YouTube → NotebookLM → Obsidian, job hunter, RAG SaaS, voice AI, DeFi agent.",
  },
  {
    icon: Terminal,
    label: "System Access",
    desc: "Akses penuh ke terminal, browser automation, file ops, code execution, vision, TTS, dan image/video generation.",
  },
];

export default function HermesCard({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <div className="card card-hover h-full overflow-hidden p-6 sm:p-8 relative">
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-mono text-violet-300">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Built with Hermes
          </span>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/80">AI Agent</h3>
              <p className="text-sm font-semibold text-white">Hermes Agent</p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 mb-4 flex-1">
            Portfolio ini dirancang dan dibangun menggunakan Hermes Agent — AI agent framework open-source.{" "}
            <a href="/hermes" className="text-violet-300 hover:underline font-mono text-xs">
              Detail →
            </a>
          </p>

          <div className="flex flex-col gap-2">
            {capabilities.map((cap) => {
              const isOpen = open === cap.label;
              return (
                <div key={cap.label} className="rounded-lg border border-white/5 bg-white/[0.02] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : cap.label)}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-white/[0.05] transition-colors"
                  >
                    <cap.icon className="h-4 w-4 text-violet-300 shrink-0" />
                    <span className="font-mono text-[11px] text-white flex-1">{cap.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-3 pb-3 pl-10 text-xs text-zinc-400 leading-relaxed">{cap.desc}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}