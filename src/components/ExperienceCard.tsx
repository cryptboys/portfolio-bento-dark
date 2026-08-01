import { Briefcase, Building2, Check } from "lucide-react";
import { experiences } from "@/data/resume";

export default function ExperienceCard() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-violet-400" />
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Experience
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">2023 — Present</span>
      </div>

      <ol className="relative flex flex-1 flex-col gap-8 border-l border-white/10 pl-6">
        {experiences.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full border-2 border-violet-400 bg-[#121214]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-white">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-zinc-500">{job.period}</span>
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-violet-300/80">
              <Building2 className="h-3.5 w-3.5" />
              {job.company}
            </p>
            <ul className="mt-3 space-y-1.5">
              {job.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
