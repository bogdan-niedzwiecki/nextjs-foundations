import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "News and insights for modern web developers.",
  openGraph: {
    title: "Vercel Daily | Home",
    description: "Featured stories, breaking coverage, and developer insights.",
    url: "/",
  },
};

export default function Page() {
  return (
    <section className="-mx-4 border-y border-black bg-black px-4 py-2 text-sm text-white sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <p className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
        <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide">
          Breaking
        </span>
        <span className="truncate font-medium">
          Vercel CDN now collapses over 3M duplicate requests per day.
        </span>
      </p>
    </section>
  );
}
