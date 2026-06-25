"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/useT";
import styles from "./ZbirkaSection.module.css";

export default function ZbirkaSection() {
  const t = useT();
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/zbirka_new.webp"
          alt={t.zbirka.imageAlt}
          fill
          className={styles.image}
          sizes="580px"
        />
      </div>

      <div className={styles.text}>
        <h2 className={styles.heading}>{t.zbirka.heading}</h2>
        <span className={styles.underline} />
        <p className={styles.paragraph}>{t.zbirka.p1}</p>
        <p className={styles.paragraph}>{t.zbirka.p2}</p>
        <p className={styles.paragraph}>{t.zbirka.p3}</p>
        <p className={styles.quote}>
          {t.zbirka.quoteLine1}<br />
          {t.zbirka.quoteLine2}
        </p>
        <a href="#" className={styles.link}>
          {t.zbirka.link} <span>→</span>
        </a>
      </div>
    </section>
  );
}
