"use client";

import Logo from "@/components/logo";
import ToggleTheme from "@/components/toggleTheme";
import { cn } from "@/shared/lib/helpers";
import { MenuType } from "@/types";
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
import { Link } from "next-view-transitions";
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

export default function Header() {
  const currentPath = usePathname();
  return (
    <div className="sticky top-0 z-10 border-b-[1.2px] border-zinc-600/20 bg-white shadow-sm shadow-zinc-800/5 dark:border-zinc-700/40 dark:bg-zinc-900">
      <nav
        aria-label="Desktop Navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"
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
              className={`text-md font-medium ${currentPath === menuItem.slug ? "text-zinc-950 dark:text-zinc-300" : "text-zinc-600 dark:text-zinc-400"} hover:text-zinc-950 dark:hover:text-white`}
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
                                className={cn(
                                  currentPath === menuItem.slug
                                    ? "bg-zinc-200/40 text-zinc-950 dark:bg-zinc-500/10 dark:text-white"
                                    : "text-zinc-600 hover:bg-zinc-200/40 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-500/10 dark:hover:text-white",
                                  "text-md group flex gap-x-4 rounded-full p-4 font-semibold",
                                )}
                              >
                                <menuItem.icon
                                  aria-hidden="true"
                                  className={cn(
                                    currentPath === menuItem.slug
                                      ? "text-zinc-950 dark:text-white"
                                      : "text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white",
                                    "h-6 w-6 flex-shrink-0",
                                  )}
                                />
                                {menuItem.title}
                              </CloseButton>
                            </li>
                          ))}
                        </ul>
                        <div className="mx-auto mt-8 flex items-center justify-center border-t border-zinc-600/20 py-4 text-center dark:border-zinc-700/40">
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
