import type { Lang } from "@/lib/i18n/config";
import { violins } from "./violins-content";
// Vrste povpraševanja, ki ustrezajo trem "predalom" pod vsako violino.
// (Translated labels live in the i18n dictionary under `inquiry`.)
export type InquiryKind = "nakup" | "izposoja" | "preizkus";

// Status inštrumenta v zbirki:
//   "sale"       — naprodaj
//   "rent"       — na voljo (samo) za izposojo
//   "collection" — stalni del zbirke, ni naprodaj in ne za izposojo
// (Translated labels live in the i18n dictionary under `detail.status`.)
export type ViolinStatus = "sale" | "rent" | "collection";

// A localized string / string list: one value per supported language.
type L = Record<Lang, string>;
type LList = Record<Lang, string[]>;

export interface SpecRow {
  label: L;
  value: L;
}

export interface Violin {
  id: string;
  name: string; // proper name (flower) — language-neutral
  origin: L; // goslarska šola / dežela
  year: L;
  flowerVariant: number; // izbira cvetne ilustracije
  intro: L; // kratek opis na pregledni strani
  description: L; // celotna predstavitev
  status: ViolinStatus; // naprodaj / za izposojo / stalna zbirka
  options: InquiryKind[]; // razpoložljive vrste povpraševanja

  // ── Bogata predstavitev (neobvezno; prikaže se le, kadar so podatki na voljo) ──
  maker?: L; // izdelovalec / etiketa
  size?: string; // npr. "4/4" — language-neutral
  illustration?: string; // pot do cvetne ilustracije (nadomesti SVG cvet)
  photos?: string[]; // fotografije inštrumenta (prva je glavna)
  lead?: L; // poudarjena uvodna misel (ležeče)
  descriptionParas?: LList; // celotna predstavitev po odstavkih
  specs?: SpecRow[]; // tehnični podatki
  statusNote?: L; // besedilo ob statusu / povpraševanju
  ctaEyebrow?: L; // lasten naslov razdelka (nadomesti privzeti »Nova glasbena pot«)
  ctaParas?: LList; // lastno besedilo razdelka »Nova glasbena pot« (nadomesti privzeti vabilni stavek)
}

// Vsebina zbirke je v ./violins-content, da shema in logika ostaneta pregledni.
export { violins };
export function getViolin(id: string): Violin | undefined {
  return violins.find((v) => v.id === id);
}

// Violine, ki iščejo novega glasbenika (naprodaj ali za izposojo) — prikazane
// na strani »Violine za nove zgodbe«. Stalna zbirka je izključena.
export const availableViolins = violins.filter(
  (v) => v.status !== "collection",
);

// ── Localization helper ──────────────────────────────────────────────────────
// Flattens a Violin's per-language fields down to plain strings for one language,
// so rendering code can stay simple. Language-neutral fields pass through.
export interface LocalViolin {
  id: string;
  name: string;
  origin: string;
  year: string;
  flowerVariant: number;
  intro: string;
  description: string;
  status: ViolinStatus;
  options: InquiryKind[];
  maker?: string;
  size?: string;
  illustration?: string;
  photos?: string[];
  lead?: string;
  descriptionParas?: string[];
  specs?: { label: string; value: string }[];
  statusNote?: string;
  ctaEyebrow?: string;
  ctaParas?: string[];
}

export function localizeViolin(v: Violin, lang: Lang): LocalViolin {
  return {
    id: v.id,
    name: v.name,
    origin: v.origin[lang],
    year: v.year[lang],
    flowerVariant: v.flowerVariant,
    intro: v.intro[lang],
    description: v.description[lang],
    status: v.status,
    options: v.options,
    maker: v.maker?.[lang],
    size: v.size,
    illustration: v.illustration,
    photos: v.photos,
    lead: v.lead?.[lang],
    descriptionParas: v.descriptionParas?.[lang],
    specs: v.specs?.map((s) => ({
      label: s.label[lang],
      value: s.value[lang],
    })),
    statusNote: v.statusNote?.[lang],
    ctaEyebrow: v.ctaEyebrow?.[lang],
    ctaParas: v.ctaParas?.[lang],
  };
}
