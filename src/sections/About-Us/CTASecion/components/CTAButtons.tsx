export const CTAButtons = () => {
  return (
    <div className="box-border caret-transparent gap-x-[12.8px] flex flex-wrap gap-y-[12.8px]">
      <a
        href="./contact"
        className="text-[14.4px] font-semibold items-center bg-sky-100 box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border border-blue-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-blue-100"
      >
        <i className="font-black box-border caret-transparent block leading-[14.4px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-gray-900 before:text-[14.4px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        Contact us
      </a>
      <a
        href="tel://+46766922980"
        className="text-sky-700 text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border border-indigo-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-sky-100"
      >
        <i className="font-black box-border caret-transparent block leading-[14.4px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-sky-700 before:text-[14.4px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        +46 (766) 922-980
      </a>
      <a
        href="./applications"
        className="text-white text-[14.4px] font-semibold items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
      >
        Apply now
      </a>
    </div>
  );
};
