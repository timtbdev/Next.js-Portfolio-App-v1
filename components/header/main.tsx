"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import LogoButton from "./logo-button";
import DesktopNavigationLinks from "./navigation-links/desktop-navigation-links";
import MobileNavigationLinks from "./navigation-links/mobile-navigation-links";
import ProgressBar from "./progress-bar";
import SearchButton from "./search-button";

interface Props {
  showProgressBar?: boolean;
}

const Header: FC<Props> = ({ showProgressBar = false }) => {
  const path = usePathname();
  const currentPath = `/${path.split("/")[1]}`;
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-16 items-center border-b-[1.2px] border-gray-300 bg-white shadow-xs md:h-20">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-6 md:py-5"
      >
        <div className="flex flex-1 justify-start">
          <LogoButton className="hidden md:flex" />
          <MobileNavigationLinks
            currentPath={currentPath}
            className="md:hidden"
          />
        </div>
        <DesktopNavigationLinks
          currentPath={currentPath}
          className="hidden md:flex"
        />

        <div className="flex flex-1 justify-end">
          <SearchButton />
        </div>
      </nav>
      {showProgressBar && <ProgressBar />}
    </header>
  );
};

export default Header;
