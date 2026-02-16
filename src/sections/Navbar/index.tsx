import { NavbarContainer } from "./components/NavBarContainer";

export const Navbar = () => {
  return (
    <header className="sticky backdrop-blur-[14px] bg-white border-b-slate-900/10 border-l-gray-900 border-r-gray-900 border-t-gray-900 shadow-[rgba(15,23,42,0.03)_0px_14px_40px_0px] box-border caret-transparent z-[1000] border-b top-0">
      <NavbarContainer />
    </header>
  );
};
