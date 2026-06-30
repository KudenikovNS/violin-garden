import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { violins, getViolin } from "@/data/violins";
import { isLang, DEFAULT_LANG } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL, alternatesFor, breadcrumbLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import DetailView from "./DetailView";

// One detail page per violin; composed with each locale from the [lang] layout.
export function generateStaticParams() {
  return violins.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const violin = getViolin(id);
  if (!violin || !isLang(lang)) {
    return { title: "404" };
  }
  const t = getDictionary(lang);
  const title = `${violin.name} — ${t.meta.siteName}`;
  const description = violin.intro[lang];
  const alternates = alternatesFor(lang, `/violinski-vrt/${id}`);
  const photo = violin.photos?.[0];
  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      title,
      description,
      url: alternates.canonical,
      images: photo
        ? [{ url: photo, alt: violin.name }]
        : [{ url: "/icon.png", width: 512, height: 512, alt: t.meta.siteName }],
    },
  };
}

export default async function ViolinDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const violin = getViolin(id);
  if (!violin) notFound();

  const l = isLang(lang) ? lang : DEFAULT_LANG;
  const images = (violin.photos ?? []).map((p) => `${SITE_URL}${p}`);
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: violin.name,
    category: "Violin",
    description: violin.intro[l],
    url: alternatesFor(l, `/violinski-vrt/${id}`).canonical,
    ...(images.length ? { image: images } : {}),
    brand: {
      "@type": "Brand",
      name: (violin.maker ?? violin.origin)[l],
    },
  };

  const t = getDictionary(l);
  const breadcrumb = breadcrumbLd(l, [
    { name: t.nav.home, path: "" },
    { name: t.nav.collection, path: "/violinski-vrt" },
    { name: violin.name, path: `/violinski-vrt/${id}` },
  ]);

  return (
    <>
      <JsonLd data={productLd} />
      <JsonLd data={breadcrumb} />
      <DetailView violin={violin} />
    </>
  );
}
