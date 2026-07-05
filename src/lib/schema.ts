import { SITE_CONFIG } from "./config";
import { FAQ_ITEMS } from "@/data/faq";

export function buildJsonLd() {
  const org = {
    "@type": "Organization",
    "@id": `${SITE_CONFIG.baseUrl}/#organization`,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.baseUrl,
    logo: `${SITE_CONFIG.baseUrl}/logo.png`,
    sameAs: [] as string[],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Turkish"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.baseUrl,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const service = {
    "@type": "Service",
    name: "İngilizcemiz WhatsApp İngilizce Kelime Pratiği",
    serviceType: "Language learning / English vocabulary practice",
    provider: { "@id": `${SITE_CONFIG.baseUrl}/#organization` },
    areaServed: "TR",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: SITE_CONFIG.baseUrl,
      name: "WhatsApp",
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_CONFIG.baseUrl}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [org, website, service, faqPage],
  };
}
