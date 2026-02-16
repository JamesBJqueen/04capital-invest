import { FeatureCard } from "./FeatureCard";

export const FeatureList = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-[22.4px]">
      <FeatureCard
        title="Capital aligned with how you operate"
        description="We evaluate the full picture—cash flow cycles, seasonality, stability, and growth plans—to structure funding that fits your real-world operations."
      />
      <FeatureCard
        title="Clarity over complexity"
        description="Clear words, no hidden tricks. We explain every structure, timeline, and cost in simple language—so you can decide with total confidence."
      />
      <FeatureCard
        title="Technology that works for you"
        description="Secure banking connections and digital underwriting tools allow us to deliver fast timelines without compromising diligence."
      />
    </div>
  );
};
