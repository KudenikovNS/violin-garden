import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ZbirkaSection from "@/components/ZbirkaSection/ZbirkaSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import AuthorSection from "@/components/AuthorSection/AuthorSection";
import Footer from "@/components/Footer/Footer";
import SplashGate from "@/components/SplashGate/SplashGate";
import styles from "./page.module.css";

export default function Home() {
  return (
    <SplashGate>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <Hero />
          <ZbirkaSection />
          <CardsSection />
          <AuthorSection />
        </main>
        <Footer />
      </div>
    </SplashGate>
  );
}
