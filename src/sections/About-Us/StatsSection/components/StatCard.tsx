export type StatCardProps = {
  title: string;
  statValue: string;
  description: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(148,163,184,0.28)_0px_16px_34px_0px] box-border caret-transparent border border-slate-200 px-4 py-[17.6px] rounded-[18px] border-solid">
      <div className="text-gray-600 text-[12.8px] box-border caret-transparent tracking-[1.536px] leading-[20.48px] uppercase mb-[3.2px]">
        {props.title}
      </div>
      <div className="text-gray-900 text-[22.4px] font-[650] box-border caret-transparent leading-[35.84px] mb-[3.2px]">
        {props.statValue}
      </div>
      <p className="text-gray-600 text-[13.6px] box-border caret-transparent leading-[21.76px]">
        {props.description}
      </p>
    </div>
  );
};
