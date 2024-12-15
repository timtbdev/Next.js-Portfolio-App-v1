"use client";

import Logo from "@/components/ui/logo";
import ToggleTheme from "@/components/ui/toggleTheme";
import { menuConfig } from "@/config";
import { cn } from "@/lib/helpers";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight as ArrowRightIcon,
  X as CloseIcon,
  Menu as MenuIcon,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React, { use } from "react";

export default function Header() {
  const currentPath = usePathname();
  return (
    <div className="sticky top-0 z-50 border-b-[1.2px] border-gray-300 bg-white shadow-sm dark:border-gray-500 dark:bg-gray-800">
      <nav
        aria-label="Desktop Navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-10 py-5 md:px-8 lg:px-6"
      >
        {/* Logo */}
        <div className="z-10 flex flex-1 justify-start">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        {/* This will be hidden on mobile devices */}
        <div className="hidden gap-x-10 lg:flex lg:flex-1">
          {menuConfig.map((menuItem) => (
            <Link
              key={menuItem.title}
              href={menuItem.slug}
              className={`text-md font-semibold ${currentPath === menuItem.slug ? "text-blue-500 dark:text-sky-500" : "text-gray-600 dark:text-gray-400"} hover:text-blue-500 hover:underline hover:underline-offset-8 dark:hover:text-sky-500`}
              aria-current={currentPath === menuItem.slug ? "page" : undefined}
              prefetch={true}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 justify-end">
          {/* Toggle Theme Button for Desktop Navigation*/}
          {/* This will be hidden on mobile devices */}
          <ToggleTheme mobile={false} className="hidden lg:block" />

          {/* Popover for Mobile Navigation */}
          {/* This will be show up on mobile devices */}
          <Popover className="lg:hidden">
            {({ open }) => (
              <>
                <PopoverButton
                  className="ui-not-focus-visible:outline-none relative z-10 inline-flex items-center rounded-lg p-2 hover:bg-gray-200/50 dark:hover:bg-gray-900"
                  aria-label="Toggle site navigation"
                >
                  {({ open }) =>
                    open ? (
                      <CloseIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <MenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    )
                  }
                </PopoverButton>
                <AnimatePresence initial={false}>
                  {open && (
                    <>
                      <PopoverBackdrop
                        static
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur dark:bg-gray-800/60"
                      />
                      <PopoverPanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -32,
                          transition: { duration: 0.2 },
                        }}
                        className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20 dark:bg-gray-800"
                      >
                        {/* Mobile Navigation Links */}
                        <ul className="space-y-2">
                          {menuConfig.map((menuItem) => (
                            <li key={menuItem.slug}>
                              <CloseButton
                                as={Link}
                                href={menuItem.slug}
                                className={cn(
                                  currentPath === menuItem.slug
                                    ? "bg-blue-500/10 text-blue-500 dark:bg-gray-800 dark:text-sky-500"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-sky-500",
                                  "text-md group flex gap-x-3 rounded-full p-2 font-semibold",
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
                              </CloseButton>
                            </li>
                          ))}
                        </ul>
                        <div className="mx-auto mt-8 flex items-center justify-center border-t border-gray-900/10 py-4 text-center dark:border-white/10">
                          {/* Toggle Theme Button for Mobile Navigation*/}
                          <ToggleTheme mobile={true} />
                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </div>
  );
}
