import { Link } from "react-router-dom";

export type FooterColumnProps = {
  title: string;
  items: Array<{
    type: "link" | "button" | "contact" | "trustedsite" | "social";
    text?: string;
    href?: string;
    icon?: string;
    imageUrl?: string;
    imageAlt?: string;
    content?: React.ReactNode;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent">
      <h3 className="text-gray-200 text-[13.12px] font-bold box-border caret-transparent tracking-[1.0496px] leading-[20.992px] uppercase mt-[13.12px] mb-[12.8px]">
        {props.title}
      </h3>

      {props.items.some(
        (item) => item.type === "link" || item.type === "button",
      ) && (
        <ul className="box-border caret-transparent list-none pl-0">
          {props.items
            .filter((item) => item.type === "link" || item.type === "button")
            .map((item, index) => (
              <li
                key={index}
                className="box-border caret-transparent mb-[5.6px]"
              >
                {item.type === "link" && item.href && (
                  <Link
                    to={item.href}
                    className="text-gray-400 text-[14.4px] box-border caret-transparent leading-[23.04px] hover:text-blue-500 hover:border-blue-500"
                  >
                    {item.text}
                  </Link>
                )}

                {item.type === "button" && (
                  <button
                    type="button"
                    className="text-gray-400 text-[14.4px] items-center bg-transparent caret-transparent gap-x-[5.6px] inline-flex leading-[23.04px] gap-y-[5.6px] text-center p-0"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt || ""}
                      className="aspect-[auto_22_/_13] box-border caret-transparent h-[12.96px] max-w-full opacity-85 mt-px"
                    />
                    <span className="box-border caret-transparent block leading-[20.16px]">
                      {item.text}
                    </span>
                  </button>
                )}
              </li>
            ))}
        </ul>
      )}

      {props.items
        .filter((item) => item.type === "contact")
        .map((item, index) => (
          <p
            key={index}
            className="text-gray-400 text-[14.4px] items-start box-border caret-transparent flex leading-[20.16px] mb-2"
          >
            <i className="fa-solid fa-circle text-gray-400 mr-[9.6px] mt-[2.4px]"></i>
            {item.href ? (
              <a
                href={item.href}
                className="box-border caret-transparent block text-nowrap hover:text-blue-500 hover:border-blue-500"
              >
                {item.text}
              </a>
            ) : (
              <span className="box-border caret-transparent block basis-[0%] grow">
                {item.content}
              </span>
            )}
          </p>
        ))}

      {props.items.some((item) => item.type === "trustedsite") && (
        <div className="box-border caret-transparent mt-3">
          <div
            title="TrustedSite Certified"
            className="bg-[url('https://cdn.ywxi.net/meter/gaterockcapital.com/202.svg?ts=1765336623225&l=en')] bg-no-repeat bg-contain h-[50px] w-[120px] bg-[position:50%_top]"
          />
        </div>
      )}

      {props.items.some((item) => item.type === "social") && (
        <div className="text-[19.2px] flex gap-x-[12.8px] mt-[11.2px]" />
      )}
    </div>
  );
};
