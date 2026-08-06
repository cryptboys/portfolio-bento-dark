import Image from "next/image";
import { Project } from "@/data/resume";
import TechPill from "./TechPill";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/15">
      <div className="relative h-40 w-full overflow-hidden rounded-2xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="flex-1">
        <h3 className="mb-2 text-base font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.blurb}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechPill key={tech} name={tech} />
        ))}
      </div>
      
      {project.metrics && (
        <div className="grid grid-cols-2 gap-2">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
            >
              <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent">
                {metric.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {project.links && (
        <div className="flex gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-violet-400/60 hover:text-white hover:bg-white/[0.08]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}