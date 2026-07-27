"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import type { Locale } from "@/types";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TechOrbit } from "@/components/ui/TechOrbit";

const ThreeHeroObject = dynamic(() => import("@/components/ui/ThreeHeroObject").then((mod) => mod.ThreeHeroObject), {
  ssr: false,
  loading: () => <div className="h-[340px] w-full animate-pulse rounded-full bg-cyan/10 blur-2xl sm:h-[470px] lg:h-[580px]" />
});

const proofKeys = [
  ["heroMetricOne", "heroMetricOneLabel"],
  ["heroMetricTwo", "heroMetricTwoLabel"],
  ["heroMetricThree", "heroMetricThreeLabel"]
] as const;

export function HeroSection({ t }: { locale: Locale; t: Record<string, string | string[]> }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative z-10 flex min-h-[92svh] items-center px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.86fr)] xl:gap-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="max-w-2xl text-lg font-medium leading-8 text-white/72">
            Johan Gabriel Vasquez <span className="text-cyan">/</span> {String(t.heroSignal)}
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.98] tracking-normal text-gradient sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
            {String(t.heroTitle)}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{String(t.heroSubtitle)}</p>
          <div className="mt-9 flex flex-wrap gap-3" aria-label="Primary actions">
            <MagneticButton href="#projects">{String(t.viewProjects)}</MagneticButton>
            <MagneticButton href="#contact" variant="secondary"><Mail size={17} /> {String(t.contactMe)}</MagneticButton>
            <MagneticButton href="/Johan-Gabriel-Vasquez-CV.pdf" variant="ghost"><Download size={17} /> {String(t.downloadCv)}</MagneticButton>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
            {proofKeys.map(([valueKey, labelKey]) => (
              <div key={valueKey}>
                <dt className="font-display text-2xl font-semibold text-white">{String(t[valueKey])}</dt>
                <dd className="mt-1 text-sm leading-5 text-white/52">{String(t[labelKey])}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div className="relative" initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="hero-shell aurora-border glass relative overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink/45 px-5 py-4 backdrop-blur">
              <p className="text-sm font-semibold text-white/80">{String(t.heroProof)}</p>
              <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
            </div>
            <ThreeHeroObject />
            <TechOrbit />
            <div className="absolute inset-x-4 bottom-4 z-30 grid gap-2 rounded-2xl border border-white/10 bg-ink/72 p-3 backdrop-blur sm:grid-cols-3">
              {["UI system", "API layer", "Release path"].map((item) => (
                <div key={item} className="rounded-xl bg-white/[0.045] px-3 py-2">
                  <p className="text-[11px] font-semibold uppercase text-white/42">{item}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan to-violet" style={{ width: item === "UI system" ? "92%" : item === "API layer" ? "84%" : "76%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-white/60 transition hover:text-cyan md:block">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
