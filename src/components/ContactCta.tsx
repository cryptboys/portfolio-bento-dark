"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { profile } from "@/data/resume";

export default function ContactCta() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-[#1E1E1E] bg-[#121212] p-8 backdrop-blur-sm sm:p-12">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]"
      />
      <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="mono-label mb-3">Available for new projects</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">intelligent</span> together.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            I&apos;m available for AI engineering, LLM evaluation, voice data, and automation projects. Questions, ideas, or just want to say hi &mdash; my inbox is open.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03]"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  {profile.email}
                </>
              )}
            </button>
            {profile.calendly && (
              <a
                href={profile.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1E1E1E] bg-[#121212] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <ArrowUpRight className="h-4 w-4" />
                Book 15min Call
              </a>
            )}
          </div>
          <div className="flex items-center justify-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E1E] bg-[#121212] text-zinc-300 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E1E] bg-[#121212] text-zinc-300 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
