# Claude / Design Build Prompt — ingilizcemiz.com Premium Landing Page v2

Sen üst seviye bir **product designer**, **conversion copywriter** ve **frontend engineer** gibi çalışacaksın.

Amaç: ingilizcemiz.com için modern, premium, mobil öncelikli, yüksek dönüşüm odaklı bir landing page tasarlamak ve kodlamak.

Bu site klasik bir eğitim kurumu sitesi gibi görünmeyecek. Modern bir **SaaS / AI learning product / WhatsApp-native microlearning** ürünü gibi görünecek.

---

## 1. Ürün Özeti

Ürün adı:

```text
ingilizcemiz.com
```

Konsept:

```text
Kullanıcıya her gün WhatsApp üzerinden seviyesine uygun İngilizce kelime, bağlam, örnek cümle ve cümle kurma pratiği gönderen mikro öğrenme sistemi.
```

Ana vaat:

```text
İngilizce kelimeleri ezberleme. WhatsApp’ta kullanarak öğren.
```

Ana dönüşüm hedefi:

```text
Kullanıcının 3 günlük ücretsiz denemeyi WhatsApp üzerinden başlatması.
```

---

## 2. Zorunlu Sayfa Bölümleri

Landing page sırasıyla şu bölümlerden oluşmalı:

1. Sticky Header
2. Hero
3. Trust Strip
4. Problem
5. Solution
6. How It Works
7. Product Demo / WhatsApp Chat Mockup
8. Levels
9. Comparison
10. Beta Feedback / Testimonials
11. Free Trial CTA
12. Founder Story
13. FAQ
14. Final CTA
15. Footer
16. Sticky Mobile CTA

---

## 3. Tasarım Dili

Tasarım karakteri:

- Premium
- Temiz
- Bol boşluklu
- Modern SaaS hissi
- Mobil öncelikli
- WhatsApp conversation UI merkezli
- Yumuşak ama ciddi
- Eğitim kurumu sitesi gibi değil
- Ucuz bot sitesi gibi değil

Kaçınılacak şeyler:

- Stok fotoğraf ağırlıklı kurs sitesi
- Eski WordPress template hissi
- Aşırı yeşil düz tasarım
- Çok fazla ikon
- Sahte kullanıcı yorumları
- Ağır animasyonlar

---

## 4. Görsel Sistem

### Renkler

```css
:root {
  --bg: #F7F8FB;
  --bg-soft: #EEFDF5;
  --surface: #FFFFFF;
  --surface-muted: #F3F4F6;
  --text: #111827;
  --text-soft: #374151;
  --muted: #6B7280;
  --muted-light: #9CA3AF;
  --border: #E5E7EB;

  --primary: #18A86B;
  --primary-hover: #128656;
  --primary-soft: #E8F8F1;
  --primary-ring: rgba(24, 168, 107, 0.18);

  --blue: #2563EB;
  --blue-soft: #EFF6FF;
  --purple: #7C3AED;
  --purple-soft: #F5F3FF;
  --amber: #F59E0B;
  --amber-soft: #FFFBEB;
}
```

### Tipografi

- Headline: Manrope veya Inter Tight
- Body: Inter
- Büyük, net, kısa başlıklar
- Uzun paragraflardan kaçın

### Stil

- Büyük radius
- Soft shadow
- Glassmorphism ölçülü kullanılabilir
- Telefon/chat mockup ana görsel olmalı
- Gradient background kullanılmalı
- Kartlar premium SaaS hissi vermeli

---

## 5. İçerik

Ana metinleri `03_COPYWRITING_AND_CONTENT_V2.md` dosyasından kullan.

Hero zorunlu içerik:

### Eyebrow

```text
WhatsApp üzerinden günlük İngilizce pratiği
```

### H1

```text
İngilizce kelimeleri ezberleme. WhatsApp’ta kullanarak öğren.
```

### Subheadline

```text
Her gün seviyene göre kelime, görsel bağlam, örnek cümle ve cümle kurma pratiği WhatsApp’ına gelir. Günde 5 dakika yeter.
```

### CTA

Primary:

```text
WhatsApp’tan Ücretsiz Başla
```

Secondary:

```text
Örnek Dersi Gör
```

### Trust line

```text
Kart yok · Taahhüt yok · Yeni uygulama yok
```

---

## 6. Chat Mockup Zorunlu İçeriği

Telefon mockup içinde şu chat akışı gösterilmeli:

Bot:

```text
Bugünün kelimesi: avoid
Anlam: kaçınmak
```

Bot:

```text
Avoid, istemediğin veya zararlı olabilecek bir şeyden uzak durmak anlamında kullanılır.
```

Bot:

```text
Example: I try to avoid checking my phone before sleep.
```

Bot:

```text
Şimdi sen “avoid” ile kendi hayatından bir cümle yaz.
```

User:

```text
I avoid eating late at night.
```

Bot:

```text
Güzel cümle. Doğru kullanım: avoid + V-ing. Devam.
```

---

## 7. CTA Link Yapısı

Tüm primary CTA butonları WhatsApp linkine gitmeli.

Geçici config:

```ts
export const SITE_CONFIG = {
  whatsappNumber: '905XXXXXXXXX',
  baseWhatsappMessage: 'Merhaba, İngilizcemiz 3 günlük ücretsiz denemesine başlamak istiyorum.',
}
```

WhatsApp link generator:

