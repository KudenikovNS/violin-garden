"use client";

import { useLang } from "./LanguageProvider";
import { getDictionary, type Dict } from "./dictionaries";

/** Returns the dictionary for the currently selected language. */
export function useT(): Dict {
  const { lang } = useLang();
  return getDictionary(lang);
}
