export type BenefitCardProps = {
  title: string;
  description: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <article className="bg-white shadow-[rgba(148,163,184,0.24)_0px_14px_30px_0px] box-border caret-transparent shrink-0 max-w-xs min-w-[260px] snap-start border border-slate-300 pt-6 pb-[20.8px] px-[19.2px] rounded-2xl border-solid md:shrink md:max-w-none md:min-w-[auto] md:snap-align-none">
      <div className="text-amber-800 items-center bg-amber-100 box-border caret-transparent inline-flex h-[34px] justify-center w-[34px] border border-amber-200 mb-[11.2px] rounded-[999px] border-solid">
        <i className="fa-solid fa-chart-line text-[15.2px] box-border caret-transparent block leading-[15.2px]"></i>
      </div>
      <h3 className="text-gray-900 text-[16.32px] font-bold box-border caret-transparent leading-[26.112px] mb-[6.4px]">
        {props.title}
      </h3>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px]">
        {props.description}
      </p>
    </article>
  );
};
