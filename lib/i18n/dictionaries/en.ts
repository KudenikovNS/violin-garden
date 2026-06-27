import type { Dict } from "./sl";

// English dictionary. Must match the shape of the Slovenian one (enforced by the
// `: Dict` annotation — a missing or extra key is a compile error).
const en: Dict = {
  nav: {
    home: "HOME",
    collection: "THE VIOLIN GARDEN",
    forSale: "VIOLINS FOR NEW STORIES",
    projects: "PROJECTS",
  },

  meta: {
    siteName: "The Violin Garden",
    home: {
      title: "The Violin Garden — violin collection of Inga Ulokina",
      description:
        "The Violin Garden is the personal violin collection of academic violinist Inga Ulokina, MA. A collection of violins with music, stories and artistic projects.",
    },
    collection: {
      title: "The Violin Garden — violin collection",
      description:
        "Discover the violins of the Violin Garden. Each violin has its own voice, character and story.",
    },
    forSale: {
      title: "Violins for new stories — for sale",
      description:
        "Selected violins from the Violin Garden, ready to continue their story with a new musician.",
    },
  },

  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    play: "Play",
    pause: "Pause",
    mute: "Mute",
    unmute: "Unmute",
    close: "Close",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
    openPhoto: (n: number) => `Open photo ${n}`,
    floralIllustration: (name: string) => `Floral illustration — ${name}`,
  },

  splash: {
    enter: "ENTER THE GARDEN",
  },

  hero: {
    eyebrow: "VIOLIN GARDEN COLLECTION",
    title: "THE VIOLIN GARDEN",
    subtitle: "An exclusive collection of violins",
    tagline: "A garden of sound where violins bloom.",
    enterGarden: "MEET THE VIOLIN GARDEN",
    forNewStories: "VIOLINS FOR NEW STORIES",
    discoverProjects: "DISCOVER THE PROJECTS",
  },

  zbirka: {
    heading: "A COLLECTION THAT TELLS STORIES",
    p1: "The Violin Garden is the personal violin collection of academic violinist Inga Ulokina, M.A.",
    p2: "The collection has been growing for more than twenty years and currently comprises fifteen violins of different periods, lutherie schools and characters.",
    p3: "Each carries its own story, its own voice and its own unique beauty.",
    quote:
      "Welcome to a world where wood becomes music and where every violin keeps telling its story.",
    link: "MORE ABOUT THE COLLECTION",
    imageAlt: "A violin and a rose on sheet music — the collection",
  },

  cards: {
    garden: {
      title: "THE VIOLIN GARDEN",
      text: "Discover a collection of fifteen exceptional violins, each with its own voice, character and story.",
      link: "MORE ABOUT THE COLLECTION",
      alt: "The Violin Garden",
    },
    forSale: {
      title: "VIOLINS FOR NEW STORIES",
      text: "Selected violins from the collection, ready for a new musical journey.",
      link: "VIEW & INQUIRE",
      alt: "Violins for new stories",
    },
    projects: {
      title: "PROJECTS",
      text: "Concerts, musical fairy tales and artistic projects where violins come to life again.",
      link: "MORE ABOUT THE PROJECTS",
      alt: "Projects",
    },
  },

  author: {
    heading: "ABOUT THE ARTIST",
    name: "Inga Ulokina, M.A.",
    p1After:
      " is an academic violinist, concert artist and creator of original music projects.",
    p2: "Her work brings together concert artistry, storytelling, education and a love of violins. The Violin Garden is a natural continuation of her artistic mission — a tribute to sound, beauty and time.",
    link: "MORE ABOUT THE ARTIST",
    imageAlt: "Inga Ulokina with a violin among roses",
  },

  footer: {
    quoteLine1: "A violin's melody is like the scent of the loveliest rose.",
    quoteLine2: "Like a nightingale's song at the break of dawn.",
    welcome: "WELCOME TO THE VIOLIN GARDEN.",
  },

  subHeader: {
    back: "Back",
  },

  collectionPage: {
    eyebrow: "VIOLIN GARDEN COLLECTION",
    title: "The Violin Garden",
    subtitle:
      "Each violin in the garden blooms in its own way. Choose a bloom and discover its full story.",
    badge: { sale: "FOR SALE", rent: "FOR RENT" },
    fullPresentation: "FULL PRESENTATION",
  },

  forSalePage: {
    eyebrow: "VIOLINS FOR NEW STORIES",
    title: "A New Musical Journey",
    subtitle:
      "Some violins in the Violin Garden are ready to continue their story with a new musician.",
    fullPresentation: "FULL PRESENTATION",
    backToCollection: "← View the whole collection",
  },

  detail: {
    technicalDetails: "Technical details",
    gallery: "Gallery",
    statusEyebrow: "INSTRUMENT STATUS",
    status: {
      sale: {
        label: "For sale",
        text: "This violin is ready to continue its story with a new musician.",
      },
      rent: {
        label: "Available for rent",
        text: "This violin is available for long-term or project rental.",
      },
      collection: {
        label: "Permanent collection",
        text: "This violin is a permanent part of the Violin Garden collection and is not for sale or rent.",
      },
    },
    ctaEyebrow: "A NEW MUSICAL JOURNEY",
    ctaTitle: "This violin is looking for a new musician",
    ctaTitleCollection: "Discover this violin",
    inquiryInvitation:
      "For a more detailed description or to arrange a personal trial, fill in the contact form — we will gladly present the instrument and answer any questions.",
    notFoundTitle: "Violin not found — The Violin Garden",
  },

  inquiry: {
    nakup: { title: "A NEW STORY", action: "Purchase inquiry" },
    izposoja: { title: "RENTAL", action: "Rental inquiry" },
    preizkus: { title: "TRIAL", action: "Arrange a viewing & trial" },
  },

  inquiryForm: {
    heading: "Inquiry",
    intro: "Fill in the form and we will gladly reply and present the instrument.",
    subjectPrefix: "Inquiry",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "+386 …",
    messageLabel: "Message",
    messagePlaceholder: "Your question or message …",
    submit: "Send inquiry",
    sending: "Sending …",
    successTitle: "Thank you for your message!",
    successText: "We have received your inquiry and will get back to you soon.",
    errorText: "The message could not be sent. Please try again or email us at",
    close: "Close",
    privacyNote: "We use your details solely to respond to your inquiry.",
  },
};

export default en;
