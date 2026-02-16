import { Link } from "react-router-dom";

export type HeroButtonProps = {
  href: string;
  text: string;
  variant: string;
};

export const HeroButton = (props: HeroButtonProps) => {
  const buttonClass = `text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid ${props.variant}`;

  // Use anchor tag for hash links, Link for routes
  if (props.href.startsWith("#")) {
    return (
      <a href={props.href} className={buttonClass}>
        {props.text}
      </a>
    );
  }

  return (
    <Link to={props.href} className={buttonClass}>
      {props.text}
    </Link>
  );
};
