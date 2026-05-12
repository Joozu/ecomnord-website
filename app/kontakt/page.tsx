import { KontaktForm } from "@/components/kontakt-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — EcomNord",
  description:
    "Skriv til Esben Hornbøll om dit Merchant Center, dit feed eller din Google Ads-konto. Gratis review inden for 2 uger.",
  alternates: { canonical: "/kontakt" },
};

const expectations = [
  {
    num: "01",
    title: "Svar fra mig — ikke en sælger",
    body: "Esben læser og svarer selv. Du kommer ikke igennem et salgsfilter.",
  },
  {
    num: "02",
    title: "2–3 spørgsmål inden vi taler",
    body: "For at give dig et kvalificeret svar har jeg brug for at forstå dit setup. Det tager 5 minutter.",
  },
  {
    num: "03",
    title: "Ærlig vurdering",
    body: "Hvis dit setup ikke matcher det EcomNord er bedst til, siger jeg det. Et dårligt samarbejde gavner ingen.",
  },
];

export default function KontaktPage() {
  return (
    <main>
      <section className="border-b border-rule py-16">
        <div className="container-en mx-auto">
          <p className="eyebrow mb-4">Skriv til mig</p>
          <h1
            className="font-display font-[200] text-ink leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Kontakt
          </h1>
          <p className="mt-4 font-body text-[16px] text-ink-mid max-w-xl leading-[1.6]">
            Send dit Merchant Center til et review (gratis, svar inden for
            2 uger) eller skriv hvis du har et konkret spørgsmål om dit feed
            eller dine Shopping-kampagner.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-en mx-auto grid gap-16 md:grid-cols-2 max-w-4xl">
          {/* Left: form */}
          <div>
            <h2 className="font-display font-[300] text-[22px] text-ink leading-[1.1] tracking-[-0.025em] mb-8">
              Hvad kan jeg hjælpe med?
            </h2>
            <KontaktForm />
          </div>

          {/* Right: expectations + info */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-6">
                Hvad du kan forvente
              </p>
              <div className="flex flex-col gap-6">
                {expectations.map((e) => (
                  <div key={e.num} className="flex gap-5">
                    <span className="font-mono text-[11px] text-copper shrink-0 pt-0.5">
                      {e.num}
                    </span>
                    <div>
                      <p className="font-display font-[300] text-[16px] text-ink leading-[1.3] mb-1">
                        {e.title}
                      </p>
                      <p className="font-body text-[14px] text-ink-mid leading-[1.5]">
                        {e.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-rule pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-4">
                Direkte kontakt
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:esben@ecomnord.com"
                  className="font-body text-[15px] text-ink underline underline-offset-4 decoration-rule hover:text-copper hover:decoration-copper transition-colors duration-200"
                >
                  esben@ecomnord.com
                </a>
                <a
                  href="https://linkedin.com/in/esbenhornboll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mid underline underline-offset-4 decoration-rule hover:text-ink transition-colors duration-200"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            <div className="border-t border-rule pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-4">
                Praktisk
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Solo-praksis baseret i Danmark",
                  "Arbejder med nordiske webshops",
                  "Svarer inden for 1–2 arbejdsdage",
                  "Ingen bureau-kontrakter eller bindingsperioder",
                ].map((line) => (
                  <p
                    key={line}
                    className="font-body text-[14px] text-ink-mid leading-[1.5]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
