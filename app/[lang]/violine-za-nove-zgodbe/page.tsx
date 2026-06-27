import type { Metadata } from "next";
import { isLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/site";
import ForSaleView from "./ForSaleView";

const PATH = "/violine-za-nove-zgodbe";

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
    title: t.meta.forSale.title,
    description: t.meta.forSale.description,
    alternates,
    openGraph: {
      title: t.meta.forSale.title,
      description: t.meta.forSale.description,
      url: alternates.canonical,
    },
  };
}

export default function ZaNoveZgodbePage() {
  return <ForSaleView />;
}
