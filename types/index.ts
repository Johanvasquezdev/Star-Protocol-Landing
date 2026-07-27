export type Locale = "en" | "es";

export type Localized = Record<Locale, string>;

export type MediaAsset = {
  src: string;
  alt: Localized;
};

export type SkillCategory = {
  title: Localized;
  description: Localized;
  focus: string;
  items: string[];
};

export type Project = {
  name: string;
  type: Localized;
  status?: Localized;
  description: Localized;
  impact?: Localized;
  role?: Localized;
  tags: string[];
  stack?: string[];
  image?: MediaAsset;
  accent?: "cyan" | "violet" | "magenta";
  github?: string;
  demo?: string;
};

export type TimelineItem = {
  title: Localized;
  description: Localized;
};
