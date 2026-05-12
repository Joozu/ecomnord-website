import Link from "next/link";
import { getRecentPosts } from "@/lib/wordpress";
import { stripHtml } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Feltnoter fra Merchant Center",
  description:
    "Praktiske observationer om Google Shopping, feed management og Merchant Center — skrevet fra daglig kontoarbejde.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 3600;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getRecentPosts();

  return (
    <main>
      <section className="border-b border-rule py-16">
        <div className="container-en mx-auto">
          <p className="eyebrow mb-4">Feltnoter</p>
          <h1
            className="font-display font-[200] text-ink leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Blog
          </h1>
          <p className="mt-4 font-body text-[16px] text-ink-mid max-w-xl leading-[1.6]">
            Praktiske observationer om Google Shopping, feed management og
            Merchant Center — skrevet fra daglig kontoarbejde.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-en mx-auto">
          {posts.length === 0 ? (
            <div className="border border-rule py-16 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Ingen indlæg endnu
              </p>
            </div>
          ) : (
            <div className="divide-y divide-rule border-y border-rule">
              {posts.map((post) => (
                <article key={post.id} className="py-8 group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                      <time className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft shrink-0">
                        {formatDate(post.date)}
                      </time>
                      <div className="flex-1">
                        <h2
                          className="font-display font-[300] text-ink leading-[1.1] tracking-[-0.02em] transition-colors duration-200 group-hover:text-ink-mid"
                          style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                        {post.excerpt?.rendered && (
                          <p className="mt-2 font-body text-[15px] text-ink-mid leading-[1.5] line-clamp-2">
                            {stripHtml(post.excerpt.rendered)}
                          </p>
                        )}
                      </div>
                      <span className="font-mono text-[12px] text-copper shrink-0">
                        →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
