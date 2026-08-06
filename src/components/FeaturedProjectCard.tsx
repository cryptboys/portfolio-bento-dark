import Image from "next/image";
import { Project } from "@/data/resume";
import TechPill from "./TechPill";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="group relative col-span-1 md:col-span-2 flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/15 lg:col-span-4">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.blurb}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <TechPill key={tech} name={tech} />
        ))}
      </div>
      
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