"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/useT";
import styles from "./ZbirkaSection.module.css";

export default function ZbirkaSection() {
  const t = useT();
  return (
    <section className={styles.section}>
      <svg
        width="160"
        height="190"
        viewBox="0 0 150 180"
        className={styles.decorViolin}
        fill="none"
        stroke="#c2a063"
        strokeWidth="1"
      >
        <path d="M75 20c-12 0-20 8-20 18s8 16 20 16 20-6 20-16-8-18-20-18z" />
        <path d="M75 30c-6 4-8 10-4 16M75 30c6 4 8 10 4 16M75 54v100M75 90c-14-4-26 4-30 16M75 120c14-4 26 4 30 16M60 70c-10 0-16 6-16 14M90 100c10 0 16 6 16 14" />
      </svg>

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
