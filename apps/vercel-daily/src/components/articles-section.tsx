import { ArticleContent } from "@/components/article-content";
import { getArticles } from "@/lib/server/vercel-daily-api";
import Image from "next/image";
import Link from "next/link";

export async function ArticlesSection() {
  const articles = await getArticles({ limit: 6 });

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
            Featured stories
          </p>
          <h2 className="max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Top Picks for Today
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-[0_14px_30px_-22px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:-translate-y-0.5">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  width={960}
                  height={528}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              ) : null}
              <div className="flex flex-1 flex-col space-y-3 p-4">
                {article.category ? (
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-600">
                    {article.category}
                  </p>
                ) : null}
                <h3 className="text-lg font-extrabold leading-tight tracking-tight text-zinc-900">
                  {article.title}
                </h3>
                <div className="max-h-36 overflow-hidden">
                  {article.content && article.content.length > 0 ? (
                    <ArticleContent blocks={article.content.slice(0, 2)} />
                  ) : article.excerpt ? (
                    <p className="text-sm leading-relaxed text-zinc-700">
                      {article.excerpt}
                    </p>
                  ) : null}
                </div>
                {article.author?.name || article.publishedAt ? (
                  <p className="mt-auto pt-2 text-xs font-medium text-zinc-600">
                    {article.author?.name}
                    {article.author?.name && article.publishedAt ? " • " : ""}
                    {article.publishedAt
                      ? new Date(article.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            dateStyle: "medium",
                          },
                        )
                      : null}
                  </p>
                ) : null}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
