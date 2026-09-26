/**
 * KVKK information notice shown next to WhatsApp CTAs.
 * Informs (aydınlatma) rather than asks for consent — the service
 * must not be conditioned on açık rıza.
 */
export default function KvkkNote({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const text = tone === "dark" ? "text-paper/50" : "text-muted-2";
  const link =
    tone === "dark"
      ? "text-paper/70 hover:text-paper"
      : "text-ink-soft hover:text-ink";

  return (
    <p className={`text-xs leading-relaxed ${text} ${className}`}>
      WhatsApp&apos;tan yazdığında kişisel verilerin{" "}
      <a
        href="/kvkk"
        target="_blank"
        rel="noopener noreferrer"
        className={`underline underline-offset-2 ${link}`}
      >
        KVKK Aydınlatma Metni
      </a>{" "}
      kapsamında işlenir.
    </p>
  );
}
