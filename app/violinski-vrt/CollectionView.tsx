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
          return (
            <Link key={v.id} href={`/violinski-vrt/${v.id}`} className={styles.card}>
              <div className={styles.flowerWrap}>
                {v.illustration ? (
                  <Image
                    src={v.illustration}
                    alt={t.a11y.floralIllustration(v.name)}
                    width={360}
                    height={450}
                    className={styles.illustration}
                  />
                ) : (
                  <Flower variant={v.flowerVariant} size={150} />
                )}
                {v.forSale && <span className={styles.badge}>{t.collectionPage.badgeForSale}</span>}
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
