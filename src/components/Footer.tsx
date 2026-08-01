import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="pb-10 pt-4 text-center">
      <p className="font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js,
        Tailwind CSS &amp; Framer Motion
      </p>
    </footer>
  );
}
