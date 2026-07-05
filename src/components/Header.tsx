"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/siteContent";
import { HERO } from "@/data/siteContent";
import CtaButton from "./CtaButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hasIntro, setHasIntro] = useState(false);

  useEffect(() => {
    const intro = document.getElementById("intro");
    setHasIntro(!!intro);
    const onScroll = () => {
      const threshold = intro ? intro.offsetHeight - 72 : 24;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the dark lamp intro: use light text; after scrolling past it: normal.
  const light = hasIntro && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 motion-safe-only ${
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#ana-icerik" className="flex items-baseline gap-1.5">
          <span
            className={`font-display text-[22px] font-semibold tracking-tight transition-colors ${
              light ? "text-paper" : "text-ink"
            }`}
          >
            İngilizcemiz
          </span>
          <span className="text-action" aria-hidden="true">
            .
          </span>
        </a>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                light
                  ? "text-paper/75 hover:text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton
          event="cta_click_header"
          sourceSection="header"
          className="hidden sm:inline-flex"
        >
          {HERO.primaryCta}
        </CtaButton>

        {/* Mobile: compact CTA */}
        <CtaButton
          event="cta_click_header"
          sourceSection="header"
          className="!px-4 !text-sm sm:hidden"
        >
          Başla
        </CtaButton>
      </div>
    </header>
  );
}
