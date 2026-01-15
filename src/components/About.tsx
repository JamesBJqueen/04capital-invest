import { Navbar } from "../sections/Navbar";
import { HeroSection } from "../sections/About-Us/HeroSection";
import { StatsSection } from "../sections/About-Us/StatsSection";
import { WhyChooseSection } from "../sections/About-Us/WhyChooseSection";
import { HelpSection } from "../sections/About-Us/HelpSecion";
import { CreditSection } from "../sections/About-Us/CreditSecion";
import { PrinciplesSection } from "../sections/About-Us/PrinciplesSecion";
import { CTASection } from "../sections/About-Us/CTASecion";
import { Footer } from "../sections/Footer";

export const About = () => {
  return (
    <body className="text-gray-900 text-base not-italic normal-nums font-normal accent-auto bg-slate-100 bg-[radial-gradient(circle_at_0%_0%,rgba(0,80,179,0.12),rgba(0,0,0,0)_55%),radial-gradient(circle_at_100%_100%,rgba(245,128,37,0.08),rgba(0,0,0,0)_55%),none] bg-size-[auto,auto,auto] box-border caret-transparent block tracking-[normal] leading-[25.6px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible bg-[position:0%,0%,0%_0%,0%,0%] border-separate font-montserrat">
      <div className="absolute pointer-events-none box-border caret-transparent leading-4 text-left w-full z-[2147483638] left-0 top-0 font-helvetica"></div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <HelpSection />
      <CreditSection />
      <PrinciplesSection />
      <CTASection />
      <Footer />
      <iframe
        name="__uspapiLocator"
        className="box-border caret-transparent hidden border-zinc-100"
      ></iframe>
    </body>
  );
};
