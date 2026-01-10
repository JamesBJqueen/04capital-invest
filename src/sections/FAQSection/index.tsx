import { Link } from "react-router-dom";
import { FAQCard } from "./components/FAQCard";

export const FAQSection = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent tracking-[-0.512px] leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            Questions we hear often
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-[960px]">
            A few of the most common questions business owners ask before they
            get started.
          </p>
        </header>
        <div className="box-border caret-transparent gap-x-4 flex grid-cols-[minmax(0px,1fr)] gap-y-4 overflow-auto pb-3 md:gap-x-[22.4px] md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[22.4px] md:snap-none md:overflow-visible md:pb-0">
          <FAQCard
            question="How fast can I get a decision?"
            answer="In many cases, initial decisions are made in as little as 2 hours once we have a complete application and the necessary business documentation."
          />
          <FAQCard
            question="Will this impact my credit?"
            answer="No. We only perform a soft credit check, which does not show up as a hard inquiry and does not affect your business or personal credit score."
          />
          <FAQCard
            question="What do you look for in an applicant?"
            answer="We consider your time in business, cash flow trends, industry, and overall financial picture — not just a single score or metric."
          />
        </div>
        <div className="box-border caret-transparent text-center mt-[28.8px]">
          <Link to='/faqs'
            className="text-sky-700 text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] inline-flex justify-center leading-[23.04px] gap-y-[5.6px] border border-indigo-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-sky-100"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};
