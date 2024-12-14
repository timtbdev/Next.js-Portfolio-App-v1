"use client";

import Logo from "@/components/ui/logo";
import ToggleTheme from "@/components/ui/toggleTheme";
import { menuConfig } from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DesktopNavigation() {
  const currentPath = usePathname();
  return (
    <>
      <nav className="mx-auto hidden max-w-5xl items-center justify-between px-2 py-5 md:flex">
        {/* Logo */}
        <div className="flex flex-1 justify-start pl-2">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 gap-x-10">
          {menuConfig.map((menuItem) => (
            <Link
              key={menuItem.title}
              href={menuItem.slug}
              className={`text-md font-semibold ${currentPath === menuItem.slug ? "text-blue-500 dark:text-sky-500" : "text-gray-600 dark:text-gray-400"} hover:text-blue-500 dark:hover:text-sky-500`}
              aria-current={currentPath === menuItem.slug ? "page" : undefined}
              prefetch={true}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>

        {/* Toggle Theme */}
        <div className="flex flex-1 justify-end pr-2">
          <ToggleTheme />
        </div>
      </nav>
    </>
  );
}
