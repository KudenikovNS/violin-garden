import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { violins } from "@/data/violins";
import Flower from "@/components/violin/Flower";
import SubPageHeader from "@/components/violin/SubPageHeader";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Violinski vrt — zbirka violin",
  description:
    "Spoznajte zbirko violin Violinskega vrta. Vsaka violina ima svoj glas, značaj in zgodbo.",
};

export default function ViolinskiVrtPage() {
  return (
    <main className={styles.page}>
      <SubPageHeader
        eyebrow="VIOLIN GARDEN COLLECTION"
        title="Violinski vrt"
        subtitle="Vsaka violina v vrtu cveti po svoje. Izberite cvet in spoznajte njeno celotno zgodbo."
      />

      <section className={styles.grid}>
        {violins.map((v) => (
          <Link key={v.id} href={`/violinski-vrt/${v.id}`} className={styles.card}>
            <div className={styles.flowerWrap}>
              {v.illustration ? (
                <Image
                  src={v.illustration}
                  alt={`Cvetna ilustracija — ${v.name}`}
                  width={360}
                  height={450}
                  className={styles.illustration}
                />
              ) : (
                <Flower variant={v.flowerVariant} size={150} />
              )}
              {v.forSale && <span className={styles.badge}>NAPRODAJ</span>}
            </div>
            <div className={styles.body}>
              <h2 className={styles.name}>{v.name}</h2>
              <p className={styles.meta}>
                {v.origin} · {v.year}
              </p>
              <p className={styles.intro}>{v.intro}</p>
              <span className={styles.link}>
                CELOTNA PREDSTAVITEV <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
