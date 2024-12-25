"use client";

import logo from "@/public/images/logo.png";
import { MenuType } from "@/types";
import { cn } from "@/utils/helpers";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X as CloseIcon,
  CodeIcon,
  FileTextIcon,
  HomeIcon,
  MailIcon,
  Menu as MenuIcon,
  UserIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Menu Configuration
const menuConfig: MenuType[] = [
  {
    id: 1,
    title: "Home",
    slug: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "About",
    slug: "/about",
    icon: UserIcon,
  },
  {
    id: 3,
    title: "Projects",
    slug: "/projects",
    icon: CodeIcon,
  },
  {
    id: 3,
    title: "Blog",
    slug: "/blog",
    icon: FileTextIcon,
  },
  {
    id: 4,
    title: "Contact",
    slug: "/contact",
    icon: MailIcon,
  },
];

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
      <div className="text-md ml-2 font-medium text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white">
        Tim
      </div>
    </Link>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="1"
          y1="12"
          x2="2"
          y2="12"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="4.2"
          y1="4.2"
          x2="4.9"
          y2="4.9"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="12"
          y1="1"
          x2="12"
          y2="2"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="19.8"
          y1="4.2"
          x2="19.1"
          y2="4.9"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="23"
          y1="12"
          x2="22"
          y2="12"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="19.8"
          y1="19.8"
          x2="19.1"
          y2="19.1"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="12"
          y1="23"
          x2="12"
          y2="22"
        ></line>{" "}
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="4.2"
          y1="19.8"
          x2="4.9"
          y2="19.1"
        ></line>{" "}
        <circle
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          cx="12"
          cy="12"
          r="6"
        ></circle>
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M19,15C13.5,15,9,10.5,9,5 c0-0.9,0.1-1.8,0.4-2.6C5.1,3.5,2,7.4,2,12c0,5.5,4.5,10,10,10c4.6,0,8.5-3.1,9.6-7.4C20.8,14.9,19.9,15,19,15z"
        ></path>
      </g>
    </svg>
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
        "transiton group inset-px flex rounded-full bg-gradient-to-t from-gray-100 via-gray-50 to-white p-2 shadow-md shadow-black/5 ring-1 ring-black/10 transition duration-200 hover:bg-gradient-to-tr hover:from-gray-100 hover:via-gray-100 hover:to-gray-50 active:scale-[96%] active:ring-black/20 dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:ring-zinc-700/40 dark:hover:from-zinc-800/20 dark:hover:via-zinc-800/10 dark:hover:to-zinc-800",
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

      <span className="text-md ml-2 flex text-zinc-600 dark:text-zinc-400 md:hidden">
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
        {/* This will be hidden on mobile devices */}
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
          {/* This will be hidden on mobile devices */}
          <ToggleTheme className="hidden lg:block" />

          {/* Mobile Navigation*/}
          {/* This will be show up on mobile devices */}
          <Popover className="lg:hidden">
            {({ open }) => (
              <>
                <PopoverButton
                  className="group relative z-10 inline-flex items-center rounded-lg p-2 hover:bg-zinc-200/40 dark:hover:bg-zinc-500/10"
                  aria-label="Toggle site navigation"
                >
                  {({ open }) =>
                    open ? (
                      <CloseIcon className="h-6 w-6 text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white" />
                    ) : (
                      <MenuIcon className="h-6 w-6 text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white" />
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
                        className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-zinc-50 px-6 pb-6 pt-24 shadow-2xl shadow-zinc-800/5 dark:bg-zinc-900"
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
                                    ? "bg-zinc-200/40 text-zinc-950 dark:bg-zinc-500/10 dark:text-white"
                                    : "text-zinc-600 hover:bg-zinc-200/40 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-500/10 dark:hover:text-white"
                                } text-md group flex gap-x-4 rounded-full p-4 font-semibold`}
                              >
                                <menuItem.icon
                                  aria-hidden="true"
                                  className={`${
                                    currentPath === menuItem.slug
                                      ? "text-zinc-950 dark:text-white"
                                      : "text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white"
                                  } h-6 w-6 flex-shrink-0`}
                                />
                                {menuItem.title}
                              </CloseButton>
                            </li>
                          ))}
                        </ul>
                        <div className="mx-auto mt-8 flex items-center justify-center border-t border-zinc-600/20 py-4 text-center dark:border-zinc-700/40">
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
