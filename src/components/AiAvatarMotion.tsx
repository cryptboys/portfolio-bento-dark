"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const baseHeights = [8, 24, 12];
const staggerDuration = 0.1;
const animationDuration = 0.6;

const sentence1 = "User: play lofi...";
const sentence2 = "AI: On it... streaming";

export function AiAvatarMotion() {
  const isReducedMotion = useReducedMotion();
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [showSecond, setShowSecond] = useState(false);

  // Typewriter effect for first sentence
  useEffect(() => {
    if (isReducedMotion) {
      setTyped1(sentence1);
      setShowSecond(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      if (i < sentence1.length) {
        setTyped1(sentence1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowSecond(true), 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isReducedMotion]);

  // Typewriter effect for second sentence
  useEffect(() => {
    if (!showSecond) return;
    if (isReducedMotion) {
      setTyped2(sentence2);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      if (i < sentence2.length) {
        setTyped2(sentence2.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [showSecond, isReducedMotion]);

  return (
    <div className="relative flex h-full flex-col justify-between p-5">
      {/* Waveform - 3 vertical bars using scaleY transform */}
      <div className="flex items-end gap-1 h-10">
        {baseHeights.map((height, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-full bg-accent"
            initial={{ scaleY: 8 / 24, opacity: 1 }}
            animate={
              isReducedMotion
                ? { scaleY: height / 24 }
                : { scaleY: [8 / 24, height / 24, 8 / 24] }
            }
            transition={{
              duration: isReducedMotion ? 0 : animationDuration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: i * staggerDuration,
            }}
            style={{
              transformOrigin: "bottom",
              willChange: isReducedMotion ? "auto" : "transform",
            }}
          />
        ))}
      </div>

      {/* Chat bubble */}
      <div className="mt-4 text-sm text-white font-mono">
        <p className="overflow-hidden whitespace-nowrap">{typed1}</p>
        <p className="overflow-hidden whitespace-nowrap opacity-70">{typed2}</p>
      </div>
    </div>
  );
}
