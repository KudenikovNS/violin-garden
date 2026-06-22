"use client";

import { useT } from "@/lib/i18n/useT";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useT();
  return (
    <footer className={styles.footer}>
      <svg
        width="220"
        height="220"
        viewBox="0 0 200 200"
        className={`${styles.decor} ${styles.decorLeft}`}
        fill="#e7c9c2"
      >
        <circle cx="60" cy="140" r="34" />
        <circle cx="40" cy="120" r="20" />
        <circle cx="110" cy="160" r="22" />
        <path d="M60 140c-10-20-30-26-50-20" stroke="#cdb27c" strokeWidth="1.5" fill="none" />
      </svg>
      <svg
        width="220"
        height="220"
        viewBox="0 0 200 200"
        className={`${styles.decor} ${styles.decorRight}`}
        fill="#e7c9c2"
      >
        <circle cx="140" cy="140" r="34" />
        <circle cx="160" cy="120" r="20" />
        <circle cx="90" cy="160" r="22" />
        <path d="M140 140c10-20 30-26 50-20" stroke="#cdb27c" strokeWidth="1.5" fill="none" />
      </svg>

      <p className={styles.quote}>
        {t.footer.quoteLine1}<br />
        {t.footer.quoteLine2}
      </p>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerDot}>✦</span>
        <span className={styles.dividerLine} />
      </div>

      <p className={styles.welcome}>{t.footer.welcome}</p>

      <div className={styles.contacts}>
        <a className={styles.contact} href="mailto:inga.ulokina@gmail.com" aria-label="Email">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b6924f" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
        <a
          className={styles.contact}
          href="https://www.instagram.com/ingaulokina?igsh=NHM3eTZ0bHFlbGk5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b6924f" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="#b6924f" stroke="none" />
          </svg>
        </a>
        <a
          className={styles.contact}
          href="https://www.facebook.com/profile.php?id=61590796929561"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#b6924f">
            <path d="M14 9h2.5l.5-3H14V4.2c0-.9.3-1.4 1.5-1.4H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.4 1.5 10.4 4v2H8v3h2.4v9H14V9z" />
          </svg>
        </a>
        <a
          className={styles.contact}
          href="https://youtube.com/@ingaulokina?si=oT4hJxCxGRfHpxl7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#b6924f">
            <path d="M22 7.5c-.2-1.4-.8-2.4-2.3-2.6C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.7.4C2.8 5.1 2.2 6.1 2 7.5 1.7 9 1.7 12 1.7 12s0 3 .3 4.5c.2 1.4.8 2.4 2.3 2.6 2.1.4 7.7.4 7.7.4s5.6 0 7.7-.4c1.5-.2 2.1-1.2 2.3-2.6.3-1.5.3-4.5.3-4.5s0-3-.3-4.5zM10 15V9l5.2 3L10 15z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
