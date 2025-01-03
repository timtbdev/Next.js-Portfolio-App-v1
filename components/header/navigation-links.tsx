"use client";

import menuConfig from "@/config/layout/menu";
import { cn } from "@/utils/helpers";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import ToggleTheme from "./toggle-theme";

export default function NavigationLinks() {
  const currentPath = usePathname();

  return (
    <>
      {/* Desktop Navigation Links */}
      <div className="hidden gap-x-5 lg:flex lg:flex-1">
        {menuConfig.map((menuItem) => (
          <Link
            key={menuItem.title}
            href={menuItem.slug}
            className={cn(
              "relative inline-flex items-center rounded-full px-4 py-1.5 text-base font-semibold text-zinc-600 ring-1 ring-transparent transition duration-200 active:scale-[96%] active:ring-black/20 dark:text-zinc-400",
              {
                "bg-transparent ring-transparent hover:bg-gradient-to-tr hover:from-gray-200 hover:via-gray-100 hover:to-gray-50 hover:shadow-md hover:shadow-black/5 hover:ring-1 hover:ring-black/10 dark:hover:from-zinc-800/20 dark:hover:via-zinc-800/10 dark:hover:to-zinc-800 dark:hover:ring-zinc-700/40":
                  currentPath !== menuItem.slug,
                "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 px-4 shadow-md shadow-black/5 ring-1 ring-black/10 dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:ring-zinc-700/40":
                  currentPath === menuItem.slug,
              },
            )}
            aria-current={currentPath === menuItem.slug ? "page" : undefined}
            prefetch={true}
          >
            {menuItem.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 justify-end">
        {/* Toggle Theme Button for Desktop Navigation*/}
        <ToggleTheme className="hidden lg:block" />

        {/* Mobile Navigation Popover*/}
        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              <PopoverButton
                className="transiton group relative inset-px z-10 inline-flex rounded-md bg-transparent p-2 focus:outline-none"
                aria-label="Toggle site navigation"
              >
                {({ open }) => (
                  <div className="flex h-6 w-6 items-center justify-center text-zinc-600 dark:text-zinc-400">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute block h-0.5 w-5 bg-current transition-transform duration-500 ease-in-out",
                        { "rotate-45": open },
                        { "-translate-y-1.5": !open },
                      )}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute block h-0.5 w-5 bg-current transition-transform duration-500 ease-in-out",
                        { "opacity-0": open },
                      )}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute block h-0.5 w-5 bg-current transition-transform duration-500 ease-in-out",
                        { "-rotate-45": open },
                        { "translate-y-1.5": !open },
                      )}
                    ></span>
                  </div>
                )}
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
                      className="fixed inset-0 z-0 bg-zinc-300/60 backdrop-blur dark:bg-zinc-800/60"
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
                      className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-zinc-50 px-6 pt-20 shadow-2xl shadow-zinc-800/5 dark:bg-zinc-900"
                    >
                      {/* Mobile Navigation Links */}
                      <ul className="space-y-2">
                        {menuConfig.map((menuItem) => (
                          <li key={menuItem.slug}>
                            <CloseButton
                              as={Link}
                              href={menuItem.slug}
                              className={`${
                                currentPath === menuItem.slug
                                  ? "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 px-4 text-zinc-600 shadow-md shadow-black/5 ring-1 ring-black/10 dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:text-zinc-400 dark:ring-zinc-700/40"
                                  : "text-zinc-600 hover:bg-zinc-200/40 dark:text-zinc-400 dark:hover:bg-zinc-500/10"
                              } text-md group flex gap-x-4 rounded-full p-4 font-semibold`}
                            >
                              <menuItem.icon
                                aria-hidden="true"
                                className="text-zinc-600 dark:text-zinc-400"
                              />
                              {menuItem.title}
                            </CloseButton>
                          </li>
                        ))}
                      </ul>
                      <div className="mx-auto mt-2 flex items-center justify-center py-6 text-center">
                        {/* Toggle Theme Button for Mobile Navigation*/}
                        <ToggleTheme />
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}
