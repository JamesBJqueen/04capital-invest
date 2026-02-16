import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="bg-[linear-gradient(135deg,rgb(238,242,255),rgb(249,251,255))] border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-slate-200 box-border caret-transparent py-12 border-t">
      <div className="items-start box-border caret-transparent gap-x-[30.4px] flex flex-col justify-between max-w-[1140px] gap-y-[30.4px] w-full mx-auto px-4 md:items-center md:flex-row md:px-5">
        <div className="box-border caret-transparent">
          <h2 className="text-gray-900 text-2xl font-bold box-border caret-transparent leading-[38.4px] mb-[6.4px]">
            Ready to see what’s possible for your business?
          </h2>
          <p className="text-gray-600 text-[15.2px] box-border caret-transparent leading-[24.32px]">
            Talk with a 04 Capital Investment specialist about your goals,
            timelines, and the structure that may be right for your business —
            or start your application in minutes.
          </p>
        </div>
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
            +46 (76) 692-6492
          </a>
          <Link to='/ApplicationForm'
            className="text-white text-[14.4px] font-semibold items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
};
