import { LoadingContent } from "../Components/LoadingModal/LoadingContent";
import { ErrorContent } from "../Components/LoadingModal/ErrorContent";

export const LoadingModal = () => {
  return (
    <div className="fixed items-center backdrop-blur-[3px] bg-slate-900/60 box-border caret-transparent hidden justify-center z-[9999] inset-0">
      <div className="bg-white shadow-[rgba(15,23,42,0.25)_0px_18px_45px_0px] box-border caret-transparent max-w-[360px] text-center w-[90%] px-6 py-7 rounded-[18px]">
        <LoadingContent />
        <ErrorContent />
      </div>
    </div>
  );
};
