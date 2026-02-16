import { HeroContent } from "./components/HeroContent";
import { HeroImage } from "./components/HeroImage";

export const HeroSection = () => {
  return (
    <section className="box-border caret-transparent py-12">
      <div className="items-center box-border caret-transparent gap-x-[41.6px] grid grid-cols-[minmax(0px,1fr)] max-w-[1140px] gap-y-[41.6px] w-full mx-auto px-4 md:grid-cols-[minmax(0px,1.45fr)_minmax(0px,1fr)] md:px-5">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};
