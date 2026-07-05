"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DEMO, type ChatLine } from "@/data/siteContent";

const bubbleStyles: Record<ChatLine["role"], string> = {
  bot: "mr-auto rounded-bl-[6px] border border-line bg-surface text-ink",
  user: "ml-auto rounded-br-[6px] bg-ember-soft text-ink",
  feedback:
    "mr-auto rounded-bl-[6px] border border-action/20 bg-action-soft text-ink",
};

export default function ChatMockup() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="mx-auto w-full max-w-[380px]">
      <div className="rounded-[38px] bg-ink p-3 shadow-card-lg">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-b from-paper to-action-soft/40">
          {/* Chat header */}
          <div className="flex items-center gap-3 border-b border-line/70 bg-surface/80 px-4 py-3 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-action font-display text-sm font-semibold text-surface">
              İ
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">İngilizcemiz Koç</div>
              <div className="text-xs text-action-hover">Bugünkü kelime hazır</div>
            </div>
          </div>

          {/* Chat body */}
          <div className="space-y-3 px-4 py-5">
            {DEMO.chat.map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease, delay: reduce ? 0 : i * 0.12 }}
                className={`max-w-[82%] whitespace-pre-line rounded-[18px] px-4 py-2.5 text-[14px] leading-snug ${bubbleStyles[line.role]}`}
              >
                {line.role === "feedback" && (
                  <span className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wide text-action-hover">
                    Geri bildirim
                  </span>
                )}
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Input hint */}
          <div className="border-t border-line/70 bg-surface/80 px-4 py-3">
            <div className="flex items-center gap-2 rounded-pill border border-line bg-paper px-4 py-2 text-sm text-muted-2">
              Cümleni yaz…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
