import { HeroSection } from "./HeroSection";
import { FormContainer } from "./Components/FormContainer";

export const Apply = () => {
  return (
    <main className="bg-slate-100 box-border caret-transparent pt-[35.2px] pb-16 md:pt-12">
      <HeroSection />
      <section className="box-border caret-transparent pt-6">
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5"><FormContainer /></div>
    </section>
    </main>
  );
};
