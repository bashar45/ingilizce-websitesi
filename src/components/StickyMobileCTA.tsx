"use client";

import { useEffect, useState } from "react";
import { HERO } from "@/data/siteContent";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    track("sticky_mobile_cta_click", { source_section: "sticky_mobile" });
    track("whatsapp_start_click", { source_section: "sticky_mobile" });
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur-md transition-transform duration-300 ease-out-soft motion-safe-only md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="flex h-[52px] w-full items-center justify-center gap-2 rounded-pill bg-action text-[15px] font-semibold text-surface shadow-cta"
      >
        {HERO.primaryCta}
      </a>
    </div>
  );
}
