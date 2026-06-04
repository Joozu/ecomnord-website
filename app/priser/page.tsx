// app/priser/page.tsx
// Alle farver, fonte og layout følger EcomNord designsystem

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Priser — EcomNord',
  description: 'Gennemsigtig prissætning for senior Google Ads-specialisering. Ingen pakker, ingen procenter — du køber dedikeret tid.',
}

const pricingTiers = [
  {
    index: '01',
    days: '½ dag / uge',
    hours: '14 timer / måned',
    monthlyPrice: '12.500',
    hourRate: '~893',
    overtimeRate: '900',
    description: 'Udgangspunktet for nye samarbejder. Nok tid til løbende optimering, feed-arbejde og strategisk retning.',
  },
  {
    index: '02',
    days: '1 dag / uge',
    hours: '25 timer / måned',
    monthlyPrice: '20.000',
    hourRate: '800',
    overtimeRate: '800',
    description: 'Til konti der er klar til at accelerere. Mere tid betyder dybere kendskab og hurtigere beslutninger.',
    featured: true,
  },
  {
    index: '03',
    days: '2 dage / uge',
    hours: '50 timer / måned',
    monthlyPrice: '35.000',
    hourRate: '700',
    overtimeRate: '700',
    description: 'Til ambitiøse webshops med høj kompleksitet eller flere markeder. Yderligere tid faktureres til 700 kr./t.',
  },
]

