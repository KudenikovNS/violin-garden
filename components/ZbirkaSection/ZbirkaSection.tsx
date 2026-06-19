import Image from "next/image";
import styles from "./ZbirkaSection.module.css";

export default function ZbirkaSection() {
  return (
    <section className={styles.section}>
      <svg
        width="160"
        height="190"
        viewBox="0 0 150 180"
        className={styles.decorViolin}
        fill="none"
        stroke="#c2a063"
        strokeWidth="1"
      >
        <path d="M75 20c-12 0-20 8-20 18s8 16 20 16 20-6 20-16-8-18-20-18z" />
        <path d="M75 30c-6 4-8 10-4 16M75 30c6 4 8 10 4 16M75 54v100M75 90c-14-4-26 4-30 16M75 120c14-4 26 4 30 16M60 70c-10 0-16 6-16 14M90 100c10 0 16 6 16 14" />
      </svg>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/zbirka_new.png"
          alt="Violina in vrtnica na notah — zbirka"
          fill
          className={styles.image}
          sizes="580px"
        />
      </div>

      <div className={styles.text}>
        <h2 className={styles.heading}>ZBIRKA, KI PRIPOVEDUJE ZGODBE</h2>
        <span className={styles.underline} />
        <p className={styles.paragraph}>
          Violinski vrt je osebna zbirka violin akademske violinistke Inge Ulokine, mag. art.
        </p>
        <p className={styles.paragraph}>
          Zbirka nastaja že več kot dvajset let in trenutno obsega petnajst violin različnih obdobij,
          goslarskih šol in značajev.
        </p>
        <p className={styles.paragraph}>
          Vsaka nosi svojo zgodbo, svoj glas in svojo edinstveno lepoto.
        </p>
        <p className={styles.quote}>
          Dobrodošli v svetu, kjer les postane glasba<br />
          in kjer vsaka violina še naprej pripoveduje svojo zgodbo.
        </p>
        <a href="#" className={styles.link}>
          VEČ O ZBIRKI <span>→</span>
        </a>
      </div>
    </section>
  );
}
