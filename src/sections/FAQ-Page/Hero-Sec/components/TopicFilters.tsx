export const TopicFilters = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 flex flex-wrap justify-center gap-y-2 mt-8 mb-4">
      <button className="text-gray-900 text-[13.12px] bg-sky-100 caret-transparent block leading-[normal] border border-sky-700 px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial">
        All topics
      </button>
      <button className="text-gray-600 text-[13.12px] bg-white caret-transparent block leading-[normal] border border-slate-300 px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial hover:text-gray-900 hover:bg-sky-100 hover:border-sky-700">
        Products
      </button>
      <button className="text-gray-600 text-[13.12px] bg-white caret-transparent block leading-[normal] border border-slate-300 px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial hover:text-gray-900 hover:bg-sky-100 hover:border-sky-700">
        Application
      </button>
      <button className="text-gray-600 text-[13.12px] bg-white caret-transparent block leading-[normal] border border-slate-300 px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial hover:text-gray-900 hover:bg-sky-100 hover:border-sky-700">
        Funding
      </button>
      <button className="text-gray-600 text-[13.12px] bg-white caret-transparent block leading-[normal] border border-slate-300 px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial hover:text-gray-900 hover:bg-sky-100 hover:border-sky-700">
        Repayment
      </button>
      <button className="text-gray-600 text-[13.12px] bg-white caret-transparent block leading-[normal] border border-slate-300 px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial hover:text-gray-900 hover:bg-sky-100 hover:border-sky-700">
        General
      </button>
    </div>
  );
};
