import { SOLUTION } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function SolutionSection() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Çözüm"
          title={SOLUTION.title}
          subtitle={SOLUTION.subtitle}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SOLUTION.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-card border border-line bg-paper p-7 shadow-card">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-action-soft text-action-hover">
                  <SolutionIcon index={i} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionIcon({ index }: { index: number }) {
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
    return (
      <svg {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  if (index === 1)
    return (
      <svg {...common}>
        <path d="M12 6.5C9 3.5 4 3.5 4 8c0 3 4 6 8 9 4-3 8-6 8-9 0-4.5-5-4.5-8-1.5z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
}
