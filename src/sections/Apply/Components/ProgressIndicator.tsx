type ProgressIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

const stepLabels = [
  "Basic info",
  "Funding",
  "Your business",
  "About you",
  "Consents",
  "Documents",
  "Submitted",
];

export const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const progressPercentage = ((props.currentStep + 1) / props.totalSteps) * 100;

  return (
    <div className="box-border caret-transparent mb-5">
      <div className="relative bg-gray-200 box-border caret-transparent h-1 overflow-hidden rounded-[999px]">
        <div
          className="bg-[linear-gradient(90deg,rgb(0,80,179),rgb(29,143,255))] box-border caret-transparent h-full rounded-[999px] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <ol className="text-gray-600 text-[11.2px] box-border caret-transparent gap-x-1 grid grid-cols-[repeat(3,minmax(0px,1fr))] leading-[17.92px] list-none gap-y-[4.8px] mt-[10.4px] pl-0 md:text-xs md:grid-cols-[repeat(7,minmax(0px,1fr))] md:leading-[19.2px] md:gap-y-1">
        {stepLabels.map((label, index) => (
          <li
            key={index}
            className={`text-[11.2px] box-border caret-transparent leading-[17.92px] text-center md:text-xs md:leading-[19.2px] transition-all ${
              index <= props.currentStep
                ? "text-gray-900 font-semibold"
                : "opacity-70"
            }`}
          >
            {label}
          </li>
        ))}
      </ol>
    </div>
  );
};
