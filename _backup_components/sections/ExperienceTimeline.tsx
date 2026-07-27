"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/experience";
import type { Locale } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceTimeline({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  return (
    <section id="experience" className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={String(t.experienceTitle)} subtitle={String(t.experienceSubtitle)} />
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan via-violet to-transparent md:left-1/2" />
          <div className="grid gap-7">
            {experienceItems.map((item, index) => (
              <motion.article
                key={item.title.en}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${index % 2 ? "md:text-left" : "md:text-right"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan bg-ink shadow-glow md:left-1/2" />
                <div className={index % 2 ? "md:col-start-2" : ""}>
                  <div className="glass ml-10 rounded-2xl p-5 md:ml-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title[locale]}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.description[locale]}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
