import CtaButton from "./CtaButton";
import KvkkNote from "./KvkkNote";

/** Hero conversion card: starts the free trial on WhatsApp. */
export default function HeroForm() {
  return (
    <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-7">
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

      {/* Teaser for the real lesson recording in the demo section */}
      <a
        href="#ornek-ders"
        className="group mt-6 flex items-center gap-4 rounded-2xl border border-line bg-paper p-3 transition-colors hover:border-ink/30"
      >
        <span className="relative h-24 w-14 shrink-0 overflow-hidden rounded-xl bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/video/sistem-tanitim-poster.jpg"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top opacity-90"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 text-[10px] text-ink shadow-card">
              ▶
            </span>
          </span>
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink group-hover:underline group-hover:underline-offset-2">
            Gerçek bir dersi izle
          </span>
          <span className="mt-0.5 block text-sm text-muted">
            20 saniyelik WhatsApp ekran kaydı
          </span>
        </span>
      </a>
    </div>
  );
}
