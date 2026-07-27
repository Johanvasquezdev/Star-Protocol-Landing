"use client";

import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import { translations } from "@/data/translations";
import type { Locale } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LabsSection } from "@/components/sections/LabsSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-radial-aura">
      <AnimatedBackground />
      <Navbar locale={locale} setLocale={setLocale} t={t} />
      <HeroSection locale={locale} t={t} />
      <AboutSection locale={locale} t={t} />
      <SkillsSection locale={locale} t={t} />
      <ProjectsSection locale={locale} t={t} />
      <LabsSection locale={locale} t={t} />
      <ExperienceTimeline locale={locale} t={t} />
      <ArchitectureSection locale={locale} t={t} />
      <StudioSection locale={locale} t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </main>
  );
}
