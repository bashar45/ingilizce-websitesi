import type { Metadata } from "next";
import Link from "next/link";
import { FOUNDER } from "@/data/siteContent";
import LegalShell, { Section } from "@/components/LegalShell";
import CtaButton from "@/components/CtaButton";
import KvkkNote from "@/components/KvkkNote";

export const metadata: Metadata = {
  title: "Hakkımızda | İngilizcemiz",
  description:
    "İngilizcemiz, WhatsApp üzerinden günlük İngilizce kelime ve cümle pratiği sunan bir öğrenme sistemidir.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <LegalShell eyebrow="Hakkımızda" title={FOUNDER.title}>
      {FOUNDER.body.map((p) => (
        <p key={p} className="text-[17px]">{p}</p>
      ))}

      <Section title="Nasıl çalışıyoruz?">
        <ul>
          <li><b>Ders sana gelir:</b> Her gün seviyene göre seçilmiş kelimeler WhatsApp&apos;ına düşer; yeni bir uygulama açman gerekmez.</li>
          <li><b>Kelime bağlamıyla gelir:</b> Her kelimeyi görseli, anlamı ve doğal bir örnek cümleyle görürsün.</li>
          <li><b>Sen cümle yazarsın:</b> Kelimeyi kendi cümlende kullanırsın, düzeltme ve daha güçlü bir alternatifle geri bildirim alırsın.</li>
        </ul>
      </Section>

      <Section title="Kimler için?">
        <p>
          Elementary&apos;den Upper-Intermediate&apos;e kadar genel İngilizce
          seviyeleri ile YDS, IELTS ve TOEFL&apos;a hazırlananlar için ayrı
          kelime paketlerimiz var. Günde 2, 4 veya 6 kelimelik tempoyla,
          yaklaşık 5 dakika ayırarak ilerlersin.
        </p>
      </Section>

      <div className="rounded-card border border-line bg-surface p-6 shadow-card">
        <p className="font-display text-xl font-semibold text-ink">
          3 gün ücretsiz dene, sonra karar ver.
        </p>
        <p className="mt-2 text-sm text-muted">
          Kart yok, taahhüt yok. Fiyatları <Link href="/#fiyatlar">ana sayfada</Link> görebilirsin.
        </p>
        <CtaButton event="cta_click_about" sourceSection="about" className="mt-5">
          WhatsApp&apos;tan Ücretsiz Başla
        </CtaButton>
        <KvkkNote className="mt-3" />
      </div>
    </LegalShell>
  );
}
