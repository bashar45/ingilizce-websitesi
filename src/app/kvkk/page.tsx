import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | İngilizcemiz",
  description:
    "İngilizcemiz WhatsApp İngilizce pratik hizmeti kapsamında kişisel verilerin nasıl işlendiğine dair KVKK aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

const LAST_UPDATED = "26 Eylül 2026";

const phone = SITE_CONFIG.whatsappNumber.replace(
  /^90(\d{3})(\d{3})(\d{2})(\d{2})$/,
  "+90 $1 $2 $3 $4",
);

export default function KvkkPage() {
  const dc = SITE_CONFIG.dataController;

  return (
    <main className="paper-grain min-h-screen">
      <div className="container-x py-10">
        <Link href="/" className="flex w-fit items-baseline gap-1">
          <span className="font-display text-xl font-semibold text-ink">İngilizcemiz</span>
          <span className="text-action" aria-hidden="true">.</span>
        </Link>
      </div>

      <article className="container-x max-w-3xl pb-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-action-hover">
          Yasal
        </div>
        <h1 className="mt-3 font-display text-[clamp(30px,5vw,44px)] font-semibold leading-tight tracking-[-0.01em] text-ink">
          KVKK Aydınlatma Metni
        </h1>
        <p className="mt-3 text-sm text-muted">Son güncelleme: {LAST_UPDATED}</p>

        <div className="legal mt-10 space-y-10 text-[15px] leading-relaxed text-ink-soft">
          <p>
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&quot;KVKK&quot;) madde 10 ve Aydınlatma Yükümlülüğünün Yerine
            Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca,
            İngilizcemiz web sitesini ({SITE_CONFIG.domain}) ziyaret eden ve
            WhatsApp üzerinden sunulan İngilizce pratik hizmetini kullanan
            kişileri bilgilendirmek amacıyla hazırlanmıştır.
          </p>

          <Section title="1. Veri sorumlusu">
            <p>Kişisel verileriniz, veri sorumlusu sıfatıyla aşağıda bilgileri yer alan kişi tarafından işlenir:</p>
            <dl className="mt-4 grid gap-2 rounded-card border border-line bg-surface p-5 sm:grid-cols-[140px_1fr]">
              <dt className="font-semibold text-ink">Unvan</dt>
              <dd>{dc.name}</dd>
              {dc.address && (
                <>
                  <dt className="font-semibold text-ink">Adres</dt>
                  <dd>{dc.address}</dd>
                </>
              )}
              <dt className="font-semibold text-ink">E-posta</dt>
              <dd>{dc.email}</dd>
              <dt className="font-semibold text-ink">WhatsApp</dt>
              <dd>{phone}</dd>
            </dl>
          </Section>

          <Section title="2. İşlenen kişisel veriler">
            <ul>
              <li><b>Kimlik ve iletişim:</b> WhatsApp telefon numaranız, bize bildirdiğiniz adınız.</li>
              <li><b>Hizmet tercihleri:</b> seçtiğiniz seviye veya sınav paketi, günlük kelime sayısı, bulunduğunuz ülke / saat dilimi ve ders gönderim saati.</li>
              <li><b>Öğrenme içeriği:</b> WhatsApp üzerinden gönderdiğiniz mesajlar ve cümleler, bunlara verilen düzeltme ve geri bildirimler, ilerleme kayıtlarınız.</li>
              <li><b>Abonelik ve ödeme:</b> seçtiğiniz paket, deneme ve abonelik tarihleri; havale/EFT ile ödeme yaptığınızda gönderici adı soyadı, ödeme tutarı ve tarihi, paylaştığınız dekont.</li>
              <li><b>İşlem güvenliği:</b> mesajların iletim durumları ve sistem kayıtları.</li>
              <li><b>Web sitesi kullanımı:</b> siteye geldiğiniz kampanya bilgisi (UTM parametreleri) ve varsa analiz araçlarının topladığı kullanım verileri.</li>
            </ul>
            <p className="mt-3">
              Sağlık, din, etnik köken gibi özel nitelikli kişisel verilerinizi
              talep etmeyiz; lütfen mesajlarınızda bu tür bilgileri
              paylaşmayınız.
            </p>
          </Section>

          <Section title="3. İşleme amaçları">
            <ul>
              <li>3 günlük ücretsiz denemenin ve ücretli aboneliğin kurulması ve yürütülmesi,</li>
              <li>seviyenize uygun günlük kelime ve örnek cümlelerin WhatsApp üzerinden gönderilmesi,</li>
              <li>yazdığınız cümlelerin değerlendirilmesi ve size geri bildirim verilmesi,</li>
              <li>ödemelerin takibi, abonelik süresinin başlatılması ve yenilenmesi,</li>
              <li>destek taleplerinizin ve şikâyetlerinizin yanıtlanması,</li>
              <li>hizmetin güvenliğinin, sürekliliğinin ve kalitesinin sağlanması,</li>
              <li>hukuki yükümlülüklerin (ör. vergi ve muhasebe) yerine getirilmesi.</li>
            </ul>
          </Section>

          <Section title="4. Toplama yöntemi ve hukuki sebepler">
            <p>
              Kişisel verileriniz; WhatsApp üzerinden bize yazdığınız mesajlar,
              web sitesi ve havale/EFT işlemleri aracılığıyla, elektronik
              ortamda ve kısmen otomatik yollarla toplanır. Verileriniz KVKK
              madde 5/2 kapsamında şu hukuki sebeplere dayanılarak işlenir:
            </p>
            <ul>
              <li><b>(c) Sözleşmenin kurulması veya ifası:</b> deneme ve abonelik hizmetinin sunulması.</li>
              <li><b>(ç) Hukuki yükümlülük:</b> ödeme ve muhasebe kayıtlarının tutulması.</li>
              <li><b>(e) Bir hakkın tesisi, kullanılması veya korunması:</b> olası uyuşmazlıklarda kayıtların saklanması.</li>
              <li><b>(f) Meşru menfaat:</b> hizmetin güvenliği, hata tespiti ve iyileştirilmesi.</li>
            </ul>
          </Section>

          <Section title="5. Aktarım ve yurt dışına aktarım">
            <p>
              Hizmeti sunabilmek için kişisel verileriniz, yalnızca yukarıdaki
              amaçlarla sınırlı olarak aşağıdaki hizmet sağlayıcılara
              aktarılır. Bu sağlayıcıların sunucuları Türkiye dışında
              bulunabilir:
            </p>
            <ul>
              <li><b>Meta Platforms (WhatsApp Business):</b> mesajların size iletilmesi ve sizden alınması.</li>
              <li><b>Veritabanı altyapısı (Supabase, AB – İrlanda):</b> kullanıcı, abonelik ve ilerleme kayıtlarının saklanması.</li>
              <li><b>Yapay zekâ değerlendirme hizmeti:</b> yazdığınız cümlelerin düzeltilmesi ve geri bildirim üretilmesi.</li>
              <li><b>Barındırma ve analiz hizmetleri:</b> web sitesinin çalıştırılması ve kullanımının ölçülmesi.</li>
            </ul>
            <p className="mt-3">
              Yurt dışına aktarımlar KVKK madde 9 kapsamında; hizmet
              sağlayıcılarla yapılan standart sözleşmeler ve kanunda öngörülen
              diğer güvenceler çerçevesinde gerçekleştirilir. Bunun yanında
              verileriniz, talep edilmesi hâlinde yetkili kamu kurum ve
              kuruluşlarıyla paylaşılabilir.
            </p>
          </Section>

          <Section title="6. Saklama süresi">
            <ul>
              <li>WhatsApp mesaj içerikleri teknik kayıtlardan 30 gün sonra temizlenir; mesaj kayıtları 180 gün sonra silinir.</li>
              <li>İletim durumları ve sistem olay kayıtları 90 gün sonra silinir.</li>
              <li>Hesap, abonelik ve ilerleme bilgileri hizmet süresince saklanır; hizmetin sona ermesinden sonra ilgili mevzuattaki süreler dolunca silinir veya anonim hâle getirilir.</li>
              <li>Ödeme ve muhasebe kayıtları, vergi mevzuatının öngördüğü süre boyunca saklanır.</li>
            </ul>
          </Section>

          <Section title="7. Haklarınız">
            <p>KVKK madde 11 uyarınca veri sorumlusuna başvurarak şu haklarınızı kullanabilirsiniz:</p>
            <ul>
              <li>kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK madde 7 çerçevesinde silinmesini veya yok edilmesini isteme,</li>
              <li>düzeltme ve silme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme,</li>
              <li>kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
            </ul>
          </Section>

          <Section title="8. Başvuru">
            <p>
              Başvurularınızı, Veri Sorumlusuna Başvuru Usul ve Esasları
              Hakkında Tebliğ&apos;e uygun olarak{" "}
              {dc.address && "yazılı şekilde yukarıdaki adrese veya "}
              kimliğinizi doğrulayabileceğimiz şekilde <b>{dc.email}</b>{" "}
              adresine e-posta ile iletebilirsiniz. Başvurunuz en geç 30
              gün içinde ücretsiz olarak sonuçlandırılır.
            </p>
            <p className="mt-3">
              WhatsApp mesajlarını almayı istediğiniz zaman sohbette
              durdurmak istediğinizi yazarak sonlandırabilirsiniz.
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 [&_li]:mt-1.5 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-semibold [&_b]:text-ink">
        {children}
      </div>
    </section>
  );
}
