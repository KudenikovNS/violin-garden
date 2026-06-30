import { z } from "zod";

// Localized validation messages — supplied by the active dictionary so every
// rule below speaks the visitor's language. Shape mirrors `inquiryForm.validation`.
export type InquiryMessages = {
  nameShort: string;
  nameLong: string;
  nameSpam: string;
  emailRequired: string;
  emailInvalid: string;
  phoneInvalid: string;
  messageShort: string;
  messageLong: string;
};

// Loose international phone: starts with + or a digit, then digits/spaces and
// the usual separators, at least 6 chars total. Deliberately permissive — we
// reject obvious nonsense, not unusual-but-real numbers.
const PHONE_RE = /^[+\d][\d\s().-]{5,}$/;
// Anti-spam: bots stuff links into the name field; no real name holds a URL.
const URL_RE = /https?:\/\/|www\./i;

export type InquiryField = "name" | "email" | "phone" | "message";

export function inquirySchema(m: InquiryMessages) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(2, m.nameShort)
      .max(80, m.nameLong)
      .refine((v) => !URL_RE.test(v), m.nameSpam),
    email: z
      .string()
      .trim()
      .min(1, m.emailRequired)
      .refine((v) => z.email().safeParse(v).success, m.emailInvalid),
    // Optional: empty is fine; anything present must look like a phone number.
    phone: z
      .string()
      .trim()
      .refine((v) => v === "" || PHONE_RE.test(v), m.phoneInvalid),
    message: z.string().trim().min(10, m.messageShort).max(2000, m.messageLong),
  });
}
