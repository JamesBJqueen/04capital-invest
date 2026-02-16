import { PrincipleCard } from "./PrincipleCard";

export const PrinciplesGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[22.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[22.4px] md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <PrincipleCard
        title="Alignment"
        description="We aim for structures where everyone succeeds: our clients, our financing partners, and the communities those businesses serve."
      />
      <PrincipleCard
        title="Transparency"
        description="We communicate openly—sharing our reasoning, expectations, and recommendations in clear terms."
      />
      <PrincipleCard
        title="Discipline"
        description="Responsible underwriting today protects your financial flexibility tomorrow."
      />
      <PrincipleCard
        title="Partnership"
        description="We're committed to long-term relationships, not one-time transactions."
      />
    </div>
  );
};
