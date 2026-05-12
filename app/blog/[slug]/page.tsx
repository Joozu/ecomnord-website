import { getPostBySlug, getAllPostSlugs } from "@/lib/wordpress";
import { stripHtml } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const description = stripHtml(post.excerpt.rendered).slice(0, 160);
  return {
    title: stripHtml(post.title.rendered),
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `${siteConfig.site_domain}/blog/${slug}`,
      title: stripHtml(post.title.rendered),
      description,
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <main>
      <article>
        <header className="border-b border-rule py-16">
          <div className="container-en mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink transition-colors duration-200 mb-6 block"
            >
              ← Blog
            </Link>
            <p className="eyebrow mb-4">
              {formatDate(post.date)}
            </p>
            <h1
              className="font-display font-[200] text-ink leading-[1.0] tracking-[-0.035em]"
              style={{ fontSize: "clamp(32px, 4.8vw, 68px)" }}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
        </header>

        {featuredMedia?.source_url && (
          <div className="border-b border-rule">
            <div className="container-en mx-auto max-w-3xl py-8">
              {/* eslint-disable-next-line */}
              <img
                src={featuredMedia.source_url}
                alt={featuredMedia.alt_text || stripHtml(post.title.rendered)}
                className="w-full h-64 object-cover md:h-96 border border-rule"
              />
            </div>
          </div>
        )}

        <div className="py-16">
          <div
            className="container-en mx-auto max-w-3xl font-display font-[300] text-[17px] text-ink leading-[1.75] tracking-[-0.005em] [&_h2]:font-display [&_h2]:font-[300] [&_h2]:text-[26px] [&_h2]:leading-[1.1] [&_h2]:tracking-[-0.025em] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:font-[300] [&_h3]:text-[20px] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_a]:text-copper [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-copper/40 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-1 [&_blockquote]:border-l-2 [&_blockquote]:border-copper [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8 [&_code]:font-mono [&_code]:text-[14px] [&_code]:bg-paper-2 [&_code]:px-1.5 [&_code]:py-0.5"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>

        <footer className="border-t border-rule py-12">
          <div className="container-en mx-auto max-w-3xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink transition-colors duration-200"
            >
              ← Alle indlæg
            </Link>
            <Link
              href="/kontakt"
              className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
            >
              → Skriv til Esben
            </Link>
          </div>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: stripHtml(post.title.rendered),
            datePublished: post.date,
            dateModified: post.modified,
            author: {
              "@type": "Person",
              name: "Esben Hornbøll",
              url: siteConfig.site_domain,
            },
            publisher: {
              "@type": "Organization",
              name: "EcomNord",
              url: siteConfig.site_domain,
            },
          }),
        }}
      />
    </main>
  );
}
