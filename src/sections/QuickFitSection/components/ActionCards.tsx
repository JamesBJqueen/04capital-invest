import { Link } from "react-router-dom";

export const ActionCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-[13.6px] grid grid-rows-[1fr_1fr] gap-y-[13.6px]">
      <div className="items-start bg-white shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent gap-x-[14.4px] grid grid-cols-[48px_minmax(0px,1fr)] gap-y-[14.4px] border border-slate-200/100 p-[16.8px] rounded-3xl border-solid">
        <div className="items-center bg-blue-600/10 box-border caret-transparent grid h-12 justify-items-center w-12 border border-blue-600/20 rounded-2xl border-solid">
          <i className="fa-solid fa-file-signature text-sky-700 text-[16.8px] box-border caret-transparent block leading-[16.8px]"></i>
        </div>
        <div className="box-border caret-transparent">
          <h3 className="text-[16.48px] font-bold box-border caret-transparent tracking-[-0.1648px] leading-[26.368px]">
            Apply now
          </h3>
          <p className="text-gray-600 box-border caret-transparent leading-[23.2px] mt-1 mb-3">
            Fast, secure.
          </p>
          <Link to='/ApplicationForm'
            className="text-white text-[14.4px] font-semibold items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] box-border caret-transparent gap-x-[5.6px] inline-flex justify-center leading-[23.04px] gap-y-[5.6px] text-center w-full border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
          >
            Start application
          </Link>
        </div>
      </div>
      <div className="items-start bg-white shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent gap-x-[14.4px] grid grid-cols-[48px_minmax(0px,1fr)] gap-y-[14.4px] border border-slate-200/100 p-[16.8px] rounded-3xl border-solid">
        <div className="items-center bg-blue-600/10 box-border caret-transparent grid h-12 justify-items-center w-12 border border-blue-600/20 rounded-2xl border-solid">
          <i className="fa-solid fa-circle-question text-sky-700 text-[16.8px] box-border caret-transparent block leading-[16.8px]"></i>
        </div>
        <div className="box-border caret-transparent">
          <h3 className="text-[16.48px] font-bold box-border caret-transparent tracking-[-0.1648px] leading-[26.368px]">
            Read FAQs
          </h3>
          <p className="text-gray-600 box-border caret-transparent leading-[23.2px] mt-1 mb-3">
            Quick answers before you start.
          </p>
          <Link to='/faqs'
            className="text-sky-700 text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] inline-flex justify-center leading-[23.04px] gap-y-[5.6px] text-center w-full border border-indigo-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-sky-100"
          >
            View FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};
