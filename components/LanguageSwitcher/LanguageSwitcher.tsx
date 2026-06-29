"use client";

import { useLang } from "@/lib/i18n/LanguageProvider";
import { LANGS, LANG_LABELS } from "@/lib/i18n/config";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`${styles.switcher} ${className}`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l, i) => (
        <span key={l} className={styles.group}>
          {i > 0 && (
            <span className={styles.sep} aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            className={`${styles.lang} ${l === lang ? styles.active : ""}`}
            onClick={() => setLang(l)}
            aria-pressed={l === lang}
          >
            {LANG_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
