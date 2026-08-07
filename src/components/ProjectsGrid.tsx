import Image from "next/image";
import { ArrowUpRight, FolderGit2, Globe } from "lucide-react";
import { projects } from "@/data/resume";
import type { Project } from "@/data/resume";

const accentClasses: Record<Project["accent"], string> = {
  violet: "from-violet-500/60",
  cyan: "from-cyan-500/60",
  white: "from-zinc-400/60",
  emerald: "from-emerald-500/60",
};

const chipClasses: Record<Project["accent"], string> = {
  violet: "border-violet-400/30 text-violet-200",
  cyan: "border-cyan-400/30 text-cyan-200",
  white: "border-white/15 text-zinc-300",
  emerald: "border-emerald-400/30 text-emerald-200",
};

const colSpans = ["lg:col-span-6", "lg:col-span-3", "lg:col-span-3", "lg:col-span-6"];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      {projects.map((project, i) => {
        const bar = accentClasses[project.accent];
        const chip = chipClasses[project.accent];
        return (
          <div
            key={project.title}
            className={`card card-hover group relative flex flex-col gap-5 overflow-hidden p-6 sm:p-7 ${colSpans[i % 4]}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${bar} via-white/20 to-transparent`}
            />
            <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                <FolderGit2 className="h-4 w-4" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-colors duration-300 group-hover:text-violet-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.blurb}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`rounded-md border bg-white/[0.03] px-2 py-1 font-mono text-[11px] ${chip}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <Globe className="h-3 w-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}