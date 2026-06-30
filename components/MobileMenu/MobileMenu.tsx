"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import LocaleLink from "../LocaleLink";
import { useT } from "@/lib/i18n/useT";
import { useDialog } from "@/lib/useDialog";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./MobileMenu.module.css";

export type NavLink = {
  href: string;
  label: string;
  /** Not yet a real page — rendered but inert (see TODO #4 placeholders). */
  placeholder?: boolean;
};

// Shared burger + responsive navigation, used by Header and SubPageHeader.
// Accessibility (scroll-lock, focus-trap, Escape, focus return) comes from useDialog.
export default function MobileMenu({
  links,
  id = "mobile-menu",
  earlyGermanBurger = false,
  burgerClassName = "",
}: {
  links: NavLink[];
  id?: string;
  /** Collapse to the burger at ≤960px for German (the wide home header). */
  earlyGermanBurger?: boolean;
  /** Extra class on the burger for parent-specific positioning (e.g. grid). */
  burgerClassName?: string;
}) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const close = () => setOpen(false);

  useDialog(open, navRef, close);

  const early = earlyGermanBurger ? styles.earlyGerman : "";

  return (
    <>
      <nav
        ref={navRef}
        id={id}
        aria-label={t.a11y.menu}
        className={`${styles.nav} ${open ? styles.navOpen : ""} ${early}`}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={close}
          aria-label={t.a11y.closeMenu}
        >
          ✕
        </button>
        <Image
          src="/images/logo.webp"
          alt="Violin Garden logo"
          width={120}
          height={90}
          className={styles.menuLogo}
        />
        <div className={styles.menuDivider}>
          <span className={styles.menuDividerLine} />
          <span className={styles.menuDividerDot}>✦</span>
          <span className={styles.menuDividerLine} />
        </div>

        {links.map((l) =>
          l.placeholder ? (
            <a
              key={l.label}
              href="#"
              className={styles.navLink}
              aria-disabled="true"
              onClick={(e) => {
                e.preventDefault();
                close();
              }}
            >
              {l.label}
            </a>
          ) : (
            <LocaleLink
              key={l.href}
              href={l.href}
              className={styles.navLink}
              onClick={close}
            >
              {l.label}
            </LocaleLink>
          ),
        )}

        <LanguageSwitcher className={styles.langSwitcher} />
      </nav>

      <button
        type="button"
        className={`${styles.burger} ${open ? styles.burgerOpen : ""} ${early} ${burgerClassName}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={t.a11y.menu}
        aria-controls={id}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </>
  );
}
