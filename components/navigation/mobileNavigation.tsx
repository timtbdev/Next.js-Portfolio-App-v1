"use client";

import Logo from "@/components/ui/logo";
import { menuConfig } from "@/config";
import { cn } from "@/lib/helpers";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowRight as ArrowRightIcon,
  X as CloseIcon,
  Menu as MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  return (
    <>
      <nav
        aria-label="Mobile Navigation"
        className="mx-auto flex max-w-5xl items-center justify-between bg-white px-6 py-4 dark:bg-gray-800 md:hidden"
      >
        {/* Logo */}
        <div className="flex flex-1 justify-start">
          <Logo />
          <span className="sr-only">Logo</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-600 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dialog */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-800">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-50 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-600">
            <div className="flex items-center justify-between border-b-[1.2px] border-gray-300 py-4 shadow-sm dark:border-gray-500">
              {/* Logo */}
              <div className="flex flex-1 justify-start pl-6">
                <Logo />
                <span className="sr-only">Logo</span>
              </div>
              {/* Close icon */}
              <div className="flex flex-1 justify-end pr-6">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-600 dark:text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Menu */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 border-b border-gray-300 dark:border-gray-500">
                <ul role="list" className="mx-2 space-y-2 px-3 py-4">
                  {menuConfig.map((menuItem) => (
                    <li key={menuItem.title}>
                      {/* <Link
                        key={menuItem.title}
                        href={menuItem.slug}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block ${currentPath === menuItem.slug ? "bg-blue-100 text-gray-900 dark:bg-sky-100 dark:text-gray-800" : "text-gray-600 dark:text-gray-400"} px-6 py-2 text-lg font-semibold tracking-tight`}
                      >
                        {menuItem.title}
                      </Link> */}

                      <Link
                        href={menuItem.slug}
                        className={cn(
                          currentPath === menuItem.slug
                            ? "bg-gray-100 text-blue-500 dark:text-sky-500"
                            : "text-gray-600 hover:bg-gray-100 hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-50 dark:hover:text-sky-500",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                        )}
                      >
                        <menuItem.icon
                          aria-hidden="true"
                          className={cn(
                            currentPath === menuItem.slug
                              ? "text-blue-500 dark:text-sky-500"
                              : "text-gray-600 group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-sky-500",
                            "size-6 shrink-0",
                          )}
                        />
                        {menuItem.title}

                        <ArrowRightIcon
                          aria-hidden="true"
                          className="ml-auto h-5 w-5 text-gray-600 dark:text-gray-400"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
