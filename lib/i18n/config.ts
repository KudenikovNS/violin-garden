// Supported interface languages. Slovenian is the original content language;
// English is the current default (it is what the statically-exported HTML
// contains). German was added for the German-speaking market.
export type Lang = "sl" | "en" | "de";

export const LANGS: readonly Lang[] = ["en", "sl", "de"] as const;
export const DEFAULT_LANG: Lang = "en";

export const LANG_LABELS: Record<Lang, string> = {
  sl: "SL",
  en: "EN",
  de: "DE",
};

export function isLang(value: string | null): value is Lang {
  return value === "sl" || value === "en" || value === "de";
}
