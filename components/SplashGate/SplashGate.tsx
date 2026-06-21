"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import Image from "next/image";
import styles from "./SplashGate.module.css";

/** True once the visitor has clicked "VSTOPITE". Consumed by Hero to unmute the video. */
const EnteredContext = createContext(false);
export const useEntered = () => useContext(EnteredContext);

export default function SplashGate({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [hidden, setHidden] = useState(false);

  function enter() {
    // The click is a user gesture, so the browser now allows audio playback.
    setEntered(true);
    // Keep the overlay mounted through the fade-out, then remove it.
    setTimeout(() => setHidden(true), 700);
  }

  return (
    <EnteredContext.Provider value={entered}>
      {children}

      {!hidden && (
        <div
          className={`${styles.overlay} ${entered ? styles.overlayHidden : ""}`}
          aria-hidden={entered}
        >
          <div className={styles.inner}>
            <Image
              src="/images/logo_new.png"
              alt="Violin Garden logo"
              width={520}
              height={412}
              priority
              className={styles.logo}
            />

            <button className={styles.enterBtn} onClick={enter}>
              <span>Vstopite</span>
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      )}
    </EnteredContext.Provider>
  );
}
