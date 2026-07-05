// Central site config. Only the WhatsApp number is a real, provided asset.
// Everything else is a clearly-marked placeholder to be filled before launch.

export const SITE_CONFIG = {
  siteName: "İngilizcemiz",
  domain: "ingilizcemiz.com",
  baseUrl: "https://ingilizcemiz.com",

  // REAL asset (provided).
  whatsappNumber: "905533939518",
  baseWhatsappMessage:
    "Merhaba, İngilizcemiz 3 günlük ücretsiz denemesine başlamak istiyorum.",

  // PLACEHOLDER — fill before launch:
  ga4MeasurementId: "G-XXXXXXXXXX",
  founderName: "", // e.g. "Ad Soyad" — boş kalırsa kart ürün-odaklı gösterilir
  priceInfo: "", // boş → fiyat gizli, dürüst "deneme sonrası uygun plan" dili kullanılır
} as const;
