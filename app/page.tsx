import Link from "next/link";
import { MerchantCenterMock } from "@/components/merchant-center-mock";
import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "EcomNord — Google Ads & Feed Management",
  description:
    "Solo Google Ads og feed management-praksis for nordiske webshops. Direkte arbejde med Merchant Center, produktdata og Shopping-kampagner.",
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.site_domain,
    title: "EcomNord — Google Ads & Feed Management",
    description:
      "Solo Google Ads og feed management-praksis for nordiske webshops.",
  },
};

const disciplines = [
  {
    num: "01",
    title: "Google Ads",
    body: "Shopping, Performance Max og Search for webshops med reelt produktkatalog. Kampagner bygget på produktdata — ikke på gætteri.",
  },
  {
    num: "02",
    title: "Feed Management",
    body: "Produktdata-arkitektur i Merchant Center: titles, typer, etiketter, supplemental feeds og custom labels der afspejler margin og sæson.",
  },
  {
    num: "03",
    title: "Merchant Center Audit",
    body: "Systematisk gennemgang af feed-kvalitet, diagnostik og politikafvigelser. Du får en skriftlig rapport — ikke en salgspitch.",
  },
  {
    num: "04",
    title: "Hands-on rådgivning",
    body: "Direkte sparring om konto-strategi uden salgsled. Esben arbejder selv på kontoen — ingen juniors, ingen Account Managers.",
  },
];

const customers = [
  {
    roman: "I",
    name: "Nordisk interiørshop",
    category: "Møbler & bolig",
    detail: "Feed-restrukturering og Performance Max-opsætning",
  },
  {
    roman: "II",
    name: "Dansk mode-brand",
    category: "Beklædning",
    detail: "Merchant Center audit og supplemental feed-optimering",
  },
  {
    roman: "III",
    name: "Skandinavisk outdoor",
    category: "Sport & fritid",
    detail: "Custom labels på margin og sæson, Shopping-restrukturering",
  },
  {
    roman: "IV",
    name: "Svensk elektronikshop",
    category: "Forbrugerelektronik",
    detail: "Feed-kvalitetsløft og diagnostik-rydning i Merchant Center",
  },
];

