export type ImageCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const ImageCard = (props: ImageCardProps) => {
  return (
    <div className="relative bg-slate-100 shadow-[rgba(15,23,42,0.08)_0px_18px_45px_0px,rgba(15,23,42,0.02)_0px_2px_0px_0px] box-border caret-transparent border border-slate-200/100 overflow-hidden rounded-3xl border-solid">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="box-border caret-transparent h-[230px] max-w-full object-cover w-full scale-[1.02] md:h-[270px]"
      />
      <div className="absolute text-white bg-[linear-gradient(rgba(2,6,23,0)_0%,rgba(2,6,23,0.78)_100%)] box-border caret-transparent px-[17.6px] py-4 bottom-0 inset-x-0">
        <h3 className="text-[17.28px] font-bold box-border caret-transparent tracking-[-0.1728px] leading-[27.648px] mb-1">
          {props.title}
        </h3>
        <p className="box-border caret-transparent opacity-[0.92]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
