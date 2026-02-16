export type PrepareCardProps = {
  title: string;
  items: string[];
};

export const PrepareCard = (props: PrepareCardProps) => {
  return (
    <article className="bg-white shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent border border-slate-200/100 pt-[18.4px] pb-[19.2px] px-[18.4px] rounded-3xl border-solid">
      <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 mb-[13.6px]">
        <span className="items-center bg-blue-600/10 box-border caret-transparent grid shrink-0 h-12 justify-items-center w-12 border border-blue-600/20 rounded-2xl border-solid">
          <i className="fa-solid fa-list-check text-sky-700 text-[16.8px] box-border caret-transparent block leading-[16.8px]"></i>
        </span>
        <h3 className="text-gray-900 text-[16.96px] font-bold box-border caret-transparent tracking-[-0.1696px] leading-[27.136px]">
          {props.title}
        </h3>
      </div>
      <ul className="box-border caret-transparent gap-x-[10.4px] grid list-none gap-y-[10.4px] pl-0">
        {props.items.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 items-start bg-slate-50 box-border caret-transparent gap-x-[10.4px] grid grid-cols-[18px_minmax(0px,1fr)] leading-[23.2px] gap-y-[10.4px] border border-slate-100 px-[12.8px] py-[11.2px] rounded-2xl border-solid"
          >
            <i className="fa-solid fa-check text-green-600 box-border caret-transparent block leading-4 mt-[2.4px]"></i>{" "}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
