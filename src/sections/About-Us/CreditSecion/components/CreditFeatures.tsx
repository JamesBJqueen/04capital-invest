import { CreditCard } from "./CreditCard";

export const CreditFeatures = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-[22.4px]">
      <CreditCard
        title="Soft credit checks, no hard inquiries"
        description="We use soft credit checks only. They do not affect your personal or business credit score and never appear as hard pulls."
      />
      <CreditCard
        title="Built for owner-operated businesses"
        description="Our programs are designed to support businesses with fluctuating cash flow, seasonality, and real-world challenges."
      />
      <CreditCard
        title="Credit as a long-term tool"
        description="We help you understand how to use capital strategically—whether from Gate Rock or another provider—to strengthen your business."
      />
    </div>
  );
};
