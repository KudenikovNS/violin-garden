// Vrste povpraševanja, ki ustrezajo trem "predalom" pod vsako violino.
export type InquiryKind = "nakup" | "izposoja" | "preizkus";

export interface InquiryOption {
  emoji: string;
  title: string;
  action: string;
}

// Trije načini, kako lahko violina nadaljuje svojo zgodbo (blok NOVA GLASBENA POT).
export const INQUIRY_OPTIONS: Record<InquiryKind, InquiryOption> = {
  nakup: { emoji: "✨", title: "NOVA ZGODBA", action: "Povpraševanje o nakupu" },
  izposoja: { emoji: "🎻", title: "IZPOSOJA", action: "Povpraševanje o izposoji" },
  preizkus: { emoji: "🤍", title: "PREIZKUS", action: "Dogovor za ogled in preizkus" },
};

export interface SpecRow {
  label: string;
  value: string;
}

export interface Violin {
  id: string;
  name: string;
  origin: string; // goslarska šola / dežela
  year: string;
  flowerVariant: number; // izbira cvetne ilustracije
  intro: string; // kratek opis na pregledni strani
  description: string; // celotna predstavitev
  forSale: boolean; // ali je violina naprodaj
  options: InquiryKind[]; // razpoložljive vrste povpraševanja
  price?: string;

  // ── Bogata predstavitev (neobvezno; prikaže se le, kadar so podatki na voljo) ──
  maker?: string; // izdelovalec / etiketa
  size?: string; // npr. "4/4"
  illustration?: string; // pot do cvetne ilustracije (nadomesti SVG cvet)
  photos?: string[]; // fotografije inštrumenta (prva je glavna)
  lead?: string; // poudarjena uvodna misel (ležeče)
  descriptionParas?: string[]; // celotna predstavitev po odstavkih
  specs?: SpecRow[]; // tehnični podatki
  statusNote?: string; // besedilo ob statusu / povpraševanju
}

