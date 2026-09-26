"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import CtaButton from "./CtaButton";

/**
 * Hero conversion card: starts the free trial on WhatsApp.
 * A mandatory KVKK consent checkbox gates the CTA — the WhatsApp link
 * is not rendered until consent is given.
 */
export default function HeroForm() {
  const [consent, setConsent] = useState(false);

  const onConsentChange = (checked: boolean) => {
    setConsent(checked);
    if (checked) track("kvkk_consent", { source_section: "hero_form" });
  };

  return (
    <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-7">
      {/* System preview: shows what the daily lesson looks like, right where the trial starts */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-line shadow-card">
        <video
          src="/video/sistem-tanitim.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          className="h-auto max-h-[360px] w-full bg-ink"
          title="İngilizcemiz sistemi tanıtım videosu"
        />
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-action" aria-hidden="true" />
        Ücretsiz deneme
      </div>

      <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
        3 gün ücretsiz denemeyi başlat
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        KVKK onayını ver, WhatsApp&apos;tan yaz; seviyene göre günlük İngilizce
        pratiğin hemen başlasın.
      </p>

      {/* Mandatory KVKK consent — gates the WhatsApp CTA */}
      <label
        className={`mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors ${
          consent ? "border-line bg-paper" : "border-action/40 bg-action-soft"
        }`}
      >
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          aria-describedby="kvkk-desc"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-action"
        />
        <span id="kvkk-desc" className="text-sm leading-relaxed text-ink-soft">
          <a
            href="/kvkk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-action-hover underline underline-offset-2"
          >
            KVKK Aydınlatma Metni
          </a>
          &apos;ni okudum; kişisel verilerimin bu kapsamda işlenmesine onay
          veriyorum. <span className="text-ember">*</span>
        </span>
      </label>

      {consent ? (
        <CtaButton
          event="cta_click_hero_form"
          sourceSection="hero_form"
          className="mt-4 w-full"
        >
          WhatsApp&apos;tan Ücretsiz Başla
        </CtaButton>
      ) : (
        <button
          type="button"
          disabled
          className="mt-4 inline-flex h-[52px] w-full cursor-not-allowed items-center justify-center rounded-pill bg-line px-6 text-[15px] font-semibold text-muted"
        >
          Başlamak için KVKK onayını işaretle
        </button>
      )}
    </div>
  );
}
