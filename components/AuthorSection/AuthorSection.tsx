"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/useT";
import styles from "./AuthorSection.module.css";

export default function AuthorSection() {
  const t = useT();
  return (
    <section className={styles.section}>
      <svg
        width="240"
        height="160"
        viewBox="0 0 220 150"
        className={styles.decorBuilding}
        fill="none"
        stroke="#c2a063"
        strokeWidth="1"
      >
        <path d="M30 130h160M50 130V70l60-40 60 40v60M70 130V90h30v40M120 130V90h40v40M40 70h140" />
        <path d="M110 30V12M104 18h12" />
      </svg>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/avtorica2.webp"
          alt={t.author.imageAlt}
          fill
          className={styles.image}
          sizes="360px"
        />
      </div>

      <div className={styles.text}>
        <h2 className={styles.heading}>{t.author.heading}</h2>
        <p className={styles.paragraph}>
          <strong className={styles.name}>{t.author.name}</strong>{t.author.p1After}
        </p>
        <p className={styles.paragraph}>{t.author.p2}</p>
        <a href="#" className={styles.btn}>
          {t.author.link} <span>→</span>
        </a>
      </div>
    </section>
  );
}
