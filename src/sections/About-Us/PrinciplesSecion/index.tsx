import { PrinciplesGrid } from "./components/PrincipleGrid";

export const PrinciplesSection = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <header className="box-border caret-transparent max-w-[544px] text-center mb-[36.8px] mx-auto">
          <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent leading-[40.96px] mt-[21.248px] mb-[6.4px]">
            Principles we operate by
          </h2>
          <p className="text-gray-600 box-border caret-transparent">
            These values guide every interaction—with clients, partners, and our
            internal team.
          </p>
        </header>
        <PrinciplesGrid />
      </div>
    </section>
  );
};
