# ingilizcemiz.com — SEO, Tracking & Launch Checklist v2

> Amaç: Landing page’i sadece güzel göstermek değil; ölçülebilir, SEO uyumlu, mobilde hızlı ve WhatsApp dönüşümüne hazır hale getirmek.

---

## 1. SEO Stratejisi

### Ana SEO pozisyonu

```text
WhatsApp üzerinden İngilizce kelime öğrenme
```

### Ana hedef sorgular

- WhatsApp İngilizce öğrenme
- WhatsApp İngilizce kelime
- İngilizce kelime öğrenme
- İngilizce kelime ezberleme
- Günlük İngilizce kelime
- İngilizce cümle kurma pratiği
- İngilizce kelime pratiği

### Uzun kuyruk sorgular

- WhatsApp üzerinden İngilizce öğrenmek
- Günde 5 dakika İngilizce öğrenme
- İngilizce kelime nasıl öğrenilir
- İngilizce kelime ezberlemek istemiyorum
- İngilizce kelimeyi cümlede kullanma
- İngilizce kelime unutuyorum ne yapmalıyım
- İngilizce kelime ezberi nasıl kalıcı olur
- İngilizce cümle kurma pratiği nasıl yapılır

### Sınav odaklı sorgular

- YDS kelime öğrenme
- YDS günlük kelime
- YDS kelime ezberi
- IELTS kelime pratiği
- IELTS writing kelimeleri
- TOEFL kelime çalışması
- TOEFL academic vocabulary

---

## 2. Sayfa Stratejisi

### İlk yayın için zorunlu sayfalar

```text
/
/hakkimizda
/sss
/iletisim
/gizlilik-politikasi
/kvkk
/kullanim-sartlari
```

### SEO büyümesi için açılacak sayfalar

```text
/nasil-calisir
/seviyeler
/yds-kelime
/ielts-kelime
/toefl-kelime
/ingilizce-kelime-ogrenme
/whatsapp-ingilizce-ogrenme
/ingilizce-cumle-kurma-pratigi
```

### Blog / içerik kümeleri

#### Cluster 1 — Kelime öğrenme

- İngilizce kelime nasıl öğrenilir?
- İngilizce kelime ezberlemenin en kalıcı yolu
- İngilizce kelimeyi cümlede kullanma yöntemi
- İngilizce kelimeleri neden unutuyoruz?

#### Cluster 2 — WhatsApp ile öğrenme

- WhatsApp üzerinden İngilizce öğrenmek mümkün mü?
- Günlük WhatsApp mesajlarıyla İngilizce pratiği
- Uygulama açmadan İngilizce çalışma yöntemi

#### Cluster 3 — Sınav kelimeleri

- YDS kelime çalışması nasıl yapılır?
- IELTS writing için güçlü kelimeler nasıl öğrenilir?
- TOEFL academic vocabulary nasıl çalışılır?

---

## 3. Metadata

### Home title

```text
İngilizcemiz | WhatsApp’tan İngilizce Kelime Öğren
```

### Home meta description

```text
Her gün WhatsApp’tan seviyene göre İngilizce kelime, örnek cümle ve cümle kurma pratiği al. 3 gün ücretsiz dene. Kart yok, taahhüt yok.
```

### OG title

```text
İngilizce kelimeleri WhatsApp’ta kullanarak öğren
```

### OG description

```text
Yeni uygulama indirmeden, WhatsApp üzerinden günlük İngilizce kelime ve cümle pratiği yap. 3 gün ücretsiz dene.
```

### OG image önerisi

```text
1200x630 premium hero görseli:
Sol: H1
Sağ: WhatsApp chat mockup
Alt: Kart yok · 3 gün ücretsiz · Yeni uygulama yok
```

---

## 4. URL ve Internal Linking

### URL kuralları

- Türkçe karakter kullanılmasın.
- Kısa, okunabilir slug.
- Gereksiz tarih kullanılmasın.
- Anahtar kelime doğal geçsin.

### İç link yapısı

Home’dan link verilecek:

