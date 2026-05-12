import { getCaseBySlug, getAllCaseSlugs } from "@/lib/wordpress";
import { stripHtml } from "@/lib/metadata";
import { MerchantCenterMock } from "@/components/merchant-center-mock";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllCaseSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCaseBySlug(slug);
  if (!c) return {};

  const description = stripHtml(c.excerpt.rendered).slice(0, 160);
  return {
    title: stripHtml(c.title.rendered),
    description,
    alternates: { canonical: `/cases/${slug}` },
    openGraph: {
      type: "article",
      url: `${siteConfig.site_domain}/cases/${slug}`,
      title: stripHtml(c.title.rendered),
      description,
    },
  };
}

const demoRows = [
  { name: "Produkt A — Eksempel", brand: "Brand", margin: "38 %", avail: "12 stk", status: "active" as const },
  { name: "Produkt B — Eksempel", brand: "Brand", margin: "22 %", avail: "0 stk", status: "disapproved" as const },
  { name: "Produkt C — Eksempel", brand: "Brand", margin: "41 %", avail: "3 stk", status: "limited" as const },
];

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = await getCaseBySlug(slug);
  if (!c) notFound();

  const featuredMedia = c._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <main>
      <article>
        <header className="border-b border-rule py-16">
          <div className="container-en mx-auto max-w-4xl">
            <Link
              href="/cases"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink transition-colors duration-200 mb-6 block"
            >
              ← Cases
            </Link>
            <p className="eyebrow mb-4">Case</p>
            <h1
              className="font-display font-[200] text-ink leading-[1.0] tracking-[-0.035em]"
              style={{ fontSize: "clamp(32px, 4.8vw, 68px)" }}
              dangerouslySetInnerHTML={{ __html: c.title.rendered }}
            />
          </div>
        </header>

        {featuredMedia?.source_url && (
          <div className="border-b border-rule">
            <div className="container-en mx-auto max-w-4xl py-8">
              {/* eslint-disable-next-line */}
              <img
                src={featuredMedia.source_url}
                alt={featuredMedia.alt_text || stripHtml(c.title.rendered)}
                className="w-full h-64 object-cover md:h-96 border border-rule"
              />
            </div>
          </div>
        )}

        <div className="py-16">
          <div className="container-en mx-auto grid gap-16 md:grid-cols-[1fr_380px] max-w-4xl items-start">
            <div
              className="font-display font-[300] text-[17px] text-ink leading-[1.75] tracking-[-0.005em] [&_h2]:font-display [&_h2]:font-[300] [&_h2]:text-[24px] [&_h2]:leading-[1.1] [&_h2]:tracking-[-0.025em] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:font-[300] [&_h3]:text-[20px] [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:mb-5 [&_a]:text-copper [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-copper/40 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-1 [&_blockquote]:border-l-2 [&_blockquote]:border-copper [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8"
              dangerouslySetInnerHTML={{ __html: c.content.rendered }}
            />

            <div className="sticky top-20">
              <MerchantCenterMock
                title={stripHtml(c.title.rendered)}
                meta="Feed preview"
                rows={demoRows}
              />
            </div>
          </div>
        </div>

        <footer className="border-t border-rule py-12">
          <div className="container-en mx-auto max-w-4xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/cases"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink transition-colors duration-200"
            >
              ← Alle cases
            </Link>
            <Link
              href="/kontakt"
              className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
            >
              → Skriv til Esben om dit setup
            </Link>
          </div>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: stripHtml(c.title.rendered),
            datePublished: c.date,
            dateModified: c.modified,
            author: {
              "@type": "Person",
              name: "Esben Hornbøll",
              url: siteConfig.site_domain,
            },
          }),
        }}
      />
    </main>
  );
}
