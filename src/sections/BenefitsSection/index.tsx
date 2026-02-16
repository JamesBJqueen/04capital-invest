import { BenefitCard } from "./components/BenefitCard";

export const BenefitsSection = () => {
  return (
    <section className="box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent tracking-[-0.512px] leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            See why businesses choose 04 Capital Investment
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-[960px]">
            We combine underwriting discipline with the responsiveness and
            clarity that owners expect from a modern funding partner.
          </p>
        </header>
        <div className="box-border caret-transparent gap-x-4 flex grid-cols-[minmax(0px,1fr)] gap-y-4 overflow-auto pb-3 md:gap-x-[22.4px] md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[22.4px] md:snap-none md:overflow-visible md:pb-0">
          <BenefitCard
            title="Fast, structured process"
            description="From initial application to funding, our process is built to move quickly while still respecting risk, compliance, and your time."
          />
          <BenefitCard
            title="Soft credit pull only — no hard inquiry"
            description="We only perform a soft credit pull, which does not affect your personal or business credit score. You can explore funding options without any impact on your credit."
          />
          <BenefitCard
            title="Dedicated funding specialists"
            description="You work with a real person who understands your industry and can talk through trade-offs, timelines, and structures in plain language."
          />
        </div>
      </div>
    </section>
  );
};
