import { InfoCard } from "./InfoCard";

export const SupportInfo = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
      <InfoCard
        title="Who we fund"
        items={[
          "Established, revenue-generating small & mid-sized businesses",
          "Owner-operated companies across many industries",
          "Businesses with clear use-of-funds and stable activity",
          "Operators seeking simple, transparent capital",
        ]}
      />
      <InfoCard
        title="How we support you"
        items={[
          "A dedicated specialist from application through funding",
          "Clear feedback throughout underwriting",
          "Funding reviews as your business evolves",
          "A true partnership—not a transaction",
        ]}
      />
    </div>
  );
};
