"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEntered } from "../SplashGate/SplashGate";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const entered = useEntered();

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  // When the visitor clicks "VSTOPITE", that user gesture lets us unmute the video.
  useEffect(() => {
    if (!entered) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [entered]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const checkTime = () => {
      if (v.duration && v.currentTime >= v.duration - 0.5) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    };
    v.addEventListener("timeupdate", checkTime);
    return () => v.removeEventListener("timeupdate", checkTime);
  }, []);

  return (
    <section className={styles.hero}>

      <div className={styles.content}>
        <Image
          src="/images/logo_new.png"
          alt="Violin Garden logo"
          width={240}
          height={190}
          className={styles.logo}
          priority
        />
        <div className={styles.text}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowText}>VIOLIN GARDEN COLLECTION</span>
          </div>
          <h1 className={styles.title}>VIOLINSKI VRT</h1>
          <p className={styles.subtitle}>Ekskluzivna zbirka violin</p>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Zapri meni">✕</button>
          <Image src="/images/logo_new.png" alt="Violin Garden logo" width={120} height={95} className={styles.menuLogo} />
          <div className={styles.menuDivider}>
            <span className={styles.menuDividerLine} /><span className={styles.menuDividerDot}>✦</span><span className={styles.menuDividerLine} />
          </div>
          <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>DOMOV</Link>
          <Link href="/violinski-vrt" className={styles.navLink} onClick={() => setMenuOpen(false)}>VIOLINSKI VRT</Link>
          <Link href="/violine-za-nove-zgodbe" className={styles.navLink} onClick={() => setMenuOpen(false)}>VIOLINE ZA NOVE ZGODBE</Link>
          <a href="#" className={styles.navLink} onClick={() => setMenuOpen(false)}>PROJEKTI</a>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={styles.videoWrapper}>
        {videoError ? (
          <Image
            src="/images/card1.jpg"
            alt="Violinski vrt"
            width={1600}
            height={560}
            className={styles.video}
            priority
          />
        ) : (
          <video
            ref={videoRef}
            className={styles.video}
            src="https://res.cloudinary.com/dnukoemsb/video/upload/v1781873549/compressed-al50Dazp_sg6mpt.mp4"
            autoPlay
            muted
            playsInline
            poster="/images/card1.jpg"
            onError={() => setVideoError(true)}
          />
        )}
        {!videoError && (
        <div className={styles.videoControls}>
          <button onClick={togglePlay} className={styles.controlBtn} aria-label={playing ? "Pause" : "Play"}>
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="4" width="4" height="16" rx="1" />
                <rect x="15" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            )}
          </button>
          <button onClick={toggleMute} className={styles.controlBtn} aria-label={muted ? "Unmute" : "Mute"}>
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M11 5L6 9H3v6h3l5 4V5z" />
                <line x1="17" y1="9" x2="23" y2="15" />
                <line x1="23" y1="9" x2="17" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M11 5L6 9H3v6h3l5 4V5z" />
                <path d="M15.5 8.5a5 5 0 010 7M19 6a9 9 0 010 12" />
              </svg>
            )}
          </button>
        </div>
        )}
      </div>

      <div className={styles.below}>
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot}>✦</span>
          <span className={styles.dividerLine} />
        </div>
        <p className={styles.tagline}>Zvočni vrt, v katerem cvetijo violine.</p>

        <div className={styles.buttons}>
          <Link href="/violinski-vrt" className={`${styles.btn} ${styles.btnGreen}`}>
            <Image src="/images/btn1.png" alt="" width={40} height={40} className={styles.btnIcon} />
            <span>VSTOPITE V VIOLINSKI VRT</span>
            <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/violine-za-nove-zgodbe" className={`${styles.btn} ${styles.btnRose}`}>
            <Image src="/images/btn2.png" alt="" width={40} height={40} className={styles.btnIcon} />
            <span>VIOLINE ZA NOVE ZGODBE</span>
            <span className={styles.arrow}>→</span>
          </Link>
          <a href="#" className={`${styles.btn} ${styles.btnGold}`}>
            <Image src="/images/btn3.png" alt="" width={40} height={40} className={styles.btnIcon} />
            <span>SPOZNAJTE PROJEKTE</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>

    </section>
  );
}
