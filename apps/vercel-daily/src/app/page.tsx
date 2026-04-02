import type { Metadata } from "next";
import { Suspense } from "react";
import { ArticlesSection } from "../components/articles-section";
import { BreakingNewsBanner } from "../components/breaking-news-banner";
import { HeroSection } from "../components/hero-section";

export const metadata: Metadata = {
  title: "Vercel Daily | Home",
  description: "News and insights for modern web developers.",
  openGraph: {
    title: "Vercel Daily | Home",
    description: "Featured stories, breaking coverage, and developer insights.",
    url: "/",
  },
};

function BreakingNewsBannerSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="mt-6 h-[52px] animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70 shadow-[0_14px_30px_-22px_rgba(0,0,0,0.45)] sm:h-[56px]"
    />
  );
}

function ArticlesSkeleton() {
  return (
    <section aria-hidden="true" className="mt-8">
      <div className="mb-5 space-y-2">
        <div className="h-7 w-36 animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
        <div className="h-8 w-64 animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden p-4 rounded-2xl border border-black/10 bg-zinc-200/70 shadow-[0_14px_30px_-22px_rgba(0,0,0,0.45)]"
          >
            <div className="h-44 w-full mb-4 animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
            <div className="space-y-3">
              <div className="h-4 w-20 animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
              <div className="h-5 w-full animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
              <div className="h-5 w-5/6 animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
              <div className="h-4 w-2/3 animate-pulse rounded-2xl border border-black/10 bg-zinc-200/70" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="flex-1 py-8">
      <HeroSection />
      <Suspense fallback={<BreakingNewsBannerSkeleton />}>
        <BreakingNewsBanner />
      </Suspense>
      <Suspense fallback={<ArticlesSkeleton />}>
        <ArticlesSection />
      </Suspense>
    </main>
  );
}
