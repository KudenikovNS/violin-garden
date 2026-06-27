// Supported interface languages. Slovenian is the original content language and
// the default: the site targets the Slovenian market, the root "/" redirects to
// "/sl", and hreflang x-default points to Slovenian. German and English are
// additional markets, each served from its own "/de" / "/en" route.
export type Lang = "sl" | "en" | "de";

export const LANGS: readonly Lang[] = ["sl", "en", "de"] as const;
export const DEFAULT_LANG: Lang = "sl";

export const LANG_LABELS: Record<Lang, string> = {
  sl: "SL",
  en: "EN",
  de: "DE",
};

export function isLang(value: string | null): value is Lang {
  return value === "sl" || value === "en" || value === "de";
}
