"use client";

import { skillGroups } from "@/data/resume";
import { motion } from "framer-motion";

export default function TechStackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col gap-5"
    >
      <p className="mono-label">Tech Stack</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skillGroups.slice(0, 4).map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.slice(0, 5).map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-300"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}