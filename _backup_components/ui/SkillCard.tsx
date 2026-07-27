import { GlassCard } from "@/components/ui/GlassCard";
import type { Locale, SkillCategory } from "@/types";

export function SkillCard({ category, locale }: { category: SkillCategory; locale: Locale }) {
  return (
    <GlassCard className="h-full overflow-hidden p-0">
      <div className="flex min-h-full flex-col p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-display text-sm font-semibold text-cyan">{category.focus}</p>
            <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-white">{category.title[locale]}</h3>
          </div>
          <span className="h-10 w-px bg-gradient-to-b from-cyan/80 to-transparent" aria-hidden />
        </div>
        <p className="mt-4 text-sm leading-7 text-white/62">{category.description[locale]}</p>
        <div className="mt-6 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-white/70">
            {item}
          </span>
        ))}
        </div>
      </div>
    </GlassCard>
  );
}
