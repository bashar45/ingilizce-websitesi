import { FOUNDER } from "@/data/siteContent";
import { SITE_CONFIG } from "@/lib/config";
import Reveal from "./Reveal";

export default function FounderStory() {
  const hasFounder = SITE_CONFIG.founderName.trim().length > 0;

  return (
    <section className="section bg-paper">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl">
          <div className="rounded-card border border-line bg-surface p-8 shadow-card sm:p-12">
            <div className="mb-6 text-xs font-semibold uppercase tracking-wider text-action-hover">
              Neden var
            </div>
            <h2 className="font-display text-[clamp(24px,3.5vw,34px)] font-semibold leading-tight tracking-[-0.01em] text-ink">
              {FOUNDER.title}
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              {FOUNDER.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {hasFounder && (
              <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-action font-display font-semibold text-surface">
                  {SITE_CONFIG.founderName.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {SITE_CONFIG.founderName}
                  </div>
                  <div className="text-sm text-muted">Kurucu, İngilizcemiz</div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
