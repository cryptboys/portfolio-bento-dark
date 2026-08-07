"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Linkedin, Download } from "lucide-react";
import { profile } from "@/data/resume";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroCard() {
  const [latency, setLatency] = useState(172);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setLatency(prev => {
        const delta = (Math.random() - 0.5) * 36;
        const next = Math.round(prev + delta);
        return Math.min(208, Math.max(172, next));
      });
    }, 2000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const displayLatency = reduceMotion ? 190 : latency;
  const latencyColor = displayLatency < 180 ? "text-accent" : displayLatency < 200 ? "text-yellow-400" : "text-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative col-span-2 row-span-2 flex flex-col gap-6 rounded-[24px] border border-[#1E1E1E] bg-[#121212] p-8 backdrop-blur-sm sm:p-10"
    >
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-accent/10 to-transparent" />
      
      <div className="relative flex items-start gap-6">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-2 border-white/10 bg-white/5 p-1">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/10 bg-white/5">
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 w-3 rounded-full bg-accent"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {profile.name}
          </h1>
          <p className="text-sm text-zinc-400 sm:text-base">
            {profile.role}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-accent">
              Available for freelance / full-time
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {profile.tagline}
          </p>
        </div>
      </div>
      
      <div className="relative mt-auto flex flex-col gap-3 sm:flex-row">
        <motion.a
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30"
        >
          <Mail className="h-4 w-4" />
          Email Me
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </motion.a>
        
        <motion.a
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/60 hover:bg-white/[0.08]"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </motion.a>
        
        <motion.a
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="/resume.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/[0.08]"
        >
          <Download className="h-4 w-4" />
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
}