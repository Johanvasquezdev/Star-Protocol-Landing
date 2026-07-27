"use client";

import { motion } from "framer-motion";
import { Boxes, Database, GitBranch, Lock, Network, ShieldCheck, TestTube2, Workflow } from "lucide-react";
import { architectureCards } from "@/data/translations";
import type { Locale } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Boxes, Workflow, Network, GitBranch, ShieldCheck, Database, TestTube2, Lock];

export function ArchitectureSection({ locale, t }: { locale: Locale; t: Record<string, string | string[]> }) {
  const principleText =
    locale === "en"
      ? "Maintainable, scalable, testable software decisions."
      : "Decisiones mantenibles, escalables y testeables.";

  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading title={String(t.architectureTitle)} subtitle={String(t.architectureText)} />
        <div className="grid gap-4 sm:grid-cols-2">
          {architectureCards.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={card.en} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <GlassCard className="flex min-h-32 items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/12 text-violet-100"><Icon size={20} /></span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{card[locale]}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{principleText}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
