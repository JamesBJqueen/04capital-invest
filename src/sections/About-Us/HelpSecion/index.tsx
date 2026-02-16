import { HelpGrid } from "./components/HelpGrid";

export const HelpSection = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            We’re here to help you succeed on your own terms.
          </h2>
          <p className="text-gray-600 box-border caret-transparent">
            Every business is different. Our role is to provide structure,
            clarity, and consistency—so you can stay focused on growing your
            company, not navigating complex funding hurdles.
          </p>
        </header>
        <HelpGrid />
      </div>
    </section>
  );
};
