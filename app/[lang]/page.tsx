import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CollectionIntro from "@/components/CollectionIntro/CollectionIntro";
import CardsSection from "@/components/CardsSection/CardsSection";
import AuthorSection from "@/components/AuthorSection/AuthorSection";
import SplashGate from "@/components/SplashGate/SplashGate";
import JsonLd from "@/components/JsonLd";
import { isLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL, localeUrl, SOCIAL_PROFILES } from "@/lib/site";
import styles from "./page.module.css";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = isLang(lang) ? getDictionary(lang) : null;

  return (
    <SplashGate>
      {t && (
        <>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: t.meta.siteName,
              url: localeUrl(lang),
              inLanguage: lang,
              image: `${SITE_URL}/icon.png`,
            }}
          />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Inga Ulokina",
              jobTitle: "Violinist",
              url: localeUrl(lang),
              sameAs: SOCIAL_PROFILES,
            }}
          />
        </>
      )}
      <div className={styles.wrapper}>
        <Header />
        <main>
          <Hero />
          <CollectionIntro />
          <CardsSection />
          <AuthorSection />
        </main>
      </div>
    </SplashGate>
  );
}
