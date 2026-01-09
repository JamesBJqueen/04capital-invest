import { Navbar } from "../sections/Navbar";
import { HeroSection } from "../sections/HeroSection";
import { StatsSection } from "../sections/StatsSection";
import { QuickFitSection } from "../sections/QuickFitSection";
import { FundingOptionsSection } from "../sections/FundingOptionSection";
import { BenefitsSection } from "../sections/BenefitsSection";
import { ImageGridSection } from "../sections/ImageGridSection";
import { UseOfFundsSection } from "../sections/UseOfFundsSection";
import { PrepareSection } from "../sections/PrepareSection";
import { ProcessSection } from "../sections/ProcessSection";
import { ResourcesSection } from "../sections/ResourceSection";
import { FAQSection } from "../sections/FAQSection";
import { CTASection } from "../sections/CTASection";
import { Footer } from "../sections/Footer";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent">
      <Navbar/>
      <HeroSection />
      <StatsSection />
      <QuickFitSection />
      <FundingOptionsSection />
      <BenefitsSection />
      <ImageGridSection />
      <UseOfFundsSection />
      <PrepareSection />
      <ProcessSection />
      <ResourcesSection />
      <FAQSection />
      <CTASection />
      <Footer/>
    </div>
  );
};
