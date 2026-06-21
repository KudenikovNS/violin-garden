import Image from "next/image";
import styles from "./CardsSection.module.css";

const cards = [
  {
    id: "card1",
    image: "/images/card1.jpg",
    alt: "Violinski vrt",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#bf8f8c" strokeWidth="1.2">
        <circle cx="12" cy="11" r="4" />
        <path d="M12 7c-1.5 0-2.5 1-2.5 2.2M12 7c1.5 0 2.5 1 2.5 2.2M12 15v5M9 18l-3 1.5M15 18l3 1.5" />
      </svg>
    ),
    title: "VIOLINSKI VRT",
    text: "Spoznajte zbirko petnajstih izjemnih violin, vsaka s svojim glasom, značajem in zgodbo.",
    linkText: "VEČ O ZBIRKI",
  },
  {
    id: "card2",
    image: "/images/card2.png",
    alt: "Violine za nove zgodbe",
    icon: (
      <svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="#bf8f8c" strokeWidth="1.2">
        <path d="M12 2c1 2 .5 4-1 5.5C9 9.5 8 11 8 14a4 4 0 008 0c0-3-1-4.5-3-6.5C11.5 6 11 4 12 2z" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "VIOLINE ZA NOVE ZGODBE",
    text: "Izbrane violine iz zbirke, pripravljene za novo glasbeno pot.",
    linkText: "OGLED IN POVPRAŠEVANJE",
  },
  {
    id: "card3",
    image: "/images/card3.jpg",
    alt: "Projekti",
    icon: (
      <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="#bf8f8c" strokeWidth="1.2">
        <path d="M7 4v10a5 5 0 0010 0V4M7 4c0 3 1.5 5 5 5s5-2 5-5M10 7v9M14 7v9" />
      </svg>
    ),
    title: "PROJEKTI",
    text: "Koncerti, glasbene pravljice in umetniški projekti, kjer violine ponovno zaživijo.",
    linkText: "VEČ O PROJEKTIH",
  },
];

export default function CardsSection() {
  return (
    <section className={styles.section}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className={styles.image}
              sizes="33vw"
            />
          </div>
          <div className={styles.body}>
            <div className={styles.titleRow}>
              {card.icon}
              <span className={styles.title}>{card.title}</span>
            </div>
            <p className={styles.text}>{card.text}</p>
            <a href="#" className={styles.link}>
              {card.linkText} <span>→</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