// Začasni (placeholder) podatki — nadomestimo z resničnimi, ko jih prejmemo od Inge.
export const violins: Violin[] = [
  {
    id: "rosa-alba",
    name: "Rosa Alba",
    origin: "Italijanska violina",
    year: "4/4",
    flowerVariant: 0,
    intro: "Eleganten, odprt in nosilen ton z izrazitim značajem.",
    description:
      "Elegantna violina polne velikosti (4/4) z etiketo Natale Carletti »Fu Carlo«, ki združuje privlačno estetsko podobo s krasnimi zvočnimi lastnostmi.",
    forSale: true,
    options: ["nakup", "izposoja", "preizkus"],
    price: "Na povpraševanje",

    maker: "Natale Carletti »Fu Carlo«",
    size: "4/4",
    illustration: "/images/violins/rosa-alba/rosa-alba-ilustracija.png",
    photos: [
      "/images/violins/rosa-alba/rosa-alba-spredaj.png",
      "/images/violins/rosa-alba/rosa-alba-zadaj.png",
    ],
    lead: "Tako kot bela vrtnica tudi Rosa Alba očara z eleganco, toplino in plemenitim značajem.",
    descriptionParas: [
      "Elegantna violina polne velikosti (4/4) nosi etiketo Natale Carletti »Fu Carlo« in združuje privlačno estetsko podobo s krasnimi zvočnimi lastnostmi.",
      "Inštrument odlikuje dvodelna smrekova zgornja plošča s srednje širokimi do širokimi letnicami ter dvodelen javorjev hrbet z nežnimi, ozkimi plamenicami. Svetlo rjav originalni lak lepo poudari naravno strukturo lesa in daje inštrumentu topel, plemenit videz.",
      "Violina je v dobrem splošnem stanju in ponuja odprt, nosilen ton z lepo projekcijo. Primerna je za naprednejše učence glasbenih šol, konservatorijev in violiniste, ki iščejo kakovosten evropski inštrument z izrazitim značajem.",
    ],
    specs: [
      { label: "Velikost", value: "4/4 (polna velikost)" },
      { label: "Dolžina korpusa", value: "360 mm" },
      { label: "Zgornji obod", value: "167,5 mm" },
      { label: "Srednji obod", value: "114 mm" },
      { label: "Spodnji obod", value: "206 mm" },
      { label: "Zgornja plošča", value: "smreka, dvodelna" },
      { label: "Hrbet", value: "javor, dvodelen" },
      { label: "Stranice", value: "javor" },
      { label: "Polž", value: "javor" },
      { label: "Lak", value: "originalni svetlo rjav" },
    ],
    statusNote: "Violina je naprodaj pod ugodnimi pogoji.",
  },
  {
    id: "azalea-aurea",
    name: "Azalea Aurea",
    origin: "Nemško-bohemska violina",
    year: "okoli 1900",
    flowerVariant: 1,
    intro: "Topel jantarno-rjav ton z dušo in izrazitim karakterjem.",
    description:
      "Zanimiva violina polne velikosti (4/4) iz tradicije nemško-bohemske goslarske šole, ki s svojo naravno patino in toplim videzom izžareva brezčasno eleganco.",
    forSale: true,
    options: ["nakup", "izposoja", "preizkus"],
    price: "Na povpraševanje",

    maker: "Maurenkirchen – Bohemia šola",
    size: "4/4",
    illustration: "/images/violins/azalea-aurea/azalea-aurea-ilustracija.png",
    photos: [
      "/images/violins/azalea-aurea/azalea-aurea-spredaj.png",
      "/images/violins/azalea-aurea/azalea-aurea-zadaj.png",
    ],
    lead: "Zlata muza — kakor zlata azaleja tudi ta violina izžareva toplino, milino in plemenitost duha.",
    descriptionParas: [
      "Zanimiva violina polne velikosti (4/4) prihaja iz tradicije nemško-bohemske goslarske šole, ki je konec 19. in v začetku 20. stoletja ustvarila številne kakovostne koncertne in študijske inštrumente.",
      "Inštrument nosi sledove bogate glasbene zgodovine in kljub odsotnosti etikete izžareva značaj stare evropske goslarske tradicije. Privlači s svojo naravno patino, toplim videzom in brezčasno eleganco.",
      "Odlikuje jo lepo oblikovan korpus z dvodelno smrekovo zgornjo ploščo ter dvodelnim javorjevim hrbtom, ki ga krasijo nežne vodoravne plamenice. Topel jantarno-rjav originalni lak poudarja naravno lepoto lesa in daje inštrumentu plemenit, zrel značaj.",
      "Dolgoletna uporaba je violini vtisnila posebno osebnost, ki jo je mogoče začutiti že na prvi pogled. Takšni inštrumenti pogosto skrivajo zgodbe generacij glasbenikov in so zanimiva izbira za violiniste, ki iščejo inštrument z dušo in izrazitim karakterjem.",
    ],
    specs: [
      { label: "Velikost", value: "4/4 (polna velikost)" },
      { label: "Dolžina korpusa", value: "362 mm" },
      { label: "Zgornji obod", value: "166 mm" },
      { label: "Srednji obod", value: "112 mm" },
      { label: "Spodnji obod", value: "206 mm" },
      { label: "Zgornja plošča", value: "smreka, dvodelna" },
      { label: "Hrbet", value: "javor, dvodelen" },
      { label: "Stranice", value: "javor" },
      { label: "Polž", value: "javor" },
      { label: "Lak", value: "originalni jantarno-rjav" },
      { label: "Etiketa", value: "brez vidne etikete" },
      { label: "Stanje", value: "dobro splošno stanje, igralen" },
    ],
    statusNote: "Violina je naprodaj.",
  },
];

export function getViolin(id: string): Violin | undefined {
  return violins.find((v) => v.id === id);
}

export const violinsForSale = violins.filter((v) => v.forSale);
