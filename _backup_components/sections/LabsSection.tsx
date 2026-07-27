import { labProjects } from "@/data/projects";
import type { Locale } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function LabsSection({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={String(t.labsTitle)} subtitle={String(t.labsSubtitle)} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {labProjects.map((project) => (
            <ProjectCard key={project.name} project={project} locale={locale} t={t} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
