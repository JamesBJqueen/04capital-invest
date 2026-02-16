import { CTAButtons } from "./components/CTAButtons";

export const CTASection = () => {
  return (
    <section className="bg-[linear-gradient(135deg,rgb(238,242,255),rgb(249,251,255))] border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-slate-200 box-border caret-transparent py-12 border-t">
      <div className="items-start box-border caret-transparent gap-x-[30.4px] flex flex-col justify-between max-w-[1140px] gap-y-[30.4px] w-full mx-auto px-4 md:items-center md:flex-row md:px-5">
        <div className="box-border caret-transparent">
          <h2 className="text-gray-900 text-2xl font-bold box-border caret-transparent leading-[38.4px] mb-[6.4px]">
            Ready to see what’s possible for your business?
          </h2>
          <p className="text-gray-600 text-[15.2px] box-border caret-transparent leading-[24.32px]">
            Talk with a 04 Capital Investment specialist about your goals,
            timelines, and the structure that may be right for your business —
            or start your application in minutes.
          </p>
        </div>
        <CTAButtons />
      </div>
    </section>
  );
};
