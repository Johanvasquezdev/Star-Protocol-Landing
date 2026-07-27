"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Braces, Cloud, Database, GitBranch, ServerCog } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaImage } from "@/components/ui/MediaImage";

type Tech = {
  name: string;
  short: string;
  position: string;
  icon: ReactNode;
  imageSrc?: string;
  tone: "cyan" | "violet" | "magenta" | "white";
};

const toneClasses = {
  cyan: "border-cyan/35 bg-cyan/12 text-cyan shadow-glow",
  violet: "border-violet/35 bg-violet/15 text-violet-100 shadow-violet",
  magenta: "border-magenta/35 bg-magenta/12 text-fuchsia-100",
  white: "border-white/18 bg-white/[0.075] text-white"
};

function ReactMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="h-5 w-5">
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="16" cy="16" rx="12" ry="4.6" />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(120 16 16)" />
      </g>
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

function TypeScriptMark() {
  return <span className="font-display text-[13px] font-bold leading-none">TS</span>;
}

function NextMark() {
  return <span className="font-display text-[13px] font-bold leading-none">N</span>;
}

const techs: Tech[] = [
  { name: "TypeScript", short: "TypeScript", position: "left-[7%] top-[26%]", icon: <TypeScriptMark />, imageSrc: "/images/tools/typescript.svg", tone: "cyan" },
  { name: "React", short: "React", position: "right-[12%] top-[22%]", icon: <ReactMark />, imageSrc: "/images/tools/react.svg", tone: "cyan" },
  { name: "Next.js", short: "Next.js", position: "left-[18%] bottom-[24%]", icon: <NextMark />, imageSrc: "/images/tools/nextjs.svg", tone: "white" },
  { name: "PostgreSQL", short: "Postgres", position: "right-[9%] bottom-[27%]", icon: <Database size={18} />, imageSrc: "/images/tools/postgresql.svg", tone: "violet" },
  { name: "Node.js", short: "Node", position: "left-[42%] top-[11%]", icon: <ServerCog size={18} />, imageSrc: "/images/tools/nodejs.svg", tone: "magenta" },
  { name: "APIs", short: "APIs", position: "right-[38%] bottom-[10%]", icon: <Braces size={18} />, imageSrc: "/images/tools/api.svg", tone: "cyan" },
  { name: "GitHub Actions", short: "CI/CD", position: "left-[6%] bottom-[45%]", icon: <GitBranch size={18} />, imageSrc: "/images/tools/github-actions.svg", tone: "white" },
  { name: "Cloud deployment", short: "Cloud", position: "right-[4%] top-[48%]", icon: <Cloud size={18} />, imageSrc: "/images/tools/cloud.svg", tone: "violet" }
];

export function TechOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-label="Core technologies orbiting the product system" className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/12"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[58%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/14"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
      />
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          aria-label={tech.name}
          className={cn(
            "absolute flex min-h-10 items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold backdrop-blur-md",
            "shadow-[0_14px_40px_rgba(0,0,0,0.28)]",
            tech.position,
            toneClasses[tech.tone]
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.94 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, index % 2 === 0 ? -7 : 7, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.45, delay: 0.35 + index * 0.05 },
            scale: { duration: 0.45, delay: 0.35 + index * 0.05 },
            y: { duration: 4.8 + index * 0.25, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-ink/60">
            {tech.imageSrc ? (
              <MediaImage
                src={tech.imageSrc}
                fallbackSrc="/images/placeholders/media-placeholder.svg"
                alt={`${tech.name} logo`}
                className="h-full w-full rounded-full"
              />
            ) : (
              tech.icon
            )}
          </span>
          <span>{tech.short}</span>
        </motion.div>
      ))}
    </div>
  );
}
