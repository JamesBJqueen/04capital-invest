export type HelpCardProps = {
  title: string;
  description: string;
};

export const HelpCard = (props: HelpCardProps) => {
  return (
    <article className="bg-white shadow-[rgba(148,163,184,0.24)_0px_14px_30px_0px] box-border caret-transparent border border-slate-300 px-[19.2px] py-[20.8px] rounded-2xl border-solid">
      <h3 className="text-gray-900 text-[16.32px] font-bold box-border caret-transparent leading-[26.112px] mb-[6.4px]">
        {props.title}
      </h3>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px]">
        {props.description}
      </p>
    </article>
  );
};
