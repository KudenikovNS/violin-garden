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
  ctaParas?: LList; // lastno besedilo razdelka »Nova glasbena pot« (nadomesti privzeti vabilni stavek)
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
  {
    id: "dahlia-rubra",
    name: "Dahlia Rubra",
    origin: { sl: "Nemško-avstrijska violina", en: "German-Austrian violin" },
    year: { sl: "okoli 1900–1930", en: "c. 1900–1930" },
    flowerVariant: 5,
    intro: {
      sl: "Topel, sonoren in zaobljen ton z dušo in bogato glasbeno preteklostjo.",
      en: "A warm, sonorous and rounded tone with soul and a rich musical past.",
    },
    description: {
      sl: "Kakovostna violina polne velikosti (4/4) iz tradicije srednjeevropskih goslarskih delavnic nemško-avstrijskega prostora (okoli 1900–1930), katere največja vrednost je v bogastvu njene glasbene preteklosti.",
      en: "A quality full-size (4/4) violin from the tradition of the Central European lutherie workshops of the German-Austrian region (c. 1900–1930), whose greatest value lies in the richness of its musical past.",
    },
    status: "collection",
    options: ["izposoja", "preizkus"],

    maker: { sl: "Srednjeevropska goslarska delavnica", en: "Central European lutherie workshop" },
    size: "4/4",
    illustration: "/images/violins/dahlia-rubra/dahlia-rubra-ilustracija.webp",
    photos: [
      "/images/violins/dahlia-rubra/dahlia-rubra-spredaj.webp",
      "/images/violins/dahlia-rubra/dahlia-rubra-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot rdeča dalija tudi Dahlia Rubra očara s svojo toplino, zrelostjo in bogato življenjsko zgodbo.",
      en: "Like a red dahlia, Dahlia Rubra enchants with its warmth, maturity and rich life story.",
    },
    descriptionParas: {
      sl: [
        "Rdeča dalija je cvet poznega poletja, ki simbolizira vztrajnost, notranjo moč in lepoto, ki se skozi čas ne izgublja, temveč poglablja. Njeni žareči odtenki rubina, bakra in zlata spominjajo na toplino sončnega zahoda ter na dragocene sledi časa, ki vsaki stvari podarijo edinstven značaj.",
        "Takšna je tudi ta violina – izstopa s svojo žlahtno patino, toplim sonornim glasom in zgodbo, ki jo je skozi desetletja zapisovalo življenje samo. Kakovostna violina polne velikosti (4/4), izdelana v tradiciji srednjeevropskih goslarskih delavnic nemško-avstrijskega prostora okoli let 1900–1930, predstavlja inštrument, katerega največja vrednost ni zgolj v izdelavi, temveč v bogastvu njegove glasbene preteklosti.",
        "Violino odlikuje privlačen rdeče-jantarni lak, ki v različnih svetlobah prehaja med odtenki rubina, bakra in zlata. Model je uravnotežen in eleganten, z lepo oblikovanimi linijami ter značajem, značilnim za kakovostne srednjeevropske inštrumente prve polovice 20. stoletja.",
        "Njena največja posebnost pa je nekaj drugega. Dahlia Rubra je bila veliko igrana. Na njej so vidne sledi časa, drobne obrabe in naravna patina, ki pričajo o desetletjih glasbenega življenja. To ni inštrument, ki bi večino svojega obstoja preživel pozabljen v omari ali zaprt v vitrini. To je violina, ki je izpolnjevala svoj namen.",
        "Bila je spremljevalka glasbenikov. Njeni robovi, lak in površina pripovedujejo zgodbo neštetih vaj, nastopov, koncertov in glasbenih srečanj. Vsaka sled ima svoj pomen, vsaka obraba svojo zgodbo.",
        "Prav v tem je njena posebna vrednost. Inštrumenti, ki so desetletja živeli skozi glasbo, pogosto razvijejo posebno zvočno osebnost. Les skozi dolga leta vibracij dozori, ton postane mehkejši, polnejši in bolj povezan. Dahlia Rubra nosi v sebi prav to izkušnjo.",
        "Njena največja odlika je ton. Dahlia Rubra premore topel, sonoren in prijetno zaobljen zvok, z lepo globino v srednjem registru in mehko, plemenito barvo, ki poslušalca pritegne brez ostrine ali agresivnosti. Ton je zrel, pevski in naravno odprt. Njegov glas ne išče pozornosti z močjo, temveč z lepoto zvočne barve, muzikalnostjo in občutkom pristnosti.",
        "Gre za violino z dušo – inštrument, ki ne pripoveduje svoje zgodbe skozi popolnost, temveč skozi življenje, ki ga je preživel v glasbi.",
      ],
      en: [
        "The red dahlia is a flower of late summer, a symbol of perseverance, inner strength and a beauty that does not fade with time but deepens. Its glowing shades of ruby, copper and gold recall the warmth of a sunset and the precious traces of time that lend every thing a character of its own.",
        "So it is with this violin — it stands out with its noble patina, warm and sonorous voice, and a story written over decades by life itself. A quality full-size (4/4) violin made in the tradition of the Central European lutherie workshops of the German-Austrian region around 1900–1930, it is an instrument whose greatest value lies not merely in its craftsmanship, but in the richness of its musical past.",
        "The violin is distinguished by an attractive red-amber varnish that shifts between shades of ruby, copper and gold in different lights. The model is balanced and elegant, with beautifully shaped lines and a character typical of quality Central European instruments of the first half of the 20th century.",
        "Its greatest distinction, however, is something else. Dahlia Rubra was played a great deal. It bears visible traces of time — small signs of wear and a natural patina that testify to decades of musical life. This is not an instrument that spent most of its existence forgotten in a cupboard or shut away in a display case. This is a violin that fulfilled its purpose.",
        "It was a companion to musicians. Its edges, varnish and surface tell the story of countless rehearsals, performances, concerts and musical encounters. Every mark has its meaning, every trace of wear its own story.",
        "Therein lies its special value. Instruments that have lived through music for decades often develop a particular sonic personality. Over long years of vibration the wood matures, and the tone becomes softer, fuller and more connected. Dahlia Rubra carries exactly this experience within it.",
        "Its greatest quality is the tone. Dahlia Rubra possesses a warm, sonorous and pleasantly rounded sound, with fine depth in the middle register and a soft, noble colour that draws the listener in without harshness or aggression. The tone is mature, singing and naturally open. Its voice seeks attention not through power, but through the beauty of its colour, its musicality and a sense of authenticity.",
        "This is a violin with a soul — an instrument that tells its story not through perfection, but through the life it has lived in music.",
      ],
    },
    statusNote: {
      sl: "Violina je del stalne zbirke Violin Garden Collection.",
      en: "The violin is part of the permanent Violin Garden Collection.",
    },
    ctaParas: {
      sl: [
        "Tako kot rdeča dalija vsako leto znova zacveti, tudi Dahlia Rubra vedno znova oživi skozi glasbo.",
        "Njena zgodba se je začela že dolgo pred prihodom v Violinski vrt. Desetletja je spremljala glasbenike, zbirala njihove spomine in vase shranjevala odmeve njihovih interpretacij.",
        "Danes je del zbirke Violin Garden Collection, kjer vsaka violina nosi svoj značaj, svojo zgodbo in svoj glas.",
        "Njena zgodba ni namenjena temu, da bi se zaključila z novim lastnikom, temveč da se skozi glasbo vedno znova nadaljuje. Večino časa ostaja v svojem vrtu, med inštrumenti, ki so skozi desetletja soustvarjali zbirko.",
        "Le občasno in po predhodnem dogovoru lahko za določen čas postane del glasbene poti izbranega violinista. Na voljo je za izposojo. Takrat njena zgodba znova steče skozi nove interpretacije, koncertne odre, pomembne projekte in umetniška srečanja.",
        "Morda bo prav njen topel, sonoren glas navdihnil novo interpretacijo, pomemben nastop ali novo poglavje umetniške poti.",
        "Ko se to poglavje zaključi, se vrne tja, kamor pripada — v zbirko Violin Garden Collection, bogatejša za nov odmev in nov del svoje zgodbe.",
      ],
      en: [
        "Just as the red dahlia blooms anew each year, so too does Dahlia Rubra come alive again and again through music.",
        "Her story began long before she arrived at the Violin Garden. For decades she accompanied musicians, gathering their memories and storing within herself the echoes of their interpretations.",
        "Today she is part of the Violin Garden Collection, where every violin carries its own character, its own story and its own voice.",
        "Her story is not meant to end with a new owner, but to continue again and again through music. Most of the time she remains in her garden, among the instruments that have shaped the collection over the decades.",
        "Only occasionally, and by prior arrangement, may she become part of the musical journey of a chosen violinist for a time. She is available for rental. Then her story flows once more through new interpretations, concert stages, important projects and artistic encounters.",
        "Perhaps it will be her warm, sonorous voice that inspires a new interpretation, an important performance or a new chapter of an artistic path.",
        "When that chapter comes to a close, she returns where she belongs — to the Violin Garden Collection, richer for a new echo and a new part of her story.",
      ],
    },
  },
  {
    id: "helianthus-aureus",
    name: "Helianthus Aureus",
    origin: { sl: "Evropska šola", en: "European school" },
    year: { sl: "1931", en: "1931" },
    flowerVariant: 6,
    intro: {
      sl: "Topel, poln in prijeten ton s sončnim značajem in muzikalnim ravnovesjem skozi vse registre.",
      en: "A warm, full and pleasant tone with a sunny character and musical balance across all registers.",
    },
    description: {
      sl: "Kakovostna violina polne velikosti (4/4) z etiketo Paolo Leonori (Roma 1931) – izrazito sončnega značaja, s čudovitim zlatim sončničnim lakom in toplim, muzikalnim zvenom.",
      en: "A quality full-size (4/4) violin labelled Paolo Leonori (Rome 1931) — markedly sunny in character, with a magnificent golden sunflower varnish and a warm, musical sound.",
    },
    status: "sale",
    options: ["nakup", "preizkus"],
    price: { sl: "2.500 €", en: "€2,500" },

    maker: { sl: "etiketa Paolo Leonori, Roma 1931", en: "Paolo Leonori label, Rome 1931" },
    size: "4/4",
    illustration: "/images/violins/helianthus-aureus/helianthus-aureus-ilustracija.webp",
    photos: [
      "/images/violins/helianthus-aureus/helianthus-aureus-spredaj.webp",
      "/images/violins/helianthus-aureus/helianthus-aureus-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot sončnica tudi Helianthus Aureus sledi svetlobi.",
      en: "Like a sunflower, Helianthus Aureus follows the light.",
    },
    descriptionParas: {
      sl: [
        "Njena zlata podoba, sončnični lak in topel, prijeten glas ustvarjajo občutek vedrine, topline in naravne elegance. Je inštrument, ki ne očara le z videzom, temveč tudi z zvočno iskrenostjo in muzikalnostjo.",
        "Kakovostna violina polne velikosti (4/4) združuje privlačno estetsko podobo z muzikalnim in uravnoteženim zvenom. Inštrument odlikuje izrazito sončen značaj, ki ga poudarja čudovit zlat sončnični lak, zaradi katerega violina izstopa tako vizualno kot zvočno.",
        "Lepo izbran resonančni les omogoča prijeten odziv pod lokom in naravno projekcijo tona. Zvok je topel, mehak in prijazen, z dovolj nosilnosti za samostojno igranje, hkrati pa ostaja poslušalcu blizu in prijeten.",
        "Njena največja odlika je prav njena barva tona. Helianthus Aureus premore topel, poln in prijeten zvok, ki združuje mehkobo, muzikalnost in lepo zvočno ravnovesje skozi vse registre. Inštrument se odziva zanesljivo in omogoča sproščeno, naravno muziciranje.",
        "Violina je bila strokovno pregledana, nastavljena in urejena pri goslarskem mojstru ter je pripravljena za takojšnje igranje.",
        "Inštrument ima tudi cenitveni certifikat priznane dunajske goslarke Gerlinde Reutterer.",
        "Primerna je za dijake konservatorijev, študente glasbenih akademij ter naprednejše učence glasbenih šol, ki iščejo kakovosten evropski inštrument s toplim, prijetnim in muzikalnim značajem. S svojo zanesljivostjo, uravnoteženim odzivom in prijetno zvočno barvo predstavlja odlično izbiro za vsakodnevni študij, nastope in nadaljnji umetniški razvoj.",
      ],
      en: [
        "Its golden appearance, sunflower varnish and warm, pleasant voice create a feeling of brightness, warmth and natural elegance. It is an instrument that enchants not only by its looks, but also by its tonal sincerity and musicality.",
        "This quality full-size (4/4) violin combines an attractive appearance with a musical, balanced sound. The instrument is distinguished by a markedly sunny character, emphasised by a magnificent golden sunflower varnish that makes the violin stand out both visually and tonally.",
        "Beautifully selected tonewood allows a pleasant response under the bow and a natural projection of tone. The sound is warm, soft and friendly, with enough carrying power for solo playing, while remaining close and pleasant to the listener.",
        "Its greatest quality is precisely its tone colour. Helianthus Aureus possesses a warm, full and pleasant sound that combines softness, musicality and a fine tonal balance across all registers. The instrument responds reliably and allows relaxed, natural music-making.",
        "The violin has been professionally inspected, set up and adjusted by a master luthier and is ready for immediate playing.",
        "The instrument also comes with an appraisal certificate from the renowned Viennese luthier Gerlinde Reutterer.",
        "It suits conservatory students, students of music academies and advanced students of music schools seeking a quality European instrument with a warm, pleasant and musical character. With its reliability, balanced response and pleasant tone colour, it is an excellent choice for everyday study, performances and further artistic development.",
      ],
    },
    statusNote: {
      sl: "Violina je del zbirke Violin Garden Collection in trenutno išče svoj novi dom.",
      en: "The violin is part of the Violin Garden Collection and is currently seeking its new home.",
    },
    ctaParas: {
      sl: [
        "Tako kot sončnica vsak dan znova obrača svoj cvet proti soncu, tudi Helianthus Aureus čaka na glasbenika, ki bo v njej prebudil nove zgodbe.",
        "Njena pot ni več vezana le na zbirko, temveč na prihodnje koncerte, nastope, tekmovanja, študij in glasbene trenutke, ki jih bo ustvarjala skupaj z novim lastnikom.",
        "Morda bo spremljala prve pomembne nastope, sprejemne izpite, koncerte ali preprosto vsakodnevno veselje do igranja. Morda bo ravno njen topel glas navdihnil novo interpretacijo, nov umetniški korak ali novo poglavje vaše glasbene poti.",
        "Kot sončnica prinaša svetlobo v vrt, tako Helianthus Aureus prinaša toplino v glasbo.",
        "Za podrobnejše informacije ali dogovor za osebni preizkus izpolnite kontaktni obrazec — z veseljem vam bomo inštrument predstavili in odgovorili na vsa vprašanja.",
      ],
      en: [
        "Just as a sunflower turns its bloom toward the sun anew each day, so too does Helianthus Aureus await a musician who will awaken new stories within her.",
        "Her path is no longer bound to the collection alone, but to future concerts, performances, competitions, study and musical moments she will create together with her new owner.",
        "Perhaps she will accompany first important performances, entrance exams, concerts or simply the everyday joy of playing. Perhaps it will be her warm voice that inspires a new interpretation, a new artistic step or a new chapter of your musical path.",
        "As the sunflower brings light to the garden, so Helianthus Aureus brings warmth to music.",
        "For more detailed information or to arrange a personal trial, fill in the contact form — we will gladly present the instrument and answer all your questions.",
      ],
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
    price: v.price?.[lang],
    maker: v.maker?.[lang],
    size: v.size,
    illustration: v.illustration,
    photos: v.photos,
    lead: v.lead?.[lang],
    descriptionParas: v.descriptionParas?.[lang],
    specs: v.specs?.map((s) => ({ label: s.label[lang], value: s.value[lang] })),
    statusNote: v.statusNote?.[lang],
    ctaParas: v.ctaParas?.[lang],
  };
}
