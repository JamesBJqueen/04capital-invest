export type FAQCardProps = {
  question: string;
  answer: string;
};

export const FAQCard = (props: FAQCardProps) => {
  return (
    <article className="bg-white shadow-[rgba(148,163,184,0.24)_0px_14px_30px_0px] box-border caret-transparent shrink-0 max-w-xs min-w-[260px] snap-start border border-slate-300 px-[19.2px] py-[20.8px] rounded-2xl border-solid md:shrink md:max-w-none md:min-w-[auto] md:snap-align-none">
      <h3 className="text-gray-900 text-[16.32px] font-bold box-border caret-transparent leading-[26.112px] mb-[6.4px]">
        {props.question}
      </h3>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px]">
        {props.answer}
      </p>
    </article>
  );
};
