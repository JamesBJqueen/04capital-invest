import { LoadingContent } from "../Components/LoadingModal/LoadingContent";
import { ErrorContent } from "../Components/LoadingModal/ErrorContent";

type LoadingModalProps = {
  isSubmitting: boolean;
  isError: boolean;
  errorMessage?: string;
  onCloseError: () => void;
};

export const LoadingModal = (props: LoadingModalProps) => {
  const isVisible = props.isSubmitting || props.isError;

  return (
    <div
      className={`fixed items-center backdrop-blur-[3px] bg-slate-900/60 box-border caret-transparent justify-center z-[9999] inset-0 ${
        isVisible ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white shadow-[rgba(15,23,42,0.25)_0px_18px_45px_0px] box-border caret-transparent max-w-[360px] text-center w-[90%] px-6 py-7 rounded-[18px]">
        {!props.isError && <LoadingContent />}
        {props.isError && (
          <ErrorContent message={props.errorMessage} onClose={props.onCloseError} />
        )}
      </div>
    </div>
  );
};
