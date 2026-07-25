"use client";

import { useState } from "react";
import {
  Play,
  Heart,
  MessageCircle,
  BookOpen,
  Clock,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";

type WorkType = "post" | "reel" | "article" | "blog";

interface WorkItem {
  id: string;
  type: WorkType;
  title: string;
  client: string;
  stat: string;
}

const items: WorkItem[] = [
  { id: "p1", type: "post", title: "Launch day carousel", client: "Client Name", stat: "12.4K likes" },
  { id: "p2", type: "post", title: "Behind the brand", client: "Client Name", stat: "8.1K likes" },
  { id: "p3", type: "post", title: "Before / after campaign", client: "Client Name", stat: "15.9K likes" },
  { id: "r1", type: "reel", title: "3-second hook challenge", client: "Client Name", stat: "1.2M views" },
  { id: "r2", type: "reel", title: "Product unboxing", client: "Client Name", stat: "480K views" },
  { id: "r3", type: "reel", title: "Trend remix", client: "Client Name", stat: "902K views" },
  { id: "a1", type: "article", title: "How the algorithm actually decides what you see", client: "Publication Name", stat: "6 min read" },
  { id: "a2", type: "article", title: "The content calendar that saved my sanity", client: "Publication Name", stat: "4 min read" },
  { id: "b1", type: "blog", title: "5 hooks that stopped 1M scrolls", client: "Personal Blog", stat: "3 min read" },
  { id: "b2", type: "blog", title: "What I learned running 40 campaigns in a year", client: "Personal Blog", stat: "7 min read" },
];

const filters: { label: string; value: "all" | WorkType }[] = [
  { label: "All", value: "all" },
  { label: "Posts", value: "post" },
  { label: "Reels", value: "reel" },
  { label: "Articles", value: "article" },
  { label: "Blogs", value: "blog" },
];

const typeStyle: Record<WorkType, { accent: string; label: string }> = {
  post: { accent: "#FF4D8D", label: "POST" },
  reel: { accent: "#FFD23F", label: "REEL" },
  article: { accent: "#5EEAD4", label: "ARTICLE" },
  blog: { accent: "#5EEAD4", label: "BLOG" },
};

function PostCard({ item }: { item: WorkItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-inkline bg-inksoft transition hover:border-pink">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-pink/25 via-inksoft to-inkline">
        <span className="font-display text-4xl text-paper/20">POST</span>
        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] tracking-widest text-pink">
          {typeStyle.post.label}
        </span>
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm font-semibold text-paper">{item.title}</p>
          <p className="font-mono text-xs text-paperdim">{item.client}</p>
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-paperdim">
          <Heart size={13} /> {item.stat.split(" ")[0]}
        </div>
      </div>
    </div>
  );
}

function ReelCard({ item }: { item: WorkItem }) {
  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-inkline bg-inksoft transition hover:border-yellow">
      <div className="relative mx-auto flex aspect-[9/16] w-full max-w-[220px] flex-col items-center justify-center bg-gradient-to-b from-yellow/20 via-inksoft to-inkline">
        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] tracking-widest text-yellow">
          {typeStyle.reel.label}
        </span>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/10 backdrop-blur transition group-hover:bg-yellow group-hover:text-ink">
          <Play size={22} fill="currentColor" />
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 font-mono text-[10px] text-paperdim">
          <Heart size={12} /> <MessageCircle size={12} className="ml-1" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-paper">{item.title}</p>
        <p className="font-mono text-xs text-paperdim">
          {item.client} · {item.stat}
        </p>
      </div>
    </div>
  );
}

function ArticleCard({ item }: { item: WorkItem }) {
  const isArticle = item.type === "article";
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-inkline bg-inksoft p-5 transition hover:border-teal">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
        <BookOpen size={22} />
      </div>
      <div className="flex-1">
        <span className="font-mono text-[10px] tracking-widest text-teal">
          {isArticle ? typeStyle.article.label : typeStyle.blog.label}
        </span>
        <p className="mt-1 font-semibold text-paper sm:text-lg">
          {item.title}
        </p>
        <div className="mt-1 flex items-center gap-3 font-mono text-xs text-paperdim">
          <span>{item.client}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {item.stat}
          </span>
        </div>
      </div>
      <ArrowUpRight
        size={20}
        className="shrink-0 text-paperdim transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal"
      />
    </div>
  );
}

export default function WorkShowcase() {
  const [active, setActive] = useState<"all" | WorkType>("all");
  const visible = items.filter((i) => active === "all" || i.type === active);
  const posts = visible.filter((i) => i.type === "post");
  const reels = visible.filter((i) => i.type === "reel");
  const reads = visible.filter((i) => i.type === "article" || i.type === "blog");

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-yellow">
            <Bookmark size={12} className="mb-0.5 mr-2 inline" />
            SELECTED WORK
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            ONE VOICE.
            <br />
            EVERY FORMAT.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border px-4 py-2 font-mono text-xs tracking-widest transition ${
                active === f.value
                  ? "border-pink bg-pink text-ink"
                  : "border-inkline text-paperdim hover:border-paper hover:text-paper"
              }`}
            >
              {f.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {posts.length > 0 && (
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {posts.map((item) => (
            <PostCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {reels.length > 0 && (
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {reels.map((item) => (
            <ReelCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {reads.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {reads.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {visible.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-paperdim">
          Nothing here yet — check back soon.
        </p>
      )}
    </section>
  );
}
