"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useT } from "@/lib/i18n/useT";
import { useDialog } from "@/lib/useDialog";
import styles from "./Gallery.module.css";

export default function Gallery({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const t = useT();
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const count = photos.length;
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );

  // Scroll-lock, focus-trap, Escape and focus return are handled by useDialog;
  // here we only add the gallery's left/right photo navigation.
  useDialog(open, overlayRef, close);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            className={styles.item}
            onClick={() => setIndex(i)}
            aria-label={t.a11y.openPhoto(i + 1)}
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
          ref={overlayRef}
          className={styles.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button className={styles.close} onClick={close} aria-label={t.a11y.close}>
            ✕
          </button>

          {count > 1 && (
            <button
              className={`${styles.nav} ${styles.prev}`}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label={t.a11y.prevPhoto}
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
            />
          </div>

          {count > 1 && (
            <button
              className={`${styles.nav} ${styles.next}`}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label={t.a11y.nextPhoto}
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
