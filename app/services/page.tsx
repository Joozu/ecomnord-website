import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Google Ads & Feed Management",
  description:
    "Hvad EcomNord tilbyder: Google Shopping, Performance Max, feed management, Merchant Center audit og løbende rådgivning for nordiske webshops.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    num: "01",
    title: "Feed Management",
    description:
      "Produktdata-arkitektur fra bunden. Vi gennemgår din nuværende feed-struktur og bygger en produktdatamodel, der afspejler forretningslogik — ikke blot eksporter fra dit lagersystem.",
    includes: [
      "Feed-audit med prioriteret fejlliste",
      "Supplemental feed til title- og typeoptimering",
      "Custom labels på margin, sæson og performance",
      "GTIN-validering og kategorimapping",
      "Løbende feed-vedligeholdelse",
    ],
  },
  {
    num: "02",
    title: "Google Shopping & PMax",
    description:
      "Kampagnestruktur baseret på produktdata. Shopping-kampagner og Performance Max der er bygget til at konvertere — med budgetallokering der afspejler din margin, ikke Googles forslag.",
    includes: [
      "Kampagnestruktur og asset-gruppering",
      "Budgetstrategi på produkt- og kategoriniveau",
      "Negative søgeord og placement-eksklusioner",
      "Konverteringssporing og attribution-review",
      "Månedlige performancerapporter",
    ],
  },
  {
    num: "03",
    title: "Merchant Center Audit",
    description:
      "Systematisk gennemgang af din Merchant Center-konto. Du modtager en skriftlig rapport med konkrete fejl, prioriteret rækkefølge og implementeringsanvisninger.",
    includes: [
      "Feed-diagnostik og fejlklassificering",
      "Politikafvigelser og suspension-risici",
      "Produktdækning og coverage-analyse",
      "Konkurrencedygtige datakvalitetsparametre",
      "Skriftlig rapport inden for 2 uger",
    ],
    cta: true,
  },
  {
    num: "04",
    title: "Løbende rådgivning",
    description:
      "Direkte adgang til Esben — ikke en Account Manager. Månedlig sparring om konto-strategi, feed-kvalitet og kampagnebeslutninger. Ingen lange agenturagreementer.",
    includes: [
      "Månedligt strategimøde (60 min)",
      "Ad hoc svar på feed- og kampagnespørgsmål",
      "Kvartalsvis performancereview",
      "Prioriteret support ved Merchant Center-problemer",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-rule py-16">
        <div className="container-en mx-auto">
          <p className="eyebrow mb-4">Hvad vi laver</p>
          <h1
            className="font-display font-[200] text-ink leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Services
          </h1>
          <p className="mt-4 font-body text-[16px] text-ink-mid max-w-xl leading-[1.6]">
            EcomNord er en solo-praksis. Det betyder at du altid arbejder
            direkte med Esben — ingen juniors, ingen overhead, ingen
            salgsled.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-en mx-auto">
          <div className="divide-y divide-rule border-y border-rule">
            {services.map((s) => (
              <div key={s.num} className="py-12 grid gap-8 md:grid-cols-[3rem_1fr_1fr] md:gap-16">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                  {s.num}
                </span>
                <div>
                  <h2 className="font-display font-[300] text-[26px] text-ink leading-[1.1] tracking-[-0.025em] mb-4">
                    {s.title}
                  </h2>
                  <p className="font-body text-[16px] text-ink-mid leading-[1.6]">
                    {s.description}
                  </p>
                  {s.cta && (
                    <Link
                      href="/kontakt"
                      className="mt-6 inline-block font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
                    >
                      → Bestil gratis audit
                    </Link>
                  )}
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-4">
                    Inkluderer
                  </p>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex gap-3 items-baseline">
                        <span className="font-mono text-[10px] text-copper shrink-0">→</span>
                        <span className="font-body text-[15px] text-ink-mid leading-[1.5]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2 py-16">
        <div className="container-en mx-auto max-w-2xl">
          <p className="eyebrow mb-4">Usikker på hvad du har brug for?</p>
          <p className="font-display font-[300] text-[20px] text-ink leading-[1.4] mb-6">
            Send dit Merchant Center til et uforpligtende review. Esben kigger
            på det og giver dig en klar vurdering af, hvad der er det mest
            presserende at kigge på.
          </p>
          <Link
            href="/kontakt"
            className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
          >
            → Start med et gratis Merchant Center review
          </Link>
        </div>
      </section>
    </main>
  );
}
