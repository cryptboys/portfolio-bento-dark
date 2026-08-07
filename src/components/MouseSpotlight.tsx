"use client";

import { useMotionValue, useReducedMotion, motion } from "framer-motion";
import { useEffect } from "react";

export function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.06) 0%, transparent 80%)`,
      }}
    />
  );
}
