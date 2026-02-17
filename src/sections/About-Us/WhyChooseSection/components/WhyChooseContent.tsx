import { FeatureList } from "./FeatureList";

export const WhyChooseContent = () => {
  return (
    <div className="box-border caret-transparent">
      <header className="box-border caret-transparent max-w-[544px] text-left mb-[36.8px]">
        <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent leading-[40.96px] mt-[21.248px] mb-[6.4px]">
          Why businesses choose 04 Capital Investment
        </h2>
        <p className="text-gray-600 box-border caret-transparent">
          We combine bank-level discipline with the accessibility and
          responsiveness today’s business owners expect. Our mission is simple:
          make funding clear, fair, and fast.
        </p>
      </header>
      <FeatureList />
    </div>
  );
};
