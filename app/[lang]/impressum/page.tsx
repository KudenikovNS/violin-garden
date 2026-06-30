import type { Metadata } from "next";
import { isLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor, breadcrumbLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/legal/LegalPage";
import { impressum } from "@/lib/legal/content";

const PATH = "/impressum";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const doc = impressum[lang];
  const alternates = alternatesFor(lang, PATH);
  return {
    title: doc.title,
    description: doc.description,
    alternates,
    openGraph: {
      title: doc.title,
      description: doc.description,
      url: alternates.canonical,
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return null;
  const t = getDictionary(lang);
  return (
    <>
      <JsonLd
        data={breadcrumbLd(lang, [
          { name: t.nav.home, path: "" },
          { name: impressum[lang].title, path: PATH },
        ])}
      />
      <LegalPage doc={impressum[lang]} />
    </>
  );
}
