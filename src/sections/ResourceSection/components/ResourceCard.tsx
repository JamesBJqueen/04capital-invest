import { Link } from "react-router-dom";

export type ResourceCardProps = {
  href: string;       // internal route
  title: string;
  description: string;
};

export const ResourceCard = (props: ResourceCardProps) => {
  return (
    <Link
      to={props.href}
      className="bg-white shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent block border border-slate-200/100 p-[18.4px] rounded-3xl border-solid hover:shadow-[rgba(15,23,42,0.1)_0px_28px_70px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] hover:border-blue-600/20"
    >
      <div className="items-center bg-blue-600/10 box-border caret-transparent grid h-[50px] justify-items-center w-[50px] border border-blue-600/20 mb-[11.2px] rounded-[18px] border-solid">
        <i className="fa-solid fa-book-open text-sky-700 text-[17.6px] box-border caret-transparent block leading-[17.6px]"></i>
      </div>
      <h3 className="text-[16.96px] font-bold box-border caret-transparent tracking-[-0.1696px] leading-[27.136px] mb-[5.6px]">
        {props.title}
      </h3>
      <p className="text-gray-600 box-border caret-transparent leading-[24.8px]">
        {props.description}
      </p>
      <span className="font-black items-center box-border caret-transparent gap-x-2 inline-flex gap-y-2 mt-[15.2px]">
        Explore{" "}
        <i className="fa-solid fa-arrow-right box-border caret-transparent block leading-4"></i>
      </span>
    </Link>
  );
};
