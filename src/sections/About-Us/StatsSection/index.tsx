import { StatsGrid } from "./components/StatsGrid";

export const StatsSection = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent py-[38.4px]">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <StatsGrid />
      </div>
    </section>
  );
};
