export type CreditCardProps = {
  title: string;
  description: string;
};

export const CreditCard = (props: CreditCardProps) => {
  return (
    <div className="bg-white box-border caret-transparent border border-slate-200 px-4 py-[17.6px] rounded-[18px] border-solid">
      <h3 className="text-gray-900 text-[16.32px] font-bold box-border caret-transparent leading-[26.112px] mb-[4.8px]">
        {props.title}
      </h3>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px]">
        {props.description}
      </p>
    </div>
  );
};
