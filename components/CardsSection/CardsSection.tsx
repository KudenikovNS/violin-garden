"use client";

import Image from "next/image";
import LocaleLink from "../LocaleLink";
import { useT } from "@/lib/i18n/useT";
import type { Dict } from "@/lib/i18n/dictionaries";
import styles from "./CardsSection.module.css";

// Language-neutral card structure; the text comes from the dictionary by `key`.
const cards: {
  id: string;
  image: string;
  href: string;
  key: keyof Dict["cards"];
}[] = [
  {
    id: "card1",
    image: "/images/card1.webp",
    href: "/violinski-vrt",
    key: "garden",
  },
  {
    id: "card2",
    image: "/images/card2.webp",
    href: "/violine-za-nove-zgodbe",
    key: "forSale",
  },
  {
    // TODO: point to the projects page when its content is ready.
    id: "card3",
    image: "/images/card3.webp",
    href: "#",
    key: "projects",
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
                <span className={styles.title}>{c.title}</span>
              </div>
              <p className={styles.text}>{c.text}</p>
              <LocaleLink
                href={card.href}
                className={styles.link}
                aria-disabled={card.href === "#" || undefined}
                onClick={
                  card.href === "#" ? (e) => e.preventDefault() : undefined
                }
              >
                {c.link} <span>→</span>
              </LocaleLink>
            </div>
          </div>
        );
      })}
    </section>
  );
}
