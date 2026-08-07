import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 pb-10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
      <p className="font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} {profile.name} · @cryptboys · Built with
        Next.js, Tailwind CSS &amp; Framer Motion
      </p>
      <div className="flex items-center gap-3">
        {[
          { href: profile.github, label: "GitHub", Icon: Github },
          { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
          { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
        ].map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-white active:scale-[0.95]"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
