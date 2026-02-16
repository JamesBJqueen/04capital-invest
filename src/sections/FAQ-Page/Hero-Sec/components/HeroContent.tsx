import { FeatureList } from "./FeatureList";
import { TopicFilters } from "./TopicFilters";

type HeroContentProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export const HeroContent = (props: HeroContentProps) => {
  return (
    <div className="box-border caret-transparent max-w-[720px] text-center w-full mx-auto px-4 md:px-5">
      <p className="text-gray-600 text-[15.68px] box-border caret-transparent tracking-[2.8224px] leading-[25.088px] uppercase">
        FAQs
      </p>
      <h1 className="text-gray-900 text-[30.4px] font-bold box-border caret-transparent leading-[48.64px] mt-[20.368px] mb-[6.4px] md:text-[35.2px] md:leading-[56.32px] md:mt-[23.584px]">
        Frequently asked questions
      </h1>
      <p className="text-gray-600 text-[15.68px] box-border caret-transparent leading-[25.088px]">
        Find clear answers about how 04-Capital Investment works, what to expect
        during the application process, and how our funding programs support
        growing businesses.
      </p>
      <FeatureList />
      <TopicFilters selectedCategory={props.selectedCategory} onCategoryChange={props.onCategoryChange} />
    </div>
  );
};
