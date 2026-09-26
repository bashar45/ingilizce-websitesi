// Subscription plans: 3 durations × 3 daily word counts.
// Prices are total TL for the whole period. Edit here to change the site.

export interface Duration {
  months: 1 | 3 | 6;
  label: string;
  badge?: string;
}

export interface Tier {
  words: 2 | 4 | 6;
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
  prices: Record<Duration["months"], number>;
}

export const DURATIONS: Duration[] = [
  { months: 1, label: "1 Aylık" },
  { months: 3, label: "3 Aylık", badge: "%16 avantajlı" },
  { months: 6, label: "6 Aylık", badge: "%25 avantajlı" },
];

export const DEFAULT_DURATION: Duration["months"] = 3;

export const TIERS: Tier[] = [
  {
    words: 2,
    name: "Hafif",
    description: "Yoğun tempoda bile aksatmadan düzenli pratik.",
    features: [
      "Günde 2 kelime, bağlam ve örnek cümle",
      "Her kelimeye cümle yazma pratiği",
      "Seviyene veya sınavına göre içerik",
    ],
    prices: { 1: 299, 3: 749, 6: 1349 },
  },
  {
    words: 4,
    name: "Dengeli",
    description: "Kelime dağarcığını hissedilir hızda büyütmek isteyenler için.",
    features: [
      "Günde 4 kelime, bağlam ve örnek cümle",
      "Her kelimeye cümle yazma pratiği",
      "Seviyene veya sınavına göre içerik",
    ],
    popular: true,
    prices: { 1: 449, 3: 1129, 6: 1999 },
  },
  {
    words: 6,
    name: "Yoğun",
    description: "Sınava hazırlananlar ve hızlı ilerlemek isteyenler için.",
    features: [
      "Günde 6 kelime, bağlam ve örnek cümle",
      "Her kelimeye cümle yazma pratiği",
      "Seviyene veya sınavına göre içerik",
    ],
    prices: { 1: 599, 3: 1499, 6: 2699 },
  },
];

export const PRICING_SECTION = {
  eyebrow: "Fiyatlar",
  title: "Temponu seç, süreni seç.",
  subtitle:
    "Tüm paketler 3 gün ücretsiz denemeyle başlar. Deneme boyunca ödeme alınmaz; beğenirsen sana uyan paketle devam edersin.",
  popularLabel: "En popüler",
  note: "Fiyatlara KDV dahildir. Ödeme ve paket geçişi WhatsApp üzerinden yapılır.",
};

export function planWhatsAppMessage(tier: Tier, months: Duration["months"]): string {
  return `Merhaba, İngilizcemiz ${months} aylık, günde ${tier.words} kelimelik (${tier.name}) paketini almak istiyorum.`;
}

export function formatTL(value: number): string {
  return `${Math.round(value).toLocaleString("tr-TR")} TL`;
}
