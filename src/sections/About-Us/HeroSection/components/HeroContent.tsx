import { HeroButtons } from "./HeroButtons";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent">
      <p className="text-gray-600 box-border caret-transparent tracking-[2.88px] max-w-[544px] uppercase mb-2">
        About 04 Capital Investment
      </p>
      <h1 className="text-gray-900 text-[36.8px] font-bold box-border caret-transparent leading-[42.32px] mb-[9.6px]">
        A capital partner built for the realities of running a business.
      </h1>
      <p className="text-gray-600 box-border caret-transparent max-w-[544px] mb-2">
        04 Capital Investment was founded with a clear purpose: to give business
        owners access to fast, reliable funding without the roadblocks, delays,
        or confusion of traditional lending. We recognize that timing matters,
        cash flow shifts, and opportunities rarely wait.
      </p>
      <p className="text-gray-600 box-border caret-transparent max-w-[544px] mb-2">
        Our approach blends disciplined underwriting with modern technology,
        enabling us to deliver thoughtful, transparent capital solutions at the
        speed business owners need. We take a relationship-first
        approach—understanding how your business operates, what you’re working
        toward, and how funding can support your long-term success.
      </p>
      <HeroButtons />
    </div>
  );
};
