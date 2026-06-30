"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/useT";
import MobileMenu, { type NavLink } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

// Glava domače strani (logotip + naslov + navigacija). Izvlečena iz Hero, da
// stran dobi semantični <header> (za SEO/dostopnost).
export default function Header() {
  const t = useT();

  const links: NavLink[] = [
    { href: "/", label: t.nav.home },
    { href: "/violinski-vrt", label: t.nav.collection },
    { href: "/violine-za-nove-zgodbe", label: t.nav.forSale },
    // PROJEKTI — placeholder until the projects page/content is ready (TODO #4).
    { href: "#", label: t.nav.projects, placeholder: true },
  ];

  return (
    <header className={styles.content}>
      <Image
        src="/images/logo.webp"
        alt="Violin Garden logo"
        width={240}
        height={180}
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

      <MobileMenu
        links={links}
        id="home-menu"
        earlyGermanBurger
        burgerClassName={styles.burgerSlot}
      />
    </header>
  );
}
