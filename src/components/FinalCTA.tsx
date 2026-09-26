import { FINAL_CTA } from "@/data/siteContent";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import KvkkNote from "./KvkkNote";

export default function FinalCTA() {
  return (
    <section className="section bg-ink">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(30px,5vw,52px)] font-semibold leading-tight tracking-[-0.02em] text-paper">
            {FINAL_CTA.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-paper/70">
            {FINAL_CTA.body}
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton event="cta_click_final" sourceSection="final_cta">
              {FINAL_CTA.cta}
            </CtaButton>
          </div>
          <p className="mt-5 text-sm text-paper/50">{FINAL_CTA.microcopy}</p>
          <KvkkNote tone="dark" className="mt-2" />
        </Reveal>
      </div>
    </section>
  );
}
