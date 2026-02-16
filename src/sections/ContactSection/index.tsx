import { ContactGrid } from "./components/ContactGrid";
import { HeroContent } from "./components/HeroContent";

export const ContactSection = () => {
  return (
    <section className="box-border caret-transparent pt-4 pb-12">
        <HeroContent/>
      <ContactGrid />
    </section>
  );
};
