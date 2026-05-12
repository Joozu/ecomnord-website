import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser — EcomNord",
  description:
    "Transparente priser for feed management, Google Ads og Merchant Center audit. Ingen skjulte bureaugebyrer.",
  alternates: { canonical: "/priser" },
};

const pricing = [
  {
    id: "audit",
    label: "Merchant Center Audit",
    price: "Gratis",
    period: "Engangs",
    description:
      "En systematisk gennemgang af din Merchant Center-konto. Du modtager en skriftlig rapport med fejl, prioritering og konkrete handlingstrin.",
    details: [
      "Feed-diagnostik og fejlklassificering",
      "Politikafvigelser og suspension-risici",
      "Skriftlig rapport inden for 2 uger",
      "Ingen forpligtelse til videre samarbejde",
    ],
    note: "Tilbuddet gælder for webshops med eksisterende Merchant Center-konto og Google Ads-historik.",
    highlight: true,
  },
  {
    id: "feed",
    label: "Feed Management",
    price: "Fra DKK 4.800",
    period: "pr. måned",
    description:
      "Løbende vedligeholdelse og optimering af dit produktfeed. Prisen afhænger af katalogets størrelse og kompleksitet.",
    details: [
      "Supplemental feed og custom labels",
      "Løbende title- og typeoptimering",
      "Diagnostik og fejlrydning",
      "Månedlig feedrapport",
    ],
    note: "Opstartsgebyr på DKK 9.600 for ny feedstruktur.",
    highlight: false,
  },
  {
    id: "ads",
    label: "Google Ads Management",
    price: "Fra DKK 6.400",
    period: "pr. måned",
    description:
      "Kampagnestyring af Shopping, Performance Max og Search. Prisen er fast — ikke procentbaseret på adspend.",
    details: [
      "Kampagnestruktur og budgetstrategi",
      "Negative søgeord og placementsstyring",
      "Konverteringssporing og attribution",
      "Månedlige performancerapporter",
    ],
    note: "Kræver minimum DKK 15.000/måned i adspend for at samarbejdet giver mening.",
    highlight: false,
  },
  {
    id: "sparring",
    label: "Månedlig rådgivning",
    price: "DKK 3.200",
    period: "pr. måned",
    description:
      "Direkte adgang til Esben. Månedligt strategimøde og ad hoc support på feed- og kampagnespørgsmål.",
    details: [
      "60 min. månedligt strategimøde",
      "Ad hoc support via email",
      "Kvartalsvis performancereview",
      "Ingen bindingsperiode",
    ],
    note: "Kan kombineres med feed management eller ads management.",
    highlight: false,
  },
];

export default function PriserPage() {
  return (
    <main>
      <section className="border-b border-rule py-16">
        <div className="container-en mx-auto">
          <p className="eyebrow mb-4">Transparente priser</p>
          <h1
            className="font-display font-[200] text-ink leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Priser
          </h1>
          <p className="mt-4 font-body text-[16px] text-ink-mid max-w-xl leading-[1.6]">
            Faste priser, ikke procentbaserede bureaumodeller. Ingen
            skjulte gebyrer, ingen binding udover det aftalte.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-en mx-auto">
          <div className="grid gap-px border border-rule sm:grid-cols-2">
            {pricing.map((p) => (
              <div
                key={p.id}
                className={`p-8 border border-rule ${p.highlight ? "bg-copper-soft" : "bg-paper"}`}
              >
                {p.highlight && (
                  <p className="eyebrow mb-3">Anbefalet startpunkt</p>
                )}
                <h2 className="font-display font-[300] text-[20px] text-ink leading-[1.1] tracking-[-0.02em] mb-4">
                  {p.label}
                </h2>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="font-display font-[200] text-[32px] text-ink leading-[1] tracking-[-0.03em]">
                    {p.price}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                    {p.period}
                  </span>
                </div>
                <p className="font-body text-[15px] text-ink-mid leading-[1.6] mb-5">
                  {p.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-3 items-baseline">
                      <span className="font-mono text-[10px] text-copper shrink-0">→</span>
                      <span className="font-body text-[14px] text-ink-mid leading-[1.5]">{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[10px] text-ink-soft leading-[1.5]">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule py-16">
        <div className="container-en mx-auto">
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl">
            <div>
              <h2 className="font-display font-[300] text-[22px] text-ink leading-[1.1] tracking-[-0.025em] mb-4">
                Hvad indgår ikke
              </h2>
              <ul className="space-y-2">
                {[
                  "Adspend (betales direkte til Google)",
                  "Feed-platform (DataFeedWatch, Channable etc.)",
                  "Webshop-platform eller CMS-tilpasninger",
                  "Grafisk produktion og kreative assets",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-baseline">
                    <span className="font-mono text-[10px] text-ink-soft shrink-0">×</span>
                    <span className="font-body text-[15px] text-ink-mid">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-[300] text-[22px] text-ink leading-[1.1] tracking-[-0.025em] mb-4">
                Hvad der passer til dig
              </h2>
              <p className="font-body text-[15px] text-ink-mid leading-[1.6] mb-4">
                EcomNord er bedst egnet til webshops med et eksisterende
                produktkatalog og en Google Ads-historik — men hvor der er
                åbenlyse feed-problemer eller kampagnestrukturer der ikke
                afspejler forretningen.
              </p>
              <Link
                href="/kontakt"
                className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
              >
                → Få en uforpligtende vurdering
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
