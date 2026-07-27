"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import type { Locale } from "@/types";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

type Props = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  t: Record<string, string | string[]>;
};

const ids = ["home", "about", "skills", "projects", "experience", "studio", "contact"];

export function Navbar({ locale, setLocale, t }: Props) {
  const [open, setOpen] = useState(false);
  const nav = t.nav as string[];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink">
        Skip to content
      </a>
      <nav aria-label="Primary navigation" className="glass mx-auto max-w-7xl rounded-[1.25rem] px-4 py-3 lg:rounded-full">
        <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 rounded-full pr-3 text-sm font-semibold text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan" aria-label="Johan Gabriel Vasquez home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-ink shadow-glow">JG</span>
          <span className="hidden sm:inline">Johan Gabriel</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item, index) => (
            <a key={item} href={`#${ids[index]}`} className="rounded-full px-3 py-2 text-sm font-medium text-white/66 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} setLocale={setLocale} />
          <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:flex" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:flex" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-cyan px-4 py-2.5 text-sm font-bold text-ink shadow-glow transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:inline-flex">
            <Mail size={16} /> {String(t.contactMe)}
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        </div>
        {open ? (
          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden">
            {nav.map((item, index) => (
              <a
                key={item}
                href={`#${ids[index]}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                {item}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
