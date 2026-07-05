"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { INTERACTIVE_HERO as L } from "@/data/siteContent";
import { track } from "@/lib/analytics";

/**
 * The signature element: the lesson IS the interface.
 * Visitor writes their own sentence with the daily word and receives a
 * crafted, client-side "coach" reply. No backend — scripted but alive.
 */
export default function InteractiveLesson() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);

  const usesWord = value.toLowerCase().includes(L.word);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().length < 3) {
      inputRef.current?.focus();
      return;
    }
    setSubmitted(true);
    track("sample_lesson_view", { source_section: "hero_interactive" });
  };

  const tryExample = () => {
    setValue(L.suggestion);
    inputRef.current?.focus();
  };

  const reset = () => {
    setSubmitted(false);
    setValue("");
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative">
      {/* Editorial "daily word" hero */}
      <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-action" aria-hidden="true" />
          Bugünün kelimesi
        </div>

        <div className="mt-4 flex items-end justify-between gap-4 border-b border-line pb-6">
          <div>
            <div className="font-display text-[64px] font-semibold italic leading-[0.9] text-ink sm:text-[76px]">
              {L.word}
            </div>
            <div className="mt-2 text-lg text-muted">
              <span className="text-muted-2">/ </span>
              {L.meaning}
            </div>
          </div>
          <span className="mb-1 shrink-0 rounded-pill bg-action-soft px-3 py-1 text-xs font-semibold text-action-hover">
            avoid + V-ing
          </span>
        </div>

        {/* Coach prompt */}
        <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
          {L.promptBot}
        </p>

        {/* Interactive input */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="hero-sentence" className="sr-only">
              {L.word} kelimesiyle kendi cümleni yaz
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="hero-sentence"
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={L.placeholder}
                autoComplete="off"
                className="h-[52px] w-full rounded-pill border border-line bg-paper px-5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-2 focus:border-action focus:ring-4 focus:ring-action-ring"
              />
              <button
                type="submit"
                className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-pill bg-ink px-6 text-[15px] font-semibold text-surface transition-transform duration-200 ease-out-soft hover:-translate-y-0.5 motion-safe-only"
              >
                Gönder
              </button>
            </div>
            <button
              type="button"
              onClick={tryExample}
              className="mt-3 text-sm font-medium text-action-hover underline-offset-4 hover:underline"
            >
              Fikrin yoksa örnek cümleyi dene →
            </button>
          </form>
        ) : (
          <div className="mt-4 space-y-3" aria-live="polite">
            {/* User bubble */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease }}
              className="ml-auto max-w-[85%] rounded-[18px] rounded-br-[6px] bg-ember-soft px-4 py-3 text-[15px] text-ink"
            >
              {value}
            </motion.div>

            {/* Coach feedback bubble */}
            <AnimatePresence>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease, delay: reduce ? 0 : 0.25 }}
                className="max-w-[90%] rounded-[18px] rounded-bl-[6px] border border-action/20 bg-action-soft px-4 py-3"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-action-hover">
                  {L.feedbackTitle}
                </div>
                <p className="mt-1 text-[15px] text-ink">
                  {usesWord ? L.feedbackBody : L.hintBefore}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={reset}
              className="text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              ← Baştan dene
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
