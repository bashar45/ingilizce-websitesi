"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

/**
 * Real screen recording of a lesson, in a phone frame.
 * Nothing is downloaded until the section scrolls into view (preload="none");
 * then it plays muted and pauses again when scrolled away.
 */
export default function LessonVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tracked = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduce) video.play().catch(() => {});
          if (!tracked) {
            tracked = true;
            track("demo_video_view", { source_section: "demo" });
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="rounded-[42px] bg-ink p-2.5 shadow-card-lg">
        <video
          ref={ref}
          src="/video/sistem-tanitim.mp4"
          poster="/video/sistem-tanitim-poster.jpg"
          preload="none"
          muted
          loop
          playsInline
          controls
          aria-label="Gerçek bir İngilizcemiz dersinin WhatsApp ekran kaydı"
          className="block aspect-[9/20] w-full rounded-[34px] bg-paper object-cover"
        />
      </div>
      <p className="mt-4 text-center text-sm text-muted">
        Gerçek bir dersin ekran kaydı · 20 sn
      </p>
    </div>
  );
}
