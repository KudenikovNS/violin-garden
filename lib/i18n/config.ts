// Supported interface languages. Slovenian is the original content language and
// stays the default (it is what the statically-exported HTML contains).
export type Lang = "sl" | "en";

export const LANGS: readonly Lang[] = ["en", "sl"] as const;
export const DEFAULT_LANG: Lang = "en";

export const LANG_LABELS: Record<Lang, string> = {
  sl: "SL",
  en: "EN",
};

export function isLang(value: string | null): value is Lang {
  return value === "sl" || value === "en";
}
