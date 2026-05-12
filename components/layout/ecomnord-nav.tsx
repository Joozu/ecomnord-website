"use client";

import Link from "next/link";
import { useState } from "react";
import { mainMenu } from "@/menu.config";

export function EcomNordNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-rule backdrop-blur-md bg-paper/94">
        <div className="container-en mx-auto flex h-14 items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="whitespace-nowrap font-display text-[15px] font-[400] tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-ink-mid"
          >
            ECOM{" "}
            <span className="italic text-copper">Nord</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {Object.entries(mainMenu).map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[11px] font-[500] uppercase tracking-[0.16em] text-ink-mid transition-colors duration-200 hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/kontakt"
            className="hidden whitespace-nowrap font-mono text-[11px] font-[500] uppercase tracking-[0.16em] text-copper underline underline-offset-4 decoration-copper/40 transition-colors duration-200 hover:text-copper md:block"
          >
            → Skriv til mig
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-[5px] p-1 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Åbn menu"
          >
            <span className="block h-px w-5 bg-ink transition-colors duration-200" />
            <span className="block h-px w-5 bg-ink transition-colors duration-200" />
            <span className="block h-px w-3 bg-ink transition-colors duration-200" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-paper">
          <div className="container-en mx-auto flex h-14 items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="whitespace-nowrap font-display text-[15px] font-[400] tracking-[-0.01em] text-ink"
            >
              ECOM <span className="italic text-copper">Nord</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Luk menu"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mid"
            >
              Luk ×
            </button>
          </div>

          <div className="container-en mx-auto flex flex-1 flex-col justify-center gap-8 pb-24">
            {Object.entries(mainMenu).map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-[clamp(32px,6vw,52px)] font-[200] leading-[1.0] tracking-[-0.03em] text-ink transition-colors duration-200 hover:text-ink-mid"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 font-mono text-[12px] font-[500] uppercase tracking-[0.18em] text-copper underline underline-offset-4"
            >
              → Skriv til mig
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
