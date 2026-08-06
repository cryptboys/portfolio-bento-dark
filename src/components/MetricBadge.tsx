import { LucideIcon } from "lucide-react";

interface MetricBadgeProps {
  label: string;
  value: string;
}

export default function MetricBadge({ label, value }: MetricBadgeProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
      <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent">
        {value}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        {label}
      </p>
    </div>
  );
}