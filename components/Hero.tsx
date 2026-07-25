const tickerItems = [
  "SOCIAL POSTS",
  "REELS",
  "ARTICLES",
  "BLOGS",
  "SOCIAL POSTS",
  "REELS",
  "ARTICLES",
  "BLOGS",
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-inkline">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-mono text-sm tracking-widest text-paperdim">
          NIRMITSINH.WORK
        </span>
        <a
          href="#contact"
          className="rounded-full border border-inkline px-4 py-2 font-mono text-xs tracking-widest text-paper transition hover:border-pink hover:text-pink"
        >
          LET&apos;S TALK
        </a>
      </nav>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-16">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-yellow">
          DIGITAL MARKETER
        </p>
        <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight sm:text-[6.5rem] lg:text-[8rem]">
          NIRMIT
          <br />
          <span className="text-stroke">SINH</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-paperdim sm:text-xl">
          I build content that moves — from scroll-stopping social posts and
          reels to articles and blogs that actually get read. Every format,
          its own craft.
        </p>
        <a
          href="#work"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 font-mono text-sm tracking-widest text-ink transition hover:bg-yellow"
        >
          SEE THE WORK ↓
        </a>
      </div>

      <div className="relative border-t border-inkline bg-inksoft py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-2xl text-inkline sm:text-3xl"
              style={{ WebkitTextStroke: "1px #2A2440" }}
            >
              {item} ✦
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
