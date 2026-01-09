import { CreditInfoCard } from "./CreditInfoCard";

export const CreditInfo = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
      <CreditInfoCard
        title="What you can expect"
        items={[
          "Soft pull only—no hard inquiries",
          "Clear breakdown of pricing and structure",
          "Honest conversations about eligibility",
          "A funding partner invested in your success",
        ]}
      />
      <CreditInfoCard
        title="Questions about underwriting?"
        items={[
          "We walk you through how cash flow is evaluated",
          "We explain strengths and potential red flags",
          "We outline steps that may improve future access",
        ]}
      />
    </div>
  );
};
