"use client";

import { motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const nodes = ["Docs", "Chunks", "Weaviate", "Answer"];

export function RagPipeline() {
  const isReducedMotion = useReducedMotion();
  const progress = useMotionValue(0);

  useEffect(() => {
    if (isReducedMotion) return;
    let frame = 0;
    const animate = () => {
      frame = (frame + 1) % 360;
      progress.set(frame / 360);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isReducedMotion, progress]);

  const dotX = useTransform(progress, [0, 1], ["0%", "340%"]);

  return (
    <div className="relative flex w-full items-center justify-between gap-2 p-5">
      {/* Connecting lines */}
      <div className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-white/5" />
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <div
          key={node}
          className="relative rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 z-10"
        >
          {node}
          {i === nodes.length - 1 && (
            <motion.div
              className="absolute -inset-1 rounded-full border border-accent/50"
              initial={{ opacity: 0 }}
              animate={
                isReducedMotion
                  ? {}
                  : {
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                delay: 3,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          )}
        </div>
      ))}

      {/* Travelling Dot */}
      <motion.div
        className="absolute left-8 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
        animate={{ x: isReducedMotion ? "0%" : dotX }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: isReducedMotion ? "auto" : "transform" }}
      />
    </div>
  );
}
