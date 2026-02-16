import { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { MobileMenuButton } from "./MobileMenuButton";
import { DesktopMenu } from "./DesktopMenu";


export const NavbarContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative items-end box-border caret-transparent gap-x-5 flex justify-between max-w-[1140px] gap-y-5 w-full mx-auto py-[9.6px] md:static md:gap-x-7 md:gap-y-7 md:py-[13.6px]">
        <NavbarLogo />
      <div className="flex items-center justify-between">
        <MobileMenuButton onToggle={() => setMenuOpen(prev => !prev)} />
      </div>

      <DesktopMenu isOpen={menuOpen} />
    </div>
  );
};
