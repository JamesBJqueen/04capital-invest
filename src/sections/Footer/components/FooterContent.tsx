import { FooterColumn } from "./FooterColumn"

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 grid grid-cols-[minmax(0px,1fr)] max-w-[1140px] gap-y-10 w-full mx-auto px-4 md:grid-cols-[minmax(0px,1.4fr)_repeat(3,minmax(0px,1fr))] md:px-5">
      <div className="box-border caret-transparent">
        <img
          src="/images/logo-header.png"
          alt="04-Capital Invest"
          className="box-border caret-transparent max-w-full w-[150px] mb-4"
        />
        <p className="text-gray-400 text-[14.4px] items-start box-border caret-transparent flex leading-[20.16px] max-w-64 mb-2">
          A trusted capital partner for small and mid-sized businesses
          nationwide.
        </p>
        <div className="box-border caret-transparent">
          <p className="text-gray-400 text-[12.48px] items-start box-border caret-transparent flex leading-[17.472px]">
            Responsible business financing · Secure data handling ·
            Relationship-focused support
          </p>
        </div>
      </div>
      <FooterColumn
        title="Company"
        items={[
          { type: "link", text: "Home", href: "/" },
          {
            type: "link",
            text: "About us",
            href: "/about",
          },
          {
            type: "link",
            text: "FAQs",
            href: "/faqs",
          },
          {
            type: "link",
            text: "Contact",
            href: "/contact",
          },
          {
            type: "link",
            text: "Application",
            href: "/ApplicationForm",
          },
        ]}
      />
       <FooterColumn
        title="Contact"
        items={[
          {
            type: "contact",
            text: "+46 76 692 6492",
            href: "tel://+46766926492",
          },
          {
            type: "contact",
            text: "info@04capitalinvestment.com",
            href: "mailto://info@04capitalinvestment.com",
          },
          {
            type: "contact",
            content: (
              <>
                04Capital Investment
                <br />
                REGERINGSG.
                <br />
                30-32 HISS B #384
                <br />
                111 53 Stockholm, Sweden
              </>
            ),
          },
          { type: "trustedsite" },
          { type: "social" },
        ]}
      />
    </div>
  );
};
