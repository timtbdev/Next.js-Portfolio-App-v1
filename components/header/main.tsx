"use client";

import { usePathname } from "next/navigation";
import Logo from "./logo";
import DesktopNavigationLinks from "./navigation-links/desktop-navigation-links";
import MobileNavigationLinks from "./navigation-links/mobile-navigation-links";
import ToggleTheme from "./toggle-theme";

const Header = () => {
  const path = usePathname();
  const currentPath = `/${path.split("/")[1]}`;
  return (
    <header className="sticky top-0 z-10 border-b-[1.2px] border-zinc-600/20 bg-white/30 shadow-sm shadow-zinc-800/5 backdrop-blur-lg dark:border-zinc-700/40 dark:bg-zinc-900/80">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-2.5 md:py-5"
      >
        <div className="z-10 flex flex-1 justify-start">
          <Logo />
          <MobileNavigationLinks currentPath={currentPath} />
        </div>
        <DesktopNavigationLinks currentPath={currentPath} />
        <div className="flex flex-1 justify-end">
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

export default Header;
