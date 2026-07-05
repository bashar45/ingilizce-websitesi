"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const FORM_URL =
  "https://n8n.bilgem.cloud/form/c75774f9-fc89-4716-85a9-2376acf6a7a0";

/**
 * Hero conversion card: embeds the n8n application form.
 * A mandatory KVKK consent checkbox gates the form — the user cannot
 * interact with it until consent is given (overlay blocks pointer events).
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
        Formu doldur, seviyene göre günlük İngilizce pratiğini WhatsApp&apos;tan
        almaya hemen başla.
      </p>

      {/* Embedded n8n form — gated by consent */}
      <div className="relative mt-5">
        <iframe
          src={FORM_URL}
          title="İngilizcemiz ücretsiz deneme başvuru formu"
          loading="lazy"
          className={`h-[520px] w-full rounded-2xl border border-line bg-white transition-opacity duration-300 ${
            consent
              ? "opacity-100"
              : "pointer-events-none select-none opacity-40"
          }`}
        />
        {!consent && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-surface/55 backdrop-blur-[1px]">
            <span className="rounded-pill bg-ink px-4 py-2.5 text-center text-sm font-medium text-surface shadow-card">
              Formu doldurmak için aşağıdaki KVKK onayını işaretle ↓
            </span>
          </div>
        )}
      </div>

      {/* Mandatory KVKK consent — below the form */}
      <label
        className={`mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors ${
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
    </div>
  );
}
