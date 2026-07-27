import type { Dispatch, SetStateAction } from "react";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

export function LanguageToggle({ locale, setLocale }: Props) {
  return (
    <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1" role="group" aria-label="Language toggle">
      {(["en", "es"] as const).map((item) => (
        <button
          key={item}
          type="button"
          aria-label={`Switch language to ${item === "en" ? "English" : "Spanish"}`}
          aria-pressed={locale === item}
          onClick={() => setLocale(item)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-normal transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan",
            locale === item ? "bg-cyan text-ink" : "text-white/64 hover:text-white"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
