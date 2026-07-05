"use client";

import { LEVELS } from "@/data/levels";
import { LEVELS_SECTION } from "@/data/siteContent";
import { createWhatsAppLink, levelWhatsAppMessage } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function LevelsSection() {
  const core = LEVELS.filter((l) => l.group === "core");
  const exam = LEVELS.filter((l) => l.group === "exam");

  return (
    <section id="seviyeler" className="section bg-paper">
      <div className="container-x">
        <SectionHeading
          eyebrow="Seviyeler"
          title={LEVELS_SECTION.title}
          subtitle={LEVELS_SECTION.subtitle}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {core.map((level, i) => (
            <Reveal key={level.slug} delay={i * 0.05}>
              <LevelCard level={level} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
              Sınav paketleri
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {exam.map((level, i) => (
              <Reveal key={level.slug} delay={i * 0.05}>
                <LevelCard level={level} exam />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LevelCard({
  level,
  exam = false,
}: {
  level: (typeof LEVELS)[number];
  exam?: boolean;
}) {
  const message = levelWhatsAppMessage(level.name);
  const onClick = () =>
    track("cta_click_level_card", {
      source_section: "levels",
      button_text: level.cta,
      level_name: level.name,
    });

  return (
    <div
      className={`flex h-full flex-col rounded-card border bg-surface p-6 shadow-card transition-transform duration-200 ease-out-soft hover:-translate-y-0.5 motion-safe-only ${
        level.recommended ? "border-action ring-1 ring-action-ring" : "border-line"
      } ${exam ? "bg-surface-muted/40" : ""}`}
    >
      {level.recommended && (
        <span className="mb-3 inline-flex w-fit rounded-pill bg-action-soft px-3 py-1 text-xs font-semibold text-action-hover">
          {LEVELS_SECTION.recommendedLabel}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-ink">{level.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {level.audience}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="text-muted-2">örnek:</span>
        <span className="font-display italic text-ink">{level.sampleWord}</span>
      </div>
      <a
        href={createWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="mt-5 inline-flex h-11 items-center justify-center rounded-pill bg-ink px-5 text-sm font-semibold text-surface transition-colors hover:bg-action-hover"
      >
        {level.cta}
      </a>
    </div>
  );
}
