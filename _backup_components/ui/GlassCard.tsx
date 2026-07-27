import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/25 hover:shadow-glow motion-reduce:transform-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
