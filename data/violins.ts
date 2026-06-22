import type { Lang } from "@/lib/i18n/config";

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
    status: "sale",
    options: ["nakup", "izposoja", "preizkus"],
    price: { sl: "Na povpraševanje", en: "On request" },

    maker: { sl: "Natale Carletti »Fu Carlo«", en: "Natale Carletti »Fu Carlo«" },
    size: "4/4",
    illustration: "/images/violins/rosa-alba/rosa-alba-ilustracija.webp",
    photos: [
      "/images/violins/rosa-alba/rosa-alba-spredaj.webp",
      "/images/violins/rosa-alba/rosa-alba-zadaj.webp",
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
    status: "sale",
    options: ["nakup", "izposoja", "preizkus"],
    price: { sl: "Na povpraševanje", en: "On request" },

    maker: { sl: "Maurenkirchen – Bohemia šola", en: "Maurenkirchen – Bohemian school" },
    size: "4/4",
    illustration: "/images/violins/azalea-aurea/azalea-aurea-ilustracija.webp",
    photos: [
      "/images/violins/azalea-aurea/azalea-aurea-spredaj.webp",
      "/images/violins/azalea-aurea/azalea-aurea-zadaj.webp",
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
  {
    id: "paeonia-regia",
    name: "Paeonia Regia",
    origin: { sl: "Evropska šola", en: "European school" },
    year: { sl: "okoli 1900", en: "c. 1900" },
    flowerVariant: 2,
    intro: {
      sl: "Bogata barva, zrel ton in plemenita prisotnost.",
      en: "Rich colour, a mature tone and a noble presence.",
    },
    description: {
      sl: "Elegantna violina polne velikosti (4/4) z etiketo Pietro Pallotta, kakovosten evropski inštrument iz obdobja okoli leta 1900, ki se zgleduje po klasičnih italijanskih vzorih.",
      en: "An elegant full-size (4/4) violin bearing a Pietro Pallotta label — a quality European instrument from around 1900, modelled on classic Italian patterns.",
    },
    status: "sale",
    options: ["nakup", "izposoja", "preizkus"],
    price: { sl: "Na povpraševanje", en: "On request" },

    maker: { sl: "etiketa Pietro Pallotta", en: "Pietro Pallotta label" },
    size: "4/4",
    illustration: "/images/violins/paeonia-regia/paeonia-regia-ilustracija.webp",
    photos: [
      "/images/violins/paeonia-regia/paeonia-regia-spredaj.webp",
      "/images/violins/paeonia-regia/paeonia-regia-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot kraljevska potonika tudi Paeonia Regia očara s svojo bogato barvo, izrazito osebnostjo in plemenito prisotnostjo.",
      en: "Like a royal peony, Paeonia Regia enchants with its rich colour, distinctive personality and noble presence.",
    },
    descriptionParas: {
      sl: [
        "Elegantna violina polne velikosti (4/4) nosi etiketo Pietro Pallotta fece l'anno 1795 N.26 Perugia. Po značilnostih izdelave in uporabljenih materialih gre za kakovosten evropski inštrument iz obdobja okoli leta 1900, ki se zgleduje po tradiciji klasičnih italijanskih vzorov.",
        "Inštrument odlikuje dvodelna smrekova zgornja plošča ter lepo plameničen dvodelen javorjev hrbet. Topel rdeče-rjav lak poudarja naravno lepoto lesa in daje violini izrazit, plemenit značaj.",
        "Violina nosi odmev dolge glasbene poti, ima eleganten videz in privlačno estetsko podobo. Ta inštrument združuje bogato vizualno prezenco z zrelim in karakterističnim tonom, zaradi česar je lahko odlična izbira za violiniste vseh generacij.",
      ],
      en: [
        "This elegant full-size (4/4) violin bears the label Pietro Pallotta fece l'anno 1795 N.26 Perugia. By its workmanship and materials it is a quality European instrument from around 1900, modelled on the tradition of classic Italian patterns.",
        "The instrument features a two-piece spruce top and a beautifully flamed two-piece maple back. The warm red-brown varnish emphasises the natural beauty of the wood and gives the violin a distinctive, noble character.",
        "The violin carries the echo of a long musical journey, with an elegant look and an attractive appearance. It combines a rich visual presence with a mature, characterful tone, making it an excellent choice for violinists of all generations.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length" }, value: { sl: "358 mm", en: "358 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout" }, value: { sl: "169 mm", en: "169 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout" }, value: { sl: "116 mm", en: "116 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout" }, value: { sl: "207 mm", en: "207 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece" } },
      { label: { sl: "Hrbet", en: "Back" }, value: { sl: "javor, dvodelen", en: "maple, two-piece" } },
      { label: { sl: "Stranice", en: "Ribs" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Polž", en: "Scroll" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Lak", en: "Varnish" }, value: { sl: "originalni rdeče-rjav", en: "original red-brown" } },
      { label: { sl: "Etiketa", en: "Label" }, value: { sl: "Pietro Pallotta", en: "Pietro Pallotta" } },
    ],
    statusNote: { sl: "Violina je naprodaj.", en: "The violin is for sale." },
  },
  {
    id: "amaryllis-regia",
    name: "Amaryllis Regia",
    origin: { sl: "Švedska mojstrska violina", en: "Swedish master violin" },
    year: { sl: "1962", en: "1962" },
    flowerVariant: 3,
    intro: {
      sl: "Odprt, nosilen in zrel ton z močnim koncertnim značajem.",
      en: "An open, carrying and mature tone with a strong concert character.",
    },
    description: {
      sl: "Mojstrska violina polne velikosti (4/4) z etiketo Birger Nilsson, izdelana leta 1962 v švedskem mestu Ystad — kakovostna severnoevropska goslarska tradicija z izjemno odprtim, nosilnim tonom.",
      en: "A full-size (4/4) master violin labelled Birger Nilsson, made in 1962 in Ystad, Sweden — quality Northern European lutherie with an exceptionally open, carrying tone.",
    },
    status: "rent",
    options: ["izposoja", "preizkus"],

    maker: { sl: "Birger Nilsson, Ystad", en: "Birger Nilsson, Ystad" },
    size: "4/4",
    illustration: "/images/violins/amaryllis-regia/amaryllis-regia-ilustracija.webp",
    photos: [
      "/images/violins/amaryllis-regia/amaryllis-regia-spredaj.webp",
      "/images/violins/amaryllis-regia/amaryllis-regia-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot kraljevski amarilis tudi Amaryllis Regia očara z veličastno pojavnostjo, žarečo lepoto in izrazitim značajem.",
      en: "Like a royal amaryllis, Amaryllis Regia enchants with its majestic appearance, radiant beauty and distinctive character.",
    },
    descriptionParas: {
      sl: [
        "Mojstrska violina polne velikosti (4/4), izdelana leta 1962 v švedskem mestu Ystad, nosi etiketo Birger Nilsson. Inštrument združuje kakovostno severnoevropsko goslarsko tradicijo z izjemno odprtim, nosilnim in zrelim tonom.",
        "Violino odlikuje dvodelna smrekova zgornja plošča ter dvodelen javorjev hrbet z nežnimi do srednje izrazitimi plamenicami. Posebno pozornost pritegne njen živahen originalni rdeče-jantarni lak, ki inštrumentu daje toplino, sijaj in prepoznaven umetniški značaj.",
        "Model violine je nekoliko širši in robustnejši, kar prispeva k bogati zvočni sliki, odlični projekciji in uravnoteženosti vseh registrov. Inštrument se odlikuje po jasnem odzivu, polnem tonu ter zanesljivem nastopu tako v komorni igri kot na koncertnem odru.",
        "Tako kot cvet kraljevskega amarilisa tudi ta violina ne ostane neopažena. Njena zvočna prisotnost je izrazita, a hkrati plemenita in elegantna. Primerna je za naprednejše učence glasbenih šol, dijake konservatorijev, študente akademij in violiniste, ki iščejo kakovosten evropski mojstrski inštrument z močnim koncertnim značajem.",
      ],
      en: [
        "This full-size (4/4) master violin, made in 1962 in the Swedish town of Ystad, bears the label Birger Nilsson. The instrument combines the quality Northern European lutherie tradition with an exceptionally open, carrying and mature tone.",
        "It features a two-piece spruce top and a two-piece maple back with fine to moderately pronounced flames. Its lively original red-amber varnish stands out, giving the instrument warmth, lustre and a recognisable artistic character.",
        "The violin's model is somewhat wider and more robust, which contributes to a rich sound, excellent projection and balance across all registers. The instrument is distinguished by a clear response, a full tone and a reliable performance both in chamber playing and on the concert stage.",
        "Like the flower of the royal amaryllis, this violin does not go unnoticed. Its sonic presence is distinctive, yet noble and elegant. It suits advanced students of music schools, conservatory and academy students, and violinists seeking a quality European master instrument with a strong concert character.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length" }, value: { sl: "359 mm", en: "359 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout" }, value: { sl: "169 mm", en: "169 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout" }, value: { sl: "115 mm", en: "115 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout" }, value: { sl: "208 mm", en: "208 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece" } },
      { label: { sl: "Hrbet", en: "Back" }, value: { sl: "javor, dvodelen", en: "maple, two-piece" } },
      { label: { sl: "Stranice", en: "Ribs" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Polž", en: "Scroll" }, value: { sl: "javor", en: "maple" } },
      { label: { sl: "Lak", en: "Varnish" }, value: { sl: "originalni rdeče-jantarni", en: "original red-amber" } },
      { label: { sl: "Leto izdelave", en: "Year made" }, value: { sl: "1962", en: "1962" } },
      { label: { sl: "Goslar", en: "Luthier" }, value: { sl: "Birger Nilsson", en: "Birger Nilsson" } },
      { label: { sl: "Kraj izdelave", en: "Place made" }, value: { sl: "Ystad, Švedska", en: "Ystad, Sweden" } },
    ],
    statusNote: {
      sl: "Violina je del zbirke Violin Garden Collection in je na voljo za dolgoročno ali projektno izposojo.",
      en: "The violin is part of the Violin Garden Collection and is available for long-term or project rental.",
    },
  },
  {
    id: "rosa-aurea",
    name: "Rosa Aurea",
    origin: { sl: "Nemška / saška šola", en: "German / Saxon school" },
    year: { sl: "okoli 1890–1900", en: "c. 1890–1900" },
    flowerVariant: 4,
    intro: {
      sl: "Bogat, odprt in nosilen solistični zvok.",
      en: "A rich, open and carrying solo sound.",
    },
    description: {
      sl: "Kakovostna violina polne velikosti (4/4), izdelana okoli leta 1900 v znameniti goslarski pokrajini Markneukirchen–Vogtland, ki predstavlja najboljše značilnosti pozne nemško-saške goslarske tradicije.",
      en: "A quality full-size (4/4) violin made around 1900 in the renowned lutherie region of Markneukirchen–Vogtland, showcasing the best features of the late German-Saxon lutherie tradition.",
    },
    status: "collection",
    options: ["preizkus"],

    maker: { sl: "Markneukirchen – Vogtland", en: "Markneukirchen – Vogtland" },
    size: "4/4",
    illustration: "/images/violins/rosa-aurea/rosa-aurea-ilustracija.webp",
    photos: [
      "/images/violins/rosa-aurea/rosa-aurea-spredaj.webp",
      "/images/violins/rosa-aurea/rosa-aurea-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot zlata vrtnica tudi Rosa Aurea očara s svojo toplino, plemenitostjo in žarečo prisotnostjo.",
      en: "Like a golden rose, Rosa Aurea enchants with its warmth, nobility and radiant presence.",
    },
    descriptionParas: {
      sl: [
        "Zlata vrtnica je plemenit cvet, ki olepšuje najbolj sončen del Violinskega vrta. Njeni zlato obarvani cvetovi simbolizirajo svetlobo, bogastvo duha, dostojanstvo in brezčasno lepoto. Tudi Rosa Aurea izstopa s svojo žlahtno podobo, bogatim tonom in izrazito koncertno prisotnostjo.",
        "Kakovostna violina polne velikosti (4/4), izdelana okoli leta 1900 v znameniti goslarski pokrajini Markneukirchen–Vogtland, predstavlja najboljše značilnosti pozne nemško-saške goslarske tradicije. Inštrument združuje elegantno izdelavo, bogat zven in izrazito umetniško prepričljivost.",
        "Violino odlikuje lepo izbran resonančni les ter privlačen zlato-jantarni lak, ki poudarja njeno plemenito podobo. Model je uravnotežen in zrel, z elegantnimi linijami ter izrazito profesionalnim značajem.",
        "Njena največja odlika je ton. Rosa Aurea premore bogat, odprt in izjemno nosilen solistični zvok, ki se z lahkoto prebije skozi koncertni prostor. Ton je poln, plemenit in barvito razgiban, z lepim ravnovesjem med toplino in projekcijo. Inštrument se odziva hitro in zanesljivo ter omogoča širok izrazni razpon.",
        "Gre za violino z izrazitim umetniškim značajem, ki nagrajuje zrelo tehniko in muzikalnost. Primerna je za profesionalne violiniste, študente glasbenih akademij, dijake konservatorijev ter vse, ki iščejo kakovosten evropski inštrument z vrhunskim koncertnim potencialom.",
      ],
      en: [
        "The golden rose is a noble bloom that adorns the sunniest part of the Violin Garden. Its golden flowers symbolise light, richness of spirit, dignity and timeless beauty. Rosa Aurea, too, stands out with its noble appearance, rich tone and distinctive concert presence.",
        "A quality full-size (4/4) violin made around 1900 in the renowned lutherie region of Markneukirchen–Vogtland, it embodies the best features of the late German-Saxon lutherie tradition. The instrument combines elegant craftsmanship, a rich sound and striking artistic conviction.",
        "It is distinguished by beautifully selected tonewood and an attractive golden-amber varnish that emphasises its noble appearance. The model is balanced and mature, with elegant lines and a distinctly professional character.",
        "Its greatest quality is the tone. Rosa Aurea possesses a rich, open and exceptionally carrying solo sound that easily cuts through a concert hall. The tone is full, noble and colourfully varied, with a fine balance between warmth and projection. The instrument responds quickly and reliably, allowing a wide expressive range.",
        "This is a violin with a distinctive artistic character that rewards mature technique and musicianship. It suits professional violinists, students of music academies, conservatory students and anyone seeking a quality European instrument with top concert potential.",
      ],
    },
    statusNote: {
      sl: "Violina je del stalne zbirke Violin Garden Collection.",
      en: "The violin is part of the permanent Violin Garden Collection.",
    },
  },
];

export function getViolin(id: string): Violin | undefined {
  return violins.find((v) => v.id === id);
}

// Violine, ki iščejo novega glasbenika (naprodaj ali za izposojo) — prikazane
// na strani »Violine za nove zgodbe«. Stalna zbirka je izključena.
export const availableViolins = violins.filter((v) => v.status !== "collection");

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
    status: v.status,
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
