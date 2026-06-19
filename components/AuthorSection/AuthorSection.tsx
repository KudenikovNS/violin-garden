import Image from "next/image";
import styles from "./AuthorSection.module.css";

export default function AuthorSection() {
  return (
    <section className={styles.section}>
      <svg
        width="240"
        height="160"
        viewBox="0 0 220 150"
        className={styles.decorBuilding}
        fill="none"
        stroke="#c2a063"
        strokeWidth="1"
      >
        <path d="M30 130h160M50 130V70l60-40 60 40v60M70 130V90h30v40M120 130V90h40v40M40 70h140" />
        <path d="M110 30V12M104 18h12" />
      </svg>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/avtorica2.jpg"
          alt="Inga Ulokina z violino med vrtnicami"
          fill
          className={styles.image}
          sizes="360px"
        />
      </div>

      <div className={styles.text}>
        <h2 className={styles.heading}>O AVTORICI</h2>
        <p className={styles.paragraph}>
          <strong className={styles.name}>Inga Ulokina, mag. art.</strong> je akademska violinistka,
          koncertna umetnica in ustvarjalka avtorskih glasbenih projektov.
        </p>
        <p className={styles.paragraph}>
          Njeno delo združuje koncertno umetnost, pripoved, izobraževanje in ljubezen do violin.
          Violinski vrt je naravno nadaljevanje njenega umetniškega poslanstva – poklon zvoku, lepoti in času.
        </p>
        <a href="#" className={styles.btn}>
          VEČ O AVTORICI <span>→</span>
        </a>
      </div>
    </section>
  );
}
