import { Globe, Languages, MapPin } from "lucide-react";

const languages = ["English", "Indonesian", "Javanese"];

export default function LocationCard() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
          <MapPin className="h-4 w-4" />
        </span>
        <div>
          <p className="mono-label">Based in</p>
          <p className="text-sm text-zinc-200">Boyolali, Central Java, ID</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
          <Languages className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="mono-label">Languages</p>
          <p className="text-sm text-zinc-200">
            {languages.join(" · ")}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
        <Globe className="h-4 w-4 shrink-0 text-emerald-400" />
        <p className="text-xs leading-relaxed text-zinc-400">
          Remote-friendly — collaborating across timezones from Asia.
        </p>
      </div>
    </div>
  );
}
