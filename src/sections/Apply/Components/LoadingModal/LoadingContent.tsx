export const LoadingContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-blue-600 box-border caret-transparent h-8 w-8 mb-4 mx-auto rounded-[999px] border-[3px] border-solid"></div>
      <p className="text-slate-900 text-[16.8px] font-semibold box-border caret-transparent leading-[26.88px] mt-[16.8px] mb-1">
        Submitting your application…
      </p>
      <p className="text-gray-500 text-sm box-border caret-transparent leading-[22.4px] mt-3.5 mb-4">
        Please keep this window open while we securely upload your documents and
        finalize your application. This can take up to{" "}
        <strong className="font-bold box-border caret-transparent">
          40 seconds
        </strong>
        .
      </p>
      <p className="text-[14.4px] box-border caret-transparent leading-[21.6px] opacity-90 mt-3 mb-[14.4px]">
        <strong className="font-bold box-border caret-transparent">
          Please Do not close or refresh this page.
        </strong>
        Closing the window may cause your application to fail.
      </p>
    </div>
  );
};
