"use client";

import Logo from "@/components/ui/logo";
import { menuConfig } from "@/config";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  return (
    <>
      <nav className="mx-auto flex max-w-5xl items-center justify-between bg-white px-6 py-4 dark:bg-gray-800 md:hidden">
        {/* Logo */}
        <div className="flex flex-1 justify-start">
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-600 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dialog */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-800">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-50 py-4 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-600">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1 justify-start pl-6">
                <Logo />
              </div>
              {/* Close icon */}
              <div className="flex flex-1 justify-end pr-6">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-600 dark:text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Menu */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menuConfig.map((menuItem) => (
                    <Link
                      key={menuItem.title}
                      href={menuItem.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block ${currentPath === menuItem.slug ? "bg-blue-100 text-gray-900 dark:bg-sky-100 dark:text-gray-800" : "text-gray-600 dark:text-gray-400"} px-6 py-2 text-lg font-semibold tracking-tight`}
                    >
                      {menuItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
