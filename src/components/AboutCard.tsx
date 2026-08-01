import { Sparkles } from "lucide-react";
import { profile } from "@/data/resume";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "3", label: "Platforms" },
];

const focus = [
  "LLM Evaluation (RLHF)",
  "Autonomous Agents",
  "AI Voice Data",
  "Prompt Engineering",
  "Web3 / DeFi",
];

export default function AboutCard() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div>
        <p className="mono-label mb-3">About</p>
        <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
          {profile.summary}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
          >
            <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          <p className="mono-label">Focus areas</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {focus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
