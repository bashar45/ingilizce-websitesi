// Central site config. Only the WhatsApp number is a real, provided asset.
// Everything else is a clearly-marked placeholder to be filled before launch.

export const SITE_CONFIG = {
  siteName: "İngilizcemiz",
  domain: "ingilizcemiz.com",
  baseUrl: "https://ingilizcemiz.com",

  // REAL asset (provided).
  whatsappNumber: "905459760738",
  baseWhatsappMessage:
    "Merhaba, İngilizcemiz 3 günlük ücretsiz denemesine başlamak istiyorum.",

  // PLACEHOLDER — fill before launch:
  ga4MeasurementId: "G-XXXXXXXXXX",
  founderName: "", // e.g. "Ad Soyad" — boş kalırsa kart ürün-odaklı gösterilir

  // KVKK veri sorumlusu — /kvkk sayfasında gösterilir. Yayından önce doldurulmalı.
  dataController: {
    name: "İngilizcemiz.com", // şirket unvanı veya şahıs şirketi sahibinin adı soyadı
    address: "", // açık adres
    email: "inanb44@gmail.com", // KVKK başvuruları için e-posta
  },
} as const;
