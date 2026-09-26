// All page copy lives here (data-driven sections).
// Trust claims are intentionally phrased differently per section (layered, not repeated).

export const HERO = {
  eyebrow: "WhatsApp üzerinden günlük İngilizce pratiği",
  // H1 split so the display word can be the typographic hero
  h1Lead: "Kelimeleri ezberleme.",
  h1Emphasis: "Kullanarak öğren.",
  subheadline:
    "Her gün seviyene göre bir kelime, bağlamı ve örnek cümlesi WhatsApp'ına gelir. Sen de kendi cümleni yazarsın. Günde 5 dakika.",
  primaryCta: "WhatsApp'tan Ücretsiz Başla",
  secondaryCta: "Bir günlük dersi gör",
  // Hero-level trust: framed as "what you skip"
  trustLine: "Kart yok · Taahhüt yok · Yeni uygulama yok",
  miniBullets: [
    "Seviyene göre günlük kelime",
    "Bağlam ve örnek cümle",
    "Cümle yazma ve geri bildirim",
  ],
};

// The interactive signature: visitor writes a sentence with the daily word.
export const INTERACTIVE_HERO = {
  word: "avoid",
  meaning: "kaçınmak",
  promptBot: "Şimdi “avoid” ile kendi hayatından bir cümle yaz.",
  placeholder: "I avoid…",
  suggestion: "I avoid eating late at night.",
  // Crafted, scripted "coach" reply (no backend).
  feedbackTitle: "Doğru kullanım",
  feedbackBody: "Güzel cümle. Kalıp: avoid + V-ing. Böyle devam.",
  hintBefore: "avoid + isim ya da avoid + V-ing kalıbını dene.",
};

export const TRUST_STRIP = [
  { label: "3 gün ücretsiz deneme", sub: "Karar vermeden önce dene" },
  { label: "Seviyene göre kelime", sub: "Temelden sınav İngilizcesine" },
  { label: "Bağlam + örnek cümle", sub: "Sadece anlam değil, kullanım" },
  { label: "Cümle kurma pratiği", sub: "Pasif okuma değil, üretim" },
];

export const PROBLEM = {
  title: "Sorun kelime bilmemek değil. Kelimeyi kullanamamak.",
  subtitle:
    "Kelime listeleri kısa süreli bir öğrenme hissi verir. Ama kelime gerçek bir cümlede kullanılmadığında birkaç gün içinde kaybolur.",
  cards: [
    {
      title: "Ezberliyorsun, unutuyorsun",
      body: "Çünkü kelime zihninde gerçek bir duruma bağlanmıyor.",
    },
    {
      title: "Uygulamayı açmayı unutuyorsun",
      body: "Öğrenme sistemi senden sürekli ekstra disiplin istiyor.",
    },
    {
      title: "Cümle kurmadan ilerliyorsun",
      body: "Pasif okumak öğrenme hissi verir; ama gerçek kullanım oluşturmaz.",
    },
  ],
};

export const SOLUTION = {
  title: "Biz öğrenmeyi WhatsApp alışkanlığının içine koyduk.",
  subtitle:
    "Her gün kısa bir kelime dersi gelir. Sen sadece mesajı açar, örneği görür ve kendi cümleni yazarsın.",
  cards: [
    {
      title: "Ders sana gelir",
      body: "Yeni uygulama açman gerekmez. Günlük kelime zaten kullandığın WhatsApp'a düşer.",
    },
    {
      title: "Kelime bağlamıyla gelir",
      body: "Sadece Türkçe karşılığı değil; kullanım hissi, örnek cümle ve bağlam gelir.",
    },
    {
      title: "Sen cümle yazarsın",
      body: "Kelimeyi okuyup geçmezsin. Kendi hayatından bir cümle kurarak aktif hale getirirsin.",
    },
  ],
};

