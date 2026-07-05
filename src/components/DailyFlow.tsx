import { DAILY_FLOW } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function DailyFlow() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow={DAILY_FLOW.eyebrow}
          title={DAILY_FLOW.title}
          subtitle={DAILY_FLOW.subtitle}
        />

        {/* Daily intensity: 2 / 4 / 6 words per day */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {DAILY_FLOW.intensities.map((item, i) => (
            <Reveal key={item.count} delay={i * 0.06}>
              <div
                className={`flex h-full items-center gap-5 rounded-card border bg-paper p-6 ${
                  item.recommended
                    ? "border-action ring-1 ring-action-ring"
                    : "border-line"
                }`}
              >
                <span className="font-display text-5xl font-semibold leading-none text-action">
                  {item.count}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{item.label}</div>
                  <div className="mt-0.5 text-sm text-muted">{item.note}</div>
                  {item.recommended && (
                    <span className="mt-2 inline-flex rounded-pill bg-action-soft px-2.5 py-0.5 text-xs font-semibold text-action-hover">
                      Çoğu kişi bununla başlıyor
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What you do with each word */}
        <Reveal className="mt-14">
          <h3 className="text-lg font-semibold text-ink">
            {DAILY_FLOW.stepsTitle}
          </h3>
        </Reveal>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {DAILY_FLOW.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="flex h-full flex-col rounded-card border border-line bg-paper p-7 shadow-card">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-action-soft text-action-hover">
                  <StepIcon index={i} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                  {i + 1}. adım
                </div>
                <h4 className="mt-1 text-base font-semibold text-ink">
                  {step.title}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-6">
          <p className="text-sm text-muted-2">{DAILY_FLOW.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}

function StepIcon({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (index === 0)
    // image
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="1.6" />
        <path d="m21 15-4.5-4.5L5 21" />
      </svg>
    );
  if (index === 1)
    // example sentence
    return (
      <svg {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    );
  // write one sentence (pencil)
  return (
    <svg {...common}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
}
