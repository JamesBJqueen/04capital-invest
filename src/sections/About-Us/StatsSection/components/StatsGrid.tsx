import { StatCard } from "./StatCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[19.2px] grid grid-cols-[minmax(0px,1fr)] gap-y-[19.2px] md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <StatCard
        title="Businesses funded"
        statValue="1,000+"
        description="Supporting small and mid-sized companies across dozens of industries."
      />
      <StatCard
        title="Typical decision time"
        statValue="24 hrs"
        description="A streamlined process built for owners who need clarity quickly."
      />
      <StatCard
        title="Funding amount"
        statValue="Up to $30,000"
        description="Working capital designed for inventory, payroll, operations, and growth."
      />
      <StatCard
        title="Client loyalty"
        statValue="70%+"
        description="Return for additional funding or refer another business to Gate Rock."
      />
    </div>
  );
};
