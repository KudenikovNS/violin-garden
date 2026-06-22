"use client";

import Link from "next/link";
import Image from "next/image";
import { availableViolins, localizeViolin } from "@/data/violins";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import Flower from "@/components/violin/Flower";
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
        {availableViolins.map((raw) => {
          const v = localizeViolin(raw, lang);
          return (
            <article key={v.id} className={styles.row}>
              <Link href={`/violinski-vrt/${v.id}?from=prodaja`} className={styles.visual}>
                {v.illustration ? (
                  <Image
                    src={v.illustration}
                    alt={t.a11y.floralIllustration(v.name)}
                    width={280}
                    height={350}
                    className={styles.illustration}
                  />
                ) : (
                  <Flower variant={v.flowerVariant} size={150} />
                )}
              </Link>

              <div className={styles.info}>
                <h2 className={styles.name}>
                  <Link href={`/violinski-vrt/${v.id}?from=prodaja`}>{v.name}</Link>
                </h2>
                <p className={styles.meta}>
                  {v.maker ?? v.origin} · {v.year}
                  {v.price ? ` · ${v.price}` : ""}
                </p>
                <p className={styles.description}>{v.description}</p>

                <Link href={`/violinski-vrt/${v.id}?from=prodaja`} className={styles.link}>
                  {t.forSalePage.fullPresentation} <span>→</span>
                </Link>

                <div className={styles.inquiry}>
                  <InquiryOptions options={v.options} violinName={v.name} compact />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <div className={styles.backRow}>
        <Link href="/violinski-vrt" className={styles.backLink}>
          {t.forSalePage.backToCollection}
        </Link>
      </div>
    </main>
  );
}
