import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import LegalShell, { Section } from "@/components/LegalShell";
import CtaButton from "@/components/CtaButton";
import KvkkNote from "@/components/KvkkNote";

export const metadata: Metadata = {
  title: "İletişim | İngilizcemiz",
  description: "İngilizcemiz'e WhatsApp veya e-posta ile ulaşın.",
  alternates: { canonical: "/iletisim" },
};

const phone = SITE_CONFIG.whatsappNumber.replace(
  /^90(\d{3})(\d{3})(\d{2})(\d{2})$/,
  "+90 $1 $2 $3 $4",
);

export default function ContactPage() {
  const email = SITE_CONFIG.dataController.email;

  return (
    <LegalShell eyebrow="İletişim" title="Bize ulaş">
      <p className="text-[17px]">
        Deneme, paketler, ödeme veya hizmetle ilgili her sorunda en hızlı
        yol WhatsApp&apos;tan yazmak.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border border-line bg-surface p-6 shadow-card">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">WhatsApp</div>
          <div className="mt-2 font-display text-2xl font-semibold text-ink">{phone}</div>
          <p className="mt-2 text-sm text-muted">Ders, deneme, paket ve ödeme soruları</p>
          <CtaButton
            event="cta_click_contact"
            sourceSection="contact"
            message="Merhaba, İngilizcemiz hakkında bir sorum var."
            className="mt-5"
          >
            WhatsApp&apos;tan yaz
          </CtaButton>
          <KvkkNote className="mt-3" />
        </div>

        <div className="rounded-card border border-line bg-surface p-6 shadow-card">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">E-posta</div>
          <div className="mt-2 break-all font-display text-2xl font-semibold text-ink">{email}</div>
          <p className="mt-2 text-sm text-muted">KVKK başvuruları, iade ve resmî talepler</p>
        </div>
      </div>

      <Section title="Sık sorulanlar">
        <p>
          Başlamadan önce merak ettiklerinin cevabı{" "}
          <Link href="/sss">Sıkça Sorulan Sorular</Link> sayfasında olabilir.
          Paket fiyatlarını <Link href="/#fiyatlar">ana sayfadaki Fiyatlar</Link>{" "}
          bölümünde görebilirsin.
        </p>
      </Section>
    </LegalShell>
  );
}
