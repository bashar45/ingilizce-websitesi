"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LampContainerBrand } from "@/components/ui/lamp-brand";

export default function LampIntro() {
  const reduce = useReducedMotion();
  return (
    <section id="intro" aria-labelledby="intro-title" className="relative">
      <LampContainerBrand>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80"
        >
          İngilizcemiz
        </motion.p>

        <motion.h1
          id="intro-title"
          initial={{ opacity: 0.6, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="max-w-4xl font-display text-[clamp(34px,6vw,72px)] font-semibold leading-[1.06] tracking-[-0.02em]"
        >
          {/* In shadow: the part the lamp hasn't lit yet */}
          <span className="text-[#7C8B84]">
            İngilizce öğretimini biz başlatmadık,
          </span>
          <br />
          {/* Lit by the lamp: animates from darkness to light */}
          <motion.span
            initial={
              reduce
                ? { color: "#ECFDF5" }
                : { color: "#243730", opacity: 0.85 }
            }
            whileInView={{
              color: "#ECFDF5",
              opacity: 1,
              textShadow: "0 0 48px rgba(52,211,153,0.45)",
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 1.1, ease: "easeInOut" }}
          >
            ama biz değiştiriyoruz.
          </motion.span>
        </motion.h1>

        <motion.a
          href="#ana-icerik"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeInOut" }}
          className="group mt-12 inline-flex flex-col items-center gap-2 text-sm font-medium text-paper/60 transition-colors hover:text-paper"
          aria-label="Aşağı kaydır"
        >
          Nasıl olduğunu gör
          <span className="motion-safe-only animate-bounce text-emerald-300" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </span>
        </motion.a>
      </LampContainerBrand>

      {/* Soft transition into the paper-colored hero below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper"
      />
    </section>
  );
}
