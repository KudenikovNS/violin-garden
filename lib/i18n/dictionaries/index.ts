import type { Lang } from "../config";
import sl, { type Dict } from "./sl";
import en from "./en";

export type { Dict };

export const dictionaries: Record<Lang, Dict> = { sl, en };

export function getDictionary(lang: Lang): Dict {
  return dictionaries[lang];
}
