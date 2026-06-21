import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { violins, getViolin } from "@/data/violins";
import { DEFAULT_LANG } from "@/lib/i18n/config";
import DetailView from "./DetailView";

export function generateStaticParams() {
  return violins.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const violin = getViolin(id);
  // Metadata is generated at build time, so it uses the default (Slovenian) language.
  if (!violin) return { title: "Violina ni najdena — Violinski vrt" };
  return {
    title: `${violin.name} — Violinski vrt`,
    description: violin.intro[DEFAULT_LANG],
  };
}

export default async function ViolinDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const violin = getViolin(id);
  if (!violin) notFound();

  return <DetailView violin={violin} />;
}
