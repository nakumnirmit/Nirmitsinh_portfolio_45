# Nirmitsinh — Portfolio

A bold, social-native portfolio built with Next.js 14 (App Router) + Tailwind CSS.
Work samples are shown in "format-native" shapes: posts as a feed grid, reels as
vertical phone cards, and articles/blogs as a readable list — with a live filter.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

- **Name, tagline, bio** → `components/Hero.tsx`
- **Work samples** → `components/WorkShowcase.tsx`, edit the `items` array:
  ```ts
  { id: "p1", type: "post", title: "Launch day carousel", client: "Client Name", stat: "12.4K likes" }
  ```
  `type` can be `"post"`, `"reel"`, `"article"`, or `"blog"`.
- **Email / social links** → `components/Footer.tsx`
- **Colors / fonts** → `tailwind.config.ts`

## Adding real images

Cards currently use gradient placeholders. To use real screenshots/thumbnails:
1. Drop images into a `public/work/` folder.
2. In `WorkShowcase.tsx`, replace the placeholder `<div>` inside each card
   (`PostCard`, `ReelCard`) with `next/image`, e.g.
   ```tsx
   import Image from "next/image";
   <Image src="/work/post-1.jpg" alt={item.title} fill className="object-cover" />
   ```

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — connect the repo and it
deploys automatically. Any Node hosting that supports Next.js also works.
