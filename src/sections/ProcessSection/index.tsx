import { ProcessStep } from "./components/ProcessStep";

export const ProcessSection = () => {
  return (
    <section className="box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent tracking-[-0.512px] leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            Funding that moves at your speed
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-[960px]">
            Three straightforward steps from application to capital — built for
            busy owners and operators.
          </p>
        </header>
        <div className="box-border caret-transparent gap-x-[22.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[22.4px] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <ProcessStep
            stepNumber="1"
            title="Complete a simple application"
            description="Tell us about your business, revenue, and funding goals in a secure, mobile-friendly application that you can complete in minutes."
            bulletPoints={["No obligation to proceed", "No hard credit pull"]}
          />
          <ProcessStep
            stepNumber="2"
            title="Review tailored funding options"
            description="Our underwriting team reviews your information and presents structures aligned with your cash flow, industry, and timing."
            bulletPoints={[
              "Clear pricing and documentation",
              "Specialists available to answer questions",
            ]}
          />
          <ProcessStep
            stepNumber="3"
            title="Receive your funds"
            description="Once you select an option and sign documentation, capital is disbursed quickly so you can execute on what matters most."
            bulletPoints={[
              "Funding timelines vary by program and industry",
              "Ongoing support as your needs evolve",
            ]}
          />
        </div>
        <div className="text-gray-600 text-[12.8px] box-border caret-transparent leading-[20.48px] text-left mt-[22.4px]">
          Time to decision and funding may vary based on documentation &amp;
          underwriting.
        </div>
      </div>
    </section>
  );
};
