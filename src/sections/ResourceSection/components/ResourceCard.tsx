export type ResourceCardProps = {
  href: string;
  title: string;
  description: string;
};

export const ResourceCard = (props: ResourceCardProps) => {
  return (
    <a
      href={props.href}
      className="bg-white shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent block border border-slate-200/100 p-[18.4px] rounded-3xl border-solid hover:shadow-[rgba(15,23,42,0.1)_0px_28px_70px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] hover:border-blue-600/20"
    >
      <div className="items-center bg-blue-600/10 box-border caret-transparent grid h-[50px] justify-items-center w-[50px] border border-blue-600/20 mb-[11.2px] rounded-[18px] border-solid">
        <i className="text-sky-700 text-[17.6px] font-black box-border caret-transparent block leading-[17.6px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-sky-700 before:text-[17.6px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[17.6px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </div>
      <h3 className="text-[16.96px] font-bold box-border caret-transparent tracking-[-0.1696px] leading-[27.136px] mb-[5.6px]">
        {props.title}
      </h3>
      <p className="text-gray-600 box-border caret-transparent leading-[24.8px]">
        {props.description}
      </p>
      <span className="font-black items-center box-border caret-transparent gap-x-2 inline-flex gap-y-2 mt-[15.2px]">
        Explore{" "}
        <i className="box-border caret-transparent block leading-4 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-gray-900 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </span>
    </a>
  );
};
