import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { DURATIONS, TIERS, formatTL } from "@/data/pricing";
import LegalShell, { Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Kullanım Şartları | İngilizcemiz",
  description:
    "İngilizcemiz WhatsApp İngilizce pratik hizmetinin deneme, paket, ödeme ve iptal koşulları.",
  alternates: { canonical: "/kullanim-sartlari" },
};

export default function TermsPage() {
  const email = SITE_CONFIG.dataController.email;

  return (
    <LegalShell eyebrow="Yasal" title="Kullanım Şartları" updated="26 Eylül 2026">
      <p>
        Bu şartlar, {SITE_CONFIG.domain} web sitesinin ve WhatsApp üzerinden
        sunulan İngilizcemiz İngilizce pratik hizmetinin (&quot;Hizmet&quot;)
        kullanım koşullarını düzenler. Hizmete WhatsApp üzerinden yazarak
        başladığınızda bu şartları kabul etmiş sayılırsınız.
      </p>

      <Section title="1. Hizmetin kapsamı">
        <p>
          İngilizcemiz; seçtiğiniz seviye veya sınav paketine göre her gün
          WhatsApp üzerinden İngilizce kelime, bağlam ve örnek cümle gönderir;
          sizin yazdığınız cümlelere düzeltme ve geri bildirim verir. Hizmet
          bir kelime ve cümle kurma pratiğidir; birebir ders, resmî bir
          sertifika veya sınav başarısı garantisi sunmaz.
        </p>
      </Section>

      <Section title="2. Ücretsiz deneme">
        <ul>
          <li>Yeni kullanıcılar Hizmeti 3 gün boyunca ücretsiz dener.</li>
          <li>Deneme için kart veya ödeme bilgisi istenmez; deneme sonunda otomatik ücretlendirme yapılmaz.</li>
          <li>Deneme bittiğinde devam etmek isterseniz bir paket seçersiniz; seçmezseniz gönderimler durur.</li>
        </ul>
      </Section>

      <Section title="3. Paketler ve fiyatlar">
        <p>
          Paketler süre (1, 3 veya 6 ay) ve günlük kelime sayısına (2, 4 veya 6)
          göre belirlenir. Güncel fiyatlar (KDV dahil, paketin toplam tutarı):
        </p>
        <div className="mt-4 overflow-x-auto rounded-card border border-line bg-surface">
          <table className="w-full text-left text-[13px] sm:text-sm">
            <thead>
              <tr className="border-b border-line text-ink">
                <th className="px-2 py-3 sm:p-3 font-semibold">Paket</th>
                {DURATIONS.map((d) => (
                  <th key={d.months} className="px-2 py-3 sm:p-3 font-semibold">{d.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIERS.map((t) => (
                <tr key={t.words} className="border-b border-line last:border-0">
                  <td className="px-2 py-3 sm:p-3">
                    <span className="font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-muted">Günde {t.words} kelime</span>
                  </td>
                  {DURATIONS.map((d) => (
                    <td key={d.months} className="px-2 py-3 sm:p-3">{formatTL(t.prices[d.months])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Fiyatlar önceden duyurularak değiştirilebilir. Değişiklik, ödemesi
          tamamlanmış aktif paketleri etkilemez.
        </p>
      </Section>

      <Section title="4. Ödeme ve paketin başlaması">
        <ul>
          <li>Ödemeler şu anda yalnızca banka havalesi / EFT ile alınır. Hesap bilgileri WhatsApp üzerinden paylaşılır.</li>
          <li>Paketiniz, ödemeniz hesabımıza ulaşıp doğrulandıktan sonra başlar ve paket süresi bu tarihten itibaren işler.</li>
          <li>Paketler otomatik olarak yenilenmez. Süre sonunda devam etmek isterseniz yeni bir ödeme ile paketinizi uzatabilirsiniz.</li>
        </ul>
      </Section>

      <Section title="5. Cayma hakkı ve iade">
        <p>
          6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli
          Sözleşmeler Yönetmeliği kapsamında, ödemenizin onaylandığı tarihten
          itibaren 14 gün içinde herhangi bir gerekçe göstermeden cayma
          hakkınızı kullanabilirsiniz. Cayma talebinizi WhatsApp üzerinden
          veya <b>{email}</b> adresine iletebilirsiniz.
        </p>
        <p>
          Cayma hâlinde ödediğiniz tutar, talebinizin bize ulaşmasından
          itibaren 14 gün içinde ödemeyi yaptığınız hesaba iade edilir. Cayma
          süresi içinde hizmetten yararlandığınız günler varsa, bu günlere
          karşılık gelen tutar iade tutarından düşülebilir.
        </p>
      </Section>

      <Section title="6. Kullanım kuralları">
        <ul>
          <li>Hizmet kişiseldir; hesabınızı ve size gönderilen içerikleri başkalarıyla paylaşmamanız veya ticari amaçla çoğaltmamanız gerekir.</li>
          <li>Hakaret, taciz, yasa dışı içerik veya sistemi kötüye kullanmaya yönelik mesajlar gönderilmesi hâlinde Hizmet askıya alınabilir.</li>
          <li>Mesajlarınızda kimlik numarası, adres veya sağlık bilgisi gibi hassas kişisel bilgiler paylaşmayınız.</li>
        </ul>
      </Section>

      <Section title="7. Yapay zekâ geri bildirimleri">
        <p>
          Cümlelerinize verilen düzeltme ve öneriler yapay zekâ desteğiyle
          üretilir. Geri bildirimlerin doğru olması için özen gösteririz;
          ancak zaman zaman hatalı veya eksik olabilirler. Önemli belgeler ve
          sınav başvuruları gibi durumlarda ek kaynaklarla kontrol etmenizi
          öneririz.
        </p>
      </Section>

      <Section title="8. Hizmetin sürekliliği">
        <p>
          Hizmet WhatsApp altyapısına bağlıdır. WhatsApp veya diğer hizmet
          sağlayıcılardan kaynaklanan kesintiler, bakım çalışmaları ya da
          telefonunuzdaki ayarlar nedeniyle mesajlar gecikebilir. Kesinti
          bizden kaynaklanır ve uzun sürerse kaybedilen günler paket sürenize
          eklenir.
        </p>
      </Section>

      <Section title="9. Durdurma ve fesih">
        <p>
          Mesajları istediğiniz zaman sohbette durdurmak istediğinizi yazarak
          sonlandırabilirsiniz. Bu şartlara aykırı kullanım hâlinde Hizmeti
          askıya alma veya sonlandırma hakkımız saklıdır.
        </p>
      </Section>

      <Section title="10. Kişisel veriler">
        <p>
          Kişisel verileriniz <Link href="/kvkk">KVKK Aydınlatma Metni</Link>{" "}
          ve <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>{" "}
          kapsamında işlenir.
        </p>
      </Section>

      <Section title="11. Uyuşmazlıklar ve değişiklikler">
        <p>
          Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda,
          ilgili mevzuatta belirlenen parasal sınırlar dahilinde tüketici
          hakem heyetleri, bu sınırları aşan durumlarda tüketici mahkemeleri
          yetkilidir. Şartlar gerektiğinde güncellenebilir; güncel sürüm her
          zaman bu sayfada yayınlanır.
        </p>
      </Section>
    </LegalShell>
  );
}
