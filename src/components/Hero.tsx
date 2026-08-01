import { ArrowUpRight, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-emerald-300">
            Available for new projects
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Herman{" "}
          <span className="text-gradient">Donawan</span>
        </h1>

        <p className="mt-4 font-mono text-sm tracking-wide text-violet-300 sm:text-base">
          &gt; {profile.role}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.tagline}
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-[1.03]"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/50 hover:bg-white/10"
          >
            <Send className="h-4 w-4" />
            Let&apos;s Talk
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
          <span className="ml-2 hidden font-mono text-xs text-zinc-500 sm:inline-flex sm:items-center sm:gap-1.5">
            {profile.location.split(",")[0]}
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
