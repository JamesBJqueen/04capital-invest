import { ResourceCard } from "./components/ResourceCard";

export const ResourcesSection = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent py-[52px]">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent tracking-[-0.512px] leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            Owner resources
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-[960px]">
            Straightforward guidance to help you understand funding options,
            timelines, and what to expect before you apply.
          </p>
        </header>
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[1fr] gap-y-4 mt-[17.6px] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <ResourceCard
            href="/faqs"
            title="Funding FAQs"
            description="Clear answers to common questions before you apply."
          />
          <ResourceCard
            href="/"
            title="Working capital basics"
            description="How owners use capital to smooth cash flow and grow."
          />
          <ResourceCard
            href="/contact"
            title="Talk through options"
            description="If you want clarity before applying, reach us quickly."
          />
        </div>
      </div>
    </section>
  );
};
