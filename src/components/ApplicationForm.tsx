import { Navbar } from "../sections/Navbar";
import { LoadingModal } from "../sections/Apply/Components/LoadingModal"; 
import { Apply } from "../sections/Apply";
import { Footer } from "../sections/Footer";

export const ApplicationForm = () => {
  return (
    <body className="text-gray-900 text-base not-italic normal-nums font-normal accent-auto bg-slate-100 bg-[radial-gradient(circle_at_0%_0%,rgba(0,80,179,0.12),rgba(0,0,0,0)_55%),radial-gradient(circle_at_100%_100%,rgba(245,128,37,0.08),rgba(0,0,0,0)_55%),none] bg-size-[auto,auto,auto] box-border caret-transparent block tracking-[normal] leading-[25.6px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible bg-[position:0%,0%,0%_0%,0%,0%] border-separate font-montserrat">
      <div className="absolute pointer-events-none box-border caret-transparent leading-4 text-left w-full z-[2147483638] left-0 top-0 font-helvetica"></div>
      <Navbar/>      
      <LoadingModal />
      <Apply/>
      <Footer/>
    <iframe
        name="__uspapiLocator"
        className="box-border caret-transparent hidden border-zinc-100"
      ></iframe>
      <div className="absolute bg-white border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-zinc-300 shadow-[rgba(0,0,0,0.3)_0px_2px_6px_0px] box-border caret-transparent hidden w-0 z-[1000] overflow-hidden rounded-sm border-t left-0 top-[120px] font-arial after:accent-auto after:bg-[url('https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png')] after:bg-right after:bg-no-repeat after:bg-size-[120px_14px] after:box-border after:caret-transparent after:text-gray-900 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[18px] after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-right after:indent-[0px] after:normal-case after:visible after:pr-px after:py-px after:border-separate after:font-arial"></div>
      <div className="absolute bg-white border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-zinc-300 shadow-[rgba(0,0,0,0.3)_0px_2px_6px_0px] box-border caret-transparent hidden w-0 z-[1000] overflow-hidden rounded-sm border-t left-0 top-[120px] font-arial after:accent-auto after:bg-[url('https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png')] after:bg-right after:bg-no-repeat after:bg-size-[120px_14px] after:box-border after:caret-transparent after:text-gray-900 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[18px] after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-right after:indent-[0px] after:normal-case after:visible after:pr-px after:py-px after:border-separate after:font-arial"></div>
    </body>
  );
};
