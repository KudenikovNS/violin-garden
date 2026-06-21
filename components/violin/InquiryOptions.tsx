import { INQUIRY_OPTIONS, InquiryKind } from "@/data/violins";
import styles from "./InquiryOptions.module.css";

// Trije "predali" pod predstavitvijo: nakup / izposoja / preizkus.
// Gumbi so zaenkrat placeholder — povezavo (e-pošta / obrazec / WhatsApp) dodamo pozneje.
export default function InquiryOptions({
  options,
  violinName,
  compact = false,
}: {
  options: InquiryKind[];
  violinName?: string;
  compact?: boolean;
}) {
  if (options.length === 0) return null;

  return (
    <div className={`${styles.grid} ${compact ? styles.compact : ""}`}>
      {options.map((kind) => {
        const opt = INQUIRY_OPTIONS[kind];
        return (
          <button
            key={kind}
            type="button"
            className={styles.option}
            data-inquiry={kind}
            data-violin={violinName}
          >
            <span className={styles.emoji}>{opt.emoji}</span>
            <span className={styles.optTitle}>{opt.title}</span>
            <span className={styles.optAction}>{opt.action}</span>
          </button>
        );
      })}
    </div>
  );
}
