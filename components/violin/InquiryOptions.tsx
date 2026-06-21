"use client";

import { InquiryKind } from "@/data/violins";
import { useT } from "@/lib/i18n/useT";
import styles from "./InquiryOptions.module.css";

// Trije "predali" pod predstavitvijo: nakup / izposoja / preizkus.
// Emojis are language-neutral; titles/actions come from the dictionary.
const EMOJI: Record<InquiryKind, string> = {
  nakup: "✨",
  izposoja: "🎻",
  preizkus: "🤍",
};

export default function InquiryOptions({
  options,
  violinName,
  compact = false,
}: {
  options: InquiryKind[];
  violinName?: string;
  compact?: boolean;
}) {
  const t = useT();
  if (options.length === 0) return null;

  return (
    <div className={`${styles.grid} ${compact ? styles.compact : ""}`}>
      {options.map((kind) => {
        const opt = t.inquiry[kind];
        return (
          <button
            key={kind}
            type="button"
            className={styles.option}
            data-inquiry={kind}
            data-violin={violinName}
          >
            <span className={styles.emoji}>{EMOJI[kind]}</span>
            <span className={styles.optTitle}>{opt.title}</span>
            <span className={styles.optAction}>{opt.action}</span>
          </button>
        );
      })}
    </div>
  );
}
