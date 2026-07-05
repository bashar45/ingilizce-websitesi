"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FAQ_ITEMS } from "@/data/faq";
import { FAQ_SECTION } from "@/data/siteContent";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  const toggle = (i: number) => {
    setOpen((cur) => {
      const next = cur === i ? null : i;
      if (next === i) track("faq_open", { source_section: "faq", button_text: FAQ_ITEMS[i].question });
      return next;
    });
  };

  return (
    <section id="sss" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="SSS"
          title={FAQ_SECTION.title}
          subtitle={FAQ_SECTION.subtitle}
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <ul className="divide-y divide-line rounded-card border border-line bg-paper">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold text-ink"
                    >
                      {item.question}
                      <span
                        className={`shrink-0 text-action transition-transform duration-200 motion-safe-only ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
