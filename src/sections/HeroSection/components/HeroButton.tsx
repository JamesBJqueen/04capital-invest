export type HeroButtonProps = {
  href: string;
  text: string;
  variant: string;
};

export const HeroButton = (props: HeroButtonProps) => {
  return (
    <a
      href={props.href}
      className={`text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid ${props.variant}`}
    >
      {props.text}
    </a>
  );
};
