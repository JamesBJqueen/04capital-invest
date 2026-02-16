import { Link } from 'react-router-dom'

export const ContactCard = () => {
  return (
    <div className="bg-white shadow-[rgba(148,163,184,0.25)_0px_16px_36px_0px] box-border caret-transparent border border-slate-200 px-[20.8px] py-6 rounded-[20px] border-solid">
      <h2 className="text-gray-900 text-[16.32px] font-bold box-border caret-transparent leading-[26.112px] mb-[7.2px]">
        Need additional help?
      </h2>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[12.8px]">
        If your question isn’t answered here, our team is happy to walk through
        programs, requirements, and scenarios specific to your business.
      </p>
      <div className="box-border caret-transparent gap-x-[8.8px] flex flex-col gap-y-[8.8px] mt-[12.8px]">
        <Link to='/contact' className="text-[14.4px] font-semibold items-center bg-sky-100 box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center w-full border border-blue-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-blue-100"
        >
          <i className="fa-solid fa-comments text-gray-900 box-border caret-transparent block leading-[14.4px]"></i>
          Contact us
        </Link>
        <a
          href="tel://+46766926492"
          className="text-sky-700 text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center w-full border border-indigo-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-sky-100"
        >
          <i className="fa-solid fa-phone text-sky-700 box-border caret-transparent block leading-[14.4px]"></i>
          +46 (76) 692-6492
        </a>
        <Link to='/ApplicationForm' className="text-white text-[14.4px] font-semibold items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center w-full border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
        >
          Start application
        </Link>
      </div>
      <div className="text-gray-600 text-[13.12px] box-border caret-transparent leading-[20.992px] mt-[11.2px]">
        <p className="text-[14.4px] box-border caret-transparent leading-[23.04px] mb-1">
          <strong className="text-gray-900 font-bold box-border caret-transparent">
            Hours:
          </strong>
        </p>
        <p className="text-[14.4px] box-border caret-transparent leading-[23.04px] mb-1">
          Monday – Thursday: 9:00 AM – 6:00 PM GMT
          <br className="box-border caret-transparent" />
          Friday: 9:00 AM – 12:00 PM GMT
        </p>
        <p className="text-[14.4px] box-border caret-transparent leading-[23.04px] mb-1">
          <strong className="text-gray-900 font-bold box-border caret-transparent">
            Location:  
          </strong>
           SWEDISH.-based support team
        </p>
      </div>
    </div>
  );
};
