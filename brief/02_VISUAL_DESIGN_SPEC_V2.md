# ingilizcemiz.com — Premium Visual Design Spec v2

> Hedef: Klasik eğitim sitesi değil; **premium SaaS + WhatsApp chat product + modern öğrenme sistemi** hissi veren, mobil öncelikli, dönüşüm odaklı bir web arayüzü.

---

## 1. Tasarım Prensipleri

### Ana tasarım hedefi

Site ilk bakışta şu hissi vermeli:

```text
Bu basit ama kaliteli bir ürün. WhatsApp’ta çalışıyor. Denemesi kolay. Güvenilir.
```

### Tasarım karakteri

- Premium ama ulaşılabilir
- Ferah ve modern
- Mobil app tanıtım sitesi gibi
- WhatsApp deneyimini merkeze alan
- Fazla kurumsal olmayan
- Fazla çocuk uygulaması gibi olmayan
- Conversion-first

### Kaçınılacak görünüm

- Eski WordPress eğitim teması
- Stok fotoğraf dolu kurs sitesi
- Çok fazla ikonlu kurumsal grid
- Neon/aşırı AI görsel dili
- Ucuz WhatsApp bot sitesi hissi
- Fazla yeşil, tek renkli düz tasarım

---

## 2. Görsel Yön

### Ana metafor

```text
Learning inside the conversation
```

Site, öğrenme deneyimini bir uygulama ekranı yerine **konuşma akışı** olarak göstermelidir.

### Kullanılacak görsel elementler

- Telefon mockup
- Chat baloncukları
- Kelime kartı
- Mini grammar feedback kartı
- Seviye kartları
- Soft gradient blobs
- Floating UI cards
- Minimal line icons

### Stok fotoğraf kullanımı

Mümkünse kullanılmamalı. Kullanılacaksa:

- Gerçekçi, doğal, düşük kontrastlı
- Büyük kahraman fotoğrafı değil, küçük destek görseli
- Eğitim kurumu havası vermemeli

---

## 3. Renk Sistemi