const mockRows = [
  { name: "Lounge Chair Eik", brand: "HAY", margin: "38 %", avail: "12 stk", status: "active" as const },
  { name: "Wool Blanket 130×180", brand: "Røros", margin: "42 %", avail: "5 stk", status: "limited" as const },
  { name: "Side Table Oak", brand: "Muuto", margin: "31 %", avail: "0 stk", status: "disapproved" as const },
  { name: "Floor Lamp Brass", brand: "Ferm", margin: "45 %", avail: "8 stk", status: "active" as const },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-rule py-24 md:py-32">
        <div className="container-en mx-auto grid gap-16 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="eyebrow">→ din ecom nørd</p>
            <h1
              className="font-display font-[200] text-ink leading-[0.98] tracking-[-0.035em]"
              style={{ fontSize: "clamp(48px, 7.2vw, 104px)" }}
            >
              Google Ads og feed management for nordiske webshops
            </h1>
            <p className="font-body text-[16px] text-ink-mid leading-[1.6] max-w-lg">
              Esben Hornbøll arbejder direkte med dine produktdata, din
              Merchant Center-konto og dine Shopping-kampagner. Ingen
              bureau-lag imellem.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/kontakt"
                className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80 w-fit"
              >
                → Få dit Merchant Center gennemgået — gratis
              </Link>
              <Link
                href="/cases"
                className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-ink-mid underline underline-offset-4 transition-colors duration-200 hover:text-ink w-fit"
              >
                → Se cases
              </Link>
            </div>
          </div>

          {/* Right: page number editorial element */}
          <div className="hidden md:flex flex-col items-end justify-between gap-8 pt-2">
            <span
              className="font-display font-[200] text-rule leading-[1] select-none"
              style={{ fontSize: "clamp(80px, 10vw, 140px)" }}
              aria-hidden
            >
              00
            </span>
            <div className="border-t border-rule pt-4 text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-1">
                Næste opslag
              </p>
              <Link
                href="/blog"
                className="font-display italic font-[300] text-[14px] text-ink-mid underline underline-offset-4 decoration-rule hover:text-ink transition-colors duration-200"
              >
                Feltnoter fra Merchant Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEKTION 01 · PRAKSIS ─────────────────────────────────────────── */}
      <section className="py-24 border-b border-rule">
        <div className="container-en mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
              01
            </span>
            <h2
              className="font-display font-[300] text-ink leading-[1.0] tracking-[-0.028em]"
              style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}
            >
              Praksis
            </h2>
          </div>
          <div className="grid gap-px border border-rule sm:grid-cols-2">
            {disciplines.map((d) => (
              <div
                key={d.num}
                className="border-rule bg-paper p-8 sm:border-r sm:last:border-r-0 [&:nth-child(odd)]:border-b [&:nth-child(even)]:border-b sm:[&:nth-child(n+3)]:border-b-0"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper mb-4 block">
                  {d.num}
                </span>
                <h3 className="font-display font-[300] text-[22px] text-ink leading-[1.1] tracking-[-0.02em] mb-3">
                  {d.title}
                </h3>
                <p className="font-body text-[15px] text-ink-mid leading-[1.6]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEKTION 02 · FELTNOTAT ───────────────────────────────────────── */}
      <section className="py-24 border-b border-rule bg-paper-2">
        <div className="container-en mx-auto grid gap-16 md:grid-cols-2 items-start">
          {/* Left: editorial text + dl-meta */}
          <div className="flex flex-col gap-8">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
                02
              </span>
              <h2
                className="font-display font-[300] text-ink leading-[1.0] tracking-[-0.028em]"
                style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}
              >
                Feltnotat
              </h2>
            </div>
            <div className="font-display font-[300] text-[17px] text-ink leading-[1.7] space-y-4">
              <p>
                De fleste Merchant Center-konti lider ikke af tekniske fejl.
                De lider af redaktionelle. Forkerte produkttyper, vage titles,
                manglende GTINs — data der er skrevet til et lagersystem, ikke
                til Google Shopping.
              </p>
              <p>
                Et feed-audit starter med diagnostik. Derefter prioriterer vi:
                hvilke produkter bidrager til margin, og hvilke spæder på
                budget uden afkast? Custom labels på margin og sæson giver
                kampagnerne noget at arbejde med.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-px border border-rule">
              {[
                { term: "Aktive produkter", value: "4.200+" },
                { term: "Feed-dækning", value: "94 %" },
                { term: "Merchant-politikfejl", value: "0" },
                { term: "ROAS (12 mdr. snit)", value: "4,8×" },
              ].map((item) => (
                <div
                  key={item.term}
                  className="border border-rule bg-paper p-5"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft mb-1">
                    {item.term}
                  </dt>
                  <dd className="font-display font-[200] text-[32px] text-ink leading-[1.1] tracking-[-0.03em]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: MerchantCenterMock */}
          <div className="w-full">
            <MerchantCenterMock
              title="Produktoversigt — interiørshop Q1"
              meta="Feed preview · 4 produkter vist"
              rows={mockRows}
            />
          </div>
        </div>
      </section>

      {/* ── CITATBLOK ───────────────────────────────────────────────────── */}
      <section className="py-24 border-b border-rule">
        <div className="container-en mx-auto max-w-3xl">
          <div className="border-l-2 border-copper pl-8">
            <blockquote
              className="font-display italic font-[200] text-ink leading-[1.15] tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 3.6vw, 42px)" }}
            >
              De fleste feed-problemer er ikke tekniske. De er redaktionelle.
            </blockquote>
            <cite className="mt-6 block font-mono text-[11px] uppercase tracking-[0.16em] text-copper not-italic">
              Esben Hornbøll · EcomNord
            </cite>
          </div>
        </div>
      </section>

      {/* ── SEKTION 03 · KUNDER ─────────────────────────────────────────── */}
      <section className="py-24 border-b border-rule">
        <div className="container-en mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
              03
            </span>
            <h2
              className="font-display font-[300] text-ink leading-[1.0] tracking-[-0.028em]"
              style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}
            >
              Kunder
            </h2>
          </div>

          <div className="divide-y divide-rule border-y border-rule">
            {customers.map((c) => (
              <div
                key={c.roman}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 py-6 md:grid-cols-[3rem_1fr_1fr_1fr] md:items-center"
              >
                <span className="font-display italic font-[200] text-[20px] text-ink-soft leading-[1] md:text-[22px]">
                  {c.roman}
                </span>
                <p className="font-display font-[300] text-[17px] text-ink leading-[1.2]">
                  {c.name}
                </p>
                <p className="col-start-2 font-mono text-[11px] uppercase tracking-[0.14em] text-copper md:col-start-auto">
                  {c.category}
                </p>
                <p className="col-start-2 font-body text-[14px] text-ink-mid md:col-start-auto">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/cases"
              className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
            >
              → Se alle cases
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEKTION 04 · KONTAKT-FOOTER ─────────────────────────────────── */}
      <section className="bg-paper-2 py-24">
        <div className="container-en mx-auto grid gap-16 md:grid-cols-3">
          {/* Col 1: stor h3 */}
          <div>
            <h2
              className="font-display font-[200] text-ink leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
            >
              Vil du have dit Merchant Center gennemgået?
            </h2>
            <div className="mt-6">
              <Link
                href="/kontakt"
                className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
              >
                → Send dit feed — gratis review
              </Link>
            </div>
          </div>

          {/* Col 2: direkte kontakt */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
              Direkte kontakt
            </p>
            <a
              href="mailto:esben@ecomnord.com"
              className="font-body text-[15px] text-ink underline underline-offset-4 decoration-rule transition-colors duration-200 hover:text-ink-mid"
            >
              esben@ecomnord.com
            </a>
            <a
              href="https://linkedin.com/in/esbenhornboll"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mid underline underline-offset-4 decoration-rule transition-colors duration-200 hover:text-ink"
            >
              LinkedIn →
            </a>
          </div>

          {/* Col 3: praktisk info */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-1">
              Praktisk
            </p>
            {[
              "Solo-praksis baseret i Danmark",
              "Arbejder med nordiske webshops",
              "Svarer inden for 1–2 arbejdsdage",
              "Ingen bureau-kontrakter eller bindingsperioder",
            ].map((line) => (
              <p key={line} className="font-body text-[14px] text-ink-mid leading-[1.5]">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="container-en mx-auto mt-16 border-t border-rule pt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
            © {new Date().getFullYear()} EcomNord · Esben Hornbøll
          </p>
          <div className="flex gap-6">
            {[
              ["Cases", "/cases"],
              ["Services", "/services"],
              ["Blog", "/blog"],
              ["Kontakt", "/kontakt"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
