import { HeroContent } from "./components/HeroContent";

type HeroSectionProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <section className="box-border caret-transparent pt-[38.4px] pb-[28.8px] md:pt-12 md:pb-8">
      <HeroContent selectedCategory={props.selectedCategory} onCategoryChange={props.onCategoryChange} />
    </section>
  );
};
