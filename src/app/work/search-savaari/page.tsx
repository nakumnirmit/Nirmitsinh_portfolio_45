import type { Metadata } from "next";
import Link from "next/link";
import SearchSavaariGallery from "./SearchSavaariGallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Search Savaari Social Media Campaign | Nirmitsinh",
  description:
    "A collection of social media creatives designed for Search Savaari's hourly and outstation car rental campaign.",
};

export default function SearchSavaariWorkPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Link href="/#work" className={styles.backLink}>
          ← Back to selected work
        </Link>

        <header className={styles.hero}>
          <div>
            <p className={styles.kicker}>SOCIAL MEDIA · POST SERIES</p>
            <h1>Search Savaari</h1>
          </div>
          <div className={styles.summary}>
            <p>
              A nine-post visual campaign positioning Search Savaari as a
              flexible, safe and memorable way to travel—across local,
              outstation and hourly rental journeys.
            </p>
            <div className={styles.meta}>
              <span>9 Creatives</span>
              <span>Travel & Mobility</span>
              <span>Social Media Design</span>
            </div>
          </div>
        </header>

        <SearchSavaariGallery />
      </div>
    </main>
  );
}
