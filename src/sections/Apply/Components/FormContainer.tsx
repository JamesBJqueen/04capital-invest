import { ProgressIndicator } from "./ProgressIndicator";
import { ApplicationForm } from "./ApplicationForm";

export const FormContainer = () => {
  return (
    <div className="bg-white shadow-[rgba(15,23,42,0.12)_0px_18px_45px_0px] box-border caret-transparent border border-slate-200 pt-[30.4px] pb-20 px-4 rounded-3xl border-solid md:pb-[33.6px] md:px-[25.6px]">
      <ProgressIndicator />
      <ApplicationForm />
    </div>
  );
};