### Core colors

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
}
```

### Brand colors

```css
:root {
  --primary: #18A86B;
  --primary-hover: #128656;
  --primary-soft: #E8F8F1;
  --primary-ring: rgba(24, 168, 107, 0.18);
}
```

### Accent colors

```css
:root {
  --blue: #2563EB;
  --blue-soft: #EFF6FF;
  --purple: #7C3AED;
  --purple-soft: #F5F3FF;
  --amber: #F59E0B;
  --amber-soft: #FFFBEB;
  --red-soft: #FEF2F2;
}
```

### Gradient önerileri

Hero background:

```css
background:
  radial-gradient(circle at 20% 10%, rgba(24,168,107,0.16), transparent 32%),
  radial-gradient(circle at 85% 20%, rgba(37,99,235,0.10), transparent 28%),
  linear-gradient(180deg, #F7F8FB 0%, #FFFFFF 100%);
```

CTA gradient:

```css
background: linear-gradient(135deg, #18A86B 0%, #10B981 100%);
```

---

## 4. Typography

### Font önerisi

```text
Headlines: Manrope veya Inter Tight
Body: Inter
Fallback: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
```

### Type scale

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 32px;
--text-4xl: 44px;
--text-5xl: 60px;
```

### Desktop hero

```css
font-size: clamp(44px, 5vw, 72px);
line-height: 0.98;
letter-spacing: -0.045em;
font-weight: 800;
```

### Mobile hero

```css
font-size: clamp(34px, 10vw, 46px);
line-height: 1.02;
letter-spacing: -0.04em;
```

### Body

```css
font-size: 17px;
line-height: 1.65;
color: var(--muted);
```

---

## 5. Layout System

### Container

```css
.container {
  width: min(1120px, calc(100% - 40px));
  margin-inline: auto;
}
```

Mobile:

```css
width: min(100% - 24px, 1120px);
```

### Section spacing

```css
.section {
  padding-block: clamp(72px, 10vw, 128px);
}
```

Hero:

```css
padding-top: clamp(104px, 12vw, 156px);
padding-bottom: clamp(72px, 8vw, 112px);
```

### Grid

Desktop hero:

```css
grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
gap: 64px;
align-items: center;
```

Mobile:

```css
grid-template-columns: 1fr;
gap: 40px;
```

---

## 6. Component Style Rules

### Buttons

Primary button:

```css
height: 52px;
padding-inline: 22px;
border-radius: 999px;
font-weight: 700;
box-shadow: 0 18px 40px rgba(24, 168, 107, 0.24);
```

Hover:

```css
transform: translateY(-1px);
box-shadow: 0 22px 48px rgba(24, 168, 107, 0.30);
```

Secondary button:

```css
height: 52px;
border-radius: 999px;
background: #fff;
border: 1px solid var(--border);
color: var(--text);
```

### Cards

```css
border-radius: 28px;
background: rgba(255,255,255,0.82);
border: 1px solid rgba(229,231,235,0.9);
box-shadow: 0 24px 80px rgba(17,24,39,0.08);
backdrop-filter: blur(16px);
```

### Pills

```css
border-radius: 999px;
background: var(--primary-soft);
color: var(--primary-hover);
font-weight: 700;
font-size: 13px;
```

---

## 7. Hero Visual — Phone Chat Mockup

### Yapı

```text
Outer glow card
└── Phone frame
    └── WhatsApp-like header
    └── Chat bubbles
    └── Input hint
```

### Telefon frame

```css
width: min(390px, 100%);
border-radius: 42px;
padding: 14px;
background: #111827;
box-shadow: 0 40px 100px rgba(17, 24, 39, 0.25);
```

### Screen

```css
border-radius: 32px;
background: linear-gradient(180deg, #F8FAFC 0%, #ECFDF5 100%);
overflow: hidden;
```

### Chat header

- Küçük avatar: “İ” veya gradient circle.
- Başlık: “İngilizcemiz Koç”
- Durum: “Bugünkü kelime hazır”

### Chat bubble styles

Bot bubble:

```css
background: #FFFFFF;
border: 1px solid rgba(229,231,235,0.8);
border-radius: 18px 18px 18px 6px;
```

User bubble:

```css
background: #DCFCE7;
border-radius: 18px 18px 6px 18px;
margin-left: auto;
```

Feedback bubble:

```css
background: #ECFDF5;
border: 1px solid rgba(24,168,107,0.18);
```

### Floating cards

Telefonun dışına 2 küçük floating card eklenebilir:

1. “5 dk/gün”
2. “avoid + V-ing”

Bu kartlar desktop’ta görünür, mobilde gizlenebilir.

---

## 8. Section-Specific Design

### Problem section

- Background: white.
- 3 kart.
- Kartlarda kırmızı/amber soft uyarı tonu kullanılabilir ama agresif olmamalı.

### Solution section

- Background: #F7F8FB.
- Kartlar daha güçlü gölge ve yeşil vurgulu icon ile.

### How it works

- Dikey timeline mobilde.
- Desktop’ta 3 büyük step card.
- Step numarası büyük ve soft gradient circle içinde.

### Demo section

- En önemli visual section.
- Büyük telefon mockup + yan açıklamalar.
- Kullanıcı scroll ettiğinde chat baloncukları hafif sırayla gelebilir.

### Levels section

- 7 seviye kartı.
- “Most popular” etiketi Intermediate veya Pre-Intermediate üzerinde kullanılabilir; gerçek veri yoksa “Başlamak için iyi seçenek” yazılmalı.
- Sınav kartları ayrı renk tonu ile gruplandırılabilir.

### Free trial section

- Full-width premium CTA band.
- Gradient + glass card.
- Checklist solda, CTA sağda.
- Mobile’da tek kolon.

---

## 9. Motion & Interaction

### Kullanılabilir animasyonlar

- Hero chat bubbles stagger reveal
- Cards fade-up
- CTA hover lift
- FAQ accordion open/close
- Sticky mobile CTA reveal after 400px scroll

### Kaçınılacak animasyonlar

- Sürekli zıplayan buton
- Çok ağır parallax
- Kullanıcıyı yavaşlatan loading animasyonu
- Lottie bağımlılığı

### Motion ayarı

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 10. Responsive Rules

### Mobile first

- Hero tek kolon.
- H1 ilk ekranda net okunmalı.
- CTA hero içinde görünmeli.
- Telefon mockup hero altında ama fazla büyük olmamalı.
- Sticky bottom CTA scroll sonrası görünmeli.
- Kartlar tek kolon.
- Comparison table mobile’da card list’e dönüşmeli.

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## 11. Accessibility

- Tüm CTA’lar keyboard focus almalı.
- Focus ring görünür olmalı.
- Kontrast WCAG AA seviyesinde olmalı.
- Accordion butonları `aria-expanded` kullanmalı.
- Tek H1 kullanılmalı.
- Dekoratif görseller `aria-hidden` olmalı.
- WhatsApp linkleri anlamlı label taşımalı.

---

## 12. Visual Acceptance Criteria

Tasarım kabul edilebilir sayılması için:

- İlk ekran premium görünmeli.
- Ürün ilk 5 saniyede anlaşılmalı.
- Hero’da WhatsApp deneyimi görsel olarak gösterilmeli.
- Mobil görünüm desktop kadar güçlü olmalı.
- CTA’lar göze çarpmalı ama agresif olmamalı.
- Stok eğitim sitesi hissi olmamalı.
- Ana renk WhatsApp yeşiliyle ilişkili ama daha rafine kullanılmalı.
- Boşluklar bol, metin blokları kısa olmalı.
