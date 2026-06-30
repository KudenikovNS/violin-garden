import type { Metadata } from "next";
import { isLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor, breadcrumbLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import CollectionView from "./CollectionView";

const PATH = "/violinski-vrt";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);
  const alternates = alternatesFor(lang, PATH);
  return {
    title: t.meta.collection.title,
    description: t.meta.collection.description,
    alternates,
    openGraph: {
      title: t.meta.collection.title,
      description: t.meta.collection.description,
      url: alternates.canonical,
    },
  };
}

export default async function ViolinskiVrtPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = isLang(lang) ? getDictionary(lang) : null;
  return (
    <>
      {t && (
        <JsonLd
          data={breadcrumbLd(lang, [
            { name: t.nav.home, path: "" },
            { name: t.nav.collection, path: PATH },
          ])}
        />
      )}
      <CollectionView />
    </>
  );
}
