import { FAQContainer } from "./components/FAQContainer";

type FAQSectionProps = {
  selectedCategory: string;
};

export const FAQSection = (props: FAQSectionProps) => {
  return (
    <section className="box-border caret-transparent py-12">
      <FAQContainer selectedCategory={props.selectedCategory} />
      <div className="box-border caret-transparent max-w-[1140px] text-center w-full mt-[41.6px] mx-auto px-4 md:px-5">
        <p className="text-gray-600 text-[14.72px] box-border caret-transparent leading-[23.552px] mb-4">
          This FAQ is provided for general informational purposes only. Actual
          funding terms and eligibility depend on underwriting review.
        </p>
      </div>
    </section>
  );
};
