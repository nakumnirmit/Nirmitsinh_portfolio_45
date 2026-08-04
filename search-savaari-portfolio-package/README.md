# Search Savaari portfolio package (Next.js App Router)

This package gives you exactly this behaviour:

1. Your **Posts** section shows only one Search Savaari project card.
2. Clicking/tapping that card opens `/work/search-savaari`.
3. The project page shows all 9 Search Savaari creatives.
4. Clicking any creative opens a full-screen image viewer with previous/next controls.

## 1. Copy the folders

Copy these folders into your Next.js project root:

- `public/portfolio/search-savaari`
- `src/app/work/search-savaari`
- `src/components/SearchSavaariPortfolioCard.tsx`
- `src/components/SearchSavaariPortfolioCard.module.css`

If your project does not use a `src` folder, move `src/app` to `app` and `src/components` to `components`.

## 2. Add one card in your Posts section

Import the card in the component that renders your **SELECTED WORK / POSTS** grid:

```tsx
import SearchSavaariPortfolioCard from "@/components/SearchSavaariPortfolioCard";
```

Then add this inside the grid:

```tsx
<SearchSavaariPortfolioCard />
```

If your filter has an active category, render it only for `ALL` and `POSTS`:

```tsx
{(activeFilter === "ALL" || activeFilter === "POSTS") && (
  <SearchSavaariPortfolioCard />
)}
```

## 3. Ensure your work section has an anchor

The Back button on the detail page points to `/#work`. Add `id="work"` to your selected-work section if it is not already present:

```tsx
<section id="work">
  {/* selected work */}
</section>
```

## 4. Deploy

Run:

```bash
npm run dev
```

Check these URLs:

- Home card: `http://localhost:3000/#work`
- Gallery page: `http://localhost:3000/work/search-savaari`

Then commit and deploy to Vercel.

## Optional: data-driven portfolio array

If your cards come from an array, add this item instead of using the standalone card component:

```ts
{
  id: "search-savaari",
  category: "POSTS",
  label: "POST SERIES",
  title: "Search Savaari",
  client: "Search Savaari",
  description: "Travel and hourly car-rental social media campaign.",
  cover: "/portfolio/search-savaari/search-savaari-01.webp",
  href: "/work/search-savaari",
  count: "9 creatives",
}
```

Your existing card should use `Link href={item.href}` so tapping it opens the complete gallery.
