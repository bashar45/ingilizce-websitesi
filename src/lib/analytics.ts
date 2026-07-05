// Thin GA4 wrapper. Safe to call even when GA is not loaded.

type EventParams = {
  source_section?: string;
  button_text?: string;
  level_name?: string;
  page_path?: string;
  device_type?: string;
  [key: string]: string | number | undefined;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const payload: EventParams = {
    page_path: window.location.pathname,
    device_type: window.matchMedia("(max-width: 768px)").matches
      ? "mobile"
      : "desktop",
    ...params,
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  } else if (process.env.NODE_ENV !== "production") {
    // Visibility during development before GA is wired up.
    // eslint-disable-next-line no-console
    console.debug("[track]", event, payload);
  }
}
