import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { violinsForSale } from "@/data/violins";
import Flower from "@/components/violin/Flower";
import SubPageHeader from "@/components/violin/SubPageHeader";
import InquiryOptions from "@/components/violin/InquiryOptions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Violine za nove zgodbe — naprodaj",
  description:
    "Izbrane violine iz Violinskega vrta, pripravljene nadaljevati svojo zgodbo z novim glasbenikom.",
};

export default function ZaNoveZgodbePage() {
  return (
    <main className={styles.page}>
      <SubPageHeader
        eyebrow="VIOLINE ZA NOVE ZGODBE"
        title="Nova glasbena pot"
        subtitle="Nekatere violine v Violinskem vrtu so pripravljene nadaljevati svojo zgodbo z novim glasbenikom."
      />

      <section className={styles.list}>
        {violinsForSale.map((v) => (
          <article key={v.id} className={styles.row}>
            <Link href={`/violinski-vrt/${v.id}?from=prodaja`} className={styles.visual}>
              {v.illustration ? (
                <Image
                  src={v.illustration}
                  alt={`Cvetna ilustracija — ${v.name}`}
                  width={280}
                  height={350}
                  className={styles.illustration}
                />
              ) : (
                <Flower variant={v.flowerVariant} size={150} />
              )}
            </Link>

            <div className={styles.info}>
              <h2 className={styles.name}>
                <Link href={`/violinski-vrt/${v.id}?from=prodaja`}>{v.name}</Link>
              </h2>
              <p className={styles.meta}>
                {v.maker ?? v.origin} · {v.year}
                {v.price ? ` · ${v.price}` : ""}
              </p>
              <p className={styles.description}>{v.description}</p>

              <Link href={`/violinski-vrt/${v.id}?from=prodaja`} className={styles.link}>
                CELOTNA PREDSTAVITEV <span>→</span>
              </Link>

              <div className={styles.inquiry}>
                <InquiryOptions options={v.options} violinName={v.name} compact />
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.backRow}>
        <Link href="/violinski-vrt" className={styles.backLink}>
          ← Oglej si celotno zbirko
        </Link>
      </div>
    </main>
  );
}
