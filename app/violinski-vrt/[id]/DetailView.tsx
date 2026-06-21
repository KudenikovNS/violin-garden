"use client";

import Image from "next/image";
import { localizeViolin, type Violin } from "@/data/violins";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import SubPageHeader from "@/components/violin/SubPageHeader";
import InquiryOptions from "@/components/violin/InquiryOptions";
import Gallery from "@/components/violin/Gallery";
import styles from "./page.module.css";

export default function DetailView({ violin }: { violin: Violin }) {
  const t = useT();
  const { lang } = useLang();
  const v = localizeViolin(violin, lang);

  const paragraphs = v.descriptionParas ?? [v.description];
  const photos = v.photos ?? [];
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
                  alt={v.name}
                  fill
                  className={styles.heroPhoto}
                  sizes="(max-width: 768px) 80vw, 380px"
                  priority
                />
              </div>
            </div>
          )}

          <div className={styles.heroText}>
            <h1 className={styles.name}>{v.name}</h1>
            <p className={styles.maker}>
              {v.maker ?? `${v.origin} · ${v.year}`}
            </p>

            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerDot}>✦</span>
              <span className={styles.dividerLine} />
            </div>

            {v.lead && <p className={styles.lead}>{v.lead}</p>}
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.para}>
                {p}
              </p>
            ))}

            <div className={styles.statusBlock}>
              <span className={styles.statusEyebrow}>{t.detail.statusEyebrow}</span>
              <div className={styles.statusRow}>
                <span className={styles.statusMark}>{v.forSale ? "✦" : "❀"}</span>
                <div>
                  <p className={styles.statusName}>
                    {v.forSale ? t.detail.statusForSale : t.detail.statusInCollection}
                  </p>
                  <p className={styles.statusText}>
                    {v.forSale
                      ? v.statusNote ?? t.detail.statusForSaleDefault
                      : t.detail.statusInCollectionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tehnični podatki + galerija ────────────── */}
        {(v.specs || photos.length > 0) && (
          <section className={styles.details}>
            {v.specs && (
              <div className={styles.panel}>
                <h2 className={styles.panelTitle}>{t.detail.technicalDetails}</h2>
                <dl className={styles.specs}>
                  {v.specs.map((s) => (
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
                <h2 className={styles.panelTitle}>{t.detail.gallery}</h2>
                <Gallery photos={photos} alt={v.name} />
              </div>
            )}
          </section>
        )}

        {/* ── Nova glasbena pot ──────────────────────── */}
        {v.forSale && (
          <section className={styles.cta}>
            <span className={styles.ctaEyebrow}>{t.detail.ctaEyebrow}</span>
            <h2 className={styles.ctaTitle}>{t.detail.ctaTitle}</h2>
            <p className={styles.ctaText}>{t.detail.inquiryInvitation}</p>
            <InquiryOptions options={v.options} violinName={v.name} />
          </section>
        )}
      </article>
    </main>
  );
}
