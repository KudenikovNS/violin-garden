"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import styles from "./SplashGate.module.css";

/** True once the visitor has clicked "VSTOPITE". Consumed by Hero to unmute the video. */
const EnteredContext = createContext(false);
export const useEntered = () => useContext(EnteredContext);

// Remember the visitor's entry for the rest of the browser session, so navigating
// back to the home page (e.g. via "DOMOV") does not show the splash again.
const STORAGE_KEY = "vg_entered";

// useLayoutEffect on the client (hides the overlay before paint → no flash),
// but useEffect during the static-export prerender to avoid an SSR warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function SplashGate({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [hidden, setHidden] = useState(false);

  // If the visitor already entered earlier this session, skip the splash instantly.
  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setEntered(true);
      setHidden(true);
    }
  }, []);

  function enter() {
    // The click is a user gesture, so the browser now allows audio playback.
    setEntered(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
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
