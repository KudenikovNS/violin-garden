"use client";

import { useRef, useState, type FormEvent } from "react";
import { InquiryKind } from "@/data/violins";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import { useDialog } from "@/lib/useDialog";
import styles from "./InquiryModal.module.css";

// Web3Forms is a backend-less form-to-email service — perfect for our static
// export. The access key is public by design (an alias for the recipient's
// inbox), so inlining it via NEXT_PUBLIC_ at build time is safe.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = "https://api.web3forms.com/submit";
const CONTACT_EMAIL = "inga.ulokina@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

const TITLE_ID = "inquiry-modal-title";

export default function InquiryModal({
  kind,
  violinName,
  onClose,
}: {
  kind: InquiryKind;
  violinName?: string;
  onClose: () => void;
}) {
  const t = useT();
  const { lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const panelRef = useRef<HTMLDivElement>(null);

  const subtitle = violinName
    ? `${violinName} — ${t.inquiry[kind].action}`
    : t.inquiry[kind].action;

  // Accessible modal behaviour (scroll-lock, focus-trap, Escape, focus return).
  // The modal is mounted only while open, so it is always active here.
  useDialog(true, panelRef, onClose);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill a hidden field — bots do. Silently
    // pretend success so the bot moves on, but send nothing.
    if (data.get("botcheck_hp")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${t.inquiryForm.subjectPrefix}: ${subtitle}`,
          from_name: data.get("name"),
          email: data.get("email"),
          replyto: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          violin: violinName ?? "",
          inquiry_type: kind,
          language: lang,
          botcheck: "",
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={t.inquiryForm.close}
        >
          ×
        </button>

        {status === "success" ? (
          <div className={styles.result}>
            <span className={styles.resultMark}>✦</span>
            <h2 id={TITLE_ID} className={styles.title}>
              {t.inquiryForm.successTitle}
            </h2>
            <p className={styles.text}>{t.inquiryForm.successText}</p>
            <button type="button" className={styles.submit} onClick={onClose}>
              {t.inquiryForm.close}
            </button>
          </div>
        ) : (
          <>
            <h2 id={TITLE_ID} className={styles.title}>
              {t.inquiryForm.heading}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.intro}>{t.inquiryForm.intro}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Honeypot — visually hidden, ignored by humans. */}
              <input
                type="text"
                name="botcheck_hp"
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <label className={styles.field}>
                <span className={styles.label}>{t.inquiryForm.nameLabel}</span>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  required
                  placeholder={t.inquiryForm.namePlaceholder}
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{t.inquiryForm.emailLabel}</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  required
                  placeholder={t.inquiryForm.emailPlaceholder}
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{t.inquiryForm.phoneLabel}</span>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder={t.inquiryForm.phonePlaceholder}
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  {t.inquiryForm.messageLabel}
                </span>
                <textarea
                  className={styles.textarea}
                  name="message"
                  required
                  rows={4}
                  placeholder={t.inquiryForm.messagePlaceholder}
                />
              </label>

              {status === "error" && (
                <p className={styles.error}>
                  {t.inquiryForm.errorText}{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? t.inquiryForm.sending
                  : t.inquiryForm.submit}
              </button>

              <p className={styles.privacy}>{t.inquiryForm.privacyNote}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
