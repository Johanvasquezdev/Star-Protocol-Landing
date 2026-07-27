"use client";

import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck, Workflow } from "lucide-react";
import type { Locale } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { MediaImage } from "@/components/ui/MediaImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focus = [
  { icon: Code2, label: { en: "Interface + backend", es: "Interfaz + backend" } },
  { icon: Database, label: { en: "Databases + APIs", es: "Bases de datos + APIs" } },
  { icon: Workflow, label: { en: "AI + automation", es: "IA + automatizacion" } },
  { icon: ShieldCheck, label: { en: "QA + security", es: "QA + seguridad" } }
];

export function AboutSection({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  return (
    <section id="about" className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading title={String(t.aboutTitle)} subtitle={String(t.aboutSubtitle)} />
          <GlassCard className="mt-8 overflow-hidden p-0">
            <MediaImage
              src="/images/profile/johan-profile-placeholder.svg"
              fallbackSrc="/images/profile/johan-profile-placeholder.svg"
              alt={String(t.profileImageAlt)}
              className="aspect-[4/5] rounded-t-2xl"
            />
            <div className="border-t border-white/10 p-5">
              <p className="text-sm leading-7 text-white/60">{String(t.profileImageNote)}</p>
            </div>
          </GlassCard>
        </div>
        <div className="grid gap-5">
          <motion.p className="text-xl leading-9 text-white/74" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {String(t.aboutText)}
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2">
            {focus.map(({ icon: Icon, label }) => (
              <GlassCard key={label.en} className="flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan"><Icon size={20} /></span>
                <span className="font-semibold text-white/86">{label[locale]}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
