"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const count = photos.length;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            className={styles.item}
            onClick={() => setIndex(i)}
            aria-label={`Odpri fotografijo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} — fotografija ${i + 1}`}
              fill
              className={styles.img}
              sizes="(max-width: 768px) 45vw, 220px"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className={styles.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button className={styles.close} onClick={close} aria-label="Zapri">
            ✕
          </button>

          {count > 1 && (
            <button
              className={`${styles.nav} ${styles.prev}`}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Prejšnja fotografija"
            >
              ‹
            </button>
          )}

          <div
            className={styles.figure}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[index]}
              alt={`${alt} — fotografija ${index + 1}`}
              fill
              className={styles.full}
              sizes="100vw"
              priority
            />
          </div>

          {count > 1 && (
            <button
              className={`${styles.nav} ${styles.next}`}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Naslednja fotografija"
            >
              ›
            </button>
          )}

          {count > 1 && (
            <span className={styles.counter}>
              {index + 1} / {count}
            </span>
          )}
        </div>
      )}
    </>
  );
}
