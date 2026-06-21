"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n/useT";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
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
  const [menuOpen, setMenuOpen] = useState(false);
  // Na strani posamezne violine je gumb nazaj odvisen od izvora obiska
  // (Violinski vrt ali Violine za nove zgodbe) — preberemo iz ?from=.
  const [backHref, setBackHref] = useState(detailBack ? VRT_BACK : HOME_BACK);

  const menuLinks = [
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
        <Link href={backHref} className={styles.back} aria-label={t.subHeader.back}>
          <span className={styles.backArrow}>←</span> {t.subHeader.back}
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
              aria-label={t.a11y.closeMenu}
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
            {menuLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.menuLink}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <LanguageSwitcher className={styles.langSwitcher} />
          </nav>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t.a11y.menu}
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
