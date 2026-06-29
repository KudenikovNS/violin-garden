"use client";

import LocaleLink from "@/components/LocaleLink";
import { availableViolins, localizeViolin } from "@/data/violins";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import ViolinSlideshow from "@/components/violin/ViolinSlideshow";
import SubPageHeader from "@/components/violin/SubPageHeader";
import InquiryOptions from "@/components/violin/InquiryOptions";
import styles from "./page.module.css";

export default function ForSaleView() {
  const t = useT();
  const { lang } = useLang();

  return (
    <main className={styles.page}>
      <SubPageHeader
        eyebrow={t.forSalePage.eyebrow}
        title={t.forSalePage.title}
        subtitle={t.forSalePage.subtitle}
      />

      <section className={styles.list}>
        {availableViolins.map((raw, cardIndex) => {
          const v = localizeViolin(raw, lang);
          return (
            <article key={v.id} className={styles.row}>
              <LocaleLink
                href={`/violinski-vrt/${v.id}?from=prodaja`}
                className={styles.visual}
              >
                <ViolinSlideshow
                  illustration={v.illustration}
                  photos={v.photos}
                  flowerVariant={v.flowerVariant}
                  name={v.name}
                  sizes="(max-width: 768px) 280px, 240px"
                  single={{ width: 280, height: 350 }}
                  priority={cardIndex === 0}
                  rounded
                />
              </LocaleLink>

              <div className={styles.info}>
                <h2 className={styles.name}>
                  <LocaleLink href={`/violinski-vrt/${v.id}?from=prodaja`}>
                    {v.name}
                  </LocaleLink>
                </h2>
                <p className={styles.meta}>
                  {v.maker ?? v.origin}
                  {v.year ? ` · ${v.year}` : ""}
                </p>
                <p className={styles.description}>{v.description}</p>

                <LocaleLink
                  href={`/violinski-vrt/${v.id}?from=prodaja`}
                  className={styles.link}
                >
                  {t.forSalePage.fullPresentation} <span>→</span>
                </LocaleLink>

                <div className={styles.inquiry}>
                  <InquiryOptions
                    options={v.options}
                    violinName={v.name}
                    compact
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <div className={styles.backRow}>
        <LocaleLink href="/violinski-vrt" className={styles.backLink}>
          {t.forSalePage.backToCollection}
        </LocaleLink>
      </div>
    </main>
  );
}
