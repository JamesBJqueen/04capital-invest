import { FundingCard } from "./components/FundingCard";

export const FundingOptionsSection = () => {
  return (
    <section id="funding-options" className="bg-indigo-50 box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent tracking-[-0.512px] leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            Funding options built to work for you
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-[960px]">
            Choose from flexible structures designed to match how your business
            actually operates — not just how a spreadsheet looks.
          </p>
        </header>
        <div className="box-border caret-transparent gap-x-4 flex grid-cols-[minmax(0px,1fr)] gap-y-4 overflow-auto pb-3 md:gap-x-[22.4px] md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[22.4px] md:snap-none md:overflow-visible md:pb-0">
          <FundingCard
            title="04Capital Investment line of credit"
            description="Draw only what you need, when you need it — with limits designed to flex with your cash flow and revenue."
            features={[
              "Revolving access up to $30,000",
              "Only pay on the capital you use",
              "Designed for recurring working capital needs",
            ]}
          />
          <FundingCard
            title="04Capital Investment term funding"
            description="Fixed terms and predictable payments for projects that require a clear capital plan and definitive payoff timeline."
            features={[
              "Structured terms aligned with your revenue",
              "Use for expansion, equipment, or build-outs",
              "Transparent, upfront pricing",
            ]}
          />
          <FundingCard
            title="Revenue-based funding"
            description="Access capital based on your future receivables, with payments that adjust in line with your sales instead of working against them."
            features={[
              "Payments tied to daily or weekly sales",
              "Supports seasonal or variable revenue patterns",
              "Streamlined documentation and onboarding",
            ]}
          />
        </div>
        <div className="text-gray-600 text-[12.8px] box-border caret-transparent leading-[20.48px] text-left mt-[22.4px]">
          Programs, structures, and availability are subject to underwriting
          documentation.
        </div>
      </div>
    </section>
  );
};
