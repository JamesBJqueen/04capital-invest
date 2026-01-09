import { FooterContent } from "./components/FooterContent";
import { FooterBottom } from "./components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.08),rgba(0,0,0,0)_60%),none] bg-size-[auto,auto] border-b-gray-900 border-l-gray-900 border-r-gray-900 border-t-slate-400/50 box-border caret-transparent bg-[position:0%,0%_0%,0%] pt-12 pb-8 border-t">
      <FooterContent />
      <FooterBottom />
    </footer>
  );
};
