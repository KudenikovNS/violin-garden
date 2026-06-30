import SubPageHeader from "@/components/violin/SubPageHeader";
import type { LegalContent } from "@/lib/legal/content";
import styles from "./LegalPage.module.css";

// Shared layout for the Privacy Policy and Impressum pages. SubPageHeader renders
// the (single) <h1> and the back/menu nav; sections use <h2>.
export default function LegalPage({ doc }: { doc: LegalContent }) {
  return (
    <main className={styles.page}>
      <SubPageHeader title={doc.title} />
      <article className={styles.body}>
        {doc.updated && <p className={styles.updated}>{doc.updated}</p>}
        {doc.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className={styles.para}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
