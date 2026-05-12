"use client";

const prefilledSubject = "Merchant Center review — EcomNord";

export function KontaktForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const navn = (form.querySelector('[name="navn"]') as HTMLInputElement)?.value ?? "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value ?? "";
    const telefon = (form.querySelector('[name="telefon"]') as HTMLInputElement)?.value ?? "";
    const besked = (form.querySelector('[name="besked"]') as HTMLTextAreaElement)?.value ?? "";

    const body = `Fra: ${navn} (${email})${telefon ? `\nTelefon: ${telefon}` : ""}\n\n${besked}`;
    window.location.href = `mailto:esben@ecomnord.com?subject=${encodeURIComponent(prefilledSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
          Navn
        </label>
        <input
          name="navn"
          type="text"
          required
          placeholder="Dit navn"
          className="border border-rule bg-paper px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-copper transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="din@email.dk"
          className="border border-rule bg-paper px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-copper transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
          Telefon{" "}
          <span className="text-ink-soft normal-case tracking-normal font-body text-[12px]">
            (valgfri)
          </span>
        </label>
        <input
          name="telefon"
          type="tel"
          placeholder="+45 __ __ __ __"
          className="border border-rule bg-paper px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-copper transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
          Besked
        </label>
        <textarea
          name="besked"
          required
          rows={5}
          placeholder="Beskriv kort: hvilken type webshop, størrelse af katalog, og hvad du har brug for hjælp til."
          className="border border-rule bg-paper px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-copper transition-colors duration-200 resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="font-mono text-[12px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/50 transition-colors duration-200 hover:text-copper/80"
        >
          → Send via email-klient
        </button>
        <p className="mt-3 font-mono text-[10px] text-ink-soft">
          Klik åbner din email-klient med felterne udfyldt. Eller skriv direkte
          til{" "}
          <a
            href="mailto:esben@ecomnord.com"
            className="text-copper underline underline-offset-2"
          >
            esben@ecomnord.com
          </a>
        </p>
      </div>
    </form>
  );
}
