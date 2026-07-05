import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";
import { buildJsonLd } from "@/lib/schema";
import Analytics from "@/components/Analytics";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: "İngilizcemiz | WhatsApp'tan İngilizce Kelime Öğren",
  description:
    "Her gün WhatsApp'tan seviyene göre İngilizce kelime, örnek cümle ve cümle kurma pratiği al. 3 gün ücretsiz dene. Kart yok, taahhüt yok.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.siteName,
    title: "İngilizce kelimeleri WhatsApp'ta kullanarak öğren",
    description:
      "Yeni uygulama indirmeden, WhatsApp üzerinden günlük İngilizce kelime ve cümle pratiği yap. 3 gün ücretsiz dene.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "İngilizcemiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İngilizce kelimeleri WhatsApp'ta kullanarak öğren",
    description:
      "Yeni uygulama indirmeden, WhatsApp üzerinden günlük İngilizce kelime ve cümle pratiği yap. 3 gün ücretsiz dene.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBFAF7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#ana-icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:text-surface"
        >
          Ana içeriğe geç
        </a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
