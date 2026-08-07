"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function BentoCard({
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
      >
        <SpotlightCard className="rounded-[24px] border border-[#1E1E1E] bg-[#121212] p-6 sm:p-8">
          {children}
        </SpotlightCard>
      </motion.div>
    </Reveal>
  );
}
