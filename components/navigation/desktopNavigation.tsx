"use client";

import Logo from "@/components/ui/logo";
import ToggleTheme from "@/components/ui/toggleTheme";
import { menuConfig } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopNavigation = () => {
  const currentPath = usePathname();
  return (
    <>
      <nav className="mx-auto hidden max-w-5xl items-center justify-between px-2 py-5 md:flex">
        {/* Logo */}
        <div className="flex flex-1 justify-start pl-2">
          <Logo />
        </div>

        {/* Navigation */}
        <div>
          <div className="flex flex-1 gap-x-6">
            <div className="hidden gap-x-6 md:flex">
              {menuConfig.map((menuItem) => (
                <Link
                  href={
                    menuItem.slug === "/" ? menuItem.slug : `/${menuItem.slug}`
                  }
                  key={crypto.randomUUID()}
                  className="group relative inline-flex items-center rounded-full px-3 py-1 text-lg font-semibold tracking-tight antialiased"
                >
                  <span
                    className={cn(
                      "relative ml-1",
                      {
                        "text-gray-900 dark:text-gray-100":
                          currentPath ===
                          (menuItem.slug === "/"
                            ? menuItem.slug
                            : `/${menuItem.slug}`),
                      },
                      {
                        "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100":
                          currentPath !==
                          (menuItem.slug === "/"
                            ? menuItem.slug
                            : `/${menuItem.slug}`),
                      },
                    )}
                  >
                    {menuItem.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle theme */}
        <div className="flex flex-1 justify-end">
          <ToggleTheme />
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigation;
