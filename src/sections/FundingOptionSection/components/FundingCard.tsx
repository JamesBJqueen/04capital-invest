export type FundingCardProps = {
  title: string;
  description: string;
  features: string[];
};

export const FundingCard = (props: FundingCardProps) => {
  return (
    <article className="relative bg-white shadow-[rgba(148,163,184,0.24)_0px_14px_30px_0px] box-border caret-transparent shrink-0 max-w-xs min-w-[260px] snap-start border border-slate-300 pt-6 pb-[20.8px] px-[19.2px] rounded-2xl border-solid md:shrink md:max-w-none md:min-w-[auto] md:snap-align-none">
      <div className="text-sky-700 items-center bg-indigo-50 box-border caret-transparent inline-flex h-9 justify-center w-9 border border-indigo-200 mb-[11.2px] rounded-[999px] border-solid">
        <i className="fa-solid fa-hand-holding-dollar box-border caret-transparent block leading-4 text-base"></i>
      </div>
      <h3 className="text-gray-900 text-[16.32px] font-bold box-border caret-transparent leading-[26.112px] mb-[6.4px]">
        {props.title}
      </h3>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px]">
        {props.description}
      </p>
      <ul className="text-gray-600 text-[13.76px] box-border caret-transparent leading-[22.016px] mt-[11.2px] pl-[17.6px]">
        {props.features.map((feature, index) => (
          <li key={index} className="box-border caret-transparent mb-1">
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
};
