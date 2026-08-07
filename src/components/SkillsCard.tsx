import { Brain, Code2, Mic2 } from "lucide-react";
import { skillGroups } from "@/data/resume";

const iconMap = {
  code: Code2,
  brain: Brain,
  mic: Mic2,
} as const;

const tintMap = {
  code: "text-violet-300",
  brain: "text-cyan-300",
  mic: "text-emerald-300",
} as const;

export default function SkillsCard() {
  return (
    <div className="flex h-full flex-col gap-5">
      <p className="mono-label">Skills</p>
      <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon];
          const tint = tintMap[group.icon];
          return (
            <div
              key={group.label}
              className="card card-hover flex flex-col gap-4 p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${tint}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-widest text-white/80">
                  {group.label}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.08] transition-colors"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}