export const HOW_IT_WORKS = {
  title: "Sistem nasıl işliyor?",
  subtitle: "Üç adım — ve baştan sona kontrol sende.",
  steps: [
    {
      title: "Seviyeni seçiyorsun",
      body: "Elementary'den IELTS'e kadar hedefine uygun paketi seçersin.",
    },
    {
      title: "3 gün ücretsiz deniyorsun",
      body: "Kart yok, taahhüt yok. Önce dene, sonra karar ver.",
    },
    {
      title: "Tempo sende",
      body: "Devam etmek istersen günde 2, 4 ya da 6 kelime — hızını sen belirlersin.",
    },
  ],
};

export type ChatRole = "bot" | "user" | "feedback";
export interface ChatLine {
  role: ChatRole;
  text: string;
}

export const DEMO = {
  title: "Bir günlük ders böyle görünür.",
  subtitle:
    "Kelimeyi sadece okumazsın. Anlamını, kullanımını ve kendi cümleni aynı akışta görürsün.",
  chat: [
    { role: "bot", text: "Bugünün kelimesi: avoid\nAnlam: kaçınmak" },
    {
      role: "bot",
      text: "Avoid, istemediğin veya zararlı olabilecek bir şeyden uzak durmak anlamında kullanılır.",
    },
    { role: "bot", text: "Example: I try to avoid checking my phone before sleep." },
    { role: "bot", text: "Şimdi sen “avoid” ile kendi hayatından bir cümle yaz." },
    { role: "user", text: "I avoid eating late at night." },
    { role: "feedback", text: "Güzel cümle. Doğru kullanım: avoid + V-ing. Devam." },
  ] as ChatLine[],
  sideCards: [
    { title: "Bağlam", body: "Kelimeyi tek başına değil, gerçek kullanım hissiyle görürsün." },
    { title: "Örnek", body: "Her kelime için doğal bir örnek cümle gelir." },
    {
      title: "Geri bildirim",
      body: "Kendi cümleni yazdığında doğru kullanım için yönlendirme alırsın.",
    },
  ],
};

export const DAILY_FLOW = {
  eyebrow: "Günlük akış",
  title: "Günde sadece 2, 4 veya 6 kelime.",
  subtitle:
    "Ne kadar yoğun ilerleyeceğine sen karar verirsin. Her kelime için akış hep aynı ve kısadır — 5 dakikanı geçmez.",
  intensities: [
    { count: "2", label: "kelime / gün", note: "Sakin tempo" },
    { count: "4", label: "kelime / gün", note: "Dengeli", recommended: true },
    { count: "6", label: "kelime / gün", note: "Hızlı ilerle" },
  ],
  stepsTitle: "Her kelimede yaptığın tek şey:",
  steps: [
    {
      title: "Resimleriyle görürsün",
      body: "Kelimenin nerede, ne zaman ve hangi duyguyla kullanıldığını görsellerle görürsün.",
    },
    {
      title: "Kısa bir örnek cümle okursun",
      body: "Kelimenin doğal kullanımını tek, net bir örnek cümlede görürsün.",
    },
    {
      title: "Sadece 1 cümle yazarsın",
      body: "Senden istenen tek şey: kendi hayatından bir cümle. Fazlası yok.",
    },
  ],
  footnote: "Seviyeni aşağıdaki Seviyeler bölümünden seçersin.",
};

export const LEVELS_SECTION = {
  title: "Hedefine göre kelime paketi seç.",
  subtitle:
    "Temelden sınav İngilizcesine kadar günlük kelimeler seviyene göre gelir.",
  recommendedLabel: "Başlamak için iyi seçenek",
};

export const COMPARISON = {
  title: "Bir uygulama daha değil. Günlük alışkanlığın içine giren sistem.",
  subtitle:
    "Öğrenme senden ekstra motivasyon istemesin. Zaten kullandığın kanaldan küçük ama düzenli temas kursun.",
  rows: [
    { label: "Başlamak", classic: "Uygulama indir", ours: "WhatsApp'tan başla" },
    { label: "Devam etmek", classic: "Uygulamayı açmayı hatırla", ours: "Ders sana gelir" },
    { label: "Öğrenme tipi", classic: "Test / ezber", ours: "Bağlam + cümle" },
    { label: "Günlük süre", classic: "Değişken", ours: "5 dakika" },
    { label: "Pratik", classic: "Çoğu zaman pasif", ours: "Cümle yazma" },
  ],
};

