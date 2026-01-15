import { ActionCards } from "./ActionCards";

export const QuickFitContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
      <div className="items-start bg-[linear-gradient(rgb(255,255,255)_0%,rgb(247,249,255)_100%)] shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent gap-x-5 grid grid-cols-[1fr] gap-y-5 border border-slate-200/100 p-[24.8px] rounded-3xl border-solid md:grid-cols-[minmax(0px,1.25fr)_minmax(0px,0.75fr)]">
        <div className="box-border caret-transparent">
          <p className="text-gray-600 text-xs box-border caret-transparent tracking-[2.16px] leading-[18.6px] uppercase">
            Quick fit check
          </p>
          <h2 className="text-2xl font-bold box-border caret-transparent leading-[38.4px] mt-[5.6px] mb-[8.8px]">
            See if you’re ready to move fast
          </h2>
          <p className="text-gray-600 box-border caret-transparent leading-[24.8px]">
            These are the basics we typically look for when reviewing businesses
            — a quick way to see if it makes sense to move forward.
          </p>
          <div className="box-border caret-transparent gap-x-[9.6px] flex flex-wrap gap-y-[9.6px] mt-[16.8px]">
            <span className="text-[14.72px] font-extrabold items-center bg-white shadow-[rgba(15,23,42,0.06)_0px_12px_26px_0px] box-border caret-transparent gap-x-2 flex leading-[23.552px] gap-y-2 border border-slate-200/100 px-[12.8px] py-[8.8px] rounded-[999px] border-solid">
              <i className="fa-solid fa-check text-green-600 box-border caret-transparent block leading-[14.72px]"></i>
              Established business activity
            </span>
            <span className="text-[14.72px] font-extrabold items-center bg-white shadow-[rgba(15,23,42,0.06)_0px_12px_26px_0px] box-border caret-transparent gap-x-2 flex leading-[23.552px] gap-y-2 border border-slate-200/100 px-[12.8px] py-[8.8px] rounded-[999px] border-solid">
              <i className="fa-solid fa-check text-green-600 box-border caret-transparent block leading-[14.72px]"></i>
              Consistent deposits
            </span>
            <span className="text-[14.72px] font-extrabold items-center bg-white shadow-[rgba(15,23,42,0.06)_0px_12px_26px_0px] box-border caret-transparent gap-x-2 flex leading-[23.552px] gap-y-2 border border-slate-200/100 px-[12.8px] py-[8.8px] rounded-[999px] border-solid">
              <i className="fa-solid fa-check text-green-600 box-border caret-transparent block leading-[14.72px]"></i>
              Clear use of funds
            </span>
            <span className="text-[14.72px] font-extrabold items-center bg-white shadow-[rgba(15,23,42,0.06)_0px_12px_26px_0px] box-border caret-transparent gap-x-2 flex leading-[23.552px] gap-y-2 border border-slate-200/100 px-[12.8px] py-[8.8px] rounded-[999px] border-solid">
              <i className="fa-solid fa-check text-green-600 box-border caret-transparent block leading-[14.72px]"></i>
              Ready to verify basics
            </span>
          </div>
        </div>
        <ActionCards />
      </div>
    </div>
  );
};
