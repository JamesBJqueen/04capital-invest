export type CreditInfoCardProps = {
  title: string;
  items: string[];
};

export const CreditInfoCard = (props: CreditInfoCardProps) => {
  return (
    <div className="bg-white box-border caret-transparent border border-slate-200 pt-4 pb-[17.6px] px-4 rounded-[18px] border-solid">
      <h3 className="text-gray-900 text-[15.68px] font-bold box-border caret-transparent leading-[25.088px] mb-[6.4px]">
        {props.title}
      </h3>
      <ul className="text-gray-600 text-[13.76px] box-border caret-transparent leading-[22.016px] pl-[17.6px]">
        {props.items.map((item, index) => (
          <li key={index} className="box-border caret-transparent">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
