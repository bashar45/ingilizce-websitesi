import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-action-hover">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-tight tracking-[-0.01em] text-ink">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[17px] leading-relaxed text-muted ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
