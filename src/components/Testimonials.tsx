import { TESTIMONIALS } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section bg-paper">
      <div className="container-x">
        <SectionHeading eyebrow="Beta geri bildirimi" title={TESTIMONIALS.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.cards.map((quote, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-card border border-line bg-surface p-7 shadow-card">
                <QuoteMark />
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {quote}
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-muted-2">
                  Beta kullanıcısı
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-2">
            {TESTIMONIALS.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function QuoteMark() {
  return (
    <span
      className="font-display text-4xl font-semibold leading-none text-action/40"
      aria-hidden="true"
    >
      &ldquo;
    </span>
  );
}
