import { featuredProjects } from "@/data/projects";
import type { Locale } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsSection({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  return (
    <section id="projects" className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={String(t.projectsTitle)} subtitle={String(t.projectsSubtitle)} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} locale={locale} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
