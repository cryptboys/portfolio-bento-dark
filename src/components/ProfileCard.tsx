"use client";

import { useEffect, useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

function useWibTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
}

export default function ProfileCard() {
  const wib = useWibTime();

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="mono-label">Profile</p>

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 font-mono text-lg font-bold text-zinc-100">
          HD
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-zinc-100">{profile.name}</p>
          <p className="font-mono text-xs text-zinc-500">@cryptboys</p>
        </div>
      </div>

      <ul className="flex flex-1 flex-col justify-center gap-4">
        <li className="flex items-center gap-3 text-sm">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
            <MapPin className="h-4 w-4" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Location
            </span>
            <span className="truncate text-zinc-200">{profile.location}</span>
          </span>
        </li>
        <li className="flex items-center gap-3 text-sm">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
            <Mail className="h-4 w-4" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Email
            </span>
            <span className="truncate text-zinc-200">{profile.email}</span>
          </span>
        </li>
        <li className="flex items-center gap-3 text-sm">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Local Time (WIB)
            </span>
            <span className="font-mono text-lg tabular-nums text-zinc-100">
              {wib ?? "--:--:--"}
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}
