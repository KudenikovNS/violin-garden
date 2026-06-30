import type { Lang } from "../config";
import sl, { type Dict } from "./sl";
import en from "./en";
import de from "./de";

export type { Dict };

const dictionaries: Record<Lang, Dict> = { sl, en, de };

export function getDictionary(lang: Lang): Dict {
  return dictionaries[lang];
}
