import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{subtitle}</p> : null}
    </Reveal>
  );
}
