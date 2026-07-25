import Image from "next/image";

type Brand = {
  name: string;
  category: string;
  image: string;
};

const brands: Brand[] = [
  {
    name: "VP Brothers",
    category: "Residential Hostel & PG",
    image: "/logos/vp-brothers.webp",
  },
  {
    name: "Surya Footwear",
    category: "Footwear Brand",
    image: "/logos/surya-footwear.webp",
  },
];

export default function LogoSection() {
  return (
    <section
      id="brands"
      className="border-b border-inkline bg-inksoft px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-inkline pb-8">
          <p className="font-mono text-xs tracking-[0.3em] text-yellow">
            SELECTED BRANDS
          </p>

          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl leading-none text-paper sm:text-6xl">
              BRANDS I&apos;VE
              <br />
              <span className="text-pink">WORKED WITH.</span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-paperdim sm:text-right">
              A selection of brands supported through digital marketing,
              content, social media and creative work.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="group flex min-h-64 flex-col items-center justify-center rounded-3xl border border-inkline bg-ink p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-pink"
            >
              <div className="relative h-36 w-36 overflow-hidden rounded-3xl bg-white p-2 shadow-xl sm:h-40 sm:w-40">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="(max-width: 640px) 144px, 160px"
                  className="object-contain transition duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <h3 className="mt-6 font-display text-xl text-paper sm:text-2xl">
                {brand.name}
              </h3>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paperdim">
                {brand.category}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
