"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import LocaleLink from "../LocaleLink";
import { useEntered } from "../SplashGate/SplashGate";
import { useT } from "@/lib/i18n/useT";
import styles from "./Hero.module.css";

// The hero video is the 77 MB Cloudinary master (1920px). We never serve it raw:
// q_auto/f_auto let Cloudinary pick the lightest format & bitrate — that alone
// drops it to ≈51 MB at native resolution (desktop). Mobile additionally caps
// the width to 768px (≈16 MB). The source is chosen on the client so the heavy
// file is never referenced in the prerendered HTML.
const CLOUDINARY_VIDEO =
  "https://res.cloudinary.com/dnukoemsb/video/upload/{t}/v1781873549/compressed-al50Dazp_sg6mpt.mp4";
const DESKTOP_TRANSFORM = "q_auto,f_auto";
const MOBILE_TRANSFORM = "w_768,q_auto,f_auto";
const POSTER = "/images/card1.webp";

export default function Hero() {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  // Resolved on the client: the source to load, or `posterOnly` when the visitor
  // prefers reduced motion or has Data Saver on — then we show the static poster.
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [posterOnly, setPosterOnly] = useState(false);
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

  // Pick the source after mount, where device width and user preferences are known.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData === true;
    if (reduceMotion || saveData) {
      setPosterOnly(true);
      return;
    }
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const transform = isMobile ? MOBILE_TRANSFORM : DESKTOP_TRANSFORM;
    setVideoSrc(CLOUDINARY_VIDEO.replace("{t}", transform));
  }, []);

  // Begin playback once the chosen source is attached (autoPlay may not refire
  // when the src is set from state after mount).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !videoSrc) return;
    v.play().catch(() => {});
  }, [videoSrc]);

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

  return (
    <section className={styles.hero}>

      <div className={styles.videoWrapper}>
        {videoError || posterOnly ? (
          <Image
            src={POSTER}
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
            src={videoSrc ?? undefined}
            poster={POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
          />
        )}
        {!videoError && !posterOnly && (
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
