import Link from "next/link";
import { getAllCases } from "@/lib/wordpress";
import { stripHtml } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases — Google Ads & Feed Management",
  description:
    "Konkrete cases fra arbejdet med nordiske webshops: feed-restrukturering, Merchant Center audit og Shopping-kampagner.",
  alternates: { canonical: "/cases" },
};

export const revalidate = 3600;

export default async function CasesPage() {
  const cases = await getAllCases();

  const fallbackCases = [
    {
      roman: "I",
      title: "Nordisk interiørshop",
      category: "Møbler & bolig",
      tags: ["Feed-restrukturering", "Performance Max"],
      slug: null as string | null,
    },
    {
      roman: "II",
      title: "Dansk mode-brand",
      category: "Beklædning",
      tags: ["Merchant Center audit", "Supplemental feed"],
      slug: null as string | null,
    },
    {
      roman: "III",
      title: "Skandinavisk outdoor",
      category: "Sport & fritid",
      tags: ["Custom labels", "Shopping-restrukturering"],
      slug: null as string | null,
    },
  ];

  const hasCases = cases.length > 0;

  return (
    <main>
      <section className="border-b border-rule py-16">
        <div className="container-en mx-auto">
          <p className="eyebrow mb-4">Arbejde</p>
          <h1
            className="font-display font-[200] text-ink leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Cases
          </h1>
          <p className="mt-4 font-body text-[16px] text-ink-mid max-w-xl leading-[1.6]">
            Konkrete cases fra arbejdet med nordiske webshops — hvad der var
            galt, hvad der blev lavet, og hvad det betød for feed-kvalitet og
            kampagneresultater.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-en mx-auto">
          {hasCases ? (
            <div className="divide-y divide-rule border-y border-rule">
              {cases.map((c, i) => {
                const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][i] ?? String(i + 1);
                return (
                  <article key={c.id} className="py-10 group">
                    <Link href={`/cases/${c.slug}`} className="block">
                      <div className="grid gap-2 md:grid-cols-[3rem_1fr_auto] md:items-start md:gap-8">
                        <span className="font-display italic font-[200] text-[20px] text-ink-soft leading-[1]">
                          {roman}
                        </span>
                        <div>
                          <h2
                            className="font-display font-[300] text-ink leading-[1.1] tracking-[-0.025em] transition-colors duration-200 group-hover:text-ink-mid"
                            style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}
                            dangerouslySetInnerHTML={{
                              __html: c.title.rendered,
                            }}
                          />
                          {c.excerpt?.rendered && (
                            <p className="mt-2 font-body text-[15px] text-ink-mid leading-[1.5] max-w-xl">
                              {stripHtml(c.excerpt.rendered).slice(0, 140)}
                            </p>
                          )}
                        </div>
                        <span className="font-mono text-[14px] text-copper">→</span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="divide-y divide-rule border-y border-rule">
              {fallbackCases.map((c) => (
                <div key={c.roman} className="py-10">
                  <div className="grid gap-2 md:grid-cols-[3rem_1fr] md:items-start md:gap-8">
                    <span className="font-display italic font-[200] text-[20px] text-ink-soft leading-[1]">
                      {c.roman}
                    </span>
                    <div>
                      <h2 className="font-display font-[300] text-ink leading-[1.1] tracking-[-0.025em] text-[24px]">
                        {c.title}
                      </h2>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-copper">
                        {c.category}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft border border-rule px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2 py-16">
        <div className="container-en mx-auto max-w-xl text-center">
          <p className="font-display font-[300] text-[20px] text-ink leading-[1.4] mb-6">
            Vil du høre mere om, hvordan vi løste et konkret problem?
          </p>
          <Link
            href="/kontakt"
            className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
          >
            → Skriv til Esben
          </Link>
        </div>
      </section>
    </main>
  );
}
