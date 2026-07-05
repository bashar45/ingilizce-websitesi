import { SITE_CONFIG } from "./config";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;

const STORAGE_KEY = "ing_utm";

/** Persist UTM params from the URL into localStorage (survives WhatsApp handoff). */
export function captureUtm(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  if (Object.keys(found).length > 0) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      /* storage may be unavailable; ignore */
    }
  }
}

function readUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/** Build a wa.me link. Appends a compact source tag when UTM data exists. */
export function createWhatsAppLink(
  message: string = SITE_CONFIG.baseWhatsappMessage,
): string {
  let finalMessage = message;
  const utm = readUtm();
  if (utm.utm_source) {
    const tag = [utm.utm_source, utm.utm_campaign, utm.utm_content]
      .filter(Boolean)
      .join("/");
    if (tag) finalMessage = `${message}\n\nKaynak: ${tag}`;
  }
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
}

/** Message variant that includes the chosen level. */
export function levelWhatsAppMessage(levelName: string): string {
  return `Merhaba, İngilizcemiz 3 günlük ücretsiz denemeye ${levelName} seviyesiyle başlamak istiyorum.`;
}
