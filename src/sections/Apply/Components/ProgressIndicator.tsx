export const ProgressIndicator = () => {
  return (
    <div className="box-border caret-transparent mb-5">
      <div className="relative bg-gray-200 box-border caret-transparent h-1 overflow-hidden rounded-[999px]">
        <div className="bg-[linear-gradient(90deg,rgb(0,80,179),rgb(29,143,255))] box-border caret-transparent h-full w-[0%] rounded-[999px]"></div>
      </div>
      <ol className="text-gray-600 text-[11.2px] box-border caret-transparent gap-x-1 grid grid-cols-[repeat(3,minmax(0px,1fr))] leading-[17.92px] list-none gap-y-[4.8px] mt-[10.4px] pl-0 md:text-xs md:grid-cols-[repeat(7,minmax(0px,1fr))] md:leading-[19.2px] md:gap-y-1">
        <li className="text-gray-900 text-[11.2px] font-semibold box-border caret-transparent leading-[17.92px] text-center md:text-xs md:leading-[19.2px]">
          Basic info
        </li>
        <li className="text-[11.2px] box-border caret-transparent leading-[17.92px] opacity-70 text-center md:text-xs md:leading-[19.2px]">
          Funding
        </li>
        <li className="text-[11.2px] box-border caret-transparent leading-[17.92px] opacity-70 text-center md:text-xs md:leading-[19.2px]">
          Your business
        </li>
        <li className="text-[11.2px] box-border caret-transparent leading-[17.92px] opacity-70 text-center md:text-xs md:leading-[19.2px]">
          About you
        </li>
        <li className="text-[11.2px] box-border caret-transparent leading-[17.92px] opacity-70 text-center md:text-xs md:leading-[19.2px]">
          Consents
        </li>
        <li className="text-[11.2px] box-border caret-transparent leading-[17.92px] opacity-70 text-center md:text-xs md:leading-[19.2px]">
          Documents
        </li>
        <li className="text-[11.2px] box-border caret-transparent leading-[17.92px] opacity-70 text-center md:text-xs md:leading-[19.2px]">
          Submitted
        </li>
      </ol>
    </div>
  );
};
