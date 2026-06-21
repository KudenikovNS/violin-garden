"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n/useT";
import type { Dict } from "@/lib/i18n/dictionaries";
import styles from "./CardsSection.module.css";

// Language-neutral card structure; the text comes from the dictionary by `key`.
const cards: {
  id: string;
  image: string;
  href: string;
  key: keyof Dict["cards"];
  icon: React.ReactNode;
}[] = [
  {
    id: "card1",
    image: "/images/card1.webp",
    href: "/violinski-vrt",
    key: "garden",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#bf8f8c" strokeWidth="1.2">
        <circle cx="12" cy="11" r="4" />
        <path d="M12 7c-1.5 0-2.5 1-2.5 2.2M12 7c1.5 0 2.5 1 2.5 2.2M12 15v5M9 18l-3 1.5M15 18l3 1.5" />
      </svg>
    ),
  },
  {
    id: "card2",
    image: "/images/card2.webp",
    href: "/violine-za-nove-zgodbe",
    key: "forSale",
    icon: (
      <svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="#bf8f8c" strokeWidth="1.2">
        <path d="M12 2c1 2 .5 4-1 5.5C9 9.5 8 11 8 14a4 4 0 008 0c0-3-1-4.5-3-6.5C11.5 6 11 4 12 2z" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    id: "card3",
    image: "/images/card3.webp",
    href: "#",
    key: "projects",
    icon: (
      <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="#bf8f8c" strokeWidth="1.2">
        <path d="M7 4v10a5 5 0 0010 0V4M7 4c0 3 1.5 5 5 5s5-2 5-5M10 7v9M14 7v9" />
      </svg>
    ),
  },
];

export default function CardsSection() {
  const t = useT();
  return (
    <section className={styles.section}>
      {cards.map((card) => {
        const c = t.cards[card.key];
        return (
          <div key={card.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                alt={c.alt}
                fill
                className={styles.image}
                sizes="33vw"
              />
            </div>
            <div className={styles.body}>
              <div className={styles.titleRow}>
                {card.icon}
                <span className={styles.title}>{c.title}</span>
              </div>
              <p className={styles.text}>{c.text}</p>
              <Link href={card.href} className={styles.link}>
                {c.link} <span>→</span>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