export default function PriserPage() {
  return (
    <main className="bg-[#FAF8F3] text-[#16140F] min-h-screen">

      {/* Hero */}
      <section className="border-b border-[#DCD6C7] pt-32 pb-20 px-7 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#B6794D] mb-6">
            — Priser
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <h1
                className="font-serif font-extralight leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
              >
                Du køber tid.<br />
                Ikke en pakke.
              </h1>
              <p className="text-[#5A554B] text-lg leading-relaxed max-w-lg">
                Ingen procenter af dit annoncebudget. Ingen foruddefinerede opgaver. Du køber dedikeret senior-tid — og vi bruger den på det der skaber mest værdi i din Google Ads-konto.
              </p>
            </div>
            <div className="border-l border-[#DCD6C7] pl-12 hidden md:block">
              <p className="text-[#5A554B] leading-relaxed">
                Markedet er fyldt med bureauer der sælger pakker og freelancere der vedligeholder konti. EcomNord er noget andet: en specialiseret senior-profil der investerer i din forretning og vækster den — ikke bare holder den kørende.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hvad tiden bruges på */}
      <section className="border-b border-[#DCD6C7] py-20 px-7 md:px-14">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#B6794D] mb-4">
              — Hvad du køber
            </p>
            <h2
              className="font-serif font-light leading-tight"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
            >
              Tid bruges altid på det der skaber mest værdi
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-8 pt-2">
            <p className="text-[#5A554B] leading-relaxed text-lg">
              God Google Shopping kræver mere end adgang til en konto. Det kræver kendskab til dine produkter, dine marginer, hvad der er på lager, hvad der skal flyttes og hvad der skal vækste. Jo tættere samarbejde — jo bedre kampagner.
            </p>
            <p className="text-[#5A554B] leading-relaxed text-lg">
              For nogle kunder betyder det et fast ugentligt møde. For andre at jeg sidder fysisk hos jer og arbejder direkte fra jeres virkelighed. Fremmøde er ikke en ekstra ydelse — det er en del af arbejdet.
            </p>
            <div className="border-t border-[#DCD6C7] pt-8 grid grid-cols-2 gap-6">
              {[
                ['Feed-arkitektur', 'Titler, attributter, kategorier og datastruktur der performer'],
                ['Merchant Center', 'Fejl, suspensions, politikker og optimering af produktdata'],
                ['Shopping & PMax', 'Kampagnestruktur, budgivning og skalering'],
                ['Forretningsindsigt', 'Marginer, sæsoner og beslutninger der forbedrer kampagnerne'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p className="font-medium text-[#16140F] mb-1">{title}</p>
                  <p className="text-[#8F8A7F] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opstart */}
      <section className="border-b border-[#DCD6C7] py-20 px-7 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#B6794D] mb-12">
            — Kom i gang
          </p>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 border border-[#DCD6C7] p-10 flex flex-col justify-between gap-12">
              <div>
                <h2
                  className="font-serif font-light leading-tight mb-4"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 40px)' }}
                >
                  Opstartspakke
                </h2>
                <p className="text-[#5A554B] leading-relaxed">
                  Inden vi begynder skal jeg kende din forretning. Det er forudsætningen for at de første måneder skaber reel effekt og ikke bare vedligeholdelse.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-2">Engangsfee</p>
                <p className="font-serif font-light" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                  7.500 <span className="text-[#8F8A7F] text-2xl">kr.</span>
                </p>
                <p className="text-[#8F8A7F] text-sm mt-1">ex. moms</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-6">
              <p className="text-[#5A554B] font-medium">Pakken inkluderer:</p>
              <ul className="flex flex-col gap-4">
                {[
                  'Gennemgang af hele Google Ads-kontoen — struktur, kampagner, budgivning, tracking',
                  'Audit af produktfeed — titler, attributter, kategorisering og datakvalitet',
                  'Gennemgang af hjemmeside med fokus på konvertering, hastighed og feed-kompatibilitet',
                  'Forretningssamtale om produkter, marginer, sæsoner og vækstmål',
                  'Indledende strategimøde — fysisk eller remote — med konkret plan for samarbejdet',
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-[#5A554B] leading-relaxed">
                    <span className="text-[#B6794D] font-mono mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Introduktionspris */}
      <section className="border-b border-[#DCD6C7] py-20 px-7 md:px-14 bg-[#F2EFE7]">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#B6794D] mb-4">
              — For nye webshops
            </p>
            <h2
              className="font-serif font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(26px, 2.8vw, 40px)' }}
            >
              Introduktionspris de første 3 måneder
            </h2>
            <p className="text-[#5A554B] leading-relaxed mb-8">
              Til webshops med et Google Ads-spend under 30.000 kr./måned tilbyder jeg en introduktionspris de første 3 måneder. Det giver tid til at bevise værdien af samarbejdet — inden I tager stilling til det videre forløb.
            </p>
            <div className="border-t border-[#DCD6C7] pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-2">Månedspris — 3 måneder</p>
              <p className="font-serif font-light" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                7.500 <span className="text-[#8F8A7F] text-2xl">kr.</span>
              </p>
              <p className="text-[#8F8A7F] text-sm mt-1">ex. moms · herefter minimum 12.500 kr./måned</p>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 border border-[#DCD6C7] p-8 bg-[#FAF8F3]">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-6">Betingelser</p>
            <ul className="flex flex-col gap-4">
              {[
                'Google Ads-spend under 30.000 kr./måned',
                'Kræver gennemført opstartspakke',
                'Fast 3-måneders introduktionsperiode',
                'Automatisk overgang til løbende samarbejde fra måned 4',
              ].map((item) => (
                <li key={item} className="flex gap-4 text-[#5A554B] text-sm leading-relaxed">
                  <span className="text-[#B6794D] font-mono">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#DCD6C7] mt-8 pt-6">
              <p className="text-[#8F8A7F] text-sm leading-relaxed">
                Har du et spend over 30.000 kr./måned er du allerede godt i gang — og du starter direkte på det løbende samarbejde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Løbende samarbejde */}
      <section className="border-b border-[#DCD6C7] py-20 px-7 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#B6794D] mb-4">
                — Løbende samarbejde
              </p>
              <h2
                className="font-serif font-light leading-tight"
                style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
              >
                Jo mere tid, desto billigere per time
              </h2>
            </div>
            <p className="text-[#8F8A7F] text-sm max-w-sm leading-relaxed">
              Mere tid betyder dybere kendskab til forretningen og hurtigere beslutninger. Det afspejles i timeprisen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-[#DCD6C7]">
            {pricingTiers.map((tier) => (
              <div
                key={tier.days}
                className={`
                  p-8 flex flex-col gap-6 border-r border-[#DCD6C7] last:border-r-0
                  border-b md:border-b-0
                  ${tier.featured ? 'bg-[#F2EFE7]' : ''}
                `}
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-3">
                    {tier.index}
                  </p>
                  <p className="font-medium text-[#16140F] text-lg leading-snug">
                    {tier.days}
                  </p>
                  <p className="text-[#8F8A7F] text-sm mt-1">{tier.hours}</p>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-2">
                    Pr. måned
                  </p>
                  <p className="font-serif font-light text-4xl">
                    {tier.monthlyPrice}
                    <span className="text-[#8F8A7F] text-lg ml-1">kr.</span>
                  </p>
                  <p className="text-[#8F8A7F] text-xs mt-1">ex. moms</p>
                </div>

                <div className="border-t border-[#DCD6C7] pt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#8F8A7F] mb-1">
                      Timepris
                    </p>
                    <p className="text-[#B6794D] font-medium text-sm">
                      {tier.hourRate} kr./t
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#8F8A7F] mb-1">
                      Overtid
                    </p>
                    <p className="text-[#5A554B] font-medium text-sm">
                      {tier.overtimeRate} kr./t
                    </p>
                  </div>
                </div>

                <p className="text-[#8F8A7F] text-sm leading-relaxed mt-auto">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          {/* Ad hoc */}
          <div className="mt-0 border border-t-0 border-[#DCD6C7] p-8 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-3">
                Ad hoc
              </p>
              <p className="font-medium text-[#16140F] text-lg">Ingen fast aftale</p>
              <p className="text-[#8F8A7F] text-sm mt-1">Faktureres pr. time</p>
            </div>
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-2">Timepris</p>
              <p className="font-serif font-light text-4xl">
                1.200
                <span className="text-[#8F8A7F] text-lg ml-1">kr.</span>
              </p>
              <p className="text-[#8F8A7F] text-xs mt-1">ex. moms</p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-[#8F8A7F] text-sm leading-relaxed">
                Til enkeltstående opgaver uden løbende aftale. Audit, rådgivning, second opinion eller akut hjælp til en konto. Ingen binding, ingen minimumstimer.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[#8F8A7F] text-sm leading-relaxed">
              Ingen binding udover de løbende 3 måneder. Ingen skjulte fees. Ingen procent af dit annoncebudget. Overtidstimer faktureres til pakkens timepris — ikke ad hoc-prisen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-7 md:px-14">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#B6794D] mb-6">
              — Næste skridt
            </p>
            <h2
              className="font-serif font-light leading-tight mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
            >
              Usikker på hvad du har brug for?
            </h2>
            <p className="text-[#5A554B] leading-relaxed mb-10 max-w-lg">
              Skriv til mig med et kort overblik over din situation — spend, platform og hvad du oplever som det største problem. Så vender jeg tilbage med en ærlig vurdering.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-3 text-[#16140F] border-b border-[#B6794D] pb-0.5 hover:text-[#B6794D] transition-colors duration-200 font-medium"
            >
              Skriv til mig
              <span className="text-[#B6794D]">→</span>
            </a>
          </div>
          <div className="border border-[#DCD6C7] p-10 bg-[#F2EFE7]">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#8F8A7F] mb-8">
              Hvad sker der når du skriver
            </p>
            <ul className="flex flex-col gap-6">
              {[
                ['Jeg kigger på din konto', 'Inden vi taler har jeg dannet mig et billede af din situation.'],
                ['Vi tager en snak', '30 minutter. Ingen salg — bare en ærlig vurdering af hvad der giver mening.'],
                ['Vi starter med opstartspakken', 'Og derfra bygger vi samarbejdet op fra et solidt fundament.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-4">
                  <span className="text-[#B6794D] font-mono mt-0.5">→</span>
                  <div>
                    <p className="font-medium text-[#16140F] mb-1">{title}</p>
                    <p className="text-[#8F8A7F] text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}
