export type ContactInfoCardProps = {
  title: string;
  description: string;
  contactItems: Array<{
    label: string;
    content: React.ReactNode;
  }>;
};

export const ContactInfoCard = (props: ContactInfoCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(148,163,184,0.25)_0px_16px_34px_0px] box-border caret-transparent border border-slate-200 px-[20.8px] py-[19.2px] rounded-[18px] border-solid">
      <h2 className="text-gray-900 text-[16.8px] font-bold box-border caret-transparent leading-[26.88px] mb-[6.4px]">
        {props.title}
      </h2>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[9.6px]">
        {props.description}
      </p>
      <div className="box-border caret-transparent">
        {props.contactItems.map((item, index) => (
          <p
            key={index}
            className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[6.4px]"
          >
            <strong className="font-bold box-border caret-transparent">
              {item.label}
            </strong>
            <br className="box-border caret-transparent" />
            {item.content}
          </p>
        ))}
      </div>
    </div>
  );
};