- Nasıl Çalışır?
- Seviyeler
- YDS Kelime
- IELTS Kelime
- TOEFL Kelime
- SSS

Blog yazılarından link verilecek:

- Ana landing page
- İlgili sınav sayfası
- Ücretsiz deneme CTA

---

## 5. Structured Data

### Organization schema

Gerekli alanlar:

```text
name
url
logo
sameAs
contactPoint
```

### WebSite schema

Gerekli alanlar:

```text
name
url
potentialAction
```

### FAQPage schema

FAQ bölümündeki sorularla aynı olmalı.

### Service schema

Gerekli alanlar:

```text
name: İngilizcemiz WhatsApp İngilizce Kelime Pratiği
serviceType: Language learning / English vocabulary practice
provider
areaServed: TR
availableChannel: WhatsApp
```

---

## 6. Analytics Event Planı

### Zorunlu eventler

```text
page_view
cta_click_header
cta_click_hero
cta_click_sample_lesson
cta_click_level_card
cta_click_free_trial
cta_click_final
sticky_mobile_cta_click
whatsapp_start_click
faq_open
scroll_depth_25
scroll_depth_50
scroll_depth_75
scroll_depth_90
```

### Event parametreleri

```text
source_section
button_text
level_name
page_path
device_type
utm_source
utm_medium
utm_campaign
utm_content
```

### Örnek event payload

```json
{
  "event": "cta_click_level_card",
  "source_section": "levels",
  "button_text": "Intermediate ile başla",
  "level_name": "Intermediate",
  "page_path": "/",
  "utm_source": "instagram",
  "utm_campaign": "free_trial"
}
```

---

## 7. WhatsApp Link Tracking

### Merkezi link üretimi

WhatsApp linkleri tek fonksiyondan üretilmeli.

```ts
const whatsappNumber = '905XXXXXXXXX'

function createWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
```

### UTM saklama

Kullanıcı siteden WhatsApp’a giderken UTM bilgisi kaybolabilir. Bu yüzden:

- UTM parametreleri localStorage’da saklanmalı.
- WhatsApp mesajına opsiyonel campaign kodu eklenebilir.
- Örnek: `Kaynak: instagram/free_trial/video_001`

### Örnek WhatsApp mesajı

```text
Merhaba, İngilizcemiz 3 günlük ücretsiz denemesine başlamak istiyorum.
```

Seviye özel:

```text
Merhaba, İngilizcemiz 3 günlük ücretsiz denemeye IELTS seviyesiyle başlamak istiyorum.
```

---

## 8. UTM Planı

### Instagram Reels

```text
utm_source=instagram
utm_medium=reels
utm_campaign=free_trial
utm_content=video_001
```

### TikTok

```text
utm_source=tiktok
utm_medium=short_video
utm_campaign=whatsapp_trial
utm_content=avoid_word_demo
```

### YouTube Shorts

```text
utm_source=youtube
utm_medium=shorts
utm_campaign=daily_word
utm_content=sentence_practice
```

### Bio link

```text
utm_source=instagram
utm_medium=bio
utm_campaign=profile_click
utm_content=main_link
```

---

## 9. Conversion QA Checklist

### CTA kontrolü

- Header CTA çalışıyor mu?
- Hero CTA çalışıyor mu?
- Örnek ders CTA doğru scroll ediyor mu?
- Level card CTA doğru seviye mesajıyla açılıyor mu?
- Free trial CTA çalışıyor mu?
- Final CTA çalışıyor mu?
- Sticky mobile CTA çalışıyor mu?

### WhatsApp kontrolü

- iOS Safari’de açılıyor mu?
- Android Chrome’da açılıyor mu?
- Instagram in-app browser’da açılıyor mu?
- WhatsApp yüklü değilse web fallback çalışıyor mu?
- Mesaj encode doğru mu?
- Telefon numarası doğru mu?

### Deneme koşulları

- Kart gerekmediği net yazıyor mu?
- 3 gün ücretsiz olduğu net mi?
- Taahhüt olmadığı net mi?
- İptal/durdurma bilgisi FAQ’da var mı?

---

## 10. Technical SEO Checklist

