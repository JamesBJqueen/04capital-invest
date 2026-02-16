export type ProcessStepProps = {
  stepNumber: string;
  title: string;
  description: string;
  bulletPoints: string[];
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="relative bg-white shadow-[rgba(148,163,184,0.3)_0px_14px_32px_0px] box-border caret-transparent border border-slate-200 pt-[19.2px] pb-[20.8px] px-[19.2px] rounded-2xl border-solid">
      <div className="text-sky-700 text-[14.4px] font-semibold items-center bg-sky-700/10 box-border caret-transparent inline-flex h-[30px] justify-center leading-[23.04px] w-[30px] mb-[11.2px] rounded-[999px]">
        {props.stepNumber}
      </div>
      <h3 className="text-[18.72px] font-bold box-border caret-transparent leading-[29.952px] my-[18.72px]">
        {props.title}
      </h3>
      <p className="box-border caret-transparent my-4">{props.description}</p>
      <ul className="text-gray-600 text-[13.76px] box-border caret-transparent leading-[22.016px] mt-[10.4px] pl-[17.6px]">
        {props.bulletPoints.map((point, index) => (
          <li key={index} className="box-border caret-transparent mb-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
