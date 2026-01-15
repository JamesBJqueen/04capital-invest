import { ImageCard } from "./components/ImageCard";

export const ImageGridSection = () => {
  return (
    <section
      aria-label="Gate Rock Capital imagery"
      className="box-border caret-transparent pt-[25.6px] pb-[35.2px]"
    >
      <div className="box-border caret-transparent max-w-[1140px] w-full mx-auto px-4 md:px-5">
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[1fr] gap-y-4 md:grid-cols-[1.2fr_1fr_1fr]">
          <ImageCard
            imageUrl="/images/home-band-1.jpg"
            imageAlt="Business owner planning growth"
            title="Fast timelines"
            description="Move when opportunities show up."
          />
          <ImageCard
            imageUrl="/images/home-band-2.jpg"
            imageAlt="Team running day-to-day operations"
            title="Built for operators"
            description="Funding aligned to real operations."
          />
          <ImageCard
            imageUrl="/images/home-band-3.jpg"
            imageAlt="Inventory and logistics"
            title="Use it your way"
            description="Inventory, payroll, growth, and more."
          />
        </div>
      </div>
    </section>
  );
};
