"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import type { Locale } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";

export function SkillsSection({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  return (
    <section id="skills" className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={String(t.skillsTitle)} subtitle={String(t.skillsSubtitle)} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title.en} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }}>
              <SkillCard category={category} locale={locale} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
