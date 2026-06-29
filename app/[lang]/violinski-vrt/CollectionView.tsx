"use client";

import LocaleLink from "@/components/LocaleLink";
import { violins, localizeViolin } from "@/data/violins";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import ViolinSlideshow from "@/components/violin/ViolinSlideshow";
import SubPageHeader from "@/components/violin/SubPageHeader";
import styles from "./page.module.css";

export default function CollectionView() {
  const t = useT();
  const { lang } = useLang();

  return (
    <main className={styles.page}>
      <SubPageHeader
        eyebrow={t.collectionPage.eyebrow}
        title={t.collectionPage.title}
        subtitle={t.collectionPage.subtitle}
      />

      <section className={styles.grid}>
        {violins.map((raw, cardIndex) => {
          const v = localizeViolin(raw, lang);
          return (
            <LocaleLink
              key={v.id}
              href={`/violinski-vrt/${v.id}`}
              className={styles.card}
            >
              <div className={styles.flowerWrap}>
                <ViolinSlideshow
                  illustration={v.illustration}
                  photos={v.photos}
                  flowerVariant={v.flowerVariant}
                  name={v.name}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 360px"
                  single={{ width: 360, height: 450 }}
                  priority={cardIndex === 0}
                />
                {v.status !== "collection" && (
                  <span className={styles.badge}>
                    {t.collectionPage.badge[v.status]}
                  </span>
                )}
              </div>
              <div className={styles.body}>
                <h2 className={styles.name}>{v.name}</h2>
                <p className={styles.meta}>
                  {v.origin} · {v.year}
                </p>
                <p className={styles.intro}>{v.intro}</p>
                <span className={styles.link}>
                  {t.collectionPage.fullPresentation} <span>→</span>
                </span>
              </div>
            </LocaleLink>
          );
        })}
      </section>
    </main>
  );
}
