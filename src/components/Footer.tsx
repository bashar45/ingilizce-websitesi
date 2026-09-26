import { FOOTER } from "@/data/siteContent";
import { HERO } from "@/data/siteContent";
import CtaButton from "./CtaButton";
import KvkkNote from "./KvkkNote";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl font-semibold text-ink">
                İngilizcemiz
              </span>
              <span className="text-action" aria-hidden="true">.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {FOOTER.tagline}
            </p>
            <div className="mt-6">
              <CtaButton event="cta_click_footer" sourceSection="footer">
                {HERO.primaryCta}
              </CtaButton>
              <KvkkNote className="mt-3 max-w-xs" />
            </div>
          </div>

          {FOOTER.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <div className="text-sm font-semibold text-ink">{col.title}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6 text-sm text-muted-2">
          © {year} İngilizcemiz. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
