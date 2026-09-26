import { HERO } from "@/data/siteContent";
import CtaButton from "./CtaButton";
import HeroForm from "./HeroForm";

export default function Hero() {
  return (
    <section
      id="ana-icerik"
      className="paper-grain relative overflow-hidden"
    >
      <div className="container-x grid items-center gap-12 pb-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-32">
        {/* Left: thesis */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface/70 px-4 py-1.5 text-[13px] font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-action" aria-hidden="true" />
            {HERO.eyebrow}
          </span>

          <h2 className="mt-6 font-display text-[clamp(40px,7vw,68px)] font-semibold leading-[0.98] tracking-[-0.02em] text-ink">
            {HERO.h1Lead}
            <br />
            <span className="italic text-action">{HERO.h1Emphasis}</span>
          </h2>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            {HERO.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton event="cta_click_hero" sourceSection="hero">
              {HERO.primaryCta}
            </CtaButton>
            <a
              href="#ornek-ders"
              className="inline-flex h-[52px] items-center justify-center rounded-pill border border-line bg-surface px-6 text-[15px] font-semibold text-ink transition-colors hover:border-ink/30"
            >
              {HERO.secondaryCta}
            </a>
          </div>

          <p className="mt-5 text-sm font-medium text-muted">{HERO.trustLine}</p>

          <ul className="mt-8 grid gap-x-6 gap-y-2 border-t border-line pt-6 text-sm text-ink-soft sm:grid-cols-3">
            {HERO.miniBullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: WhatsApp trial card with mandatory KVKK consent */}
        <div className="lg:pl-4">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-action"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
