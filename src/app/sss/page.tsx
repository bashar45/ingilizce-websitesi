import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { PageBar, PageFooter } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | İngilizcemiz",
  description:
    "WhatsApp İngilizce pratiği, ücretsiz deneme, seviyeler, paketler ve ödeme hakkında sıkça sorulan sorular.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  return (
    <div className="paper-grain min-h-screen">
      <PageBar />
      <main>
        <FAQ />
        <FinalCTA />
      </main>
      <PageFooter />
    </div>
  );
}
