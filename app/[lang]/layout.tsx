import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LANGS, isLang, type Lang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL, alternatesFor } from "@/lib/site";
import "../globals.css";

// One statically-exported HTML tree per locale: /sl, /en, /de.
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    // Home title; each sub-page overrides with its own full title.
    title: t.meta.home.title,
    description: t.meta.home.description,
    keywords: [
      "violin",
      "violine",
      "violinski vrt",
      "Inga Ulokina",
      "zbirka violin",
      "Geige",
      "violin collection",
    ],
    alternates: alternatesFor(lang),
    openGraph: {
      type: "website",
      siteName: t.meta.siteName,
      title: t.meta.home.title,
      description: t.meta.home.description,
      url: alternatesFor(lang).canonical,
      locale: lang,
      images: [{ url: "/icon.png", width: 512, height: 512, alt: t.meta.siteName }],
    },
    twitter: {
      card: "summary",
      title: t.meta.home.title,
      description: t.meta.home.description,
      images: ["/icon.png"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang}>
      <body>
        <LanguageProvider lang={lang as Lang}>
          <div className="appShell">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
