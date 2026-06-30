import type { MetadataRoute } from "next";
import { violins } from "@/data/violins";
import { LANGS, DEFAULT_LANG } from "@/lib/i18n/config";
import { localeUrl } from "@/lib/site";

// Required for `output: export` — emit a static file at build time.
export const dynamic = "force-static";

// Static export emits this as out/sitemap.xml. Every locale-less path is listed
// once (under the default locale) with a hreflang map to its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/violinski-vrt",
    "/violine-za-nove-zgodbe",
    ...violins.map((v) => `/violinski-vrt/${v.id}`),
    "/zasebnost",
    "/impressum",
  ];

  return paths.map((path) => ({
    url: localeUrl(DEFAULT_LANG, path),
    alternates: {
      languages: Object.fromEntries(
        LANGS.map((lang) => [lang, localeUrl(lang, path)]),
      ),
    },
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
