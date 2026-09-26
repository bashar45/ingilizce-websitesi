import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import LegalShell, { Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | İngilizcemiz",
  description:
    "İngilizcemiz web sitesi ve WhatsApp İngilizce pratik hizmetinde gizliliğinizi nasıl koruduğumuz.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function PrivacyPage() {
  const email = SITE_CONFIG.dataController.email;

  return (
    <LegalShell eyebrow="Yasal" title="Gizlilik Politikası" updated="26 Eylül 2026">
      <p>
        İngilizcemiz olarak gizliliğinize önem veriyoruz. Bu politika,{" "}
        {SITE_CONFIG.domain} web sitesini ziyaret ettiğinizde ve WhatsApp
        üzerinden sunduğumuz İngilizce pratik hizmetini kullandığınızda hangi
        bilgilerin toplandığını ve nasıl korunduğunu özetler. Kişisel
        verilerinizin işlenmesine ilişkin ayrıntılı bilgi için{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ni inceleyebilirsiniz.
      </p>

      <Section title="1. Web sitesinde topladığımız bilgiler">
        <p>
          Web sitemizde form doldurmanızı istemiyoruz; hizmete WhatsApp
          üzerinden bize yazarak başlarsınız. Sitede yalnızca şu bilgiler
          kullanılır:
        </p>
        <ul>
          <li>
            <b>Kampanya bilgisi (UTM):</b> Siteye bir reklam veya paylaşım
            bağlantısıyla geldiyseniz, bağlantıdaki kaynak bilgisi
            tarayıcınızın yerel depolama alanında (<code>ing_utm</code>)
            saklanır ve WhatsApp mesajınızın sonuna &quot;Kaynak&quot; olarak
            eklenir. Bu bilgi sizi kişisel olarak tanımlamaz; tarayıcı
            ayarlarınızdan silebilirsiniz.
          </li>
          <li>
            <b>Sunucu kayıtları:</b> Sitenin güvenli çalışması için barındırma
            altyapısı IP adresi, tarayıcı türü ve ziyaret zamanı gibi teknik
            kayıtları kısa süreli tutabilir.
          </li>
        </ul>
      </Section>

      <Section title="2. Çerezler ve analiz">
        <p>
          Sitemiz şu anda reklam veya takip çerezi kullanmamaktadır. İleride
          ziyaretçi istatistiklerini ölçmek için analiz araçları (ör. Google
          Analytics) kullanmaya başlarsak, bu araçlar çalışmadan önce sizden
          onay isteyeceğiz ve bu politikayı güncelleyeceğiz.
        </p>
      </Section>

      <Section title="3. WhatsApp üzerinden işlenen bilgiler">
        <p>
          Hizmeti kullanırken telefon numaranız, adınız, seçtiğiniz seviye ve
          paket, gönderdiğiniz cümleler ile bunlara verilen geri bildirimler
          işlenir. Havale/EFT ile ödeme yaptığınızda gönderici adı, tutar ve
          dekont bilgisi ödemenizi doğrulamak için kullanılır. Bu bilgiler
          yalnızca hizmeti sunmak, ödemeyi takip etmek ve size destek olmak
          için kullanılır; hiçbir koşulda satılmaz veya reklam amacıyla
          üçüncü kişilerle paylaşılmaz.
        </p>
        <p>
          WhatsApp, Meta Platforms tarafından işletilen bir hizmettir. WhatsApp
          üzerinden bizimle yazıştığınızda Meta&apos;nın kendi gizlilik
          politikası da geçerlidir.
        </p>
      </Section>

      <Section title="4. Yapay zekâ ile değerlendirme">
        <p>
          Yazdığınız İngilizce cümleler, düzeltme ve geri bildirim üretmek
          için bir yapay zekâ hizmeti tarafından değerlendirilir. Bu değerlendirme
          yalnızca size geri bildirim vermek amacıyla yapılır. Mesajlarınızda
          kimlik numarası, adres, sağlık bilgisi gibi hassas bilgiler
          paylaşmamanızı rica ederiz.
        </p>
      </Section>

      <Section title="5. Bilgilerin korunması ve saklanması">
        <p>
          Verileriniz erişimi yetkiyle sınırlandırılmış, şifreli bağlantı
          kullanan altyapılarda saklanır. Mesaj içerikleri teknik
          kayıtlardan 30 gün sonra temizlenir, mesaj kayıtları 180 gün sonra
          silinir. Saklama sürelerinin ayrıntısı KVKK Aydınlatma Metni&apos;nde
          yer alır.
        </p>
      </Section>

      <Section title="6. 18 yaş altındaki kullanıcılar">
        <p>
          Hizmetimiz 18 yaş altındaki kullanıcıların ücretli paket satın
          almasına yönelik değildir. 18 yaşından küçükseniz, paket satın
          almadan önce velinizin onayını almanız gerekir.
        </p>
      </Section>

      <Section title="7. Mesajları durdurma ve verilerinizi silme">
        <p>
          WhatsApp mesajlarını istediğiniz zaman sohbette durdurmak
          istediğinizi yazarak sonlandırabilirsiniz. Verilerinizin silinmesini
          istiyorsanız WhatsApp üzerinden veya <b>{email}</b> adresine yazarak
          talepte bulunabilirsiniz.
        </p>
      </Section>

      <Section title="8. Değişiklikler ve iletişim">
        <p>
          Bu politikayı gerektiğinde güncelleyebiliriz; güncel sürüm her zaman
          bu sayfada yayınlanır. Sorularınız için{" "}
          <Link href="/iletisim">İletişim</Link> sayfasındaki kanallardan bize
          ulaşabilirsiniz.
        </p>
      </Section>
    </LegalShell>
  );
}
