import { TRUST_STRIP } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-x grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {TRUST_STRIP.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.05}
            className="px-2 py-6 md:px-4 md:py-8"
          >
            <div className="text-[15px] font-semibold text-ink">{item.label}</div>
            <div className="mt-1 text-sm text-muted">{item.sub}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
