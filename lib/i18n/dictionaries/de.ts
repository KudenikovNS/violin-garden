import type { Dict } from "./sl";

// German dictionary. Must match the shape of the Slovenian one (enforced by the
// `: Dict` annotation — a missing or extra key is a compile error).
const de: Dict = {
  nav: {
    home: "STARTSEITE",
    collection: "DER GEIGENGARTEN",
    forSale: "GEIGEN FÜR NEUE GESCHICHTEN",
    projects: "PROJEKTE",
  },

  a11y: {
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    menu: "Menü",
    play: "Abspielen",
    pause: "Pause",
    mute: "Stummschalten",
    unmute: "Ton einschalten",
    close: "Schließen",
    prevPhoto: "Vorheriges Foto",
    nextPhoto: "Nächstes Foto",
    openPhoto: (n: number) => `Foto ${n} öffnen`,
    floralIllustration: (name: string) => `Blumenillustration — ${name}`,
  },

  splash: {
    enter: "DEN GARTEN BETRETEN",
  },

  hero: {
    eyebrow: "VIOLIN GARDEN COLLECTION",
    title: "DER GEIGENGARTEN",
    subtitle: "Eine exklusive Geigensammlung",
    tagline: "Ein Klanggarten, in dem Geigen erblühen.",
    enterGarden: "DEN GEIGENGARTEN ENTDECKEN",
    forNewStories: "GEIGEN FÜR NEUE GESCHICHTEN",
    discoverProjects: "DIE PROJEKTE ENTDECKEN",
  },

  zbirka: {
    heading: "EINE SAMMLUNG, DIE GESCHICHTEN ERZÄHLT",
    p1: "Der Geigengarten ist die persönliche Geigensammlung der akademischen Violinistin Inga Ulokina, M.A.",
    p2: "Die Sammlung wächst seit mehr als zwanzig Jahren und umfasst derzeit fünfzehn Geigen aus verschiedenen Epochen, Geigenbauschulen und mit unterschiedlichem Charakter.",
    p3: "Jede trägt ihre eigene Geschichte, ihre eigene Stimme und ihre einzigartige Schönheit.",
    quote:
      "Willkommen in einer Welt, in der Holz zu Musik wird und in der jede Geige ihre Geschichte weitererzählt.",
    link: "MEHR ÜBER DIE SAMMLUNG",
    imageAlt: "Eine Geige und eine Rose auf Notenblättern — die Sammlung",
  },

  cards: {
    garden: {
      title: "DER GEIGENGARTEN",
      text: "Entdecken Sie eine Sammlung von fünfzehn außergewöhnlichen Geigen, jede mit ihrer eigenen Stimme, ihrem Charakter und ihrer Geschichte.",
      link: "MEHR ÜBER DIE SAMMLUNG",
      alt: "Der Geigengarten",
    },
    forSale: {
      title: "GEIGEN FÜR NEUE GESCHICHTEN",
      text: "Ausgewählte Geigen aus der Sammlung, bereit für eine neue musikalische Reise.",
      link: "ANSEHEN & ANFRAGEN",
      alt: "Geigen für neue Geschichten",
    },
    projects: {
      title: "PROJEKTE",
      text: "Konzerte, musikalische Märchen und künstlerische Projekte, in denen Geigen wieder zum Leben erwachen.",
      link: "MEHR ÜBER DIE PROJEKTE",
      alt: "Projekte",
    },
  },

  author: {
    heading: "ÜBER DIE KÜNSTLERIN",
    name: "Inga Ulokina, M.A.",
    p1After:
      " ist akademische Violinistin, Konzertkünstlerin und Schöpferin eigener Musikprojekte.",
    p2: "Ihre Arbeit vereint Konzertkunst, Erzählkunst, Pädagogik und die Liebe zu Geigen. Der Geigengarten ist eine natürliche Fortsetzung ihrer künstlerischen Mission — eine Hommage an Klang, Schönheit und Zeit.",
    link: "MEHR ÜBER DIE KÜNSTLERIN",
    imageAlt: "Inga Ulokina mit einer Geige inmitten von Rosen",
  },

  footer: {
    quoteLine1: "Die Melodie einer Geige ist wie der Duft der schönsten Rose.",
    quoteLine2: "Wie das Lied einer Nachtigall im Morgengrauen.",
    welcome: "WILLKOMMEN IM GEIGENGARTEN.",
  },

  subHeader: {
    back: "Zurück",
  },

  collectionPage: {
    eyebrow: "VIOLIN GARDEN COLLECTION",
    title: "Der Geigengarten",
    subtitle:
      "Jede Geige im Garten erblüht auf ihre eigene Weise. Wählen Sie eine Blüte und entdecken Sie ihre ganze Geschichte.",
    badge: { sale: "ZU VERKAUFEN", rent: "ZU MIETEN" },
    fullPresentation: "VOLLSTÄNDIGE PRÄSENTATION",
  },

  forSalePage: {
    eyebrow: "GEIGEN FÜR NEUE GESCHICHTEN",
    title: "Eine neue musikalische Reise",
    subtitle:
      "Einige Geigen im Geigengarten sind bereit, ihre Geschichte mit einer neuen Musikerin oder einem neuen Musiker fortzusetzen.",
    fullPresentation: "VOLLSTÄNDIGE PRÄSENTATION",
    backToCollection: "← Die ganze Sammlung ansehen",
  },

  detail: {
    technicalDetails: "Technische Daten",
    gallery: "Galerie",
    statusEyebrow: "STATUS DES INSTRUMENTS",
    status: {
      sale: {
        label: "Zu verkaufen",
        text: "Diese Geige ist bereit, ihre Geschichte mit einer neuen Musikerin oder einem neuen Musiker fortzusetzen.",
      },
      rent: {
        label: "Zur Miete verfügbar",
        text: "Diese Geige ist für eine langfristige Miete oder Projektmiete verfügbar.",
      },
      collection: {
        label: "Dauerhafte Sammlung",
        text: "Diese Geige ist fester Bestandteil der Sammlung des Geigengartens und steht weder zum Verkauf noch zur Miete.",
      },
    },
    ctaEyebrow: "EINE NEUE MUSIKALISCHE REISE",
    ctaTitle: "Diese Geige sucht eine neue Musikerin oder einen neuen Musiker",
    ctaTitleCollection: "Entdecken Sie diese Geige",
    inquiryInvitation:
      "Für eine ausführlichere Beschreibung oder zur Vereinbarung eines persönlichen Probespiels füllen Sie bitte das Kontaktformular aus — wir stellen Ihnen das Instrument gerne vor und beantworten alle Ihre Fragen.",
    notFoundTitle: "Geige nicht gefunden — Der Geigengarten",
  },

  inquiry: {
    nakup: { title: "EINE NEUE GESCHICHTE", action: "Kaufanfrage" },
    izposoja: { title: "MIETE", action: "Mietanfrage" },
    preizkus: { title: "PROBESPIEL", action: "Besichtigung & Probespiel vereinbaren" },
  },

  inquiryForm: {
    heading: "Anfrage",
    intro: "Füllen Sie das Formular aus — wir antworten Ihnen gerne und stellen Ihnen das Instrument vor.",
    subjectPrefix: "Anfrage",
    nameLabel: "Vor- und Nachname",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail",
    emailPlaceholder: "sie@email.com",
    phoneLabel: "Telefon (optional)",
    phonePlaceholder: "+386 …",
    messageLabel: "Nachricht",
    messagePlaceholder: "Ihre Frage oder Nachricht …",
    submit: "Anfrage senden",
    sending: "Senden …",
    successTitle: "Vielen Dank für Ihre Nachricht!",
    successText: "Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.",
    errorText: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an",
    close: "Schließen",
    privacyNote: "Wir verwenden Ihre Daten ausschließlich zur Beantwortung Ihrer Anfrage.",
  },
};

export default de;
