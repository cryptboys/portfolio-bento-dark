const WEEKS = 26;
const DAYS = 7;

// deterministic pseudo-random based on position
function level(w: number, d: number) {
  const n = Math.sin(w * 12.9898 + d * 78.233) * 43758.5453;
  const frac = n - Math.floor(n);
  if (frac < 0.4) return 0;
  if (frac < 0.65) return 1;
  if (frac < 0.85) return 2;
  return 3;
}

const colors = [
  "bg-white/[0.04]",
  "bg-violet-500/30",
  "bg-violet-500/60",
  "bg-violet-400",
];

export default function ActivityCard() {
  return (
    <div className="flex h-full flex-col gap-5">
      <p className="mono-label">Activity</p>

      <div className="flex flex-1 flex-col justify-center gap-1.5">
        {Array.from({ length: DAYS }, (_, d) => (
          <div key={d} className="flex gap-1.5">
            {Array.from({ length: WEEKS }, (_, w) => (
              <span
                key={w}
                className={`h-2.5 w-2.5 rounded-[3px] ${colors[level(w, d)]}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        <span>Contributions</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {colors.map((c) => (
            <span key={c} className={`h-2.5 w-2.5 rounded-[3px] ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
