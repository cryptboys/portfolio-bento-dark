"use client";

import { motion } from "framer-motion";

interface TechPillProps {
  name: string;
}

export default function TechPill({ name }: TechPillProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:bg-white/[0.08]"
    >
      {name}
    </motion.span>
  );
}