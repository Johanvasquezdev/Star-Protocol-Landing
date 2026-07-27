import { ArrowUpRight, Github } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MediaImage } from "@/components/ui/MediaImage";
import type { Locale, Project } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  locale: Locale;
  compact?: boolean;
  t: Record<string, string | string[]>;
};

export function ProjectCard({ project, locale, compact, t }: Props) {
  const accent = project.accent ?? "cyan";
  const accentClasses = {
    cyan: "from-cyan/26 via-cyan/8 to-transparent text-cyan",
    violet: "from-violet/26 via-violet/8 to-transparent text-violet-100",
    magenta: "from-magenta/24 via-magenta/8 to-transparent text-fuchsia-100"
  }[accent];

  return (
    <GlassCard className={compact ? "p-5" : "relative min-h-[420px] overflow-hidden p-0"}>
      {!compact ? <div aria-hidden className={cn("absolute inset-x-0 top-0 h-40 bg-gradient-to-b", accentClasses)} /> : null}
      <div className={cn("relative", compact ? "" : "grid min-h-[420px] gap-0 lg:grid-cols-[1.05fr_0.95fr]")}>
        <div className={compact ? "" : "flex flex-col p-6 sm:p-7"}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className={cn("text-xs font-semibold uppercase text-cyan", compact ? "tracking-[0.12em]" : "tracking-[0.18em]")}>{project.type[locale]}</p>
              <h3 className={cn("mt-3 font-display font-semibold text-white", compact ? "text-xl" : "text-3xl")}>{project.name}</h3>
            </div>
            {project.status ? (
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/72">
                {project.status[locale]}
              </span>
            ) : null}
          </div>
          <p className={cn("mt-5 leading-7 text-white/68", compact ? "text-sm" : "text-base")}>{project.description[locale]}</p>
          {project.impact ? <p className="mt-5 border-l border-cyan/40 pl-4 text-sm leading-7 text-white/78">{project.impact[locale]}</p> : null}
          {project.role ? <p className="mt-5 text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-white/44">{project.role[locale]}</p> : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/[0.055] px-3 py-1 text-xs text-white/64">
                {tag}
              </span>
            ))}
          </div>
          {!compact ? (
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
                  <Github size={16} /> GitHub
                </a>
              ) : null}
              <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-cyan/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
                {String(t.demo)} <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-violet/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
                {String(t.caseStudy)}
              </a>
            </div>
          ) : null}
        </div>
        {!compact ? (
          <>
          {project.image ? (
            <MediaImage
              src={project.image.src}
              alt={project.image.alt[locale]}
              className="mt-6 aspect-[16/9] rounded-2xl border border-white/10 lg:hidden"
            />
          ) : null}
          <div className="relative hidden border-l border-white/10 bg-ink/30 p-6 lg:block">
            <div className="project-screen relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink/78 p-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-magenta/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-violet/80" />
                </div>
                <span className="text-[10px] font-semibold uppercase text-white/38">Product system</span>
              </div>
              <div className="mt-5 grid gap-3">
                <MediaImage
                  src={project.image?.src}
                  alt={project.image?.alt[locale] ?? `${project.name} product preview`}
                  className="aspect-[16/10] rounded-xl border border-white/10"
                  imgClassName="object-cover"
                />
                <div className="grid grid-cols-3 gap-3">
                  {(project.stack ?? project.tags).slice(0, 3).map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="h-1.5 w-8 rounded-full bg-cyan/70" />
                      <p className="mt-3 text-[11px] font-medium leading-4 text-white/62">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-1 space-y-2">
                  {[78, 62, 88, 52].map((width) => (
                    <div key={width} className="h-2 rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan/80 to-violet/70" style={{ width: `${width}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </>
        ) : null}
      </div>
    </GlassCard>
  );
}
