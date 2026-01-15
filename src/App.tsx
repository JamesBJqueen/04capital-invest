import { Routes, Route } from 'react-router-dom'
import { MainContent } from "./components/MainContent";
import { About } from "./components/About";
import { Contact } from "./components/ContactUs";
import {FAQs} from "./components/FAQs"
import {ApplicationForm} from "./components/ApplicationForm"

export const App = () => {
  return (
    <div className="text-gray-900 text-base not-italic normal-nums font-normal accent-auto bg-slate-100 bg-[radial-gradient(circle_at_0%_0%,rgba(0,80,179,0.12),rgba(0,0,0,0)_55%),radial-gradient(circle_at_100%_100%,rgba(245,128,37,0.08),rgba(0,0,0,0)_55%),none] bg-size-[auto,auto,auto] box-border caret-transparent block tracking-[normal] leading-[25.6px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible bg-[position:0%,0%,0%_0%,0%,0%] border-separate font-montserrat" role="document">
    <div className="absolute pointer-events-none box-border caret-transparent leading-4 text-left w-full z-[2147483638] left-0 top-0 font-helvetica"></div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/ApplicationForm" element={<ApplicationForm />} />
      </Routes>
      <iframe
        name="__uspapiLocator"
        className="box-border caret-transparent hidden border-zinc-100"
      ></iframe>
    </div>
  );
};
