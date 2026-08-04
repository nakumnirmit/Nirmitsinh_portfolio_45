"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

const posts = [
  {
    src: "/portfolio/search-savaari/search-savaari-01.webp",
    width: 1080,
    height: 1350,
    alt: "More places, more freedom—Search Savaari hourly car rental campaign",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-02.webp",
    width: 1254,
    height: 1254,
    alt: "Travel smarter together—Search Savaari travel solutions campaign",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-03.webp",
    width: 1122,
    height: 1402,
    alt: "Life has destinations, not parking slots—Search Savaari campaign",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-04.webp",
    width: 1054,
    height: 1317,
    alt: "Some journeys cannot wait—Search Savaari hourly booking campaign",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-05.webp",
    width: 1254,
    height: 1254,
    alt: "Every great story starts with a ride—Search Savaari post",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-06.webp",
    width: 1122,
    height: 1402,
    alt: "Explore the city with Search Savaari social media creative",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-07.webp",
    width: 1122,
    height: 1402,
    alt: "Your weekend is calling—Search Savaari campaign creative",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-08.webp",
    width: 1122,
    height: 1402,
    alt: "Memories do not come with home delivery—Search Savaari post",
  },
  {
    src: "/portfolio/search-savaari/search-savaari-09.webp",
    width: 1092,
    height: 1365,
    alt: "Happiness does not have a fixed address—Search Savaari post",
  },
] as const;

export default function SearchSavaariGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const previous = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + posts.length) % posts.length,
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % posts.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, next, previous]);

  return (
    <>
      <section className={styles.gallery} aria-label="Search Savaari post gallery">
        {posts.map((post, index) => (
          <button
            type="button"
            className={styles.galleryItem}
            key={post.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open creative ${index + 1} of ${posts.length}`}
          >
            <Image
              src={post.src}
              alt={post.alt}
              width={post.width}
              height={post.height}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className={styles.galleryImage}
            />
            <span className={styles.itemNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </section>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Search Savaari creative ${activeIndex + 1} of ${posts.length}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={close}
            aria-label="Close image viewer"
          >
            ×
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.previousButton}`}
            onClick={previous}
            aria-label="Previous creative"
          >
            ←
          </button>

          <div className={styles.lightboxImageWrap}>
            <Image
              src={posts[activeIndex].src}
              alt={posts[activeIndex].alt}
              fill
              sizes="95vw"
              className={styles.lightboxImage}
              priority
            />
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={next}
            aria-label="Next creative"
          >
            →
          </button>

          <p className={styles.counter}>
            {activeIndex + 1} / {posts.length}
          </p>
        </div>
      )}
    </>
  );
}
