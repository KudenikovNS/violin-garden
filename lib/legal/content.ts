import type { Lang } from "@/lib/i18n/config";

/*
 * ⚠️ DRAFT — NOT LEGAL ADVICE.
 * Working drafts based on what the site actually does (contact form via Web3Forms,
 * functional localStorage, Cloudinary video, no analytics). The provider is
 * established in Slovenia, so Slovenian/EU law applies (country-of-origin
 * principle) — NOT the German Impressum regime, even though a German version
 * exists. The legal-notice page is therefore a neutral provider-info page.
 * Before going live: have a lawyer confirm whether the sale counts as commercial
 * (which would add provider-info / address obligations), and fill any
 * [PLACEHOLDER]. Name and contact email are pre-filled from known data.
 */

type LegalSection = { heading: string; body: string[] };
export type LegalContent = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

const EMAIL = "inga.ulokina@gmail.com";

export const privacy: Record<Lang, LegalContent> = {
  sl: {
    title: "Politika zasebnosti",
    description:
      "Kako Violinski vrt zbira, uporablja in varuje vaše osebne podatke.",
    updated: "Zadnja posodobitev: 30. 6. 2026 (osnutek)",
    sections: [
      {
        heading: "1. Upravljavec",
        body: [
          "Upravljavec osebnih podatkov je Inga Ulokina (»Violinski vrt«).",
          `Kontakt za vprašanja o zasebnosti: ${EMAIL}.`,
        ],
      },
      {
        heading: "2. Kateri podatki se zbirajo",
        body: [
          "Prek kontaktnega obrazca zbiramo ime, e-poštni naslov, telefonsko številko (neobvezno) in vsebino vašega sporočila. Drugih osebnih podatkov ne zbiramo samodejno.",
        ],
      },
      {
        heading: "3. Namen in pravna podlaga",
        body: [
          "Podatke uporabljamo izključno za odgovor na vaše povpraševanje ter dogovor o ogledu, izposoji ali nakupu inštrumenta.",
          "Pravna podlaga je vaša privolitev (čl. 6(1)(a) GDPR), ki jo podate ob oddaji obrazca.",
        ],
      },
      {
        heading: "4. Posredovanje obrazca (obdelovalec)",
        body: [
          "Oddane obrazce posreduje storitev Web3Forms (api.web3forms.com), ki sporočilo dostavi na naš e-poštni naslov in pri tem deluje kot obdelovalec podatkov.",
        ],
      },
      {
        heading: "5. Gostovanje in mediji",
        body: [
          "Spletišče je statično. Predstavitveni video gostuje Cloudinary; ob predvajanju videa njihov strežnik prejme vaš IP-naslov.",
        ],
      },
      {
        heading: "6. Shranjevanje v brskalniku",
        body: [
          "Uporabljamo le nujno, funkcionalno shranjevanje: izbrani jezik (localStorage »vg_lang«) in oznako vstopa za trenutno sejo (sessionStorage »vg_entered«).",
          "Ne uporabljamo piškotkov za sledenje, analitike ali oglaševanja, zato pasica za privolitev ni potrebna.",
        ],
      },
      {
        heading: "7. Hramba",
        body: [
          "Vaša sporočila hranimo le toliko časa, kolikor je potrebno za obravnavo povpraševanja, nato jih izbrišemo.",
        ],
      },
      {
        heading: "8. Vaše pravice",
        body: [
          "Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave in prenosljivosti podatkov, pravico do preklica privolitve ter pravico do pritožbe pri nadzornem organu (v Sloveniji: Informacijski pooblaščenec).",
          `Zahteve pošljite na ${EMAIL}.`,
        ],
      },
      {
        heading: "9. Spremembe",
        body: [
          "To politiko lahko občasno posodobimo. Veljavna je različica, objavljena na tej strani.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description:
      "How the Violin Garden collects, uses and protects your personal data.",
    updated: "Last updated: 30 June 2026 (draft)",
    sections: [
      {
        heading: "1. Controller",
        body: [
          "The controller of personal data is Inga Ulokina (“The Violin Garden”).",
          `Privacy contact: ${EMAIL}.`,
        ],
      },
      {
        heading: "2. What data we collect",
        body: [
          "Through the contact form we collect your name, email address, phone number (optional) and the content of your message. We do not collect other personal data automatically.",
        ],
      },
      {
        heading: "3. Purpose and legal basis",
        body: [
          "We use this data solely to respond to your inquiry and to arrange a viewing, rental or purchase of an instrument.",
          "The legal basis is your consent (Art. 6(1)(a) GDPR), given when you submit the form.",
        ],
      },
      {
        heading: "4. Form delivery (processor)",
        body: [
          "Submitted forms are delivered by Web3Forms (api.web3forms.com), which forwards the message to our email address and acts as a data processor.",
        ],
      },
      {
        heading: "5. Hosting and media",
        body: [
          "The website is static. The presentation video is hosted by Cloudinary; when the video plays, their server receives your IP address.",
        ],
      },
      {
        heading: "6. Browser storage",
        body: [
          "We use only strictly necessary, functional storage: your chosen language (localStorage “vg_lang”) and a session entry flag (sessionStorage “vg_entered”).",
          "We use no tracking, analytics or advertising cookies, so no consent banner is required.",
        ],
      },
      {
        heading: "7. Retention",
        body: [
          "We keep your messages only as long as needed to handle your inquiry, then delete them.",
        ],
      },
      {
        heading: "8. Your rights",
        body: [
          "You have the right to access, rectification, erasure, restriction and portability of your data, the right to withdraw consent, and the right to lodge a complaint with a supervisory authority.",
          `Send requests to ${EMAIL}.`,
        ],
      },
      {
        heading: "9. Changes",
        body: [
          "We may update this policy from time to time. The version published on this page is the one that applies.",
        ],
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    description:
      "Wie der Geigengarten Ihre personenbezogenen Daten erhebt, nutzt und schützt.",
    updated: "Zuletzt aktualisiert: 30. Juni 2026 (Entwurf)",
    sections: [
      {
        heading: "1. Verantwortlicher",
        body: [
          "Verantwortliche für die Datenverarbeitung ist Inga Ulokina („Der Geigengarten“).",
          `Datenschutz-Kontakt: ${EMAIL}.`,
        ],
      },
      {
        heading: "2. Welche Daten wir erheben",
        body: [
          "Über das Kontaktformular erheben wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer (optional) und den Inhalt Ihrer Nachricht. Weitere personenbezogene Daten werden nicht automatisch erhoben.",
        ],
      },
      {
        heading: "3. Zweck und Rechtsgrundlage",
        body: [
          "Wir verwenden diese Daten ausschließlich zur Beantwortung Ihrer Anfrage und zur Vereinbarung einer Besichtigung, Miete oder eines Kaufs eines Instruments.",
          "Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie mit dem Absenden des Formulars erteilen.",
        ],
      },
      {
        heading: "4. Formularübermittlung (Auftragsverarbeiter)",
        body: [
          "Abgesendete Formulare werden über Web3Forms (api.web3forms.com) zugestellt; der Dienst leitet die Nachricht an unsere E-Mail-Adresse weiter und handelt als Auftragsverarbeiter.",
        ],
      },
      {
        heading: "5. Hosting und Medien",
        body: [
          "Die Website ist statisch. Das Präsentationsvideo wird von Cloudinary gehostet; beim Abspielen erhält deren Server Ihre IP-Adresse.",
        ],
      },
      {
        heading: "6. Speicherung im Browser",
        body: [
          "Wir verwenden ausschließlich notwendige, funktionale Speicherung: die gewählte Sprache (localStorage „vg_lang“) und eine Sitzungsmarkierung (sessionStorage „vg_entered“).",
          "Wir setzen keine Tracking-, Analyse- oder Werbe-Cookies ein, daher ist kein Einwilligungsbanner erforderlich.",
        ],
      },
      {
        heading: "7. Speicherdauer",
        body: [
          "Ihre Nachrichten speichern wir nur so lange, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist, und löschen sie danach.",
        ],
      },
      {
        heading: "8. Ihre Rechte",
        body: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit, das Recht auf Widerruf Ihrer Einwilligung sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde.",
          `Anfragen richten Sie bitte an ${EMAIL}.`,
        ],
      },
      {
        heading: "9. Änderungen",
        body: [
          "Wir können diese Erklärung gelegentlich aktualisieren. Es gilt die auf dieser Seite veröffentlichte Fassung.",
        ],
      },
    ],
  },
};

// Neutral provider-info page (the seller is a private person established in
// Slovenia). The German version keeps the title "Impressum" for findability but
// the content is the same neutral provider info — no § 5 DDG / MStV obligations.
export const impressum: Record<Lang, LegalContent> = {
  sl: {
    title: "Pravne informacije",
    description: "Podatki o ponudniku in prodajalcu spletišča Violinski vrt.",
    updated: "",
    sections: [
      {
        heading: "Ponudnik in prodajalec",
        body: [
          "Inga Ulokina (»Violinski vrt«), zasebna oseba s sedežem v Sloveniji.",
          "Spletišče predstavlja osebno zbirko violin; nekateri inštrumenti so na voljo za prodajo ali izposojo.",
        ],
      },
      {
        heading: "Kontakt",
        body: [`E-pošta: ${EMAIL}`],
      },
    ],
  },
  en: {
    title: "Legal Notice",
    description:
      "Provider and seller information for the Violin Garden website.",
    updated: "",
    sections: [
      {
        heading: "Provider and seller",
        body: [
          "Inga Ulokina (“The Violin Garden”), a private individual based in Slovenia.",
          "This website presents a personal violin collection; some instruments are offered for sale or rental.",
        ],
      },
      {
        heading: "Contact",
        body: [`Email: ${EMAIL}`],
      },
    ],
  },
  de: {
    title: "Impressum",
    description: "Anbieter- und Verkäuferinformationen des Geigengartens.",
    updated: "",
    sections: [
      {
        heading: "Anbieter und Verkäufer",
        body: [
          "Inga Ulokina („Der Geigengarten“), Privatperson mit Sitz in Slowenien.",
          "Diese Website präsentiert eine persönliche Geigensammlung; einige Instrumente werden zum Verkauf oder zur Miete angeboten.",
        ],
      },
      {
        heading: "Kontakt",
        body: [`E-Mail: ${EMAIL}`],
      },
    ],
  },
};
