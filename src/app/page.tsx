import Header from "@/components/Header";
import LampIntro from "@/components/LampIntro";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import DailyFlow from "@/components/DailyFlow";
import ProductDemo from "@/components/ProductDemo";
import LevelsSection from "@/components/LevelsSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import FreeTrialCTA from "@/components/FreeTrialCTA";
import FounderStory from "@/components/FounderStory";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LampIntro />
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <DailyFlow />
        <ProductDemo />
        <LevelsSection />
        <PricingSection />
        <ComparisonSection />
        <FreeTrialCTA />
        <FounderStory />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
