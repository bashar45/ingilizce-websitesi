import { FREE_TRIAL } from "@/data/siteContent";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import KvkkNote from "./KvkkNote";

export default function FreeTrialCTA() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <Reveal>
          <div className="paper-grain overflow-hidden rounded-[28px] border border-line bg-paper p-8 shadow-card-lg sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="font-display text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-[-0.01em] text-ink">
                  {FREE_TRIAL.title}
                </h2>
                <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted">
                  {FREE_TRIAL.body}
                </p>
                <div className="mt-8">
                  <CtaButton event="cta_click_free_trial" sourceSection="free_trial">
                    {FREE_TRIAL.cta}
                  </CtaButton>
                  <KvkkNote className="mt-3" />
                </div>
              </div>

              <ul className="grid gap-3 rounded-card border border-line bg-surface p-6">
                {FREE_TRIAL.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink-soft">
                    <CheckBadge />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckBadge() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-action-soft">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B5B44"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}
