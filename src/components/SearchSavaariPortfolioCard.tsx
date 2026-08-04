import Image from "next/image";
import Link from "next/link";
import styles from "./SearchSavaariPortfolioCard.module.css";

export default function SearchSavaariPortfolioCard() {
  return (
    <Link
      href="/work/search-savaari"
      className={styles.card}
      aria-label="View all Search Savaari social media posts"
    >
      <div className={styles.imageWrap}>
        <Image
          src="/portfolio/search-savaari/search-savaari-01.webp"
          alt="Search Savaari hourly car rental social media campaign"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
          priority={false}
        />
        <span className={styles.badge}>POST SERIES</span>
        <span className={styles.count}>9 CREATIVES</span>
      </div>

      <div className={styles.content}>
        <div>
          <p className={styles.eyebrow}>SOCIAL MEDIA DESIGN</p>
          <h3>Search Savaari</h3>
          <p className={styles.description}>
            A travel-focused campaign built around hourly rentals, freedom,
            safety and memorable journeys.
          </p>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>
    </Link>
  );
}
