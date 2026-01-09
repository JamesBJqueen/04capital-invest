import { StatsGrid } from "./components/StatsGrid";

export const StatsSection = () => {
  return (
    <section className="box-border caret-transparent py-[38.4px]">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <div className="items-center bg-white shadow-[rgba(148,163,184,0.28)_0px_18px_45px_0px] box-border caret-transparent gap-x-[28.8px] grid grid-cols-[minmax(0px,1fr)] gap-y-[28.8px] border border-slate-200 pt-6 pb-[25.6px] px-[19.2px] rounded-3xl border-solid md:grid-cols-[minmax(0px,1.3fr)_minmax(0px,2fr)] md:pt-[28.8px] md:pb-[30.4px] md:px-[25.6px]">
          <div className="box-border caret-transparent">
            <p className="text-gray-600 text-[15.04px] box-border caret-transparent tracking-[2.7072px] leading-[24.064px] uppercase mt-[1.6px]">
              04Capital Investment at a glance
            </p>
            <p className="text-gray-600 text-[15.04px] box-border caret-transparent leading-[24.064px] mt-[1.6px]">
              A capital partner focused on real businesses, not just balance
              sheets.
            </p>
          </div>
          <StatsGrid />
        </div>
      </div>
    </section>
  );
};
