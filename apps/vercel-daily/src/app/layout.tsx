import type { Metadata } from "next";
import Link from "next/link";
import { NotificationButton } from "../components/notification-button";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3002",
  ),
  title: {
    template: "%s | Vercel Daily",
    default: "Vercel Daily",
  },
  description:
    "Vercel Daily is a modern news publication built with Next.js 16.",
  openGraph: {
    title: "Vercel Daily",
    description:
      "Follow breaking stories, featured reports, and trending coverage on Vercel Daily.",
    url: "/",
    siteName: "Vercel Daily",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <header className="border-b border-slate-200 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-0 w-0 border-x-[6px] border-b-[10px] border-x-transparent border-b-current"
                  />
                  <span>Vercel Daily</span>
                </Link>
                <nav className="flex items-center gap-5 text-sm font-medium text-slate-500">
                  <Link
                    href="/"
                    className="transition-colors hover:text-slate-900"
                  >
                    Home
                  </Link>
                  <Link
                    href="/search"
                    className="transition-colors hover:text-slate-900"
                  >
                    Search
                  </Link>
                </nav>
              </div>

              <NotificationButton />
            </div>
          </header>

          <main className="flex-1 py-8">{children}</main>

          <footer className="border-t border-slate-200 py-6 text-sm text-slate-600">
            <p>(c) {year} Vercel Daily. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
