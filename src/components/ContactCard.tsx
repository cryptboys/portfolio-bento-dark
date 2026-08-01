import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";

const rows = [
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined as string | undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/cryptboys",
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "herman-donawan-731554",
    href: profile.linkedin,
  },
];

export default function ContactCard() {
  return (
    <div className="flex h-full flex-col gap-5">
      <p className="mono-label">Contact</p>
      <ul className="flex flex-1 flex-col justify-center gap-4">
        {rows.map((row) => {
          const Icon = row.icon;
          const inner = (
            <span className="group flex items-center gap-3 text-sm">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors duration-300 group-hover:border-violet-400/50 group-hover:text-white">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {row.label}
                </span>
                <span className="truncate text-zinc-200">{row.value}</span>
              </span>
            </span>
          );
          if (row.href) {
            return (
              <li key={row.label}>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    row.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between rounded-2xl px-3 py-2 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  {inner}
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-colors duration-300 group-hover:text-violet-400" />
                </a>
              </li>
            );
          }
          return <li key={row.label}>{inner}</li>;
        })}
      </ul>
    </div>
  );
}
