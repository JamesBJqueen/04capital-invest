import { HeroButton } from "./HeroButton";
import { HeroRating } from "./HeroRating";

export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-[41.6px] grid grid-cols-[minmax(0px,1fr)] max-w-[1140px] gap-y-[41.6px] w-full mx-auto px-4 md:grid-cols-[minmax(0px,1.45fr)_minmax(0px,1fr)] md:px-5">
      <div className="box-border caret-transparent">
        <p className="text-gray-600 box-border caret-transparent tracking-[2.56px] max-w-[544px] uppercase mb-2">
          Business funding up to $300,000
        </p>
        <h1 className="text-gray-900 text-[33.6px] font-bold box-border caret-transparent leading-[38.64px] mb-3 md:text-[43.2px] md:leading-[49.68px]">
          Flexible capital built for small and mid-sized businesses.
        </h1>
        <p className="text-gray-600 box-border caret-transparent max-w-[544px] mb-2">
          04 Capital Investment helps owners access funding without the friction of
          a traditional lander — clear terms, fast timelines, and a team that
          understands operators.
        </p>
        <div className="box-border caret-transparent gap-x-[6.4px] flex flex-wrap gap-y-[6.4px] mb-[22.4px] md:gap-x-2 md:gap-y-2">
          <span className="text-[13.12px] items-center bg-indigo-50 box-border caret-transparent gap-x-[5.6px] flex leading-[20.992px] gap-y-[5.6px] text-nowrap border border-violet-200 px-[12.8px] py-[7.2px] rounded-[999px] border-solid">
            <i className="fa-solid fa-check text-sky-700 text-[13.6px] box-border caret-transparent block leading-[13.6px] text-nowrap"></i>
            Decisions in as little as 2 hours
          </span>
          <span className="text-[13.12px] items-center bg-indigo-50 box-border caret-transparent gap-x-[5.6px] flex leading-[20.992px] gap-y-[5.6px] text-nowrap border border-violet-200 px-[12.8px] py-[7.2px] rounded-[999px] border-solid">
            <i className="fa-solid fa-check text-sky-700 text-[13.6px] box-border caret-transparent block leading-[13.6px] text-nowrap"></i>
            Transparent, fixed-cost structures
          </span>
          <span className="text-[13.12px] items-center bg-indigo-50 box-border caret-transparent gap-x-[5.6px] flex leading-[20.992px] gap-y-[5.6px] text-nowrap border border-violet-200 px-[12.8px] py-[7.2px] rounded-[999px] border-solid">
            <i className="fa-solid fa-check text-sky-700 text-[13.6px] box-border caret-transparent block leading-[13.6px] text-nowrap"></i>
            See your options risk-free (soft credit check only)
          </span>
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] flex flex-wrap gap-y-[14.4px] mt-[27.2px]">
          <HeroButton
            href="/ApplicationForm"
            text="Apply now"
            variant="text-white bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] border-transparent hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
          />
          <HeroButton
            href="#funding-options"
            text="View funding options"
            variant="bg-sky-100 border-blue-200 hover:bg-blue-100"
          />
        </div>
        <HeroRating />
        <div className="text-gray-600 text-[14.08px] items-center box-border caret-transparent gap-x-[5.6px] inline-flex leading-[22.528px] gap-y-[5.6px] mt-[17.6px]">
          <span className="bg-orange-500 box-border caret-transparent block h-[7px] w-[7px] rounded-[999px]"></span>
          No hard credit pull · Dedicated funding specialists · Secure online
          application
        </div>
      </div>
      <div className="shadow-[rgba(148,163,184,0.45)_0px_18px_40px_0px] box-border caret-transparent min-h-[260px] overflow-hidden rounded-3xl">
        <img
          src="/images/hero-professional.jpg"
          alt="Business owners reviewing funding options in a modern office"
          className="box-border caret-transparent h-[300px] max-w-full object-cover w-full"
        />
      </div>
    </div>
  );
};
