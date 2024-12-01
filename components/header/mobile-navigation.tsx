"use client";

import { Logo } from "@/components/ui/";
import { menuConfig } from "@/config";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="mx-auto flex max-w-5xl items-center justify-between bg-white px-6 py-4 dark:bg-gray-800 md:hidden">
        {/* Login */}
        <div className="flex flex-1 justify-start pl-2">
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 justify-end pr-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-lg border-none bg-white p-2.5 text-gray-600 shadow-md shadow-black/5 ring-1 ring-gray-200 transition-transform duration-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-600 dark:hover:bg-gray-900"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-800">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-50 px-6 py-4 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-600">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1 justify-start pl-2">
                <Logo />
              </div>
              {/* Close icon */}
              <div className="flex flex-1 justify-end pr-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-lg border-none bg-white p-2.5 text-gray-600 shadow-md shadow-black/5 ring-1 ring-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-600 dark:hover:bg-gray-900"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>

            {/* Menu */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menuConfig.map((item, index) => (
                    <Link
                      key={index}
                      href={item.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                    >
                      {item.title}
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
