import { services } from "@/data/translations";
import type { Locale } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StudioSection({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  return (
    <section id="studio" className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-y border-white/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading title={String(t.studioTitle)} subtitle={String(t.studioText)} />
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <GlassCard key={service.en} className="rounded-xl p-4">
                <p className="font-semibold text-white/84">{service[locale]}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
