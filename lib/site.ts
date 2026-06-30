import { LANGS, DEFAULT_LANG } from "@/lib/i18n/config";

// Canonical production origin. Overridable via env so the domain is not hardcoded
// across sitemap / metadata; the literal is only a build-time fallback.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://violingardencollection.com"
).replace(/\/$/, "");

/**
 * Absolute URL for a route, given the locale and a locale-less path
 * (leading slash, or "" / "/" for the home page). Trailing-slashed to match the
 * static export (`trailingSlash: true` → every route is served at <path>/).
 */
export function localeUrl(lang: string, path = ""): string {
  const clean = path === "/" ? "" : path;
  return `${SITE_URL}/${lang}${clean}/`;
}

/**
 * `alternates` block for Next metadata: the canonical URL for the current locale
 * plus a hreflang map of every locale (and x-default → the default language).
 */
export function alternatesFor(lang: string, path = "") {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = localeUrl(l, path);
  languages["x-default"] = localeUrl(DEFAULT_LANG, path);
  return { canonical: localeUrl(lang, path), languages };
}

// Canonical social profiles (clean URLs, no tracking params) — used for the
// `sameAs` entity signal in the home-page Person JSON-LD.
export const SOCIAL_PROFILES = [
  "https://www.instagram.com/ingaulokina",
  "https://www.facebook.com/profile.php?id=61590796929561",
  "https://www.youtube.com/@ingaulokina",
];

/** BreadcrumbList JSON-LD from a Home → … trail of (name, locale-less path). */
export function breadcrumbLd(
  lang: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: localeUrl(lang, it.path),
    })),
  };
}
