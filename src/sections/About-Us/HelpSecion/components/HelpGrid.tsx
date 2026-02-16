import { HelpCard } from "./HelpCard";

export const HelpGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[22.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[22.4px] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <HelpCard
        title="Simple, guided process"
        description="A streamlined application built for busy owners. We highlight what matters, remove friction, and guide you through each step."
      />
      <HelpCard
        title="Tailored funding options"
        description="No one-size-fits-all products. We evaluate multiple structures and present options aligned with your goals and cash flow."
      />
      <HelpCard
        title="Modern digital security"
        description="Your information is protected with high-grade encryption, secure data connections, and strong compliance standards."
      />
      <HelpCard
        title="Loyalty-driven partnerships"
        description="As your business grows, we’re here to reassess needs, offer additional
                    capital reviews, and support next-phase planning."
      />
    </div>
  );
};
