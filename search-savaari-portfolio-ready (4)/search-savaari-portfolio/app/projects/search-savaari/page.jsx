import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Search Savaari — Social Media Campaign",
  description:
    "A social media design campaign for Search Savaari, combining travel storytelling, car-rental services and conversion-focused creative direction.",
};

const creatives = [
  {
    src: "/portfolio/search-savaari/01-hourly-car-rentals.webp",
    alt: "Search Savaari hourly car rental social media creative",
    width: 655,
    height: 820,
  },
  {
    src: "/portfolio/search-savaari/02-travel-smarter-together.webp",
    alt: "Travel Smarter Together Search Savaari campaign creative",
    width: 1254,
    height: 1254,
  },
  {
    src: "/portfolio/search-savaari/03-destinations-not-parking.webp",
    alt: "Life has destinations, not parking slots campaign creative",
    width: 1122,
    height: 1402,
  },
  {
    src: "/portfolio/search-savaari/04-some-journeys-cant-wait.webp",
    alt: "Some journeys cannot wait Search Savaari campaign creative",
    width: 1054,
    height: 1317,
  },
  {
    src: "/portfolio/search-savaari/05-every-great-story.webp",
    alt: "Every great story starts with a ride campaign creative",
    width: 1254,
    height: 1254,
  },
  {
    src: "/portfolio/search-savaari/06-explore-the-city.webp",
    alt: "Explore the city with Search Savaari campaign creative",
    width: 1122,
    height: 1402,
  },
  {
    src: "/portfolio/search-savaari/07-weekend-is-calling.webp",
    alt: "Your weekend is calling Search Savaari campaign creative",
    width: 1122,
    height: 1402,
  },
  {
    src: "/portfolio/search-savaari/08-memories-on-the-road.webp",
    alt: "Memories are made on the road Search Savaari campaign creative",
    width: 1122,
    height: 1402,
  },
  {
    src: "/portfolio/search-savaari/09-happiness-fixed-address.webp",
    alt: "Happiness does not have a fixed address campaign creative",
    width: 1092,
    height: 1365,
  },
];

const services = [
  "Campaign concept development",
  "Social media art direction",
  "Travel-focused copy hierarchy",
  "Brand-consistent visual system",
  "Promotional and storytelling creatives",
  "Conversion-focused calls to action",
];

export default function SearchSavaariProjectPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <Link className={styles.backLink} href="/">
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Social Media Design · Travel & Mobility</p>
              <h1>Search Savaari</h1>
              <p className={styles.lead}>
                A cohesive social media campaign that turns car-rental services
                into memorable travel stories—while keeping every creative clear,
                recognisable and booking-focused.
              </p>

              <div className={styles.metaGrid}>
                <div>
                  <span>Client</span>
                  <strong>Search Savaari</strong>
                </div>
                <div>
                  <span>Role</span>
                  <strong>Creative Strategy & Design</strong>
                </div>
                <div>
                  <span>Deliverables</span>
                  <strong>9 Social Media Creatives</strong>
                </div>
                <div>
                  <span>Year</span>
                  <strong>2026</strong>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroCard}>
                <Image
                  src="/portfolio/search-savaari/05-every-great-story.webp"
                  alt="Search Savaari social media campaign cover"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(max-width: 900px) 92vw, 44vw"
                />
              </div>
              <span className={styles.orangeBadge}>Travel stories that move</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Project overview</p>
          <h2>One brand. Multiple reasons to ride.</h2>
        </div>

        <div className={styles.overviewGrid}>
          <p className={styles.overviewText}>
            Search Savaari needed a visually consistent campaign that could
            promote hourly rentals, local journeys, outstation travel, airport
            transfers and weekend escapes without feeling repetitive. The final
            system combines bold typography, vivid travel photography, branded
            vehicle visuals and clear service benefits.
          </p>

          <div className={styles.serviceCard}>
            <h3>What I worked on</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2>The campaign collection</h2>
        </div>

        <div className={styles.gallery}>
          {creatives.map((creative, index) => (
            <figure className={styles.creativeCard} key={creative.src}>
              <Image
                src={creative.src}
                alt={creative.alt}
                width={creative.width}
                height={creative.height}
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 31vw"
              />
              <figcaption>Creative {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.resultSection}>
        <div>
          <p className={styles.eyebrow}>Creative outcome</p>
          <h2>A flexible visual identity for every journey.</h2>
        </div>
        <p>
          The campaign establishes a recognisable orange-and-navy design language
          while allowing each post to focus on a different customer moment—from
          practical daily travel to emotional weekend and family experiences.
        </p>
      </section>

      <section className={styles.nextProject}>
        <p>Like this project?</p>
        <h2>Let&apos;s create something memorable.</h2>
        <Link href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
