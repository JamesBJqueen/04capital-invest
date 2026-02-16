import { Link } from "react-router-dom";
import { PrepareCard } from "./components/PrepareCard";

export const PrepareSection = () => {
  return (
    <section className="box-border caret-transparent py-[52px]">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent tracking-[-0.512px] leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            What to prepare (so we can move fast)
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-[960px]">
            A quick overview of the information we typically review so your
            application can move smoothly.
          </p>
        </header>
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[1fr] gap-y-4 mt-[18.4px] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <PrepareCard
            title="Business basics"
            items={[
              "Legal business name and address",
              "Time in business",
              "Approximate monthly revenue",
            ]}
          />
          <PrepareCard
            title="Bank activity"
            items={[
              "Recent bank activity (when requested)",
              "Consistent deposits",
              "General cash flow patterns",
            ]}
          />
          <PrepareCard
            title="Application follow-up"
            items={[
              "Basic business verification",
              "Simple business details",
              "Simple follow-up questions",
            ]}
          />
        </div>
        <div className="box-border caret-transparent gap-x-[11.2px] flex flex-wrap justify-center gap-y-[11.2px] mt-5">
          <Link to='/ApplicationForm'
            className="text-white text-[14.4px] font-semibold items-center bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
          >
            Apply now
          </Link>
          <Link to='/faqs'
            className="text-sky-700 text-[14.4px] font-semibold items-center box-border caret-transparent gap-x-[5.6px] flex justify-center leading-[23.04px] gap-y-[5.6px] text-center border border-indigo-200 px-[20.8px] py-[9.6px] rounded-[999px] border-solid hover:bg-sky-100"
          >
            View FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};
