"use client";

import { useMotionValue, useReducedMotion, motion } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldReduceMotion) return;
      const rect = element.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
      if (shouldReduceMotion) return;
      mouseX.set(-9999);
      mouseY.set(-9999);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        className={`card card-hover relative overflow-hidden h-full ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`card card-hover relative overflow-hidden h-full ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(198, 255, 0, 0.15) 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(198, 255, 0, 0.1), transparent)`,
          opacity: 0,
        }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {children}
    </div>
  );
}