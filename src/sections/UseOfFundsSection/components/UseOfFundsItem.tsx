export type UseOfFundsItemProps = {
  title: string;
  description: string;
};

export const UseOfFundsItem = (props: UseOfFundsItemProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-3 flex gap-y-3 px-[6.4px] py-[12.8px]">
      <span className="text-sky-700 items-center bg-sky-100 box-border caret-transparent flex shrink-0 h-[34px] justify-center w-[34px] border border-sky-200 rounded-[999px] border-solid">
        <i className="fa-solid fa-check text-[15.2px] box-border caret-transparent block leading-[15.2px]"></i>
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
