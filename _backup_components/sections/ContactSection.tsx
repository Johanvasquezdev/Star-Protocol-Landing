import { Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactSection({ t }: { t: Record<string, string | string[]> }) {
  return (
    <section id="contact" className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
            <Sparkles size={16} /> {String(t.available)}
          </span>
          <h2 className="mt-7 font-display text-4xl font-semibold leading-tight text-gradient sm:text-6xl">{String(t.contactTitle)}</h2>
          <div className="mt-8 grid gap-3 text-white/70">
            <a href="mailto:johanvasquezdev@gmail.com" className="inline-flex items-center gap-3 hover:text-cyan"><Mail size={18} /> johanvasquezdev@gmail.com</a>
            <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-cyan"><Github size={18} /> github.com/Johanvasquezdev</a>
            <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-cyan"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
        <form className="glass rounded-[1.5rem] p-6 sm:p-8" aria-label="Project contact form">
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="contact-name" className="grid gap-2 text-sm font-semibold text-white/72">
              {String(t.name)}
              <input id="contact-name" name="name" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan focus:ring-2 focus:ring-cyan/25" placeholder={String(t.namePlaceholder)} autoComplete="name" />
            </label>
            <label htmlFor="contact-email" className="grid gap-2 text-sm font-semibold text-white/72">
              {String(t.email)}
              <input id="contact-email" name="email" type="email" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan focus:ring-2 focus:ring-cyan/25" placeholder={String(t.emailPlaceholder)} autoComplete="email" />
            </label>
          </div>
          <label htmlFor="contact-project" className="mt-4 grid gap-2 text-sm font-semibold text-white/72">
            {String(t.project)}
            <textarea id="contact-project" name="project" className="min-h-36 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan focus:ring-2 focus:ring-cyan/25" placeholder={String(t.projectPlaceholder)} />
          </label>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagneticButton href="mailto:johanvasquezdev@gmail.com"><Send size={17} /> {String(t.send)}</MagneticButton>
            <MagneticButton href="/Johan-Gabriel-Vasquez-CV.pdf" variant="ghost">{String(t.downloadCv)}</MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}
