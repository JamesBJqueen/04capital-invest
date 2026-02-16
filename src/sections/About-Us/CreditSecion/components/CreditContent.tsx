import { CreditFeatures } from "./CreditFeatures";

export const CreditContent = () => {
  return (
    <div className="box-border caret-transparent">
      <header className="box-border caret-transparent max-w-[544px] text-left mb-[36.8px]">
        <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent leading-[40.96px] mt-[21.248px] mb-[6.4px]">
          The credit your business deserves.
        </h2>
        <p className="text-gray-600 box-border caret-transparent">
          Healthy businesses deserve access to credit structures that reflect
          the work they&#39;ve put in—not just a single score or moment in time.
        </p>
      </header>
      <CreditFeatures />
    </div>
  );
};
