
import { Link } from 'react-router-dom'
type Props = {
  isOpen: boolean;
};

export const DesktopMenu = ({ isOpen }: Props) => {
  return (
    <nav className={`
        absolute top-full inset-x-0
  text-[14.4px] leading-[23.04px]
  bg-white
  border-t border-t-slate-400/40
  border-l border-r border-b border-gray-900
  shadow-[rgba(15,23,42,0.14)_0px_18px_42px_0px]
  px-5 pt-3 pb-4
  gap-1
  z-[999]

  ${isOpen ? "flex" : "hidden"}
  flex-col

  md:static
  md:flex
  md:flex-row
  md:items-center
  md:bg-transparent
  md:border-0
  md:border-t-0
  md:shadow-none
  md:gap-x-7 md:gap-y-7
  md:p-0
  md:text-[14.72px] md:leading-[23.552px]
  md:z-auto
      `}>
      <Link to="/" className="relative text-gray-600 text-[15.2px] font-medium border-b-gray-100 border-l-gray-600 border-r-gray-600 border-t-gray-600 box-border caret-transparent inline tracking-[0.456px] leading-[24.32px] min-h-0 min-w-0 w-full py-[9.6px] border-b md:text-[14.72px] md:border-b-gray-600 md:block md:tracking-[0.4416px] md:leading-[23.552px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-0 md:pb-[2.4px] md:border-b-0 after:accent-auto after:bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] after:bottom-[-2.4px] after:box-border after:caret-transparent after:text-gray-600 after:hidden after:text-[15.2px] after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.456px] after:leading-[24.32px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:rounded-[999px] after:border-separate after:left-0 after:font-montserrat after:md:block after:md:text-[14.72px] after:md:tracking-[0.4416px] after:md:leading-[23.552px] hover:text-gray-900 hover:border-b-gray-900 hover:border-l-gray-900 hover:border-r-gray-900 hover:border-t-gray-900"
      >
        Home
      </Link>
      <Link to="/About" className="relative text-gray-600 text-[15.2px] font-medium border-b-gray-100 border-l-gray-600 border-r-gray-600 border-t-gray-600 box-border caret-transparent inline tracking-[0.456px] leading-[24.32px] min-h-0 min-w-0 w-full py-[9.6px] border-b md:text-[14.72px] md:border-b-gray-600 md:block md:tracking-[0.4416px] md:leading-[23.552px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-0 md:pb-[2.4px] md:border-b-0 after:accent-auto after:bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] after:bottom-[-2.4px] after:box-border after:caret-transparent after:text-gray-600 after:hidden after:text-[15.2px] after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.456px] after:leading-[24.32px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:rounded-[999px] after:border-separate after:left-0 after:font-montserrat after:md:block after:md:text-[14.72px] after:md:tracking-[0.4416px] after:md:leading-[23.552px] hover:text-gray-900 hover:border-b-gray-900 hover:border-l-gray-900 hover:border-r-gray-900 hover:border-t-gray-900"
      >
        About Us
      </Link>
      <Link to="/FAQs" className="relative text-gray-600 text-[15.2px] font-medium border-b-gray-100 border-l-gray-600 border-r-gray-600 border-t-gray-600 box-border caret-transparent inline tracking-[0.456px] leading-[24.32px] min-h-0 min-w-0 w-full py-[9.6px] border-b md:text-[14.72px] md:border-b-gray-600 md:block md:tracking-[0.4416px] md:leading-[23.552px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-0 md:pb-[2.4px] md:border-b-0 after:accent-auto after:bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] after:bottom-[-2.4px] after:box-border after:caret-transparent after:text-gray-600 after:hidden after:text-[15.2px] after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.456px] after:leading-[24.32px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:rounded-[999px] after:border-separate after:left-0 after:font-montserrat after:md:block after:md:text-[14.72px] after:md:tracking-[0.4416px] after:md:leading-[23.552px] hover:text-gray-900 hover:border-b-gray-900 hover:border-l-gray-900 hover:border-r-gray-900 hover:border-t-gray-900">
        FAQs
      </Link>
      <Link to="/Contact" className="relative text-gray-600 text-[15.2px] font-medium border-b-gray-100 border-l-gray-600 border-r-gray-600 border-t-gray-600 box-border caret-transparent inline tracking-[0.456px] leading-[24.32px] min-h-0 min-w-0 w-full py-[9.6px] border-b md:text-[14.72px] md:border-b-gray-600 md:block md:tracking-[0.4416px] md:leading-[23.552px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-0 md:pb-[2.4px] md:border-b-0 after:accent-auto after:bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] after:bottom-[-2.4px] after:box-border after:caret-transparent after:text-gray-600 after:hidden after:text-[15.2px] after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.456px] after:leading-[24.32px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:rounded-[999px] after:border-separate after:left-0 after:font-montserrat after:md:block after:md:text-[14.72px] after:md:tracking-[0.4416px] after:md:leading-[23.552px] hover:text-gray-900 hover:border-b-gray-900 hover:border-l-gray-900 hover:border-r-gray-900 hover:border-t-gray-900"
      >
        Contact
      </Link>
      <Link to="/ApplicationForm" className="text-white text-[14.4px] font-semibold items-center self-stretch bg-[linear-gradient(135deg,#0050b3ff,rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_14px_30px_0px] box-border caret-transparent gap-x-[5.6px] inline-flex justify-center tracking-[0.864px] leading-[23.04px] min-h-0 min-w-0 gap-y-[5.6px] text-center uppercase text-nowrap w-full mt-[11.2px] px-[19.2px] py-2 rounded-[999px] md:self-auto md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto md:mt-0 md:px-[22.4px] md:py-[8.8px] hover:shadow-[rgba(0,80,179,0.5)_0px_18px_40px_0px]"
      >
        Apply now
      </Link>
    </nav>
  );
};

