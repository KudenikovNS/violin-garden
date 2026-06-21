import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { violins, getViolin } from "@/data/violins";
import SubPageHeader from "@/components/violin/SubPageHeader";
import InquiryOptions from "@/components/violin/InquiryOptions";
import Gallery from "@/components/violin/Gallery";
import styles from "./page.module.css";

// Skupno povabilo k povpraševanju (enako za vse violine, ki so naprodaj).
const INQUIRY_INVITATION =
  "Za podrobnejši opis ali dogovor za osebni preizkus izpolnite kontaktni obrazec — z veseljem vam bomo inštrument predstavili in odgovorili na vsa vprašanja.";

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
  if (!violin) return { title: "Violina ni najdena — Violinski vrt" };
  return {
    title: `${violin.name} — Violinski vrt`,
    description: violin.intro,
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

  const paragraphs = violin.descriptionParas ?? [violin.description];
  const photos = violin.photos ?? [];
  const heroPhoto = photos[0];

  return (
    <main className={styles.page}>
      <SubPageHeader detailBack />

      <article className={styles.article}>
        {/* ── Predstavitev ───────────────────────────── */}
        <section className={styles.hero}>
          {heroPhoto && (
            <div className={styles.visuals}>
              <div className={styles.heroPhotoWrap}>
                <Image
                  src={heroPhoto}
                  alt={violin.name}
                  fill
                  className={styles.heroPhoto}
                  sizes="(max-width: 768px) 80vw, 380px"
                  priority
                />
              </div>
            </div>
          )}

          <div className={styles.heroText}>
            <h1 className={styles.name}>{violin.name}</h1>
            <p className={styles.maker}>
              {violin.maker ?? `${violin.origin} · ${violin.year}`}
            </p>

            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerDot}>✦</span>
              <span className={styles.dividerLine} />
            </div>

            {violin.lead && <p className={styles.lead}>{violin.lead}</p>}
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.para}>
                {p}
              </p>
            ))}

            <div className={styles.statusBlock}>
              <span className={styles.statusEyebrow}>STATUS INŠTRUMENTA</span>
              <div className={styles.statusRow}>
                <span className={styles.statusMark}>{violin.forSale ? "✦" : "❀"}</span>
                <div>
                  <p className={styles.statusName}>
                    {violin.forSale ? "Naprodaj" : "Del zbirke"}
                  </p>
                  <p className={styles.statusText}>
                    {violin.forSale
                      ? violin.statusNote ??
                        "Ta violina je pripravljena nadaljevati svojo zgodbo z novim glasbenikom."
                      : "Ta violina je stalni del zbirke Violinskega vrta in trenutno ni naprodaj."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tehnični podatki + galerija ────────────── */}
        {(violin.specs || photos.length > 0) && (
          <section className={styles.details}>
            {violin.specs && (
              <div className={styles.panel}>
                <h2 className={styles.panelTitle}>Tehnični podatki</h2>
                <dl className={styles.specs}>
                  {violin.specs.map((s) => (
                    <div key={s.label} className={styles.specRow}>
                      <dt className={styles.specLabel}>{s.label}</dt>
                      <dd className={styles.specValue}>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {photos.length > 0 && (
              <div className={styles.panel}>
                <h2 className={styles.panelTitle}>Galerija</h2>
                <Gallery photos={photos} alt={violin.name} />
              </div>
            )}
          </section>
        )}

        {/* ── Nova glasbena pot ──────────────────────── */}
        {violin.forSale && (
          <section className={styles.cta}>
            <span className={styles.ctaEyebrow}>NOVA GLASBENA POT</span>
            <h2 className={styles.ctaTitle}>Ta violina išče novega glasbenika</h2>
            <p className={styles.ctaText}>{INQUIRY_INVITATION}</p>
            <InquiryOptions options={violin.options} violinName={violin.name} />
          </section>
        )}
      </article>
    </main>
  );
}
