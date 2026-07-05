import { PROBLEM } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ProblemSection() {
  return (
    <section className="section bg-paper">
      <div className="container-x">
        <SectionHeading title={PROBLEM.title} subtitle={PROBLEM.subtitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROBLEM.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-card border border-line bg-surface p-7 shadow-card">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ember-soft text-sm font-semibold text-ember">
                  {i + 1}
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
