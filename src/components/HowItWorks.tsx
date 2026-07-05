import { HOW_IT_WORKS } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="section bg-paper">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nasıl çalışır"
          title={HOW_IT_WORKS.title}
          subtitle={HOW_IT_WORKS.subtitle}
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative h-full rounded-card border border-line bg-surface p-7 shadow-card">
                <span
                  className="font-display text-[52px] font-semibold leading-none text-action/25"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
