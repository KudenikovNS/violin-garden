"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import LocaleLink from "../LocaleLink";
import { useEntered } from "../SplashGate/SplashGate";
import { useT } from "@/lib/i18n/useT";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
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

      <div className={styles.videoWrapper}>
        {videoError ? (
          <Image
            src="/images/card1.webp"
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
            poster="/images/card1.webp"
            onError={() => setVideoError(true)}
          />
        )}
        {!videoError && (
        <div className={styles.videoControls}>
          <button onClick={togglePlay} className={styles.controlBtn} aria-label={playing ? t.a11y.pause : t.a11y.play}>
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
          <button onClick={toggleMute} className={styles.controlBtn} aria-label={muted ? t.a11y.unmute : t.a11y.mute}>
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
        <p className={styles.tagline}>{t.hero.tagline}</p>

        <div className={styles.buttons}>
          <LocaleLink href="/violinski-vrt" className={`${styles.btn} ${styles.btnGreen}`}>
            <Image src="/images/btn1.webp" alt="" width={40} height={40} className={styles.btnIcon} />
            <span>{t.hero.enterGarden}</span>
            <span className={styles.arrow}>→</span>
          </LocaleLink>
          <LocaleLink href="/violine-za-nove-zgodbe" className={`${styles.btn} ${styles.btnRose}`}>
            <Image src="/images/btn2.webp" alt="" width={40} height={40} className={styles.btnIcon} />
            <span>{t.hero.forNewStories}</span>
            <span className={styles.arrow}>→</span>
          </LocaleLink>
          {/* TODO: discoverProjects — placeholder until the projects page/content is ready. */}
          <a
            href="#"
            className={`${styles.btn} ${styles.btnGold}`}
            aria-disabled="true"
            onClick={(e) => e.preventDefault()}
          >
            <Image src="/images/btn3.webp" alt="" width={40} height={40} className={styles.btnIcon} />
            <span>{t.hero.discoverProjects}</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>

    </section>
  );
}
