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
        </div>
        {/* Menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400"
          aria-label="Open mobile menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <DialogPanel className="min-h-screen bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between px-6 py-4">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400"
              aria-label="Close mobile menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CloseIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="px-6 py-4">
            <ul className="space-y-4">
              {menuConfig.map((menuItem) => (
                <li key={menuItem.slug}>
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
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
