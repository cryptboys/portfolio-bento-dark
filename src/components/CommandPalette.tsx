"use client";

import { useEffect, useState } from "react";
import { Command, CommandInput, CommandList, CommandItem, CommandDialog } from "cmdk";
import { Mail, Github, Linkedin, Copy, ArrowUpRight, Search, ExternalLink } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    {
      label: "Email Me",
      shortcut: "⌘E",
      icon: Mail,
      action: () => {
        window.open("mailto:kangmaswawan21@gmail.com");
        setOpen(false);
      },
    },
    {
      label: "GitHub",
      shortcut: "⌘G",
      icon: Github,
      action: () => {
        window.open("https://github.com/cryptboys", "_blank");
        setOpen(false);
      },
    },
    {
      label: "Kaggle",
      shortcut: "⌘K",
      icon: Search,
      action: () => {
        window.open("https://kaggle.com/cryptboys", "_blank");
        setOpen(false);
      },
    },
    {
      label: "LinkedIn",
      shortcut: "⌘L",
      icon: Linkedin,
      action: () => {
        window.open("https://linkedin.com/in/herman-donawan-731554", "_blank");
        setOpen(false);
      },
    },
    {
      label: "Copy Page Link",
      shortcut: "⌘C",
      icon: Copy,
      action: async () => {
        await navigator.clipboard.writeText(window.location.href);
        setOpen(false);
      },
    },
    {
      label: "View RAG Demo",
      shortcut: "⌘R",
      icon: ArrowUpRight,
      action: () => {
        const section = document.getElementById("rag-playground");
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      label: "View Voice Demo",
      shortcut: "⌘V",
      icon: ExternalLink,
      action: () => {
        const section = document.getElementById("voice-demo");
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
  ];

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 rounded-full border border-white/10 bg-[#121212]/80 px-3 py-1.5 text-[10px] font-mono text-zinc-400 backdrop-blur-sm sm:bottom-6 sm:right-6">
        Press <kbd className="rounded bg-white/5 px-1 py-0.5 text-zinc-300">⌘K</kbd> to explore
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-[24px] border border-white/10 bg-[#121212]">
            <Command className="w-full">
              <CommandInput
                autoFocus
                placeholder="Type a command or search..."
                className="w-full border-b border-white/10 bg-transparent px-4 py-4 text-base text-white placeholder-zinc-500 focus:outline-none"
              />
              <CommandList className="max-h-96 overflow-y-auto py-2">
                {actions.map((action) => (
                  <CommandItem
                    key={action.label}
                    onSelect={action.action}
                    className="flex cursor-pointer items-center gap-3 px-4 py-3 text-white transition-colors hover:bg-white/5 focus:bg-white/5 data-[selected=true]:bg-white/10"
                  >
                    <action.icon className="h-5 w-5 text-zinc-400" />
                    <span className="flex-1 text-sm">{action.label}</span>
                    <kbd className="hidden shrink-0 rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-500 sm:inline-flex">
                      {action.shortcut}
                    </kbd>
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}