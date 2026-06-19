"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logoBox}>
          <Image
            src="/images/logo_new.png"
            alt="Violin Garden logo"
            fill
            sizes="72px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className={styles.brandText}>
          <div className={styles.brandName}>VIOLIN GARDEN</div>
          <div className={styles.brandSub}>COLLECTION</div>
        </div>
      </div>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>DOMOV</a>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>VIOLINSKI VRT</a>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>VIOLINE ZA NOVE ZGODBE</a>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>PROJEKTI</a>
      </nav>

      <div className={styles.right}>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/violinskivrt" aria-label="Instagram" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b6924f" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#b6924f" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/violinskivrt" aria-label="Facebook" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#b6924f">
              <path d="M14 9h2.5l.5-3H14V4.2c0-.9.3-1.4 1.5-1.4H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.4 1.5 10.4 4v2H8v3h2.4v9H14V9z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@violinskivrt" aria-label="YouTube" className={styles.socialLink}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="#b6924f">
              <path d="M22 7.5c-.2-1.4-.8-2.4-2.3-2.6C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.7.4C2.8 5.1 2.2 6.1 2 7.5 1.7 9 1.7 12 1.7 12s0 3 .3 4.5c.2 1.4.8 2.4 2.3 2.6 2.1.4 7.7.4 7.7.4s5.6 0 7.7-.4c1.5-.2 2.1-1.2 2.3-2.6.3-1.5.3-4.5.3-4.5s0-3-.3-4.5zM10 15V9l5.2 3L10 15z" />
            </svg>
          </a>
        </div>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Zapri meni" : "Odpri meni"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
