import { WhyChooseContent } from "./components/WhyChooseContent";
import { SupportInfo } from "./components/SupportInfo";

export const WhyChooseSection = () => {
  return (
    <section className="box-border caret-transparent py-12">
      <div className="items-start box-border caret-transparent gap-x-8 grid grid-cols-[minmax(0px,1fr)] max-w-[1140px] gap-y-8 w-full mx-auto px-4 md:grid-cols-[minmax(0px,1.4fr)_minmax(0px,1fr)] md:px-5">
        <WhyChooseContent />
        <SupportInfo />
      </div>
    </section>
  );
};
