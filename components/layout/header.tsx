"use client";

import menuConfig from "@/config/components/menu";
import { MoonIcon, SunIcon } from "@/icons/theme";
import logo from "@/public/images/logo.png";
import { cn } from "@/utils/helpers";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Logo Component
function Logo() {
  return (
    <Link href="/" className="group mr-4 flex items-center">
      {/* Logo Image */}
      <div className="group flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-600/20 dark:ring-zinc-700/40">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </div>
      {/* Logo Text */}
      <div className="text-md ml-2 font-medium text-zinc-600 group-hover:text-blue-500 dark:text-zinc-400 dark:group-hover:text-sky-500">
        Tim
      </div>
    </Link>
  );
}

// Toggle Theme Component
function ToggleTheme({ className }: { className?: string }) {
  // Destructure resolvedTheme and setTheme from useTheme hook
  let { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "transiton group inset-px flex gap-1 rounded-full bg-gradient-to-t from-gray-100 via-gray-50 to-white p-2.5 shadow-md shadow-black/5 ring-1 ring-black/10 transition duration-200 hover:bg-gradient-to-tr hover:from-gray-100 hover:via-gray-100 hover:to-gray-50 dark:bg-gradient-to-bl dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:ring-zinc-700/40 dark:hover:bg-gradient-to-tr dark:hover:from-zinc-800/20 dark:hover:via-zinc-800/10 dark:hover:to-zinc-800",
        className,
      )}
      // Toggle between light and dark themes on button click
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      suppressHydrationWarning
    >
      {/* Sun icon for light theme, hidden in dark mode */}
      <SunIcon className="hidden h-6 w-6 text-zinc-400 dark:block" />
      {/* Moon icon for dark theme, hidden in light mode */}
      <MoonIcon className="h-6 w-6 text-zinc-600 dark:hidden" />
      {/* Visually hidden text for screen readers to describe the toggle theme button */}

      <span className="text-md flex text-base font-semibold text-zinc-600 dark:text-zinc-400 md:hidden">
        Switch to&nbsp;<span className="hidden dark:inline">light</span>
        <span className="inline dark:hidden">dark</span>
        &nbsp;mode
      </span>
    </button>
  );
}

// Header Component
export default function Header() {
  const currentPath = usePathname();
  return (
    <div className="sticky top-0 z-10 border-b-[1.2px] border-zinc-600/20 bg-white shadow-sm shadow-zinc-800/5 dark:border-zinc-700/40 dark:bg-zinc-900">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-2.5 md:py-5"
      >
        {/* Logo */}
        <div className="z-10 flex flex-1 justify-start">
          <Logo />
        </div>

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

          {/* Mobile Navigation*/}
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
      </nav>
    </div>
  );
}
