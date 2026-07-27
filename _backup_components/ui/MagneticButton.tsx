"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({ className, variant = "primary", children, ...props }: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });
  const glowX = useTransform(springX, [-18, 18], ["35%", "65%"]);
  const glowY = useTransform(springY, [-18, 18], ["35%", "65%"]);

  return (
    <motion.a
      className={cn(
        "group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan",
        variant === "primary" && "bg-white text-ink shadow-glow",
        variant === "secondary" && "border border-cyan/30 bg-cyan/10 text-white hover:bg-cyan/15",
        variant === "ghost" && "border border-white/10 bg-white/5 text-white/86 hover:bg-white/10",
        className
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(37,214,255,.34), transparent 42%)`
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
