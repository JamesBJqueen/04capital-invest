import { UseOfFundsItem } from "./UseOfFundsItem";

export const UseOfFundsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[13.6px] flex flex-col gap-y-[13.6px]">
      <UseOfFundsItem
        title="Purchase inventory"
        description="Stay in front of demand, seasonality, and vendor timelines without straining cash on hand."
      />
      <UseOfFundsItem
        title="Cover payroll and operating expenses"
        description="Bridge short-term gaps without delaying decisions that affect your team and customers."
      />
      <UseOfFundsItem
        title="Open new locations or expand services"
        description="Invest in growth opportunities with capital structured around your revenue profile."
      />
      <UseOfFundsItem
        title="Upgrade equipment and technology"
        description="Modernize operations, improve margins, and create better customer experiences."
      />
      <UseOfFundsItem
        title="Strengthen working capital"
        description="Build a more resilient balance sheet to handle the unexpected and plan ahead."
      />
    </div>
  );
};
