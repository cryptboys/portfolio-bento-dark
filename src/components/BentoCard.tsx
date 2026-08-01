import type { ReactNode } from "react";
import Reveal from "./Reveal";

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
  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <div className="card card-hover h-full overflow-hidden p-6 sm:p-8">
        {children}
      </div>
    </Reveal>
  );
}
