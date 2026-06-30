"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import { InquiryKind } from "@/data/violins";
import LocaleLink from "@/components/LocaleLink";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/useT";
import { useDialog } from "@/lib/useDialog";
import { inquirySchema, type InquiryField } from "@/lib/validation/inquiry";
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
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<InquiryField, string>>>(
    {},
  );
  const [touched, setTouched] = useState<
    Partial<Record<InquiryField, boolean>>
  >({});
  const [consent, setConsent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const subtitle = violinName
    ? `${violinName} — ${t.inquiry[kind].action}`
    : t.inquiry[kind].action;

  // Build the schema from the active locale's messages (rebuilt on locale change).
  const schema = useMemo(
    () => inquirySchema(t.inquiryForm.validation),
    [t.inquiryForm.validation],
  );

  // Accessible modal behaviour (scroll-lock, focus-trap, Escape, focus return).
  // The modal is mounted only while open, so it is always active here.
  useDialog(true, panelRef, onClose);

  // Collapse zod issues to one message per field (first issue wins). Takes the
  // values explicitly so callers can validate the *next* state, not the stale
  // closure value that React hasn't committed yet.
  function collectErrors(
    vals: typeof values,
  ): Partial<Record<InquiryField, string>> {
    const result = schema.safeParse(vals);
    if (result.success) return {};
    const next: Partial<Record<InquiryField, string>> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as InquiryField;
      if (field && !next[field]) next[field] = issue.message;
    }
    return next;
  }

  function handleChange(field: InquiryField, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    // Once a field has been blurred, validate live so the error clears as the
    // visitor fixes it — but don't surprise them with errors before then.
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: collectErrors(nextValues)[field],
      }));
    }
  }

  function handleBlur(field: InquiryField) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: collectErrors(values)[field] }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: real users never fill a hidden field — bots do. Silently
    // pretend success so the bot moves on, but send nothing.
    if (new FormData(form).get("botcheck_hp")) {
      setStatus("success");
      return;
    }

    // Full validation gate. Show every error, mark all fields touched, and move
    // focus to the first invalid one for keyboard/screen-reader users.
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const all = collectErrors(values);
      setErrors(all);
      setTouched({ name: true, email: true, phone: true, message: true });
      const order: InquiryField[] = ["name", "email", "phone", "message"];
      const first = order.find((f) => all[f]);
      if (first) {
        panelRef.current
          ?.querySelector<HTMLElement>(`[name="${first}"]`)
          ?.focus();
      }
      return;
    }

    // Defensive: the submit button is disabled until the box is ticked, but
    // guard here too so consent is never bypassed programmatically.
    if (!consent) return;

    setStatus("submitting");
    try {
      // Audit trail of the consent: the exact statement shown plus the moment
      // it was given, recorded in the email so we have proof of GDPR consent.
      const consentStatement = `${t.inquiryForm.consentBefore} ${t.inquiryForm.consentLink}${t.inquiryForm.consentAfter}`;
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${t.inquiryForm.subjectPrefix}: ${subtitle}`,
          from_name: parsed.data.name,
          email: parsed.data.email,
          replyto: parsed.data.email,
          phone: parsed.data.phone,
          message: parsed.data.message,
          violin: violinName ?? "",
          inquiry_type: kind,
          language: lang,
          consent: `${consentStatement} (${new Date().toISOString()})`,
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
              {subtitle}
            </h2>
            <p className={styles.intro}>{t.inquiryForm.intro}</p>

            {/* noValidate: native bubbles are replaced by our localized errors. */}
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
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
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? "inquiry-err-name" : undefined
                  }
                  placeholder={t.inquiryForm.namePlaceholder}
                />
                {errors.name && (
                  <span id="inquiry-err-name" className={styles.fieldError}>
                    {errors.name}
                  </span>
                )}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{t.inquiryForm.emailLabel}</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "inquiry-err-email" : undefined
                  }
                  placeholder={t.inquiryForm.emailPlaceholder}
                />
                {errors.email && (
                  <span id="inquiry-err-email" className={styles.fieldError}>
                    {errors.email}
                  </span>
                )}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{t.inquiryForm.phoneLabel}</span>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  aria-invalid={!!errors.phone}
                  aria-describedby={
                    errors.phone ? "inquiry-err-phone" : undefined
                  }
                  placeholder={t.inquiryForm.phonePlaceholder}
                />
                {errors.phone && (
                  <span id="inquiry-err-phone" className={styles.fieldError}>
                    {errors.phone}
                  </span>
                )}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  {t.inquiryForm.messageLabel}
                </span>
                <textarea
                  className={styles.textarea}
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "inquiry-err-message" : undefined
                  }
                  placeholder={t.inquiryForm.messagePlaceholder}
                />
                {errors.message && (
                  <span id="inquiry-err-message" className={styles.fieldError}>
                    {errors.message}
                  </span>
                )}
              </label>

              {status === "error" && (
                <p className={styles.error}>
                  {t.inquiryForm.errorText}{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              )}

              <label className={styles.consent}>
                <input
                  type="checkbox"
                  name="consent"
                  className={styles.consentCheckbox}
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span className={styles.consentText}>
                  {t.inquiryForm.consentBefore}{" "}
                  <LocaleLink
                    href="/zasebnost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.consentLink}
                  >
                    {t.inquiryForm.consentLink}
                  </LocaleLink>
                  {t.inquiryForm.consentAfter}
                </span>
              </label>

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "submitting" || !consent}
              >
                {status === "submitting"
                  ? t.inquiryForm.sending
                  : t.inquiryForm.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
