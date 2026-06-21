"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SubPageHeader.module.css";

const MENU_LINKS = [
  { href: "/violinski-vrt", label: "VIOLINSKI VRT" },
  { href: "/violine-za-nove-zgodbe", label: "VIOLINE ZA NOVE ZGODBE" },
];

const HOME_BACK = { href: "/", label: "Nazaj" };
const VRT_BACK = { href: "/violinski-vrt", label: "Nazaj" };
const PRODAJA_BACK = { href: "/violine-za-nove-zgodbe", label: "Nazaj" };

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
  const [menuOpen, setMenuOpen] = useState(false);
  // Na strani posamezne violine je gumb nazaj odvisen od izvora obiska
  // (Violinski vrt ali Violine za nove zgodbe) — preberemo iz ?from=.
  const [back, setBack] = useState(detailBack ? VRT_BACK : HOME_BACK);

  useEffect(() => {
    if (!detailBack) return;
    const from = new URLSearchParams(window.location.search).get("from");
    setBack(from === "prodaja" ? PRODAJA_BACK : VRT_BACK);
  }, [detailBack]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href={back.href} className={styles.back} aria-label={back.label}>
          <span className={styles.backArrow}>←</span> {back.label}
        </Link>

        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo_new.png"
            alt="Violin Garden"
            width={120}
            height={95}
            className={styles.logo}
          />
        </Link>

        <div className={styles.barRight}>
          <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Zapri meni"
            >
              ✕
            </button>
            <Image
              src="/images/logo_new.png"
              alt="Violin Garden"
              width={140}
              height={110}
              className={styles.menuLogo}
            />
            <div className={styles.menuDivider}>
              <span className={styles.menuDividerLine} />
              <span className={styles.menuDividerDot}>✦</span>
              <span className={styles.menuDividerLine} />
            </div>
            {MENU_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.menuLink}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Meni"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
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
