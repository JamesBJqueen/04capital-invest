import { Link } from "react-router-dom";

export const CTAButtons = () => {
  return (
    <div className="box-border caret-transparent gap-x-[12.8px] flex flex-wrap gap-y-[12.8px]">
      <Link to='/contact'
        className="text-[14.4px] font-semibold items-center bg-sky-100 box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border border-blue-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-blue-100"
      >
        <i className="fa-solid fa-comments text-gray-900 box-border caret-transparent block leading-[14.4px]"></i>
        Contact us
      </Link>
      <a
        href="tel://+46766926492"
        className="text-sky-700 text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border border-indigo-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-sky-100"
      >
        <i className="fa-solid fa-phone text-sky-700 box-border caret-transparent block leading-[14.4px]"></i>
        +46 (766) 926-492
      </a>
      <Link to='/ApplicationForm'
        className="text-white text-[14.4px] font-semibold items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
      >
        Apply now
      </Link>
    </div>
  );
};
