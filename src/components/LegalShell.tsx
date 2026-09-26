import Link from "next/link";

const PAGE_LINKS = [
  { label: "Ana sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "SSS", href: "/sss" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK", href: "/kvkk" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
];

/** Minimal top bar for standalone (non-landing) pages. */
export function PageBar() {
  return (
    <div className="container-x py-10">
      <Link href="/" className="flex w-fit items-baseline gap-1">
        <span className="font-display text-xl font-semibold text-ink">İngilizcemiz</span>
        <span className="text-action" aria-hidden="true">.</span>
      </Link>
    </div>
  );
}

/** Footer nav shared by standalone pages. */
export function PageFooter() {
  return (
    <footer className="border-t border-line">
      <nav
        aria-label="Sayfalar"
        className="container-x flex flex-wrap gap-x-6 gap-y-2 py-8 text-sm text-muted"
      >
        {PAGE_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
            {l.label}
          </Link>
        ))}
        <span className="ml-auto text-muted-2">© {new Date().getFullYear()} İngilizcemiz</span>
      </nav>
    </footer>
  );
}

/** Layout for legal / info pages: bar, heading, prose body, footer. */
export default function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="paper-grain min-h-screen">
      <PageBar />
      <main className="container-x max-w-3xl pb-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-action-hover">
          {eyebrow}
        </div>
        <h1 className="mt-3 font-display text-[clamp(30px,5vw,44px)] font-semibold leading-tight tracking-[-0.01em] text-ink">
          {title}
        </h1>
        {updated && <p className="mt-3 text-sm text-muted">Son güncelleme: {updated}</p>}
        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink-soft [&_:is(p,li)>a]:font-semibold [&_:is(p,li)>a]:text-action-hover [&_:is(p,li)>a]:underline [&_:is(p,li)>a]:underline-offset-2">
          {children}
        </div>
      </main>
      <PageFooter />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 [&_li]:mt-1.5 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-semibold [&_b]:text-ink [&_p+p]:mt-3">
        {children}
      </div>
    </section>
  );
}
