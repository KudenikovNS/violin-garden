"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LocaleLink from "../LocaleLink";
import { useT } from "@/lib/i18n/useT";
import MobileMenu, { type NavLink } from "../MobileMenu/MobileMenu";
import styles from "./SubPageHeader.module.css";

const HOME_BACK = "/";
const VRT_BACK = "/violinski-vrt";
const PRODAJA_BACK = "/violine-za-nove-zgodbe";

export default function SubPageHeader({
  eyebrow,
  title,
  subtitle,
  detailBack = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  detailBack?: boolean;
}) {
  const t = useT();
  // Na strani posamezne violine je gumb nazaj odvisen od izvora obiska
  // (Violinski vrt ali Violine za nove zgodbe) — preberemo iz ?from=.
  const [backHref, setBackHref] = useState(detailBack ? VRT_BACK : HOME_BACK);

  const menuLinks: NavLink[] = [
    { href: "/violinski-vrt", label: t.nav.collection },
    { href: "/violine-za-nove-zgodbe", label: t.nav.forSale },
  ];

  useEffect(() => {
    if (!detailBack) return;
    const from = new URLSearchParams(window.location.search).get("from");
    setBackHref(from === "prodaja" ? PRODAJA_BACK : VRT_BACK);
  }, [detailBack]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <LocaleLink href={backHref} className={styles.back} aria-label={t.subHeader.back}>
          <span className={styles.backArrow}>←</span> {t.subHeader.back}
        </LocaleLink>

        <LocaleLink href="/" className={styles.logoLink}>
          <Image
            src="/images/logo.webp"
            alt="Violin Garden"
            width={120}
            height={95}
            className={styles.logo}
          />
        </LocaleLink>

        <div className={styles.barRight}>
          <MobileMenu links={menuLinks} id="subpage-menu" />
        </div>
      </div>

      {title && (
        <div className={styles.titleBlock}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDot}>✦</span>
            <span className={styles.dividerLine} />
          </div>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
    </header>
  );
}