```ts
export function createWhatsAppLink(message = SITE_CONFIG.baseWhatsappMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`
}
```

Seviye kartları için mesaj örneği:

```text
Merhaba, İngilizcemiz 3 günlük ücretsiz denemeye Intermediate seviyesiyle başlamak istiyorum.
```

---

## 8. Teknik Stack

Tercih edilen stack:

```text
Next.js + TypeScript + Tailwind CSS + Framer Motion
```

Alternatif:

```text
Vite + React + TypeScript + Tailwind CSS
```

Component yaklaşımı:

- Bütün içerik data objelerinden gelmeli.
- CTA linkleri merkezi config’ten yönetilmeli.
- Bölümler component olarak ayrılmalı.
- CSS utility düzeni temiz olmalı.
- Gereksiz dependency eklenmemeli.

---

## 9. Önerilen Dosya Yapısı

```text
src/
  app/
    page.tsx
    layout.tsx
  components/
    Header.tsx
    Hero.tsx
    TrustStrip.tsx
    ProblemSection.tsx
    SolutionSection.tsx
    HowItWorks.tsx
    ChatMockup.tsx
    ProductDemo.tsx
    LevelsSection.tsx
    ComparisonSection.tsx
    Testimonials.tsx
    FreeTrialCTA.tsx
    FounderStory.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
    StickyMobileCTA.tsx
  data/
    siteContent.ts
    levels.ts
    faq.ts
  lib/
    whatsapp.ts
  styles/
    globals.css
```

---

## 10. Component Kabul Kriterleri

### Header

- Sticky olmalı.
- Desktop’ta menü + CTA.
- Mobile’da logo + CTA.
- Blur background ve ince border kullanılmalı.

### Hero

- Desktop’ta 2 kolon.
- Mobile’da tek kolon.
- H1 güçlü ve ilk ekranda okunabilir olmalı.
- Telefon mockup hero içinde görünmeli.

### ChatMockup

- Gerçek chat baloncukları gibi görünmeli.
- Bot/user balonları ayrışmalı.
- Header’da “İngilizcemiz Koç” yazmalı.
- Fazla uzun olmamalı; mobilde kompakt olmalı.

### LevelsSection

- 7 seviye kartı olmalı.
- Her kartın ayrı WhatsApp mesajı olmalı.
- Sınav paketleri görsel olarak ayrışabilir.

### FAQ

- Accordion olmalı.
- `aria-expanded` kullanılmalı.
- FAQ schema ile uyumlu veri yapısı olmalı.

### StickyMobileCTA

- Sadece mobilde görünmeli.
- Scroll sonrası aktif olmalı.
- İçerik: `WhatsApp’tan Ücretsiz Başla`

---

## 11. SEO Metadata

Title:

```text
İngilizcemiz | WhatsApp’tan İngilizce Kelime Öğren
```

Description:

```text
Her gün WhatsApp’tan seviyene göre İngilizce kelime, örnek cümle ve cümle kurma pratiği al. 3 gün ücretsiz dene. Kart yok, taahhüt yok.
```

OG Title:

```text
İngilizce kelimeleri WhatsApp’ta kullanarak öğren
```

OG Description:

```text
Yeni uygulama indirmeden, WhatsApp üzerinden günlük İngilizce kelime ve cümle pratiği yap. 3 gün ücretsiz dene.
```

Canonical:

```text
https://ingilizcemiz.com/
```

---

## 12. Structured Data

Şu schema türleri hazırlanmalı:

- Organization
- WebSite
- FAQPage
- Service

FAQ schema, FAQ componentindeki data objesinden üretilebilir.

---

## 13. Analytics Eventleri

CTA ve önemli interaction’larda event gönderilecek şekilde hook/utility hazırlanmalı.

Event listesi:

```text
cta_click_header
cta_click_hero
cta_click_sample_lesson
cta_click_level_card
cta_click_free_trial
cta_click_final
sticky_mobile_cta_click
whatsapp_start_click
faq_open
scroll_depth_50
scroll_depth_75
```

Event parametreleri:

```text
source_section
button_text
level_name
page_path
utm_source
utm_campaign
```

---

## 14. Performance & Accessibility

Zorunlu kalite kriterleri:

- Lighthouse Performance 90+
- Lighthouse Accessibility 95+
- Tek H1
- Görseller WebP/AVIF veya CSS mockup
- Font display swap
- Lazy loading
- Gereksiz JS yok
- `prefers-reduced-motion` desteği
- Keyboard navigation çalışmalı
- Focus ring görünmeli
- CTA contrast yeterli olmalı

---

## 15. Responsive Kurallar

### Mobil

- Hero tek kolon.
- CTA ilk ekranda görünmeli.
- Telefon mockup aşırı büyük olmamalı.
- Kartlar tek kolon.
- Comparison table card list’e dönüşmeli.
- Sticky bottom CTA scroll sonrası görünmeli.

### Desktop

- Hero iki kolon.
- Telefon mockup sağda.
- Section spacing geniş.
- Kart gridleri 3 kolon.
- Levels 3+4 veya responsive grid olabilir.

---

## 16. Final Acceptance Criteria

Çıkan site şu kriterleri sağlamalı:

1. İlk 5 saniyede ürün net anlaşılıyor.
2. Site premium ve modern görünüyor.
3. WhatsApp deneyimi görsel olarak güçlü gösteriliyor.
4. CTA’lar net ve çalışıyor.
5. Mobil görünüm desktop kadar kaliteli.
6. Sahte sosyal kanıt yok.
7. SEO metadata hazır.
8. Analytics event isimleri hazır.
9. Kod temiz, component bazlı ve sürdürülebilir.
10. Kullanıcıyı WhatsApp ücretsiz denemeye sürtünmesiz taşıyor.
