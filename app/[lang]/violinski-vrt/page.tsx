import type { Metadata } from "next";
import { isLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/site";
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

export default function ViolinskiVrtPage() {
  return <CollectionView />;
}
