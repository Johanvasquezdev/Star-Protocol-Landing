"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="grid-bg absolute inset-0 opacity-45"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "58px 58px"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan/10 via-electric/5 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan/30 to-transparent opacity-60" />
      <div className="absolute inset-y-0 right-[12%] hidden w-px bg-gradient-to-b from-transparent via-violet/25 to-transparent opacity-50 lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
    </div>
  );
}
