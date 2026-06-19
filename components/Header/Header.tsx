"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
<nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>DOMOV</a>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>VIOLINSKI VRT</a>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>VIOLINE ZA NOVE ZGODBE</a>
        <a href="#" className={styles.navLink} onClick={() => setOpen(false)}>PROJEKTI</a>
      </nav>

      <div className={styles.right}>
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
