import { DEMO } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import LessonVideo from "./LessonVideo";

export default function ProductDemo() {
  return (
    <section id="ornek-ders" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Örnek ders"
          title={DEMO.title}
          subtitle={DEMO.subtitle}
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <LessonVideo />
          </Reveal>

          <div className="space-y-4">
            {DEMO.sideCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="rounded-card border border-line bg-paper p-6">
                  <h3 className="text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
