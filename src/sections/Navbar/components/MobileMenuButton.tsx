type Props = {
  onToggle: () => void;
};

export const MobileMenuButton = ({ onToggle }: Props) => {
  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      onClick={onToggle}
      className="relative text-stone-950/30 text-[13.3333px] items-center bg-white shadow-[rgba(0,0,0,0.08)_0px_6px_16px_0px] caret-transparent flex h-[42px] justify-center leading-[normal] min-h-[auto] min-w-[auto] text-center w-[42px] border border-gray-300 mr-2.5 p-0 rounded-xl border-solid font-arial md:static md:hidden md:min-h-0 md:min-w-0 md:mr-0 hover:bg-slate-100 hover:shadow-[rgba(0,0,0,0.1)_0px_8px_22px_0px] hover:border-slate-300"
    >
      <span className="absolute text-gray-900 text-[20px] box-border caret-transparent block leading-[20px]">
        <i className="fa-solid fa-bars"></i>
      </span>
    </button>
  );
};
