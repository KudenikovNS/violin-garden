"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import LocaleLink from "../LocaleLink";
import { useT } from "@/lib/i18n/useT";
import { useDialog } from "@/lib/useDialog";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";

const MENU_ID = "home-menu";

// Glava domače strani (logotip + naslov + navigacija). Izvlečena iz Hero, da
// stran dobi semantični <header> (za SEO/dostopnost). Vizualno enaka kot prej.
export default function Header() {
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Only active on mobile (the burger is hidden on desktop, so menuOpen stays
  // false): scroll-lock, focus-trap, Escape, and focus return to the burger.
  useDialog(menuOpen, navRef, () => setMenuOpen(false));

  return (
    <header className={styles.content}>
      <Image
        src="/images/logo.webp"
        alt="Violin Garden logo"
        width={240}
        height={190}
        className={styles.logo}
        priority
      />
      <div className={styles.text}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowText}>{t.hero.eyebrow}</span>
        </div>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
      </div>
      <nav
        ref={navRef}
        id={MENU_ID}
        aria-label={t.a11y.menu}
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
      >
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label={t.a11y.closeMenu}>✕</button>
        <Image src="/images/logo.webp" alt="Violin Garden logo" width={120} height={95} className={styles.menuLogo} />
        <div className={styles.menuDivider}>
          <span className={styles.menuDividerLine} /><span className={styles.menuDividerDot}>✦</span><span className={styles.menuDividerLine} />
        </div>
        <LocaleLink href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t.nav.home}</LocaleLink>
        <LocaleLink href="/violinski-vrt" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t.nav.collection}</LocaleLink>
        <LocaleLink href="/violine-za-nove-zgodbe" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t.nav.forSale}</LocaleLink>
        {/* TODO: PROJEKTI — placeholder until the projects page/content is ready. */}
        <a
          href="#"
          className={styles.navLink}
          aria-disabled="true"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
          }}
        >
          {t.nav.projects}
        </a>
        <LanguageSwitcher className={styles.langSwitcher} />
      </nav>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={t.a11y.menu}
        aria-controls={MENU_ID}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
