import { useState } from "react";

export type FAQCategoryProps = {
  categoryLabel: string;
  title: string;
  items: Array<{
    question: string;
    answer: React.ReactNode;
    isExpanded?: boolean;
  }>;
};

export const FAQCategory = (props: FAQCategoryProps) => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set(props.items.reduce<number[]>((acc, item, index) => {
      if (item.isExpanded) acc.push(index);
      return acc;
    }, []))
  );

  const toggleExpanded = (index: number) => {
    setExpandedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="bg-white shadow-[rgba(148,163,184,0.25)_0px_18px_40px_0px] box-border caret-transparent border border-slate-200 pt-[22.4px] pb-6 px-[20.8px] rounded-[20px] border-solid">
      <div className="items-center box-border caret-transparent gap-x-2 flex justify-between gap-y-2 mb-[12.8px]">
        <div className="box-border caret-transparent">
          <p className="text-gray-600 text-[12.48px] box-border caret-transparent tracking-[1.7472px] leading-[19.968px] uppercase my-[12.48px]">
            {props.categoryLabel}
          </p>
          <h2 className="text-gray-900 font-semibold box-border caret-transparent">
            {props.title}
          </h2>
        </div>
      </div>
      <ul className="box-border caret-transparent list-none pl-0">
        {props.items.map((item, index) => {
          const isExpanded = expandedIndices.has(index);
          return (
            <li
              key={index}
              className={
                index === 0
                  ? "box-border caret-transparent"
                  : "border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-gray-200 box-border caret-transparent border-t"
              }
            >
              <button
                type="button"
                onClick={() => toggleExpanded(index)}
                className="text-stone-950/30 text-[13.3333px] items-center bg-transparent caret-transparent gap-x-3 flex justify-between leading-[normal] gap-y-3 text-left w-full px-[1.6px] py-[14.4px] font-arial hover:opacity-75 transition-opacity"
              >
                <span className="text-gray-900 text-[15.2px] font-semibold box-border caret-transparent block">
                  {item.question}
                </span>
                <span
                  className={
                    isExpanded
                      ? "text-white text-[12.8px] items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] box-border caret-transparent flex shrink-0 h-[22px] justify-center w-[22px] border rounded-[999px] border-solid border-transparent transition-all"
                      : "text-gray-600 text-[12.8px] items-center bg-gray-50 box-border caret-transparent flex shrink-0 h-[22px] justify-center w-[22px] border border-indigo-200 rounded-[999px] border-solid transition-all"
                  }
                >
                  +
                </span>
              </button>
              <div
                className={
                  isExpanded
                    ? "text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] pb-[14.4px]"
                    : "text-gray-600 text-[14.4px] box-border caret-transparent hidden leading-[23.04px] pb-[14.4px]"
                }
              >
                {item.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
