// Slovenian dictionary. This object is the canonical shape — its type is exported
// as `Dict` and every other language must match it (see ./index.ts).
const sl = {
  nav: {
    home: "DOMOV",
    collection: "VIOLINSKI VRT",
    forSale: "VIOLINE ZA NOVE ZGODBE",
    projects: "PROJEKTI",
  },

  a11y: {
    openMenu: "Odpri meni",
    closeMenu: "Zapri meni",
    menu: "Meni",
    play: "Predvajaj",
    pause: "Ustavi",
    mute: "Utišaj",
    unmute: "Vklopi zvok",
    close: "Zapri",
    prevPhoto: "Prejšnja fotografija",
    nextPhoto: "Naslednja fotografija",
    openPhoto: (n: number) => `Odpri fotografijo ${n}`,
    floralIllustration: (name: string) => `Cvetna ilustracija — ${name}`,
  },

  splash: {
    enter: "VSTOPITE NA VRT",
  },

  hero: {
    eyebrow: "VIOLIN GARDEN COLLECTION",
    title: "VIOLINSKI VRT",
    subtitle: "Ekskluzivna zbirka violin",
    tagline: "Zvočni vrt, v katerem cvetijo violine.",
    enterGarden: "SPOZNAJTE VIOLINSKI VRT",
    forNewStories: "VIOLINE ZA NOVE ZGODBE",
    discoverProjects: "SPOZNAJTE PROJEKTE",
  },

  zbirka: {
    heading: "ZBIRKA, KI PRIPOVEDUJE ZGODBE",
    p1: "Violinski vrt je osebna zbirka violin akademske violinistke Inge Ulokine, mag. art.",
    p2: "Zbirka nastaja že več kot dvajset let in trenutno obsega petnajst violin različnih obdobij, goslarskih šol in značajev.",
    p3: "Vsaka nosi svojo zgodbo, svoj glas in svojo edinstveno lepoto.",
    quote:
      "Dobrodošli v svetu, kjer les postane glasba in kjer vsaka violina še naprej pripoveduje svojo zgodbo.",
    link: "VEČ O ZBIRKI",
    imageAlt: "Violina in vrtnica na notah — zbirka",
  },

  cards: {
    garden: {
      title: "VIOLINSKI VRT",
      text: "Spoznajte zbirko petnajstih izjemnih violin, vsaka s svojim glasom, značajem in zgodbo.",
      link: "VEČ O ZBIRKI",
      alt: "Violinski vrt",
    },
    forSale: {
      title: "VIOLINE ZA NOVE ZGODBE",
      text: "Izbrane violine iz zbirke, pripravljene za novo glasbeno pot.",
      link: "OGLED IN POVPRAŠEVANJE",
      alt: "Violine za nove zgodbe",
    },
    projects: {
      title: "PROJEKTI",
      text: "Koncerti, glasbene pravljice in umetniški projekti, kjer violine ponovno zaživijo.",
      link: "VEČ O PROJEKTIH",
      alt: "Projekti",
    },
  },

  author: {
    heading: "O AVTORICI",
    name: "Inga Ulokina, mag. art.",
    p1After:
      " je akademska violinistka, koncertna umetnica in ustvarjalka avtorskih glasbenih projektov.",
    p2: "Njeno delo združuje koncertno umetnost, pripoved, izobraževanje in ljubezen do violin. Violinski vrt je naravno nadaljevanje njenega umetniškega poslanstva – poklon zvoku, lepoti in času.",
    link: "VEČ O AVTORICI",
    imageAlt: "Inga Ulokina z violino med vrtnicami",
  },

  footer: {
    quoteLine1: "Melodija violine je kot aroma najlepše vrtnice.",
    quoteLine2: "Kot pesem slavčka ob jutranji zori.",
    welcome: "DOBRODOŠLI V VIOLINSKEM VRTU.",
  },

  subHeader: {
    back: "Nazaj",
  },

  collectionPage: {
    eyebrow: "VIOLIN GARDEN COLLECTION",
    title: "Violinski vrt",
    subtitle:
      "Vsaka violina v vrtu cveti po svoje. Izberite cvet in spoznajte njeno celotno zgodbo.",
    badge: { sale: "NAPRODAJ", rent: "ZA IZPOSOJO" },
    fullPresentation: "CELOTNA PREDSTAVITEV",
  },

  forSalePage: {
    eyebrow: "VIOLINE ZA NOVE ZGODBE",
    title: "Nova glasbena pot",
    subtitle:
      "Nekatere violine v Violinskem vrtu so pripravljene nadaljevati svojo zgodbo z novim glasbenikom.",
    fullPresentation: "CELOTNA PREDSTAVITEV",
    backToCollection: "← Oglej si celotno zbirko",
  },

  detail: {
    technicalDetails: "Tehnični podatki",
    gallery: "Galerija",
    statusEyebrow: "STATUS INŠTRUMENTA",
    status: {
      sale: {
        label: "Naprodaj",
        text: "Ta violina je pripravljena nadaljevati svojo zgodbo z novim glasbenikom.",
      },
      rent: {
        label: "Na voljo za izposojo",
        text: "Ta violina je na voljo za dolgoročno ali projektno izposojo.",
      },
      collection: {
        label: "Stalna zbirka",
        text: "Ta violina je stalni del zbirke Violinskega vrta in ni naprodaj ne za izposojo.",
      },
    },
    ctaEyebrow: "NOVA GLASBENA POT",
    ctaTitle: "Ta violina išče novega glasbenika",
    ctaTitleCollection: "Spoznajte to violino",
    inquiryInvitation:
      "Za podrobnejši opis ali dogovor za osebni preizkus izpolnite kontaktni obrazec — z veseljem vam bomo inštrument predstavili in odgovorili na vsa vprašanja.",
    notFoundTitle: "Violina ni najdena — Violinski vrt",
  },

  inquiry: {
    nakup: { title: "NOVA ZGODBA", action: "Povpraševanje o nakupu" },
    izposoja: { title: "IZPOSOJA", action: "Povpraševanje o izposoji" },
    preizkus: { title: "PREIZKUS", action: "Dogovor za ogled in preizkus" },
  },
};

export default sl;
export type Dict = typeof sl;
