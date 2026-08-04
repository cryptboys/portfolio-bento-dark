import { Bot, Zap, Brain, Terminal, GitBranch, Clock } from "lucide-react";
import Reveal from "./Reveal";

const capabilities = [
  { icon: Bot, label: "Autonomous Agents", desc: "Self-improving agents with persistent memory." },
  { icon: Zap, label: "Multi-Platform", desc: "Telegram, Discord, Slack, CLI, Webhooks." },
  { icon: Brain, label: "Skill System", desc: "Extensible skills for any domain." },
  { icon: Terminal, label: "System Access", desc: "Terminal, browser, file, code execution." },
];

export default function HermesCard({ className = "", delay = 0 }: { className?: string; delay?: number }) {
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

          <p className="text-sm text-zinc-400 mb-6 flex-1">
            Portfolio ini dirancang dan dibangun menggunakan Hermes Agent — AI agent framework open-source.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.label} className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                <cap.icon className="h-4 w-4 text-violet-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[11px] text-white">{cap.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
