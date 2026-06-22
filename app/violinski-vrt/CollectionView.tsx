"use client";

import Link from "next/link";
import Image from "next/image";
import { violins, localizeViolin } from "@/data/violins";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import Flower from "@/components/violin/Flower";
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
        {violins.map((raw) => {
          const v = localizeViolin(raw, lang);
          // Cvet → sprednja stran → hrbet: do tri sličice za brezkončni preliv.
          const slides = [v.illustration, ...(v.photos ?? [])].filter(Boolean) as string[];
          return (
            <Link key={v.id} href={`/violinski-vrt/${v.id}`} className={styles.card}>
              <div className={styles.flowerWrap}>
                {slides.length > 1 ? (
                  <div className={styles.slideshow}>
                    {slides.slice(0, 3).map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt={t.a11y.floralIllustration(v.name)}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className={styles.slide}
                        priority={i === 0}
                      />
                    ))}
                  </div>
                ) : slides.length === 1 ? (
                  <Image
                    src={slides[0]}
                    alt={t.a11y.floralIllustration(v.name)}
                    width={360}
                    height={450}
                    className={styles.illustration}
                  />
                ) : (
                  <Flower variant={v.flowerVariant} size={150} />
                )}
                {v.status !== "collection" && (
                  <span className={styles.badge}>{t.collectionPage.badge[v.status]}</span>
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
            </Link>
          );
        })}
      </section>
    </main>
  );
}
