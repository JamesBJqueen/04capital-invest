import { UseOfFundsGrid } from "./components/UseOfFundsGrid";

export const UseOfFundsSection = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <div className="items-start box-border caret-transparent gap-x-[22.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[22.4px] md:gap-x-8 md:grid-cols-[minmax(0px,1.2fr)_minmax(0px,1.4fr)] md:gap-y-8">
          <div className="box-border caret-transparent">
            <p className="text-gray-600 text-[15.2px] box-border caret-transparent tracking-[2.736px] leading-[24.32px] uppercase">
              Use of funds
            </p>
            <h2 className="text-[25.6px] font-bold box-border caret-transparent leading-[40.96px] mt-[3.2px] mb-2">
              What you can do with funding from 04 Capital Investment
            </h2>
            <p className="text-gray-600 text-[15.2px] box-border caret-transparent leading-[24.32px]">
              Capital is a tool — and the right structure should support the way
              you operate today and where you’re going next. Businesses use Gate
              Rock Capital funding to:
            </p>
            <div className="box-border caret-transparent mt-4">
              <img
                src="/images/use-of-funds.jpg"
                alt="Business owner using funding from 04-Capital Investment"
                className="box-border caret-transparent max-w-full w-full rounded-2xl"
              />
            </div>
          </div>
          <UseOfFundsGrid />
        </div>
      </div>
    </section>
  );
};
