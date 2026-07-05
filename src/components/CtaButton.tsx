"use client";

import { createWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

interface CtaButtonProps {
  children: React.ReactNode;
  message?: string;
  event: string;
  sourceSection: string;
  levelName?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

/** WhatsApp CTA. Builds the wa.me link at click time (UTM already captured). */
export default function CtaButton({
  children,
  message,
  event,
  sourceSection,
  levelName,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const label = typeof children === "string" ? children : levelName ?? "";

  const handleClick = () => {
    track(event, {
      source_section: sourceSection,
      button_text: label,
      level_name: levelName,
    });
    track("whatsapp_start_click", { source_section: sourceSection });
  };

  const base =
    "inline-flex h-[52px] items-center justify-center gap-2 rounded-pill px-6 text-[15px] font-semibold transition-transform duration-200 ease-out-soft focus-visible:outline-action motion-safe-only";
  const styles =
    variant === "primary"
      ? "bg-action text-surface shadow-cta hover:-translate-y-0.5 hover:bg-action-hover"
      : "border border-line bg-surface text-ink hover:border-ink/30";

  return (
    <a
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppGlyph />
      {children}
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.4-8.23 8.4zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
