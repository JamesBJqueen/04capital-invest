import { FAQCategory } from "./FAQCategory";
import { Link } from 'react-router-dom';

type FAQListProps = {
  selectedCategory: string;
};

export const FAQList = (props: FAQListProps) => {
  const shouldShowCategory = (categoryLabel: string) => {
    return props.selectedCategory === "All topics" || props.selectedCategory === categoryLabel;
  };
  return (
    <div className="box-border caret-transparent gap-x-[25.6px] flex flex-col gap-y-[25.6px]">
      {shouldShowCategory("Products") && <FAQCategory
        categoryLabel="Products"
        title="Our funding options"
        items={[
          {
            question: "What types of funding does 04-Capital Investment offer?",
            answer: (
              <>
                <p className="box-border caret-transparent mb-[8.8px]">
                  We provide flexible, cash-flow–based funding for small and
                  mid-sized businesses. Our core programs include:
                </p>
                <ul className="text-[14.08px] box-border caret-transparent leading-[22.528px] list-[circle] ml-[17.6px] mt-[3.2px] mb-[9.6px] pl-0">
                  <li className="box-border caret-transparent mb-1">
                    <strong className="font-bold box-border caret-transparent">
                      Merchant Cash Advances
                    </strong>{" "}
                    based on future receivables
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    <strong className="font-bold box-border caret-transparent">
                      Working Capital Funding
                    </strong>{" "}
                    for inventory, payroll, or unexpected expenses
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    <strong className="font-bold box-border caret-transparent">
                      Expansion Capital
                    </strong>{" "}
                    for equipment purchases, new locations, or growth
                    initiatives
                  </li>
                </ul>
                <p className="box-border caret-transparent mb-[8.8px]">
                  We tailor each offer based on your business model and cash
                  flow.
                </p>
              </>
            ),
            isExpanded: true,
          },
          {
            question: "How much can my business receive?",
            answer: (
              <>
                <p className="box-border caret-transparent mb-[8.8px]">
                  Our funding programs can support a wide range of needs
                  depending on your revenue, industry, and financial profile.
                </p>
                <p className="box-border caret-transparent mb-[8.8px]">
                  After reviewing your application and bank activity, we’ll
                  outline your available funding range and programs.
                </p>
              </>
            ),
          },
          {
            question: "Is 04-Capital Investment a traditional bank?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                We are a direct commercial funding partner. We move faster,
                think flexibly, and say yes when banks say no, all while using
                the same, institutional-grade underwriting standards you’d
                expect from the biggest players.
              </p>
            ),
          },
        ]}
      />}
      {shouldShowCategory("Application") && <FAQCategory
        categoryLabel="Application"
        title="Getting started"
        items={[
          {
            question: "What do I need to apply?",
            answer: (
              <>
                <p className="box-border caret-transparent mb-[8.8px]">
                  The application process is straightforward. You’ll typically
                  need:
                </p>
                <ul className="text-[14.08px] box-border caret-transparent leading-[22.528px] list-[circle] ml-[17.6px] mt-[3.2px] mb-[9.6px] pl-0">
                  <li className="box-border caret-transparent mb-1">
                    Basic business information
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    Estimated revenue and time in business
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    Owner identity verification
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    Recent business bank statements
                  </li>
                </ul>
                <p className="box-border caret-transparent mb-[8.8px]">
                  You can begin anytime through our secure{" "}
                  <Link to="./ApplicationForm"
                    className="box-border caret-transparent"
                  >
                    application portal
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            question: "Does applying affect my credit?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                We do{" "}
                <strong className="font-bold box-border caret-transparent">
                  not
                </strong>{" "}
                run hard credit pulls at any stage. Your initial application and
                our full review will never impact your personal or business
                credit scores. Period.
              </p>
            ),
          },
          {
            question: "How long does the application take?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                Most business owners complete the application in{" "}
                <strong className="font-bold box-border caret-transparent">
                  5-7 minutes
                </strong>
                . If we need additional documents, our team will reach out
                directly.
              </p>
            ),
          },
        ]}
      />}
      {shouldShowCategory("Funding") && <FAQCategory
        categoryLabel="Funding"
        title="From approval to capital"
        items={[
          {
            question: "How fast can I get funded?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                Many approvals are funded as soon as the same business day once
                documentation is completed. Timing varies based on industry and
                underwriting complexity, but our team sets expectations clearly.
              </p>
            ),
          },
          {
            question: "How are funds delivered?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                Funds are typically sent via ACH to your verified business bank
                account.
              </p>
            ),
          },
          {
            question: "Do I have to accept an approval?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                No. Once approved, you can review your options and decide
                whether or not to move forward. There is zero obligation to
                accept funding.
              </p>
            ),
          },
        ]}
      />}
      {shouldShowCategory("Repayment") && <FAQCategory
        categoryLabel="Repayment"
        title="Understanding repayment"
        items={[
          {
            question: "How do repayments work?",
            answer: (
              <>
                <p className="box-border caret-transparent mb-[8.8px]">
                  Repayment is structured based on your cash flow. This may
                  include:
                </p>
                <ul className="text-[14.08px] box-border caret-transparent leading-[22.528px] list-[circle] ml-[17.6px] mt-[3.2px] mb-[9.6px] pl-0">
                  <li className="box-border caret-transparent mb-1">
                    Daily, weekly oe monthly ACH debits
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    A percentage of receivables
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    Fixed repayment schedules
                  </li>
                </ul>
                <p className="box-border caret-transparent mb-[8.8px]">
                  We review your repayment expectations in full before you sign
                  anything.
                </p>
              </>
            ),
          },
          {
            question: "Can I repay early?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                Many programs allow early repayment or early payoff discounts.
                We’ll explain your specific terms before funding.
              </p>
            ),
          },
        ]}
      />}
      {shouldShowCategory("General") && <FAQCategory
        categoryLabel="General"
        title="Working with 04 Capital Investment"
        items={[
          {
            question: "What types of businesses do you work with?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                We support a broad range of small &amp; mid-market businesses,
                including retail, restaurants, specialty services,
                health/wellness, logistics, automotive, and more.
              </p>
            ),
          },
          {
            question: "How do you keep my information safe?",
            answer: (
              <p className="box-border caret-transparent mb-[8.8px]">
                We use secure data encryption and follow strict handling
                standards consistent with our
                <Link to="/"
                  className="box-border caret-transparent"
                >
                  Security Policy
                </Link>{" "}
                and{" "}
                <a
                  href="/"
                  className="box-border caret-transparent"
                >
                  Privacy Policy
                </a>
                .
              </p>
            ),
          },
          {
            question: "How can I contact your team?",
            answer: (
              <>
                <p className="box-border caret-transparent mb-[8.8px]">
                  You can reach us anytime:
                </p>
                <ul className="text-[14.08px] box-border caret-transparent leading-[22.528px] list-[circle] ml-[17.6px] mt-[3.2px] mb-[9.6px] pl-0">
                  <li className="box-border caret-transparent mb-1">
                    Email:{" "}
                    <a
                      href="./contact"
                      className="box-border caret-transparent"
                    >
                      Contact form
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    Phone:{" "}
                    <a
                      href="tel://+46766926492"
                      className="box-border caret-transparent"
                    >
                      +46 (76) 692-6492
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-1">
                    Apply directly at{" "}
                    <Link to="./ApplicationForm"
                      className="box-border caret-transparent"
                    >
                      our application page
                    </Link>
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />}
    </div>
  );
};
