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

// Začasni (placeholder) podatki — nadomestimo z resničnimi, ko jih prejmemo od Inge.
export const violins: Violin[] = [
  {
    id: "rosa-alba",
    name: "Rosa Alba",
    origin: { sl: "Italijanska violina", en: "Italian violin", de: "Italienische Geige" },
    year: { sl: "", en: "", de: "" },
    flowerVariant: 0,
    intro: {
      sl: "Eleganten, odprt in nosilen ton z izrazitim značajem.",
      en: "An elegant, open and carrying tone with a distinctive character.",
      de: "Ein eleganter, offener und tragfähiger Ton mit ausgeprägtem Charakter.",
    },
    description: {
      sl: "Elegantna violina polne velikosti (4/4) z etiketo Natale Carletti »Fu Carlo«, ki združuje privlačno estetsko podobo s krasnimi zvočnimi lastnostmi.",
      en: "An elegant full-size (4/4) violin labelled Natale Carletti “Fu Carlo”, combining an attractive appearance with beautiful tonal qualities.",
      de: "Eine elegante Geige in ganzer Größe (4/4) mit dem Etikett Natale Carletti »Fu Carlo«, die ein ansprechendes Erscheinungsbild mit wunderschönen klanglichen Eigenschaften verbindet.",
    },
    status: "sale",
    options: ["nakup", "izposoja", "preizkus"],
    maker: { sl: "Natale Carletti »Fu Carlo«", en: "Natale Carletti “Fu Carlo”", de: "Natale Carletti »Fu Carlo«" },
    size: "4/4",
    illustration: "/images/violins/rosa-alba/rosa-alba-ilustracija.webp",
    photos: [
      "/images/violins/rosa-alba/rosa-alba-spredaj.webp",
      "/images/violins/rosa-alba/rosa-alba-zadaj.webp",
    ],
    descriptionParas: {
      sl: [
        "Ta elegantna violina polne velikosti (4/4) nosi etiketo Natale Carletti »Fu Carlo« in združuje privlačno estetsko podobo s krasnimi zvočnimi lastnostmi.",
        "Inštrument odlikuje dvodelna smrekova zgornja plošča s srednje širokimi do širokimi letnicami ter dvodelen javorjev hrbet z nežnimi, ozkimi plamenicami. Svetlo rjav originalni lak lepo poudari naravno strukturo lesa in daje inštrumentu topel, plemenit videz.",
        "Violina je v dobrem splošnem stanju in ponuja odprt, nosilen ton z lepo projekcijo. Primerna je za naprednejše učence glasbenih šol, konservatorijev in violiniste, ki iščejo kakovosten evropski inštrument z izrazitim značajem.",
      ],
      en: [
        "This elegant full-size (4/4) violin bears the label Natale Carletti “Fu Carlo” and combines an attractive appearance with beautiful tonal qualities.",
        "The instrument features a two-piece spruce top with medium to wide grain and a two-piece maple back with fine, narrow flames. The original light-brown varnish beautifully highlights the natural structure of the wood and gives the instrument a warm, noble look.",
        "The violin is in good overall condition and offers an open, carrying tone with fine projection. It suits advanced students of music schools and conservatories, as well as violinists seeking a quality European instrument with a distinctive character.",
      ],
      de: [
        "Diese elegante Geige in ganzer Größe (4/4) trägt das Etikett Natale Carletti »Fu Carlo« und verbindet ein ansprechendes Erscheinungsbild mit wunderschönen klanglichen Eigenschaften.",
        "Das Instrument zeichnet sich durch eine zweiteilige Fichtendecke mit mittleren bis breiten Jahresringen sowie einen zweiteiligen Ahornboden mit feiner, schmaler Flammung aus. Der hellbraune Originallack betont auf schöne Weise die natürliche Struktur des Holzes und verleiht dem Instrument ein warmes, edles Aussehen.",
        "Die Geige ist in gutem Gesamtzustand und bietet einen offenen, tragfähigen Ton mit schöner Projektion. Sie eignet sich für fortgeschrittene Schülerinnen und Schüler von Musikschulen und Konservatorien sowie für Geigerinnen und Geiger, die ein hochwertiges europäisches Instrument mit ausgeprägtem Charakter suchen.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size", de: "Größe" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)", de: "4/4 (ganze Größe)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length", de: "Korpuslänge" }, value: { sl: "360 mm", en: "360 mm", de: "360 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout", de: "Oberbug" }, value: { sl: "167,5 mm", en: "167.5 mm", de: "167,5 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout", de: "Mittelbug" }, value: { sl: "114 mm", en: "114 mm", de: "114 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout", de: "Unterbug" }, value: { sl: "206 mm", en: "206 mm", de: "206 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate", de: "Decke" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece", de: "Fichte, zweiteilig" } },
      { label: { sl: "Hrbet", en: "Back", de: "Boden" }, value: { sl: "javor, dvodelen", en: "maple, two-piece", de: "Ahorn, zweiteilig" } },
      { label: { sl: "Stranice", en: "Ribs", de: "Zargen" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Polž", en: "Scroll", de: "Schnecke" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Lak", en: "Varnish", de: "Lack" }, value: { sl: "originalni svetlo rjav", en: "original light brown", de: "original hellbraun" } },
    ],
    statusNote: {
      sl: "Violina je naprodaj pod ugodnimi pogoji.",
      en: "The violin is for sale on favourable terms.",
      de: "Die Geige wird zu günstigen Konditionen verkauft.",
    },
  },
  {
    id: "azalea-aurea",
    name: "Azalea Aurea",
    origin: { sl: "Nemško-bohemska violina", en: "German-Bohemian violin", de: "Deutsch-böhmische Geige" },
    year: { sl: "okoli leta 1900", en: "c. 1900", de: "um 1900" },
    flowerVariant: 1,
    intro: {
      sl: "Topel jantarno-rjav ton z dušo in izrazitim karakterjem.",
      en: "A warm amber-brown tone with soul and a distinctive character.",
      de: "Ein warmer bernsteinbrauner Ton mit Seele und ausgeprägtem Charakter.",
    },
    description: {
      sl: "Zanimiva violina polne velikosti (4/4) iz tradicije nemško-bohemske goslarske šole, ki s svojo naravno patino in toplim videzom izžareva brezčasno eleganco.",
      en: "An intriguing full-size (4/4) violin from the German-Bohemian lutherie tradition, radiating timeless elegance with its natural patina and warm appearance.",
      de: "Eine reizvolle Geige in ganzer Größe (4/4) aus der Tradition der deutsch-böhmischen Geigenbauschule, die mit ihrer natürlichen Patina und ihrem warmen Erscheinungsbild zeitlose Eleganz ausstrahlt.",
    },
    status: "sale",
    options: ["nakup", "izposoja", "preizkus"],
    maker: { sl: "Maurenkirchen – Bohemia šola", en: "Maurenkirchen – Bohemian school", de: "Maurenkirchen – böhmische Schule" },
    size: "4/4",
    illustration: "/images/violins/azalea-aurea/azalea-aurea-ilustracija.webp",
    photos: [
      "/images/violins/azalea-aurea/azalea-aurea-spredaj.webp",
      "/images/violins/azalea-aurea/azalea-aurea-zadaj.webp",
    ],
    lead: {
      sl: "Zlata muza",
      en: "Golden muse",
      de: "Goldene Muse",
    },
    descriptionParas: {
      sl: [
        "Ta zanimiva violina polne velikosti (4/4) prihaja iz tradicije nemško-bohemske goslarske šole, ki je konec 19. in v začetku 20. stoletja ustvarila številne kakovostne koncertne in študijske inštrumente.",
        "Inštrument nosi sledove bogate glasbene zgodovine in kljub odsotnosti etikete izžareva značaj stare evropske goslarske tradicije. Privlači s svojo naravno patino, toplim videzom in brezčasno eleganco.",
        "Odlikuje jo lepo oblikovan korpus z dvodelno smrekovo zgornjo ploščo ter dvodelnim javorjevim hrbtom, ki ga krasijo nežne vodoravne plamenice. Topel jantarno-rjav originalni lak poudarja naravno lepoto lesa in daje inštrumentu plemenit, zrel značaj.",
        "Dolgoletna uporaba je violini vtisnila posebno osebnost, ki jo je mogoče začutiti že na prvi pogled. Takšni inštrumenti pogosto skrivajo zgodbe generacij glasbenikov in predstavljajo zanimivo izbiro za violiniste, ki iščejo inštrument z dušo in izrazitim karakterjem.",
      ],
      en: [
        "This intriguing full-size (4/4) violin comes from the German-Bohemian lutherie tradition, which produced many quality concert and study instruments in the late 19th and early 20th centuries.",
        "The instrument bears the traces of a rich musical history and, despite the absence of a label, radiates the character of the old European lutherie tradition. It attracts with its natural patina, warm look and timeless elegance.",
        "It features a beautifully shaped body with a two-piece spruce top and a two-piece maple back adorned with fine horizontal flames. The warm amber-brown original varnish emphasises the natural beauty of the wood and gives the instrument a noble, mature character.",
        "Years of use have imparted a special personality to the violin, one that can be felt at first sight. Such instruments often hold the stories of generations of musicians and are an appealing choice for violinists seeking an instrument with soul and a distinctive character.",
      ],
      de: [
        "Diese reizvolle Geige in ganzer Größe (4/4) stammt aus der Tradition der deutsch-böhmischen Geigenbauschule, die im späten 19. und frühen 20. Jahrhundert zahlreiche hochwertige Konzert- und Studieninstrumente hervorgebracht hat.",
        "Das Instrument trägt die Spuren einer reichen Musikgeschichte und strahlt trotz fehlenden Etiketts den Charakter der alten europäischen Geigenbautradition aus. Es besticht durch seine natürliche Patina, sein warmes Aussehen und seine zeitlose Eleganz.",
        "Es zeichnet sich durch einen schön geformten Korpus mit zweiteiliger Fichtendecke und einem zweiteiligen Ahornboden aus, der von feinen waagerechten Flammen geziert wird. Der warme bernsteinbraune Originallack hebt die natürliche Schönheit des Holzes hervor und verleiht dem Instrument einen edlen, reifen Charakter.",
        "Der langjährige Gebrauch hat der Geige eine besondere Persönlichkeit verliehen, die schon auf den ersten Blick spürbar ist. Solche Instrumente bergen oft die Geschichten ganzer Generationen von Musikern und sind eine reizvolle Wahl für Geigerinnen und Geiger, die ein Instrument mit Seele und ausgeprägtem Charakter suchen.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size", de: "Größe" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)", de: "4/4 (ganze Größe)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length", de: "Korpuslänge" }, value: { sl: "362 mm", en: "362 mm", de: "362 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout", de: "Oberbug" }, value: { sl: "166 mm", en: "166 mm", de: "166 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout", de: "Mittelbug" }, value: { sl: "112 mm", en: "112 mm", de: "112 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout", de: "Unterbug" }, value: { sl: "206 mm", en: "206 mm", de: "206 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate", de: "Decke" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece", de: "Fichte, zweiteilig" } },
      { label: { sl: "Hrbet", en: "Back", de: "Boden" }, value: { sl: "javor, dvodelen", en: "maple, two-piece", de: "Ahorn, zweiteilig" } },
      { label: { sl: "Stranice", en: "Ribs", de: "Zargen" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Polž", en: "Scroll", de: "Schnecke" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Lak", en: "Varnish", de: "Lack" }, value: { sl: "originalni jantarno-rjav", en: "original amber-brown", de: "original bernsteinbraun" } },
      { label: { sl: "Etiketa", en: "Label", de: "Etikett" }, value: { sl: "brez vidne etikete", en: "no visible label", de: "kein sichtbares Etikett" } },
      { label: { sl: "Stanje", en: "Condition", de: "Zustand" }, value: { sl: "dobro splošno stanje, igralen", en: "good overall condition, playable", de: "guter Gesamtzustand, spielbereit" } },
    ],
    statusNote: { sl: "Violina je naprodaj.", en: "The violin is for sale.", de: "Die Geige steht zum Verkauf." },
  },
  {
    id: "paeonia-regia",
    name: "Paeonia Regia",
    origin: { sl: "Evropska šola", en: "European school", de: "Europäische Schule" },
    year: { sl: "okoli leta 1900", en: "c. 1900", de: "um 1900" },
    flowerVariant: 2,
    intro: {
      sl: "Bogata barva, zrel ton in plemenita prisotnost.",
      en: "Rich colour, a mature tone and a noble presence.",
      de: "Satte Farbe, ein reifer Ton und eine edle Präsenz.",
    },
    description: {
      sl: "Elegantna violina polne velikosti (4/4) z etiketo Pietro Pallotta, kakovosten evropski inštrument iz obdobja okoli leta 1900, ki se zgleduje po klasičnih italijanskih vzorih.",
      en: "An elegant full-size (4/4) violin bearing a Pietro Pallotta label — a quality European instrument from around 1900, modelled on classic Italian patterns.",
      de: "Eine elegante Geige in ganzer Größe (4/4) mit einem Pietro-Pallotta-Etikett — ein hochwertiges europäisches Instrument aus der Zeit um 1900, das sich an klassischen italienischen Vorbildern orientiert.",
    },
    status: "sale",
    options: ["nakup", "izposoja", "preizkus"],
    maker: { sl: "etiketa Pietro Pallotta", en: "Pietro Pallotta label", de: "Pietro-Pallotta-Etikett" },
    size: "4/4",
    illustration: "/images/violins/paeonia-regia/paeonia-regia-ilustracija.webp",
    photos: [
      "/images/violins/paeonia-regia/paeonia-regia-spredaj.webp",
      "/images/violins/paeonia-regia/paeonia-regia-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot kraljevska potonika tudi Paeonia Regia očara s svojo bogato barvo, izrazito osebnostjo in plemenito prisotnostjo.",
      en: "Like a royal peony, Paeonia Regia enchants with its rich colour, distinctive personality and noble presence.",
      de: "Wie eine königliche Pfingstrose bezaubert auch Paeonia Regia mit ihrer satten Farbe, ihrer ausgeprägten Persönlichkeit und ihrer edlen Präsenz.",
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
      de: [
        "Diese elegante Geige in ganzer Größe (4/4) trägt das Etikett Pietro Pallotta fece l'anno 1795 N.26 Perugia. Nach Verarbeitung und verwendeten Materialien handelt es sich um ein hochwertiges europäisches Instrument aus der Zeit um 1900, das sich an der Tradition klassischer italienischer Vorbilder orientiert.",
        "Das Instrument zeichnet sich durch eine zweiteilige Fichtendecke und einen schön geflammten zweiteiligen Ahornboden aus. Der warme rotbraune Lack hebt die natürliche Schönheit des Holzes hervor und verleiht der Geige einen ausgeprägten, edlen Charakter.",
        "Die Geige trägt das Echo einer langen musikalischen Reise in sich, mit elegantem Aussehen und ansprechendem Erscheinungsbild. Sie vereint eine reiche visuelle Präsenz mit einem reifen, charaktervollen Ton und ist damit eine ausgezeichnete Wahl für Geigerinnen und Geiger aller Generationen.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size", de: "Größe" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)", de: "4/4 (ganze Größe)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length", de: "Korpuslänge" }, value: { sl: "358 mm", en: "358 mm", de: "358 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout", de: "Oberbug" }, value: { sl: "169 mm", en: "169 mm", de: "169 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout", de: "Mittelbug" }, value: { sl: "116 mm", en: "116 mm", de: "116 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout", de: "Unterbug" }, value: { sl: "207 mm", en: "207 mm", de: "207 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate", de: "Decke" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece", de: "Fichte, zweiteilig" } },
      { label: { sl: "Hrbet", en: "Back", de: "Boden" }, value: { sl: "javor, dvodelen", en: "maple, two-piece", de: "Ahorn, zweiteilig" } },
      { label: { sl: "Stranice", en: "Ribs", de: "Zargen" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Polž", en: "Scroll", de: "Schnecke" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Lak", en: "Varnish", de: "Lack" }, value: { sl: "originalni rdeče-rjav", en: "original red-brown", de: "original rotbraun" } },
      { label: { sl: "Etiketa", en: "Label", de: "Etikett" }, value: { sl: "Pietro Pallotta", en: "Pietro Pallotta", de: "Pietro Pallotta" } },
    ],
    statusNote: { sl: "Violina je naprodaj.", en: "The violin is for sale.", de: "Die Geige steht zum Verkauf." },
  },
  {
    id: "amaryllis-regia",
    name: "Amaryllis Regia",
    origin: { sl: "Švedska mojstrska violina", en: "Swedish master violin", de: "Schwedische Meistergeige" },
    year: { sl: "1962", en: "1962", de: "1962" },
    flowerVariant: 3,
    intro: {
      sl: "Odprt, nosilen in zrel ton z močnim koncertnim značajem.",
      en: "An open, carrying and mature tone with a strong concert character.",
      de: "Ein offener, tragfähiger und reifer Ton mit ausgeprägtem Konzertcharakter.",
    },
    description: {
      sl: "Mojstrska violina polne velikosti (4/4) z etiketo Birger Nilsson, izdelana leta 1962 v švedskem mestu Ystad — kakovostna severnoevropska goslarska tradicija z izjemno odprtim, nosilnim tonom.",
      en: "A full-size (4/4) master violin labelled Birger Nilsson, made in 1962 in Ystad, Sweden — quality Northern European lutherie with an exceptionally open, carrying tone.",
      de: "Eine Meistergeige in ganzer Größe (4/4) mit dem Etikett Birger Nilsson, gebaut 1962 im schwedischen Ystad — hochwertige nordeuropäische Geigenbautradition mit einem außergewöhnlich offenen, tragfähigen Ton.",
    },
    status: "rent",
    options: ["izposoja", "preizkus"],

    maker: { sl: "Birger Nilsson, Ystad", en: "Birger Nilsson, Ystad", de: "Birger Nilsson, Ystad" },
    size: "4/4",
    illustration: "/images/violins/amaryllis-regia/amaryllis-regia-ilustracija.webp",
    photos: [
      "/images/violins/amaryllis-regia/amaryllis-regia-spredaj.webp",
      "/images/violins/amaryllis-regia/amaryllis-regia-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot kraljevski amarilis tudi Amaryllis Regia očara z veličastno pojavnostjo, žarečo lepoto in izrazitim značajem.",
      en: "Like a royal amaryllis, Amaryllis Regia enchants with its majestic appearance, radiant beauty and distinctive character.",
      de: "Wie ein königlicher Amaryllis bezaubert auch Amaryllis Regia mit majestätischer Erscheinung, strahlender Schönheit und ausgeprägtem Charakter.",
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
      de: [
        "Diese Meistergeige in ganzer Größe (4/4), 1962 im schwedischen Ystad gebaut, trägt das Etikett Birger Nilsson. Das Instrument verbindet die hochwertige nordeuropäische Geigenbautradition mit einem außergewöhnlich offenen, tragfähigen und reifen Ton.",
        "Die Geige zeichnet sich durch eine zweiteilige Fichtendecke und einen zweiteiligen Ahornboden mit feiner bis mittelstark ausgeprägter Flammung aus. Besondere Aufmerksamkeit erregt ihr lebendiger rot-bernsteinfarbener Originallack, der dem Instrument Wärme, Glanz und einen unverkennbaren künstlerischen Charakter verleiht.",
        "Das Modell der Geige ist etwas breiter und robuster, was zu einem reichen Klangbild, ausgezeichneter Projektion und einer Ausgewogenheit aller Register beiträgt. Das Instrument besticht durch eine klare Ansprache, einen vollen Ton und ein verlässliches Spiel sowohl im Kammermusikspiel als auch auf der Konzertbühne.",
        "Wie die Blüte des königlichen Amaryllis bleibt auch diese Geige nicht unbemerkt. Ihre klangliche Präsenz ist ausgeprägt und zugleich edel und elegant. Sie eignet sich für fortgeschrittene Musikschülerinnen und -schüler, Konservatoriums- und Akademiestudierende sowie Geigerinnen und Geiger, die ein hochwertiges europäisches Meisterinstrument mit ausgeprägtem Konzertcharakter suchen.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size", de: "Größe" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)", de: "4/4 (ganze Größe)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length", de: "Korpuslänge" }, value: { sl: "359 mm", en: "359 mm", de: "359 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout", de: "Oberbug" }, value: { sl: "169 mm", en: "169 mm", de: "169 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout", de: "Mittelbug" }, value: { sl: "115 mm", en: "115 mm", de: "115 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout", de: "Unterbug" }, value: { sl: "208 mm", en: "208 mm", de: "208 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate", de: "Decke" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece", de: "Fichte, zweiteilig" } },
      { label: { sl: "Hrbet", en: "Back", de: "Boden" }, value: { sl: "javor, dvodelen", en: "maple, two-piece", de: "Ahorn, zweiteilig" } },
      { label: { sl: "Stranice", en: "Ribs", de: "Zargen" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Polž", en: "Scroll", de: "Schnecke" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Lak", en: "Varnish", de: "Lack" }, value: { sl: "originalni rdeče-jantarni", en: "original red-amber", de: "original rot-bernsteinfarben" } },
      { label: { sl: "Leto izdelave", en: "Year made", de: "Baujahr" }, value: { sl: "1962", en: "1962", de: "1962" } },
      { label: { sl: "Goslar", en: "Luthier", de: "Geigenbauer" }, value: { sl: "Birger Nilsson", en: "Birger Nilsson", de: "Birger Nilsson" } },
      { label: { sl: "Kraj izdelave", en: "Place made", de: "Herstellungsort" }, value: { sl: "Ystad, Švedska", en: "Ystad, Sweden", de: "Ystad, Schweden" } },
    ],
    statusNote: {
      sl: "Violina je del zbirke Violin Garden Collection in je na voljo za dolgoročno ali projektno izposojo.",
      en: "The violin is part of the Violin Garden Collection and is available for long-term or project rental.",
      de: "Die Geige ist Teil der Violin Garden Collection und für eine langfristige Miete oder Projektmiete verfügbar.",
    },
    ctaParas: {
      sl: [
        "Kot cvet kraljevskega amarilisa, ki za kratek čas zasije v vsej svoji lepoti in nato ponovno počiva do naslednjega cvetenja, tudi ta violina lahko svojo zgodbo deli z glasbeniki, ki jo za določen čas sprejmejo v svoje roke.",
        "Ko bo njen čas z vami zaključen, se bo vrnila v svoj vrt, bogatejša za novo zgodbo, nove odrske trenutke in nove spomine.",
        "Za podrobnejši opis ali dogovor za osebni preizkus izpolnite kontaktni obrazec — z veseljem vam bomo inštrument predstavili in odgovorili na vsa vprašanja.",
      ],
      en: [
        "Like the flower of the royal amaryllis, which shines for a short while in all its beauty and then rests again until the next bloom, this violin too can share its story with musicians who take it into their hands for a time.",
        "When her time with you comes to an end, she will return to her garden, richer for a new story, new moments on stage and new memories.",
        "For a more detailed description or to arrange a personal trial, fill in the contact form — we will gladly present the instrument and answer all your questions.",
      ],
      de: [
        "Wie die Blüte des königlichen Amaryllis, die für kurze Zeit in ihrer ganzen Schönheit erstrahlt und dann bis zur nächsten Blüte wieder ruht, kann auch diese Geige ihre Geschichte mit Musikern teilen, die sie für eine bestimmte Zeit in ihre Hände nehmen.",
        "Wenn ihre Zeit mit Ihnen zu Ende geht, kehrt sie in ihren Garten zurück, reicher um eine neue Geschichte, neue Momente auf der Bühne und neue Erinnerungen.",
        "Für eine ausführlichere Beschreibung oder zur Vereinbarung eines persönlichen Probespiels füllen Sie bitte das Kontaktformular aus — wir stellen Ihnen das Instrument gerne vor und beantworten alle Ihre Fragen.",
      ],
    },
  },
  {
    id: "rosa-aurea",
    name: "Rosa Aurea",
    origin: { sl: "Nemška / saška šola", en: "German / Saxon school", de: "Deutsche / sächsische Schule" },
    year: { sl: "okoli 1890–1900", en: "c. 1890–1900", de: "um 1890–1900" },
    flowerVariant: 4,
    intro: {
      sl: "Bogat, odprt in nosilen solistični zvok.",
      en: "A rich, open and carrying solo sound.",
      de: "Ein reicher, offener und tragfähiger Solo-Klang.",
    },
    description: {
      sl: "Kakovostna violina polne velikosti (4/4), izdelana okoli leta 1900 v znameniti goslarski pokrajini Markneukirchen–Vogtland, ki predstavlja najboljše značilnosti pozne nemško-saške goslarske tradicije.",
      en: "A quality full-size (4/4) violin made around 1900 in the renowned lutherie region of Markneukirchen–Vogtland, showcasing the best features of the late German-Saxon lutherie tradition.",
      de: "Eine hochwertige Geige in ganzer Größe (4/4), um 1900 in der berühmten Geigenbauregion Markneukirchen–Vogtland gebaut, die die besten Merkmale der späten deutsch-sächsischen Geigenbautradition vereint.",
    },
    status: "collection",
    options: ["preizkus"],

    maker: { sl: "Markneukirchen – Vogtland", en: "Markneukirchen – Vogtland", de: "Markneukirchen – Vogtland" },
    size: "4/4",
    illustration: "/images/violins/rosa-aurea/rosa-aurea-ilustracija.webp",
    photos: [
      "/images/violins/rosa-aurea/rosa-aurea-spredaj.webp",
      "/images/violins/rosa-aurea/rosa-aurea-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot zlata vrtnica tudi Rosa Aurea očara s svojo toplino, plemenitostjo in žarečo prisotnostjo.",
      en: "Like a golden rose, Rosa Aurea enchants with its warmth, nobility and radiant presence.",
      de: "Wie eine goldene Rose bezaubert auch Rosa Aurea mit ihrer Wärme, ihrer Vornehmheit und ihrer strahlenden Präsenz.",
    },
    descriptionParas: {
      sl: [
        "Zlata vrtnica je plemenit cvet, ki olepšuje najbolj sončen del Violinskega vrta. Njeni zlato obarvani cvetovi simbolizirajo svetlobo, bogastvo duha, dostojanstvo in brezčasno lepoto. Tudi Rosa Aurea izstopa s svojo žlahtno podobo, bogatim tonom in izrazito koncertno prisotnostjo.",
        "Kakovostna violina polne velikosti (4/4), izdelana okoli leta 1900 v znameniti goslarski pokrajini Markneukirchen–Vogtland, predstavlja najboljše značilnosti pozne nemške oziroma saške goslarske tradicije. Inštrument združuje elegantno izdelavo, bogat zven in izrazito umetniško prepričljivost.",
        "Violino odlikuje lepo izbran resonančni les ter privlačen zlato-jantarni lak, ki poudarja njeno plemenito podobo. Model je uravnotežen in zrel, z elegantnimi linijami ter izrazito profesionalnim značajem.",
        "Njena največja odlika je ton. Rosa Aurea premore bogat, odprt in izjemno nosilen solistični zvok, ki se z lahkoto prebije skozi koncertni prostor. Ton je poln, plemenit in barvito razgiban, z lepim ravnovesjem med toplino in projekcijo. Inštrument se odziva hitro in zanesljivo ter omogoča širok izrazni razpon.",
        "Gre za violino z izrazitim umetniškim značajem, ki nagrajuje zrelo tehniko in muzikalnost. Primerna je za profesionalne violiniste, študente glasbenih akademij, dijake konservatorijev ter vse, ki iščejo kakovosten evropski inštrument z vrhunskim koncertnim potencialom.",
      ],
      en: [
        "The golden rose is a noble bloom that adorns the sunniest part of the Violin Garden. Its golden flowers symbolise light, richness of spirit, dignity and timeless beauty. Rosa Aurea, too, stands out with its noble appearance, rich tone and distinctive concert presence.",
        "A quality full-size (4/4) violin made around 1900 in the renowned lutherie region of Markneukirchen–Vogtland, it embodies the best features of the late German or Saxon lutherie tradition. The instrument combines elegant craftsmanship, a rich sound and striking artistic conviction.",
        "It is distinguished by beautifully selected tonewood and an attractive golden-amber varnish that emphasises its noble appearance. The model is balanced and mature, with elegant lines and a distinctly professional character.",
        "Its greatest quality is the tone. Rosa Aurea possesses a rich, open and exceptionally carrying solo sound that easily cuts through a concert hall. The tone is full, noble and colourfully varied, with a fine balance between warmth and projection. The instrument responds quickly and reliably, allowing a wide expressive range.",
        "This is a violin with a distinctive artistic character that rewards mature technique and musicianship. It suits professional violinists, students of music academies, conservatory students and anyone seeking a quality European instrument with top concert potential.",
      ],
      de: [
        "Die goldene Rose ist eine edle Blüte, die den sonnigsten Teil des Geigengartens schmückt. Ihre goldfarbenen Blüten symbolisieren Licht, Reichtum des Geistes, Würde und zeitlose Schönheit. Auch Rosa Aurea hebt sich durch ihr edles Erscheinungsbild, ihren reichen Ton und ihre ausgeprägte Konzertpräsenz hervor.",
        "Eine hochwertige Geige in ganzer Größe (4/4), um 1900 in der berühmten Geigenbauregion Markneukirchen–Vogtland gebaut, verkörpert sie die besten Merkmale der späten deutschen bzw. sächsischen Geigenbautradition. Das Instrument verbindet elegante Verarbeitung, einen reichen Klang und eine eindrucksvolle künstlerische Überzeugungskraft.",
        "Die Geige zeichnet sich durch schön ausgewähltes Tonholz und einen attraktiven gold-bernsteinfarbenen Lack aus, der ihr edles Erscheinungsbild betont. Das Modell ist ausgewogen und reif, mit eleganten Linien und einem ausgesprochen professionellen Charakter.",
        "Ihre größte Stärke ist der Ton. Rosa Aurea besitzt einen reichen, offenen und außergewöhnlich tragfähigen Solo-Klang, der sich mühelos durch einen Konzertsaal durchsetzt. Der Ton ist voll, edel und farbenreich, mit einer schönen Balance zwischen Wärme und Projektion. Das Instrument spricht schnell und zuverlässig an und ermöglicht eine breite Ausdrucksspanne.",
        "Es handelt sich um eine Geige mit ausgeprägtem künstlerischem Charakter, die reife Technik und Musikalität belohnt. Sie eignet sich für professionelle Geigerinnen und Geiger, Studierende von Musikakademien, Konservatoriumsschülerinnen und -schüler sowie alle, die ein hochwertiges europäisches Instrument mit höchstem Konzertpotenzial suchen.",
      ],
    },
    statusNote: {
      sl: "Violina je del stalne zbirke Violin Garden Collection.",
      en: "The violin is part of the permanent Violin Garden Collection.",
      de: "Die Geige ist Teil der dauerhaften Violin Garden Collection.",
    },
    ctaEyebrow: { sl: "GLASBENA POT", en: "A MUSICAL JOURNEY", de: "EIN MUSIKALISCHER WEG" },
    ctaParas: {
      sl: [
        "Tako kot zlata vrtnica, violina Rosa Aurea ne sledi običajnim potem.",
        "Njen bogat, solistični glas pripada svetu koncertnega odra, umetniškega raziskovanja in glasbene zrelosti. Je del stalne zbirke Violin Garden Collection, kjer vsaka violina nosi svojo zgodbo, svoj značaj in svoj glas.",
        "Velikokrat je del različnih koncertnih projektov in se njena zgodba skozi glasbo vedno znova nadaljuje. Večino časa ostaja v svojem vrtu, med inštrumenti, ki so skozi desetletja soustvarjali zbirko.",
        "Le občasno in po posebnem dogovoru lahko za določen čas postane del glasbene poti izbranega violinista.",
      ],
      en: [
        "Like a golden rose, the Rosa Aurea violin does not follow the usual paths.",
        "Her rich, soloistic voice belongs to the world of the concert stage, artistic exploration and musical maturity. She is part of the permanent Violin Garden Collection, where every violin carries its own story, its own character and its own voice.",
        "She is often part of various concert projects, and her story continues again and again through music. Most of the time she remains in her garden, among the instruments that have shaped the collection over the decades.",
        "Only occasionally, and by special arrangement, may she become part of the musical journey of a chosen violinist for a time.",
      ],
      de: [
        "Wie eine goldene Rose folgt die Geige Rosa Aurea nicht den gewöhnlichen Wegen.",
        "Ihre reiche, solistische Stimme gehört der Welt der Konzertbühne, der künstlerischen Erkundung und der musikalischen Reife an. Sie ist Teil der dauerhaften Violin Garden Collection, in der jede Geige ihre eigene Geschichte, ihren eigenen Charakter und ihre eigene Stimme trägt.",
        "Oft ist sie Teil verschiedener Konzertprojekte, und ihre Geschichte setzt sich durch die Musik immer wieder fort. Die meiste Zeit bleibt sie in ihrem Garten, unter den Instrumenten, die die Sammlung über die Jahrzehnte mitgestaltet haben.",
        "Nur gelegentlich und nach besonderer Vereinbarung kann sie für eine bestimmte Zeit Teil des musikalischen Weges einer ausgewählten Geigerin oder eines ausgewählten Geigers werden.",
      ],
    },
  },
  {
    id: "dahlia-rubra",
    name: "Dahlia Rubra",
    origin: { sl: "Nemško-avstrijska violina", en: "German-Austrian violin", de: "Deutsch-österreichische Geige" },
    year: { sl: "okoli 1900–1930", en: "c. 1900–1930", de: "um 1900–1930" },
    flowerVariant: 5,
    intro: {
      sl: "Topel, sonoren in zaobljen ton z dušo in bogato glasbeno preteklostjo.",
      en: "A warm, sonorous and rounded tone with soul and a rich musical past.",
      de: "Ein warmer, sonorer und runder Ton mit Seele und einer reichen musikalischen Vergangenheit.",
    },
    description: {
      sl: "Kakovostna violina polne velikosti (4/4) iz tradicije srednjeevropskih goslarskih delavnic nemško-avstrijskega prostora (okoli 1900–1930), katere največja vrednost je v bogastvu njene glasbene preteklosti.",
      en: "A quality full-size (4/4) violin from the tradition of the Central European lutherie workshops of the German-Austrian region (c. 1900–1930), whose greatest value lies in the richness of its musical past.",
      de: "Eine hochwertige Geige in ganzer Größe (4/4) aus der Tradition der mitteleuropäischen Geigenbauwerkstätten des deutsch-österreichischen Raums (um 1900–1930), deren größter Wert im Reichtum ihrer musikalischen Vergangenheit liegt.",
    },
    status: "collection",
    options: ["izposoja", "preizkus"],

    maker: { sl: "Srednjeevropska goslarska delavnica", en: "Central European lutherie workshop", de: "Mitteleuropäische Geigenbauwerkstatt" },
    size: "4/4",
    illustration: "/images/violins/dahlia-rubra/dahlia-rubra-ilustracija.webp",
    photos: [
      "/images/violins/dahlia-rubra/dahlia-rubra-spredaj.webp",
      "/images/violins/dahlia-rubra/dahlia-rubra-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot rdeča dalija tudi Dahlia Rubra očara s svojo toplino, zrelostjo in bogato življenjsko zgodbo.",
      en: "Like a red dahlia, Dahlia Rubra enchants with its warmth, maturity and rich life story.",
      de: "Wie eine rote Dahlie bezaubert auch Dahlia Rubra mit ihrer Wärme, ihrer Reife und ihrer reichen Lebensgeschichte.",
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
      de: [
        "Die rote Dahlie ist eine Blume des Spätsommers, ein Sinnbild für Beharrlichkeit, innere Stärke und eine Schönheit, die mit der Zeit nicht verblasst, sondern sich vertieft. Ihre glühenden Töne von Rubin, Kupfer und Gold erinnern an die Wärme eines Sonnenuntergangs und an die kostbaren Spuren der Zeit, die jedem Ding einen eigenen Charakter verleihen.",
        "So verhält es sich auch mit dieser Geige — sie hebt sich durch ihre edle Patina, ihre warme und sonore Stimme und eine Geschichte hervor, die das Leben selbst über Jahrzehnte geschrieben hat. Eine hochwertige Geige in ganzer Größe (4/4), gebaut in der Tradition der mitteleuropäischen Geigenbauwerkstätten des deutsch-österreichischen Raums um 1900–1930, ist sie ein Instrument, dessen größter Wert nicht allein in der Verarbeitung liegt, sondern im Reichtum seiner musikalischen Vergangenheit.",
        "Die Geige zeichnet sich durch einen attraktiven rot-bernsteinfarbenen Lack aus, der in unterschiedlichem Licht zwischen Tönen von Rubin, Kupfer und Gold wechselt. Das Modell ist ausgewogen und elegant, mit schön geformten Linien und einem Charakter, der für hochwertige mitteleuropäische Instrumente der ersten Hälfte des 20. Jahrhunderts typisch ist.",
        "Ihre größte Besonderheit ist jedoch eine andere. Dahlia Rubra wurde viel gespielt. An ihr sind die Spuren der Zeit sichtbar, kleine Abnutzungen und eine natürliche Patina, die von Jahrzehnten musikalischen Lebens zeugen. Dies ist kein Instrument, das den größten Teil seines Daseins vergessen in einem Schrank oder eingeschlossen in einer Vitrine verbracht hat. Dies ist eine Geige, die ihren Zweck erfüllt hat.",
        "Sie war eine Begleiterin von Musikern. Ihre Kanten, ihr Lack und ihre Oberfläche erzählen die Geschichte unzähliger Proben, Auftritte, Konzerte und musikalischer Begegnungen. Jede Spur hat ihre Bedeutung, jede Abnutzung ihre eigene Geschichte.",
        "Genau darin liegt ihr besonderer Wert. Instrumente, die jahrzehntelang durch die Musik gelebt haben, entwickeln oft eine besondere klangliche Persönlichkeit. Über die langen Jahre der Schwingung reift das Holz, und der Ton wird weicher, voller und verbundener. Dahlia Rubra trägt genau diese Erfahrung in sich.",
        "Ihre größte Stärke ist der Ton. Dahlia Rubra besitzt einen warmen, sonoren und angenehm runden Klang, mit schöner Tiefe im mittleren Register und einer weichen, edlen Farbe, die den Zuhörer ohne Schärfe oder Aggressivität in ihren Bann zieht. Der Ton ist reif, sanglich und natürlich offen. Ihre Stimme sucht die Aufmerksamkeit nicht durch Kraft, sondern durch die Schönheit ihrer Klangfarbe, ihre Musikalität und ein Gefühl von Echtheit.",
        "Es ist eine Geige mit Seele — ein Instrument, das seine Geschichte nicht durch Vollkommenheit erzählt, sondern durch das Leben, das es in der Musik geführt hat.",
      ],
    },
    statusNote: {
      sl: "Violina je del stalne zbirke Violin Garden Collection.",
      en: "The violin is part of the permanent Violin Garden Collection.",
      de: "Die Geige ist Teil der dauerhaften Violin Garden Collection.",
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
      de: [
        "So wie die rote Dahlie jedes Jahr aufs Neue erblüht, erwacht auch Dahlia Rubra durch die Musik immer wieder zum Leben.",
        "Ihre Geschichte begann lange vor ihrer Ankunft im Geigengarten. Jahrzehntelang begleitete sie Musiker, sammelte ihre Erinnerungen und bewahrte in sich die Echos ihrer Interpretationen.",
        "Heute ist sie Teil der Violin Garden Collection, in der jede Geige ihren eigenen Charakter, ihre eigene Geschichte und ihre eigene Stimme trägt.",
        "Ihre Geschichte soll nicht mit einer neuen Besitzerin oder einem neuen Besitzer enden, sondern sich durch die Musik immer wieder fortsetzen. Die meiste Zeit bleibt sie in ihrem Garten, unter den Instrumenten, die die Sammlung über die Jahrzehnte mitgestaltet haben.",
        "Nur gelegentlich und nach vorheriger Vereinbarung kann sie für eine bestimmte Zeit Teil des musikalischen Weges einer ausgewählten Geigerin oder eines ausgewählten Geigers werden. Sie ist zur Miete verfügbar. Dann fließt ihre Geschichte erneut durch neue Interpretationen, Konzertbühnen, bedeutende Projekte und künstlerische Begegnungen.",
        "Vielleicht wird gerade ihre warme, sonore Stimme eine neue Interpretation, einen bedeutenden Auftritt oder ein neues Kapitel eines künstlerischen Weges inspirieren.",
        "Wenn dieses Kapitel zu Ende geht, kehrt sie dorthin zurück, wohin sie gehört — in die Violin Garden Collection, reicher um ein neues Echo und einen neuen Teil ihrer Geschichte.",
      ],
    },
  },
  {
    id: "helianthus-aureus",
    name: "Helianthus Aureus",
    origin: { sl: "Evropska šola", en: "European school", de: "Europäische Schule" },
    year: { sl: "1931", en: "1931", de: "1931" },
    flowerVariant: 6,
    intro: {
      sl: "Topel, poln in prijeten ton s sončnim značajem in muzikalnim ravnovesjem skozi vse registre.",
      en: "A warm, full and pleasant tone with a sunny character and musical balance across all registers.",
      de: "Ein warmer, voller und angenehmer Ton mit sonnigem Charakter und musikalischer Ausgewogenheit über alle Register.",
    },
    description: {
      sl: "Kakovostna violina polne velikosti (4/4) z etiketo Paolo Leonori (Roma 1931) – izrazito sončnega značaja, s čudovitim zlatim sončničnim lakom in toplim, muzikalnim zvenom.",
      en: "A quality full-size (4/4) violin labelled Paolo Leonori (Rome 1931) — markedly sunny in character, with a magnificent golden sunflower varnish and a warm, musical sound.",
      de: "Eine hochwertige Geige in ganzer Größe (4/4) mit dem Etikett Paolo Leonori (Rom 1931) — von ausgeprägt sonnigem Charakter, mit einem wunderschönen goldenen Sonnenblumenlack und einem warmen, musikalischen Klang.",
    },
    status: "sale",
    options: ["nakup", "preizkus"],
    maker: { sl: "etiketa Paolo Leonori, Roma 1931", en: "Paolo Leonori label, Rome 1931", de: "Paolo-Leonori-Etikett, Rom 1931" },
    size: "4/4",
    illustration: "/images/violins/helianthus-aureus/helianthus-aureus-ilustracija.webp",
    photos: [
      "/images/violins/helianthus-aureus/helianthus-aureus-spredaj.webp",
      "/images/violins/helianthus-aureus/helianthus-aureus-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot sončnica tudi Helianthus Aureus sledi svetlobi.",
      en: "Like a sunflower, Helianthus Aureus follows the light.",
      de: "Wie eine Sonnenblume folgt auch Helianthus Aureus dem Licht.",
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
      de: [
        "Ihr goldenes Erscheinungsbild, ihr Sonnenblumenlack und ihre warme, angenehme Stimme erzeugen ein Gefühl von Heiterkeit, Wärme und natürlicher Eleganz. Es ist ein Instrument, das nicht nur durch sein Aussehen bezaubert, sondern auch durch seine klangliche Aufrichtigkeit und Musikalität.",
        "Diese hochwertige Geige in ganzer Größe (4/4) verbindet ein ansprechendes Erscheinungsbild mit einem musikalischen, ausgewogenen Klang. Das Instrument zeichnet sich durch einen ausgeprägt sonnigen Charakter aus, der durch einen wunderschönen goldenen Sonnenblumenlack betont wird, der die Geige sowohl optisch als auch klanglich hervorhebt.",
        "Schön ausgewähltes Tonholz ermöglicht eine angenehme Ansprache unter dem Bogen und eine natürliche Projektion des Tons. Der Klang ist warm, weich und freundlich, mit genügend Tragkraft für das Solospiel und bleibt zugleich nah und angenehm für die Zuhörenden.",
        "Ihre größte Stärke ist gerade ihre Klangfarbe. Helianthus Aureus besitzt einen warmen, vollen und angenehmen Klang, der Weichheit, Musikalität und eine schöne klangliche Ausgewogenheit über alle Register verbindet. Das Instrument spricht zuverlässig an und ermöglicht ein entspanntes, natürliches Musizieren.",
        "Die Geige wurde von einem Geigenbaumeister fachgerecht überprüft, eingestellt und gerichtet und ist sofort spielbereit.",
        "Das Instrument verfügt zudem über ein Schätzgutachten der renommierten Wiener Geigenbauerin Gerlinde Reutterer.",
        "Sie eignet sich für Konservatoriumsschülerinnen und -schüler, Studierende von Musikakademien sowie fortgeschrittene Musikschülerinnen und -schüler, die ein hochwertiges europäisches Instrument mit warmem, angenehmem und musikalischem Charakter suchen. Mit ihrer Zuverlässigkeit, ihrer ausgewogenen Ansprache und ihrer angenehmen Klangfarbe ist sie eine ausgezeichnete Wahl für das tägliche Studium, für Auftritte und für die weitere künstlerische Entwicklung.",
      ],
    },
    statusNote: {
      sl: "Violina je del zbirke Violin Garden Collection in trenutno išče svoj novi dom.",
      en: "The violin is part of the Violin Garden Collection and is currently seeking its new home.",
      de: "Die Geige ist Teil der Violin Garden Collection und sucht derzeit ihr neues Zuhause.",
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
      de: [
        "So wie eine Sonnenblume ihre Blüte jeden Tag aufs Neue der Sonne zuwendet, so wartet auch Helianthus Aureus auf eine Musikerin oder einen Musiker, die in ihr neue Geschichten erwecken.",
        "Ihr Weg ist nicht mehr allein an die Sammlung gebunden, sondern an künftige Konzerte, Auftritte, Wettbewerbe, an das Studium und an musikalische Momente, die sie gemeinsam mit ihrer neuen Besitzerin oder ihrem neuen Besitzer gestalten wird.",
        "Vielleicht wird sie erste wichtige Auftritte, Aufnahmeprüfungen, Konzerte oder einfach die alltägliche Freude am Spielen begleiten. Vielleicht ist es gerade ihre warme Stimme, die eine neue Interpretation, einen neuen künstlerischen Schritt oder ein neues Kapitel Ihres musikalischen Weges inspiriert.",
        "Wie die Sonnenblume Licht in den Garten bringt, so bringt Helianthus Aureus Wärme in die Musik.",
        "Für nähere Informationen oder zur Vereinbarung eines persönlichen Probespiels füllen Sie bitte das Kontaktformular aus — wir stellen Ihnen das Instrument gerne vor und beantworten alle Ihre Fragen.",
      ],
    },
  },
  {
    id: "rosa-mystica",
    name: "Rosa Mystica",
    origin: { sl: "Evropska šola", en: "European school", de: "Europäische Schule" },
    year: { sl: "okoli 1850–1880", en: "c. 1850–1880", de: "um 1850–1880" },
    flowerVariant: 7,
    intro: {
      sl: "Globok, topel in temen ton z bogato resonanco in plemenito patino več kot 150 let starega lesa.",
      en: "A deep, warm and dark tone with rich resonance and the noble patina of wood more than 150 years old.",
      de: "Ein tiefer, warmer und dunkler Ton mit reicher Resonanz und der edlen Patina von über 150 Jahre altem Holz.",
    },
    description: {
      sl: "Star evropski inštrument polne velikosti (4/4), najverjetneje izdelan v Mittenwaldu v drugi polovici 19. stoletja, z globokim, žametnim tonom in izrazitim umetniškim videzom.",
      en: "An old full-size (4/4) European instrument, most likely made in Mittenwald in the second half of the 19th century, with a deep, velvety tone and a striking artistic appearance.",
      de: "Ein altes europäisches Instrument in ganzer Größe (4/4), höchstwahrscheinlich in der zweiten Hälfte des 19. Jahrhunderts in Mittenwald gebaut, mit einem tiefen, samtigen Ton und einem markanten künstlerischen Erscheinungsbild.",
    },
    status: "rent",
    options: ["izposoja", "preizkus"],

    maker: { sl: "etiketa Carlo Bergonzi (Cremona 1730)", en: "Carlo Bergonzi label (Cremona 1730)", de: "Carlo-Bergonzi-Etikett (Cremona 1730)" },
    size: "4/4",
    illustration: "/images/violins/rosa-mystica/rosa-mystica-ilustracija.webp",
    photos: [
      "/images/violins/rosa-mystica/rosa-mystica-spredaj.webp",
      "/images/violins/rosa-mystica/rosa-mystica-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot skrivnostna vrtnica tudi Rosa Mystica svojo pravo lepoto razkrije šele tistemu, ki ji prisluhne.",
      en: "Like a mystical rose, Rosa Mystica reveals her true beauty only to those who listen to her.",
      de: "Wie eine geheimnisvolle Rose offenbart auch Rosa Mystica ihre wahre Schönheit erst dem, der ihr lauscht.",
    },
    descriptionParas: {
      sl: [
        "Njena bogata jantarna patina, plemenita starost in globok, topel glas ustvarjajo občutek skrivnostnosti, elegance in brezčasne lepote. To je inštrument z značajem, ki nosi sledi mnogih desetletij muziciranja in pripoveduje svojo lastno zgodbo.",
        "Gre za star evropski inštrument polne velikosti (4/4), najverjetneje izdelan v Mittenwaldu na Bavarskem v drugi polovici 19. stoletja. Inštrument navdušuje z izrazitim umetniškim videzom in zrelim zvočnim značajem. Več kot stoletje in pol star les je razvil bogato resonanco, zaradi katere violina zveni mehko, žametno in polno.",
        "Njena največja odlika je globina tona. Rosa Mystica premore topel, temen in izrazno bogat zvok z lepo projekcijo skozi vse registre. Posebej očara v liričnih skladbah, kjer pride do izraza njena pevska kakovost in naravna muzikalnost.",
        "Inštrument odlikujejo lepo oblikovana resonančna smreka na zgornji plošči, enodelni javorjev hrbet z nežnim plamenom, eleganten jantarni lak ter harmonične proporcije, značilne za kakovostne srednjeevropske violine 19. stoletja.",
        "Na zgornji plošči je bila v preteklosti strokovno sanirana razpoka pod kobilico. Inštrument je stabilen in primeren za nadaljnje igranje.",
        "Inštrument je bil strokovno pregledan in pripravljen za nadaljnjo uporabo.",
        "Primeren je za violiniste, študente glasbenih akademij, zbiratelje ter vse, ki cenijo stare evropske inštrumente z izrazitim karakterjem. Zaradi svoje starosti, estetske lepote in zvočne zrelosti predstavlja zanimivo izbiro tako za koncertno uporabo kot tudi za zbirko.",
      ],
      en: [
        "Its rich amber patina, noble age and deep, warm voice create a feeling of mystery, elegance and timeless beauty. This is an instrument with character, bearing the traces of many decades of music-making and telling its own story.",
        "It is an old full-size (4/4) European instrument, most likely made in Mittenwald in Bavaria in the second half of the 19th century. The instrument impresses with its striking artistic appearance and mature tonal character. Wood more than a century and a half old has developed a rich resonance that makes the violin sound soft, velvety and full.",
        "Its greatest quality is the depth of its tone. Rosa Mystica possesses a warm, dark and expressively rich sound with fine projection across all registers. It is especially enchanting in lyrical works, where its singing quality and natural musicality come to the fore.",
        "The instrument is distinguished by a beautifully shaped resonant spruce top, a one-piece maple back with a gentle flame, an elegant amber varnish and harmonious proportions typical of quality Central European violins of the 19th century.",
        "A crack under the bridge on the top plate was professionally repaired in the past. The instrument is stable and suitable for further playing.",
        "The instrument has been professionally inspected and prepared for further use.",
        "It suits violinists, students of music academies, collectors and all who appreciate old European instruments with a distinctive character. By virtue of its age, aesthetic beauty and tonal maturity, it is an appealing choice both for concert use and for a collection.",
      ],
      de: [
        "Ihre reiche bernsteinfarbene Patina, ihr edles Alter und ihre tiefe, warme Stimme erzeugen ein Gefühl von Geheimnis, Eleganz und zeitloser Schönheit. Dies ist ein Instrument mit Charakter, das die Spuren vieler Jahrzehnte des Musizierens trägt und seine eigene Geschichte erzählt.",
        "Es handelt sich um ein altes europäisches Instrument in ganzer Größe (4/4), höchstwahrscheinlich in der zweiten Hälfte des 19. Jahrhunderts in Mittenwald in Bayern gebaut. Das Instrument beeindruckt durch sein markantes künstlerisches Erscheinungsbild und seinen reifen klanglichen Charakter. Das über anderthalb Jahrhunderte alte Holz hat eine reiche Resonanz entwickelt, durch die die Geige weich, samtig und voll klingt.",
        "Ihre größte Stärke ist die Tiefe ihres Tons. Rosa Mystica besitzt einen warmen, dunklen und ausdrucksstarken Klang mit schöner Projektion über alle Register. Besonders bezaubert sie in lyrischen Werken, in denen ihre sangliche Qualität und ihre natürliche Musikalität zur Geltung kommen.",
        "Das Instrument zeichnet sich durch eine schön geformte resonante Fichtendecke, einen einteiligen Ahornboden mit zarter Flammung, einen eleganten bernsteinfarbenen Lack und harmonische Proportionen aus, wie sie für hochwertige mitteleuropäische Geigen des 19. Jahrhunderts typisch sind.",
        "An der Decke wurde in der Vergangenheit ein Riss unter dem Steg fachgerecht saniert. Das Instrument ist stabil und für das weitere Spiel geeignet.",
        "Das Instrument wurde fachgerecht überprüft und für die weitere Verwendung vorbereitet.",
        "Es eignet sich für Geigerinnen und Geiger, Studierende von Musikakademien, Sammler sowie alle, die alte europäische Instrumente mit ausgeprägtem Charakter schätzen. Aufgrund seines Alters, seiner ästhetischen Schönheit und seiner klanglichen Reife ist es eine reizvolle Wahl sowohl für den Konzerteinsatz als auch für eine Sammlung.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size", de: "Größe" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)", de: "4/4 (ganze Größe)" } },
      { label: { sl: "Celotna dolžina", en: "Overall length", de: "Gesamtlänge" }, value: { sl: "591 mm", en: "591 mm", de: "591 mm" } },
      { label: { sl: "Dolžina korpusa", en: "Body length", de: "Korpuslänge" }, value: { sl: "360 mm", en: "360 mm", de: "360 mm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout", de: "Oberbug" }, value: { sl: "163 mm", en: "163 mm", de: "163 mm" } },
      { label: { sl: "Srednji obod", en: "Middle bout", de: "Mittelbug" }, value: { sl: "110 mm", en: "110 mm", de: "110 mm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout", de: "Unterbug" }, value: { sl: "203 mm", en: "203 mm", de: "203 mm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate", de: "Decke" }, value: { sl: "smreka", en: "spruce", de: "Fichte" } },
      { label: { sl: "Hrbet", en: "Back", de: "Boden" }, value: { sl: "javor, enodelen", en: "maple, one-piece", de: "Ahorn, einteilig" } },
      { label: { sl: "Lak", en: "Varnish", de: "Lack" }, value: { sl: "jantarni", en: "amber", de: "bernsteinfarben" } },
      { label: { sl: "Etiketa", en: "Label", de: "Etikett" }, value: { sl: "Carlo Bergonzi (Anno 1730, Cremona)", en: "Carlo Bergonzi (Anno 1730, Cremona)", de: "Carlo Bergonzi (Anno 1730, Cremona)" } },
      { label: { sl: "Starost", en: "Age", de: "Alter" }, value: { sl: "več kot 150 let", en: "over 150 years", de: "über 150 Jahre" } },
      { label: { sl: "Izvor", en: "Origin", de: "Herkunft" }, value: { sl: "najverjetneje Mittenwald, Bavarska", en: "most likely Mittenwald, Bavaria", de: "höchstwahrscheinlich Mittenwald, Bayern" } },
      { label: { sl: "Stanje", en: "Condition", de: "Zustand" }, value: { sl: "strokovno sanirana razpoka pod kobilico, stabilen", en: "professionally repaired crack under the bridge, stable", de: "fachgerecht sanierter Riss unter dem Steg, stabil" } },
    ],
    statusNote: {
      sl: "Violina je del zbirke Violin Garden Collection in trenutno išče glasbenika, ki bo z njo ustvarjal nove zgodbe.",
      en: "The violin is part of the Violin Garden Collection and is currently seeking a musician with whom to create new stories.",
      de: "Die Geige ist Teil der Violin Garden Collection und sucht derzeit eine Musikerin oder einen Musiker, mit der oder dem sie neue Geschichten schaffen kann.",
    },
    ctaParas: {
      sl: [
        "Tako kot skrivnostna vrtnica svojega bistva ne razkrije vsakomur, tudi zvok violine Rosa Mystica ima svojo posebno skrivnost.",
        "Njena pot se nadaljuje skozi nove koncerte, študij, umetniško raziskovanje in iskrene glasbene trenutke. Morda bo spremljala pomembne nastope, sprejemne izpite, tekmovanja ali preprosto vsakodnevno veselje do igranja prav na vaši glasbeni poti.",
      ],
      en: [
        "Just as a mystical rose does not reveal its essence to everyone, so too the sound of the Rosa Mystica violin holds its own special secret.",
        "Her journey continues through new concerts, study, artistic exploration and sincere musical moments. Perhaps she will accompany important performances, entrance exams, competitions or simply the everyday joy of playing on your own musical path.",
      ],
      de: [
        "So wie eine geheimnisvolle Rose ihr Wesen nicht jedem offenbart, so birgt auch der Klang der Geige Rosa Mystica sein eigenes besonderes Geheimnis.",
        "Ihre Reise setzt sich fort durch neue Konzerte, das Studium, künstlerisches Erkunden und aufrichtige musikalische Momente. Vielleicht wird sie bedeutende Auftritte, Aufnahmeprüfungen, Wettbewerbe oder einfach die alltägliche Freude am Spielen auf Ihrem ganz eigenen musikalischen Weg begleiten.",
      ],
    },
  },
  {
    id: "rosa-flammea",
    name: "Rosa Flammea",
    origin: { sl: "Evropska šola", en: "European school", de: "Europäische Schule" },
    year: { sl: "začetek 20. stoletja", en: "early 20th century", de: "Anfang des 20. Jahrhunderts" },
    flowerVariant: 8,
    intro: {
      sl: "Žameten, zelo globok in uravnotežen ton z žarečim rdečim lakom kakor plamen.",
      en: "A velvety, very deep and balanced tone with a glowing red varnish like a flame.",
      de: "Ein samtiger, sehr tiefer und ausgewogener Ton mit einem glühenden roten Lack wie eine Flamme.",
    },
    description: {
      sl: "Kakovosten evropski inštrument polne velikosti (4/4) z začetka 20. stoletja, izdelan po modelu torinskega mojstra Giovannija Francesca Pressende, z žametnim globokim tonom in žarečim rdečim lakom.",
      en: "A quality full-size (4/4) European instrument from the early 20th century, made after the model of the Turin master Giovanni Francesco Pressenda, with a velvety, deep tone and a glowing red varnish.",
      de: "Ein hochwertiges europäisches Instrument in ganzer Größe (4/4) vom Anfang des 20. Jahrhunderts, gebaut nach dem Modell des Turiner Meisters Giovanni Francesco Pressenda, mit einem samtigen, tiefen Ton und einem glühenden roten Lack.",
    },
    status: "collection",
    options: [],

    maker: { sl: "po modelu G. F. Pressenda (Torino)", en: "after the model of G. F. Pressenda (Turin)", de: "nach dem Modell von G. F. Pressenda (Turin)" },
    size: "4/4",
    illustration: "/images/violins/rosa-flammea/rosa-flammea-ilustracija.webp",
    photos: [
      "/images/violins/rosa-flammea/rosa-flammea-spredaj.webp",
      "/images/violins/rosa-flammea/rosa-flammea-zadaj.webp",
    ],
    lead: {
      sl: "Tako kot ognjena vrtnica tudi Rosa Flammea združuje eleganco, moč in brezčasno lepoto.",
      en: "Like a fiery rose, Rosa Flammea unites elegance, strength and timeless beauty.",
      de: "Wie eine feurige Rose vereint auch Rosa Flammea Eleganz, Kraft und zeitlose Schönheit.",
    },
    descriptionParas: {
      sl: [
        "Njena žareča rdeča barva, prefinjena izdelava in odprt, topel glas ustvarjajo inštrument z izrazitim značajem. Navdih črpa iz modela znamenitega torinskega mojstra Giovannija Francesca Pressende, katerega violine slovijo po plemenitem tonu, muzikalnosti in izvrstni igralnosti.",
        "Gre za kakovosten evropski inštrument polne velikosti (4/4), izdelan v začetku 20. stoletja. Dvodelna smrekova zgornja plošča z drobnimi do srednje širokimi letnicami omogoča bogato resonanco in hiter odziv pod lokom. Dvodelni rahlo plamenast javorjev hrbet skupaj z enodelnimi javorjevimi obodi ter ujemajočo se javorjevo glavo ustvarja harmonično in elegantno celoto.",
        "Njegova največja odlika je poseben žameten, zelo globok in uravnotežen ton z lepo projekcijo skozi vse registre. Inštrument se odziva zanesljivo in omogoča bogat glasbeni izraz tako pri liričnih kot virtuoznih skladbah.",
        "Originalni rdeči oljni lak z nežnimi senčenji ustvarja vtis plamena, ki prehaja od svetlo žareče rdeče do globokih rubinastih odtenkov. Prav ta izjemna barvna igra je navdihnila ime Rosa Flammea.",
        "Inštrument je strokovno pregledala priznana dunajska goslarka Gerlinde Reutterer.",
      ],
      en: [
        "Its glowing red colour, refined craftsmanship and open, warm voice create an instrument with a distinctive character. It draws its inspiration from the model of the famous Turin master Giovanni Francesco Pressenda, whose violins are renowned for their noble tone, musicality and excellent playability.",
        "It is a quality full-size (4/4) European instrument made in the early 20th century. The two-piece spruce top with fine to medium-wide grain allows a rich resonance and a quick response under the bow. The two-piece, slightly flamed maple back, together with one-piece maple ribs and a matching maple head, creates a harmonious and elegant whole.",
        "Its greatest quality is a distinctive velvety, very deep and balanced tone with fine projection across all registers. The instrument responds reliably and allows a rich musical expression in both lyrical and virtuosic works.",
        "The original red oil varnish with gentle shading creates the impression of a flame that shifts from a bright, glowing red to deep ruby shades. It is precisely this exceptional play of colour that inspired the name Rosa Flammea.",
        "The instrument was professionally inspected by the renowned Viennese luthier Gerlinde Reutterer.",
      ],
      de: [
        "Ihre glühende rote Farbe, ihre verfeinerte Verarbeitung und ihre offene, warme Stimme erschaffen ein Instrument mit ausgeprägtem Charakter. Ihre Inspiration schöpft sie aus dem Modell des berühmten Turiner Meisters Giovanni Francesco Pressenda, dessen Geigen für ihren edlen Ton, ihre Musikalität und ihre hervorragende Spielbarkeit bekannt sind.",
        "Es handelt sich um ein hochwertiges europäisches Instrument in ganzer Größe (4/4), gebaut zu Beginn des 20. Jahrhunderts. Die zweiteilige Fichtendecke mit feinen bis mittelbreiten Jahresringen ermöglicht eine reiche Resonanz und eine schnelle Ansprache unter dem Bogen. Der zweiteilige, leicht geflammte Ahornboden bildet zusammen mit den einteiligen Ahornzargen und dem dazu passenden Ahornkopf ein harmonisches und elegantes Ganzes.",
        "Ihre größte Stärke ist ein besonderer samtiger, sehr tiefer und ausgewogener Ton mit schöner Projektion über alle Register. Das Instrument spricht zuverlässig an und ermöglicht einen reichen musikalischen Ausdruck sowohl bei lyrischen als auch bei virtuosen Werken.",
        "Der originale rote Öllack mit zarten Schattierungen erzeugt den Eindruck einer Flamme, die von einem hellen, glühenden Rot zu tiefen Rubintönen übergeht. Gerade dieses außergewöhnliche Farbspiel hat den Namen Rosa Flammea inspiriert.",
        "Das Instrument wurde von der renommierten Wiener Geigenbauerin Gerlinde Reutterer fachgerecht überprüft.",
      ],
    },
    specs: [
      { label: { sl: "Velikost", en: "Size", de: "Größe" }, value: { sl: "4/4 (polna velikost)", en: "4/4 (full size)", de: "4/4 (ganze Größe)" } },
      { label: { sl: "Dolžina korpusa", en: "Body length", de: "Korpuslänge" }, value: { sl: "35,7 cm", en: "35.7 cm", de: "35,7 cm" } },
      { label: { sl: "Celotna dolžina", en: "Overall length", de: "Gesamtlänge" }, value: { sl: "58,4 cm", en: "58.4 cm", de: "58,4 cm" } },
      { label: { sl: "Zgornji obod", en: "Upper bout", de: "Oberbug" }, value: { sl: "16,9 cm", en: "16.9 cm", de: "16,9 cm" } },
      { label: { sl: "Srednji obod", en: "Middle bout", de: "Mittelbug" }, value: { sl: "11,1 cm", en: "11.1 cm", de: "11,1 cm" } },
      { label: { sl: "Spodnji obod", en: "Lower bout", de: "Unterbug" }, value: { sl: "20,7 cm", en: "20.7 cm", de: "20,7 cm" } },
      { label: { sl: "Zgornja plošča", en: "Top plate", de: "Decke" }, value: { sl: "smreka, dvodelna", en: "spruce, two-piece", de: "Fichte, zweiteilig" } },
      { label: { sl: "Hrbet", en: "Back", de: "Boden" }, value: { sl: "javor, dvodelen, rahlo plamenast", en: "maple, two-piece, slightly flamed", de: "Ahorn, zweiteilig, leicht geflammt" } },
      { label: { sl: "Stranice", en: "Ribs", de: "Zargen" }, value: { sl: "javor, enodelne", en: "maple, one-piece", de: "Ahorn, einteilig" } },
      { label: { sl: "Polž", en: "Scroll", de: "Schnecke" }, value: { sl: "javor", en: "maple", de: "Ahorn" } },
      { label: { sl: "Lak", en: "Varnish", de: "Lack" }, value: { sl: "originalni rdeči oljni", en: "original red oil", de: "originaler roter Öllack" } },
      { label: { sl: "Etiketa", en: "Label", de: "Etikett" }, value: { sl: "faksimile G. F. Pressenda (Torino 1836)", en: "facsimile G. F. Pressenda (Turin 1836)", de: "Faksimile G. F. Pressenda (Turin 1836)" } },
    ],
    statusNote: {
      sl: "Ta violina je del zasebne zbirke Violin Garden Collection in trenutno ni na voljo za prodajo ali izposojo. Predstavlja pomemben del zbirke ter ohranja svojo zgodbo kot del Violinskega vrta.",
      en: "This violin is part of the private Violin Garden Collection and is currently not available for sale or rental. It represents an important part of the collection and preserves its story as part of the Violin Garden.",
      de: "Diese Geige ist Teil der privaten Violin Garden Collection und steht derzeit weder zum Verkauf noch zur Miete zur Verfügung. Sie bildet einen wichtigen Teil der Sammlung und bewahrt ihre Geschichte als Teil des Geigengartens.",
    },
    ctaEyebrow: { sl: "GLASBENA ZGODBA", en: "A MUSICAL STORY", de: "EINE MUSIKALISCHE GESCHICHTE" },
    ctaParas: {
      sl: [
        "Tako kot vrtnica vsako leto znova zacveti z novo močjo, tudi Rosa Flammea nosi v sebi glas številnih generacij glasbenikov.",
        "Njena zgodba se nadaljuje kot del zbirke Violin Garden Collection, kjer ohranja bogato evropsko violinsko dediščino in navdihuje nove generacije violinistov.",
        "Vsak inštrument v Violinskem vrtu nosi svojo zgodbo. Rosa Flammea pripoveduje zgodbo ognja, plemenitosti in brezčasne glasbe.",
      ],
      en: [
        "Just as a rose blooms anew with fresh strength each year, so too does Rosa Flammea carry within her the voice of many generations of musicians.",
        "Her story continues as part of the Violin Garden Collection, where she preserves the rich European violin heritage and inspires new generations of violinists.",
        "Every instrument in the Violin Garden carries its own story. Rosa Flammea tells a story of fire, nobility and timeless music.",
      ],
      de: [
        "So wie eine Rose jedes Jahr aufs Neue mit frischer Kraft erblüht, so trägt auch Rosa Flammea die Stimme vieler Generationen von Musikern in sich.",
        "Ihre Geschichte setzt sich als Teil der Violin Garden Collection fort, in der sie das reiche europäische Geigenerbe bewahrt und neue Generationen von Geigerinnen und Geigern inspiriert.",
        "Jedes Instrument im Geigengarten trägt seine eigene Geschichte. Rosa Flammea erzählt eine Geschichte von Feuer, Vornehmheit und zeitloser Musik.",
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
    specs: v.specs?.map((s) => ({ label: s.label[lang], value: s.value[lang] })),
    statusNote: v.statusNote?.[lang],
    ctaEyebrow: v.ctaEyebrow?.[lang],
    ctaParas: v.ctaParas?.[lang],
  };
}
