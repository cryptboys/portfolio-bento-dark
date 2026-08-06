"use client";

import { profile } from "@/data/resume";
import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Daily Interactions" },
  { value: "<200ms", label: "Avg Latency" },
  { value: "99.9%", label: "Uptime" },
  { value: "15+", label: "Notebooks" },
];

export default function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col gap-5"
    >
      <p className="mono-label">By the Numbers</p>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}