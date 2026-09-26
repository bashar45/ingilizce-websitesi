import CtaButton from "./CtaButton";
import KvkkNote from "./KvkkNote";

/** Hero conversion card: starts the free trial on WhatsApp. */
export default function HeroForm() {
  return (
    <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-7">
      {/* System preview: shows what the daily lesson looks like, right where the trial starts */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-line shadow-card">
        <video
          src="/video/sistem-tanitim.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          className="h-auto max-h-[360px] w-full bg-ink"
          title="İngilizcemiz sistemi tanıtım videosu"
        />
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-action" aria-hidden="true" />
        Ücretsiz deneme
      </div>

      <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
        3 gün ücretsiz denemeyi başlat
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        WhatsApp&apos;tan yaz, seviyene göre günlük İngilizce pratiğin hemen
        başlasın.
      </p>

      <CtaButton
        event="cta_click_hero_form"
        sourceSection="hero_form"
        className="mt-5 w-full"
      >
        WhatsApp&apos;tan Ücretsiz Başla
      </CtaButton>
      <KvkkNote className="mt-3 text-center" />
    </div>
  );
}
