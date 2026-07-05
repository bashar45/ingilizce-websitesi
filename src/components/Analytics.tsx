"use client";

import Script from "next/script";
import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/config";
import { captureUtm } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

const GA_ID = SITE_CONFIG.ga4MeasurementId;
const isConfigured = GA_ID && !GA_ID.includes("XXXX");

/** Loads GA4 (when configured), captures UTM, and fires scroll-depth events. */
export default function Analytics() {
  useEffect(() => {
    captureUtm();
    track("page_view");

    const marks = [25, 50, 75, 90];
    const fired = new Set<number>();
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled =
        (el.scrollTop / (el.scrollHeight - el.clientHeight || 1)) * 100;
      for (const m of marks) {
        if (scrolled >= m && !fired.has(m)) {
          fired.add(m);
          track(`scroll_depth_${m}`);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isConfigured) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
