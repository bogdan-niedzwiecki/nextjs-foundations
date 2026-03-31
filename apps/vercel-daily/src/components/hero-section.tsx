import Link from "next/link";
import { SubscribeButton } from "./subscribe-button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-rose-50 via-amber-50 to-sky-100 px-6 py-10 shadow-[0_14px_30px_-22px_rgba(0,0,0,0.45)] sm:px-10 lg:px-12 lg:py-14">
      <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl" />
      <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="space-y-5">
          <p className="pill-badge">Featured coverage</p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Build Faster, Ship Smarter, Stay Ahead.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Vercel Daily curates the most important releases, deep dives, and
            practical engineering insights so modern web teams can move with
            confidence.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-2xl backdrop-blur">
            <div className="bg-zinc-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200">
              Featured Story
            </div>
            <div className="aspect-[4/3] bg-[radial-gradient(circle_at_20%_15%,#fda4af_0%,#fda4af00_35%),radial-gradient(circle_at_80%_20%,#7dd3fc_0%,#7dd3fc00_40%),linear-gradient(160deg,#1f2937,#0f172a_50%,#111827)] p-6">
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/20 bg-black/30 p-5 text-white backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Deploy Insights
                </p>
                <h2 className="text-2xl font-extrabold leading-tight">
                  Edge Caching Patterns That Cut TTFB by 42%
                </h2>
                <p className="text-sm leading-relaxed text-zinc-200">
                  A practical breakdown of cache hierarchy, invalidation
                  strategy, and route segment tuning in Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/search"
          className="pill-control pill-control-secondary inline-flex items-center"
        >
          Browse articles
        </Link>
        <SubscribeButton>Subscribe</SubscribeButton>
      </div>
    </section>
  );
}
