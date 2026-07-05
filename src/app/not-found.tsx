import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display text-[80px] font-semibold italic leading-none text-action">
          404
        </div>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
          Bu sayfa bulunamadı.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-[15px] text-muted">
          Aradığın sayfa taşınmış veya hiç var olmamış olabilir. Ana sayfadan
          devam edebilirsin.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-[52px] items-center justify-center rounded-pill bg-ink px-6 text-[15px] font-semibold text-surface transition-colors hover:bg-action-hover"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
