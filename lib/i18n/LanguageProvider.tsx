"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { type Lang } from "./config";

// Language is part of the URL: every route lives under /[lang] (/sl, /en, /de),
// statically exported as its own HTML with the correct <html lang>. The route's
// locale is the single source of truth — this provider just exposes it to the
// (client) components below and switches language by navigating to the same path
// under another locale. localStorage only remembers the preference so the root
// "/" redirect can restore it on a later visit.
const STORAGE_KEY = "vg_lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Persist the current locale so the root redirect can honor it next time.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore (private mode / disabled storage) */
    }
  }, [lang]);

  function setLang(next: Lang) {
    if (next === lang) return;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    // Swap the first path segment (the locale) and keep the rest of the path.
    const rest = (pathname ?? `/${lang}`).replace(/^\/[^/]+/, "");
    router.push(`/${next}${rest}`);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a <LanguageProvider>");
  }
  return ctx;
}