export const TESTIMONIALS = {
  title: "Beta kullanıcılarından ilk geri bildirimler",
  note:
    "Bu yorumlar beta döneminden alınan gerçek geri bildirimlerdir; kişilerin adı ve fotoğrafı yalnızca izinleriyle paylaşılır.",
  cards: [
    "Uygulama açmam gerekmediği için devam edebildim. Kelime direkt WhatsApp'a gelince kaçırmıyorum.",
    "Kelimeyi sadece anlamıyla değil, cümle içinde görünce daha iyi oturdu.",
    "Her gün uzun ders yapmak yerine küçük bir mesaj almak benim için daha sürdürülebilir oldu.",
  ],
};

export const FREE_TRIAL = {
  title: "Önce dene. Sonra karar ver.",
  body:
    "3 gün boyunca sistemi WhatsApp üzerinden deneyebilirsin. Deneme boyunca kart bilgisi istenmez, hiçbir ödeme alınmaz.",
  // Free-trial trust: framed as an explicit promise checklist (different angle than hero)
  checklist: [
    "3 gün boyunca tam erişim",
    "Kart bilgisi istenmez",
    "Herhangi bir taahhüt yok",
    "İndirme veya kurulum yok",
    "WhatsApp'tan hemen başlar",
    "Dilediğin an tek mesajla durdurursun",
  ],
  cta: "WhatsApp'tan Ücretsiz Başla",
};

export const FOUNDER = {
  title: "Bu sistem, kelime ezberleyip kullanamama probleminden doğdu.",
  body: [
    "İngilizce öğrenirken en büyük sorunlardan biri kelime bilmemek değil; bildiğin kelimeyi gerçek bir cümlede kullanamamaktır.",
    "İngilizcemiz.com bu yüzden günlük küçük temaslar üzerine kuruldu: bir kelime, bir bağlam, bir örnek ve senden gelen bir cümle.",
    "Ağır program yok. Suçluluk yok. Her gün sürdürülebilir küçük bir pratik var.",
  ],
};

export const FAQ_SECTION = {
  title: "Merak edilenler",
  subtitle: "Başlamadan önce en çok sorulanlar.",
};

export const FINAL_CTA = {
  title: "Bugün bir kelimeyle başla.",
  body:
    "Ağır program yok. Yeni uygulama yok. WhatsApp'ta 5 dakikalık günlük İngilizce pratiği var.",
  cta: "3 Gün Ücretsiz Dene",
  microcopy: "Kart yok · Taahhüt yok · WhatsApp'tan başlar",
};

export const NAV_LINKS = [
  { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
  { label: "Örnek Ders", href: "#ornek-ders" },
  { label: "Seviyeler", href: "#seviyeler" },
  { label: "Fiyatlar", href: "#fiyatlar" },
  { label: "SSS", href: "#sss" },
];

export const FOOTER = {
  tagline:
    "WhatsApp üzerinden günlük İngilizce kelime ve cümle pratiği. Yeni uygulama yok, günde 5 dakika.",
  columns: [
    {
      title: "Ürün",
      links: [
        { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
        { label: "Seviyeler", href: "#seviyeler" },
        { label: "Fiyatlar", href: "#fiyatlar" },
        { label: "Örnek Ders", href: "#ornek-ders" },
        { label: "SSS", href: "#sss" },
      ],
    },
    {
      title: "Kurumsal",
      links: [
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "İletişim", href: "/iletisim" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
        { label: "KVKK", href: "/kvkk" },
        { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
      ],
    },
  ],
};
