export type UseOfFundsItemProps = {
  title: string;
  description: string;
};

export const UseOfFundsItem = (props: UseOfFundsItemProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-3 flex gap-y-3 px-[6.4px] py-[12.8px]">
      <span className="text-sky-700 items-center bg-sky-100 box-border caret-transparent flex shrink-0 h-[34px] justify-center w-[34px] border border-sky-200 rounded-[999px] border-solid">
        <i className="text-[15.2px] font-black box-border caret-transparent block leading-[15.2px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-sky-700 before:text-[15.2px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </span>
      <div className="box-border caret-transparent">
        <h3 className="text-[15.68px] font-bold box-border caret-transparent leading-[25.088px] mb-1">
          {props.title}
        </h3>
        <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
