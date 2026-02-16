import { Link } from "react-router-dom";

type ErrorContentProps = {
  message?: string;
  onClose: () => void;
};

export const ErrorContent = (props: ErrorContentProps) => {
  return (
    <div className="box-border caret-transparent">
      <div className="text-[40px] box-border caret-transparent leading-[64px] mb-4">
        ⚠️
      </div>
      <p className="text-slate-900 text-[16.8px] font-semibold box-border caret-transparent leading-[26.88px] mt-[16.8px] mb-1">
        Error: Something went wrong
      </p>
      <p className="text-gray-500 text-sm box-border caret-transparent leading-[22.4px] mt-3.5 mb-4">
        {props.message || "We couldn't submit your application."}
      </p>
      <p className="text-[14.4px] box-border caret-transparent leading-[21.6px] opacity-90 mt-3 mb-[14.4px]">
        Please try again, or
        <Link
          to="/contact"
          className="text-sky-600 font-medium box-border caret-transparent underline"
        >
          {" "}
          contact
        </Link>
        {" "}
        our support team if the problem continues.
      </p>
      <button
        type="button"
        onClick={props.onClose}
        className="text-white text-[13.3333px] bg-red-700 caret-transparent leading-[normal] mt-6 px-5 py-[10.4px] rounded-md font-arial hover:bg-red-800 w-full"
      >
        Close
      </button>
    </div>
  );
};