- Tek H1 var.
- Meta title 60 karakter civarı.
- Meta description 150–160 karakter civarı.
- Canonical URL var.
- OG title/description/image var.
- Twitter card var.
- Sitemap.xml var.
- Robots.txt var.
- 404 sayfası var.
- Semantic HTML kullanıldı.
- FAQ schema doğru.
- Görsellerde alt text var.
- Lazy loading var.
- Font display swap var.

---

## 11. Performance Checklist

### Hedefler

```text
Lighthouse Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

### Kontrol

- Gereksiz animasyon yok.
- Görseller WebP/AVIF.
- Telefon mockup mümkünse CSS ile.
- Büyük video yok.
- Kullanılmayan JS yok.
- Font dosyaları optimize.
- Third-party scriptler minimum.
- Mobile LCP hero metni/görseli optimize.

---

## 12. Accessibility Checklist

- Keyboard navigation çalışıyor.
- Focus ring görünür.
- CTA kontrastı yeterli.
- Accordion `aria-expanded` kullanıyor.
- Button/link ayrımı doğru.
- Decorative elementler `aria-hidden`.
- Text contrast WCAG AA.
- Mobile tap target minimum 44px.
- Reduced motion desteği var.

---

## 13. Hukuki / Güven Checklist

- Gizlilik Politikası yayında.
- KVKK metni yayında.
- Kullanım Şartları yayında.
- İletişim bilgisi gerçek.
- WhatsApp üzerinden iletişim izni açık.
- Kullanıcı mesajları nasıl durduracağı yazıyor.
- Deneme sonrası ücretlendirme açık.
- Sahte yorum yok.
- Gerçek kullanıcı yorumu varsa izin alınmış.

---

## 14. Launch Öncesi Son Kontrol

- Gerçek WhatsApp numarası girildi.
- WhatsApp Business profili düzenlendi.
- Profil fotoğrafı/logo doğru.
- Otomatik karşılama mesajı hazır.
- İlk deneme akışı test edildi.
- Seviye seçimi test edildi.
- İlk ders gönderimi test edildi.
- Mobil Safari test edildi.
- Android Chrome test edildi.
- Instagram in-app browser test edildi.
- GA4 veya benzeri analytics kuruldu.
- Meta Pixel gerekiyorsa kuruldu.
- Search Console bağlandı.
- Sitemap gönderildi.
- Form/link hatası yok.
- 404/500 hata yok.

---

## 15. İlk A/B Test Planı

### Test 1 — Hero H1

A:

```text
İngilizce kelimeleri ezberleme. WhatsApp’ta kullanarak öğren.
```

B:

```text
Her gün WhatsApp’ına gelen 5 dakikalık İngilizce pratiği.
```

Başarı metriği:

```text
hero_cta_click / page_view
```

### Test 2 — CTA

A:

```text
WhatsApp’tan Ücretsiz Başla
```

B:

```text
3 Gün Ücretsiz Başla
```

Başarı metriği:

```text
whatsapp_start_click / page_view
```

### Test 3 — Hero visual

A:

```text
Tek telefon mockup
```

B:

```text
Telefon + floating grammar card
```

Başarı metriği:

```text
scroll_depth_50 + hero_cta_click
```

---

## 16. 30 Günlük Yayın Sonrası Plan

### İlk 7 gün

- WhatsApp CTA tıklamalarını izle.
- Mobil bounce rate’i kontrol et.
- En çok tıklanan CTA bölümünü bul.
- Kullanıcıların WhatsApp mesajını gönderip göndermediğini takip et.

### 8–15 gün

- Hero H1 A/B testi başlat.
- Instagram/TikTok kaynaklarını ayrı ölç.
- FAQ açılma oranlarına göre itirazları belirle.

### 16–30 gün

- SEO sayfalarından ilk 3 tanesini yayınla:
  - `/whatsapp-ingilizce-ogrenme`
  - `/ingilizce-kelime-ogrenme`
  - `/ingilizce-cumle-kurma-pratigi`
- Gerçek kullanıcı feedbacklerini topla.
- Testimonial alanını gerçek verilerle güncelle.
