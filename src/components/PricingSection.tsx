"use client";

import { useState } from "react";
import {
  DEFAULT_DURATION,
  DURATIONS,
  PRICING_SECTION,
  TIERS,
  formatTL,
  planWhatsAppMessage,
  type Duration,
  type Tier,
} from "@/data/pricing";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import KvkkNote from "./KvkkNote";

export default function PricingSection() {
  const [months, setMonths] = useState<Duration["months"]>(DEFAULT_DURATION);

  const onDurationChange = (m: Duration["months"]) => {
    setMonths(m);
    track("pricing_duration_change", {
      source_section: "pricing",
      duration_months: m,
    });
  };

  return (
    <section id="fiyatlar" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={PRICING_SECTION.eyebrow}
          title={PRICING_SECTION.title}
          subtitle={PRICING_SECTION.subtitle}
          align="center"
        />

        {/* Duration switch */}
        <div className="mt-10 flex justify-center">
          <div
            role="radiogroup"
            aria-label="Paket süresi"
            className="inline-flex flex-wrap justify-center gap-1 rounded-pill border border-line bg-surface p-1 shadow-card"
          >
            {DURATIONS.map((d) => {
              const active = d.months === months;
              return (
                <button
                  key={d.months}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => onDurationChange(d.months)}
                  className={`inline-flex h-11 items-center gap-2 rounded-pill px-5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-ink text-surface"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {d.label}
                  {d.badge && (
                    <span
                      className={`rounded-pill px-2 py-0.5 text-[11px] font-semibold ${
                        active
                          ? "bg-action text-surface"
                          : "bg-action-soft text-action-hover"
                      }`}
                    >
                      {d.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.words} delay={i * 0.06}>
              <PlanCard tier={tier} months={months} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          {PRICING_SECTION.note}
        </p>
        <KvkkNote className="mt-2 text-center" />
      </div>
    </section>
  );
}

function PlanCard({ tier, months }: { tier: Tier; months: Duration["months"] }) {
  const total = tier.prices[months];
  const monthly = total / months;
  const fullPrice = tier.prices[1] * months;
  const saving = fullPrice - total;

  const onClick = () => {
    track("cta_click_pricing", {
      source_section: "pricing",
      plan_words: tier.words,
      duration_months: months,
      price: total,
    });
    track("whatsapp_start_click", { source_section: "pricing" });
  };

  return (
    <div
      className={`relative flex h-full flex-col rounded-card border bg-surface p-7 shadow-card ${
        tier.popular ? "border-action ring-1 ring-action-ring" : "border-line"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-7 inline-flex rounded-pill bg-action px-3 py-1 text-xs font-semibold text-surface">
          {PRICING_SECTION.popularLabel}
        </span>
      )}

      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold text-ink">{tier.name}</h3>
        <span className="text-sm font-semibold text-action-hover">
          Günde {tier.words} kelime
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{tier.description}</p>

      <div className="mt-6 border-t border-line pt-6">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold tracking-tight text-ink">
            {formatTL(monthly)}
          </span>
          <span className="text-sm text-muted">/ ay</span>
        </div>
        <div className="mt-2 min-h-[20px] text-sm text-muted">
          {months === 1 ? (
            "Aylık ödeme, taahhüt yok"
          ) : (
            <>
              {months} ay için toplam{" "}
              <span className="font-semibold text-ink">{formatTL(total)}</span>{" "}
              <span className="text-muted-2 line-through">{formatTL(fullPrice)}</span>
            </>
          )}
        </div>
        {saving > 0 && (
          <div className="mt-2 inline-flex rounded-pill bg-action-soft px-3 py-1 text-xs font-semibold text-action-hover">
            {formatTL(saving)} tasarruf
          </div>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm text-ink-soft">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
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
            {f}
          </li>
        ))}
      </ul>

      <a
        href={createWhatsAppLink(planWhatsAppMessage(tier, months))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`mt-7 inline-flex h-[52px] items-center justify-center rounded-pill px-6 text-[15px] font-semibold transition-colors ${
          tier.popular
            ? "bg-action text-surface shadow-cta hover:bg-action-hover"
            : "bg-ink text-surface hover:bg-action-hover"
        }`}
      >
        Bu paketi seç
      </a>
    </div>
  );
}
