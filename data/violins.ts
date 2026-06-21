import type { Lang } from "@/lib/i18n/config";

// Vrste povpraševanja, ki ustrezajo trem "predalom" pod vsako violino.
// (Translated labels live in the i18n dictionary under `inquiry`.)
export type InquiryKind = "nakup" | "izposoja" | "preizkus";

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
  forSale: boolean; // ali je violina naprodaj
  options: InquiryKind[]; // razpoložljive vrste povpraševanja
  price?: L;

  // ── Bogata predstavitev (neobvezno; prikaže se le, kadar so podatki na voljo) ──
  maker?: L; // izdelovalec / etiketa
  size?: string; // npr. "4/4" — language-neutral
  illustration?: string; // pot do cvetne ilustracije (nadomesti SVG cvet)
  photos?: string[]; // fotografije inštrumenta (prva je glavna)
  lead?: L; // poudarjena uvodna misel (ležeče)
  descriptionParas?: LList; // celotna predstavitev po odstavkih
  specs?: SpecRow[]; // tehnični podatki
  statusNote?: L; // besedilo ob statusu / povpraševanju
}

// Začasni (placeholder) podatki — nadomestimo z resničnimi, ko jih prejmemo od Inge.
export const violins: Violin[] = [
  {
    id: "rosa-alba",
    name: "Rosa Alba",
    origin: { sl: "Italijanska violina", en: "Italian violin" },
    year: { sl: "4/4", en: "4/4" },
    flowerVariant: 0,
    intro: {
      sl: "Eleganten, odprt in nosilen ton z izrazitim značajem.",
      en: "An elegant, open and carrying tone with a distinctive character.",
    },
    description: {
      sl: "Elegantna violina polne velikosti (4/4) z etiketo Natale Carletti »Fu Carlo«, ki združuje privlačno estetsko podobo s krasnimi zvočnimi lastnostmi.",
      en: "An elegant full-size (4/4) violin labelled Natale Carletti »Fu Carlo«, combining an attractive appearance with beautiful tonal qualities.",
    },
    forSale: true,
    options: ["nakup", "izposoja", "preizkus"],
    price: { sl: "Na povpraševanje", en: "On request" },

    maker: { sl: "Natale Carletti »Fu Carlo«", en: "Natale Carletti »Fu Carlo«" },
    size: "4/4",
    illustration: "/images/violins/rosa-alba/rosa-alba-ilustracija.png",
    photos: [
      "/images/violins/rosa-alba/rosa-alba-spredaj.png",
      "/images/violins/rosa-alba/rosa-alba-zadaj.png",
    ],
    lead: {
      sl: "Tako kot bela vrtnica tudi Rosa Alba očara z eleganco, toplino in plemenitim značajem.",
      en: "Like a white rose, Rosa Alba enchants with elegance, warmth and a noble character.",
    },
    descriptionParas: {
      sl: [
        "Elegantna violina polne velikosti (4/4) nosi etiketo Natale Carletti »Fu Carlo« in združuje privlačno estetsko podobo s krasnimi zvočnimi lastnostmi.",
        "Inštrument odlikuje dvodelna smrekova zgornja plošča s srednje širokimi do širokimi letnicami ter dvodelen javorjev hrbet z nežnimi, ozkimi plamenicami. Svetlo rjav originalni lak lepo poudari naravno strukturo lesa in daje inštrumentu topel, plemenit videz.",
        "Violina je v dobrem splošnem stanju in ponuja odprt, nosilen ton z lepo projekcijo. Primerna je za naprednejše učence glasbenih šol, konservatorijev in violiniste, ki iščejo kakovosten evropski inštrument z izrazitim značajem.",
      ],
      en: [
        "This elegant full-size (4/4) violin bears the label Natale Carletti »Fu Carlo« and combines an attractive appearance with beautiful tonal qualities.",
        "The instrument features a two-piece spruce top with medium to wide grain and a two-piece maple back with fine, narrow flames. The original light-brown varnish beautifully highlights the natural structure of the wood and gives the instrument a warm, noble look.",
        "The violin is in good overall condition and offers an open, carrying tone with fine projection. It suits advanced students of music schools and conservatories, as well as violinists seeking a quality European instrument with a distinctive character.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length" }, value: { sl: "360 mm", en: "360 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout" }, value: { sl: "167,5 mm", en: "167.5 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout" }, value: { sl: "114 mm", en: "114 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout" }, value: { sl: "206 mm", en: "206 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece" } },
      { label: { sl: "Hrbet", en: "Back" }, value: { sl: "javor, dvodelen", en: "maple, two-piece" } },
      { label: { sl: "Stranice", en: "Ribs" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Polž", en: "Scroll" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Lak", en: "Varnish" }, value: { sl: "originalni svetlo rjav", en: "original light brown" } },
    ],
    statusNote: {
      sl: "Violina je naprodaj pod ugodnimi pogoji.",
      en: "The violin is for sale on favourable terms.",
    },
  },
  {
    id: "azalea-aurea",
    name: "Azalea Aurea",
    origin: { sl: "Nemško-bohemska violina", en: "German-Bohemian violin" },
    year: { sl: "okoli 1900", en: "c. 1900" },
    flowerVariant: 1,
    intro: {
      sl: "Topel jantarno-rjav ton z dušo in izrazitim karakterjem.",
      en: "A warm amber-brown tone with soul and a distinctive character.",
    },
    description: {
      sl: "Zanimiva violina polne velikosti (4/4) iz tradicije nemško-bohemske goslarske šole, ki s svojo naravno patino in toplim videzom izžareva brezčasno eleganco.",
      en: "An intriguing full-size (4/4) violin from the German-Bohemian lutherie tradition, radiating timeless elegance with its natural patina and warm appearance.",
    },
    forSale: true,
    options: ["nakup", "izposoja", "preizkus"],
    price: { sl: "Na povpraševanje", en: "On request" },

    maker: { sl: "Maurenkirchen – Bohemia šola", en: "Maurenkirchen – Bohemian school" },
    size: "4/4",
    illustration: "/images/violins/azalea-aurea/azalea-aurea-ilustracija.png",
    photos: [
      "/images/violins/azalea-aurea/azalea-aurea-spredaj.png",
      "/images/violins/azalea-aurea/azalea-aurea-zadaj.png",
    ],
    lead: {
      sl: "Zlata muza — kakor zlata azaleja tudi ta violina izžareva toplino, milino in plemenitost duha.",
      en: "A golden muse — like a golden azalea, this violin radiates warmth, gentleness and nobility of spirit.",
    },
    descriptionParas: {
      sl: [
        "Zanimiva violina polne velikosti (4/4) prihaja iz tradicije nemško-bohemske goslarske šole, ki je konec 19. in v začetku 20. stoletja ustvarila številne kakovostne koncertne in študijske inštrumente.",
        "Inštrument nosi sledove bogate glasbene zgodovine in kljub odsotnosti etikete izžareva značaj stare evropske goslarske tradicije. Privlači s svojo naravno patino, toplim videzom in brezčasno eleganco.",
        "Odlikuje jo lepo oblikovan korpus z dvodelno smrekovo zgornjo ploščo ter dvodelnim javorjevim hrbtom, ki ga krasijo nežne vodoravne plamenice. Topel jantarno-rjav originalni lak poudarja naravno lepoto lesa in daje inštrumentu plemenit, zrel značaj.",
        "Dolgoletna uporaba je violini vtisnila posebno osebnost, ki jo je mogoče začutiti že na prvi pogled. Takšni inštrumenti pogosto skrivajo zgodbe generacij glasbenikov in so zanimiva izbira za violiniste, ki iščejo inštrument z dušo in izrazitim karakterjem.",
      ],
      en: [
        "This intriguing full-size (4/4) violin comes from the German-Bohemian lutherie tradition, which produced many quality concert and study instruments in the late 19th and early 20th centuries.",
        "The instrument bears the traces of a rich musical history and, despite the absence of a label, radiates the character of the old European lutherie tradition. It attracts with its natural patina, warm look and timeless elegance.",
        "It features a beautifully shaped body with a two-piece spruce top and a two-piece maple back adorned with fine horizontal flames. The warm amber-brown original varnish emphasises the natural beauty of the wood and gives the instrument a noble, mature character.",
        "Years of use have imparted a special personality to the violin, one that can be felt at first sight. Such instruments often hold the stories of generations of musicians and are an appealing choice for violinists seeking an instrument with soul and a distinctive character.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length" }, value: { sl: "362 mm", en: "362 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout" }, value: { sl: "166 mm", en: "166 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout" }, value: { sl: "112 mm", en: "112 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout" }, value: { sl: "206 mm", en: "206 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece" } },
      { label: { sl: "Hrbet", en: "Back" }, value: { sl: "javor, dvodelen", en: "maple, two-piece" } },
      { label: { sl: "Stranice", en: "Ribs" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Polž", en: "Scroll" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Lak", en: "Varnish" }, value: { sl: "originalni jantarno-rjav", en: "original amber-brown" } },
      { label: { sl: "Etiketa", en: "Label" }, value: { sl: "brez vidne etikete", en: "no visible label" } },
      { label: { sl: "Stanje", en: "Condition" }, value: { sl: "dobro splošno stanje, igralen", en: "good overall condition, playable" } },
    ],
    statusNote: { sl: "Violina je naprodaj.", en: "The violin is for sale." },
  },
];

export function getViolin(id: string): Violin | undefined {
  return violins.find((v) => v.id === id);
}

export const violinsForSale = violins.filter((v) => v.forSale);

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
  forSale: boolean;
  options: InquiryKind[];
  price?: string;
  maker?: string;
  size?: string;
  illustration?: string;
  photos?: string[];
  lead?: string;
  descriptionParas?: string[];
  specs?: { label: string; value: string }[];
  statusNote?: string;
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
    forSale: v.forSale,
    options: v.options,
    price: v.price?.[lang],
    maker: v.maker?.[lang],
    size: v.size,
    illustration: v.illustration,
    photos: v.photos,
    lead: v.lead?.[lang],
    descriptionParas: v.descriptionParas?.[lang],
    specs: v.specs?.map((s) => ({ label: s.label[lang], value: s.value[lang] })),
    statusNote: v.statusNote?.[lang],
  };
}
