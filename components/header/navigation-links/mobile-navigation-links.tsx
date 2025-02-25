import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import {
  CloseButton,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { FC, useRef } from "react";

interface Props {
  currentPath: string;
}

const MobileNavigationLinks: FC<Props> = ({ currentPath }) => {
  return (
    <Popover className="lg:hidden">
      {({ open, close }) => (
        <>
          <PopoverButton
            className="transiton group relative inset-px z-10 inline-flex rounded-md bg-transparent p-2 focus:outline-none"
            aria-label="Toggle site navigation"
          >
            <div className="flex h-6 w-6 items-center justify-center text-gray-600 dark:text-zinc-400">
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
                  className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-zinc-50 px-6 pb-10 pt-20 shadow-2xl shadow-zinc-800/5 dark:bg-zinc-900"
                >
                  <ul className="space-y-2">
                    {menuConfig.map((menuItem) => (
                      <li key={menuItem.slug}>
                        {menuItem.subMenu ? (
                          <Disclosure>
                            <DisclosureButton className="w-full py-2">
                              <div
                                className={`${
                                  currentPath === menuItem.slug
                                    ? "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 px-4 text-gray-600 shadow-md shadow-black/5 ring-1 ring-black/10 dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:text-zinc-400 dark:ring-zinc-700/40"
                                    : "text-gray-600 hover:bg-zinc-200/40 dark:text-zinc-400 dark:hover:bg-zinc-500/10"
                                } text-md group inline-flex w-full items-center gap-x-4 rounded-full p-4 font-semibold`}
                              >
                                <menuItem.icon
                                  aria-hidden="true"
                                  className="text-gray-600 dark:text-zinc-400"
                                />
                                {menuItem.title}
                                <ChevronDownIcon
                                  aria-hidden="true"
                                  className="ml-auto size-4 text-gray-600 dark:text-zinc-400"
                                />
                              </div>
                            </DisclosureButton>
                            <DisclosurePanel className="pl-4 pr-10 text-gray-500">
                              {menuItem.subMenu?.map((subMenuItem) => (
                                <CloseButton
                                  as={Link}
                                  key={subMenuItem.slug}
                                  href={subMenuItem.slug}
                                  className="group inline-flex w-full items-center gap-x-4 rounded-full px-4 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 hover:text-black dark:text-zinc-400 hover:dark:bg-zinc-800 hover:dark:text-white"
                                  onClick={close}
                                >
                                  <subMenuItem.icon className="size-5 text-gray-600 group-hover:text-black dark:text-zinc-400 group-hover:dark:text-white" />
                                  {subMenuItem.title}
                                </CloseButton>
                              ))}
                            </DisclosurePanel>
                          </Disclosure>
                        ) : (
                          <CloseButton
                            as={Link}
                            href={menuItem.slug}
                            className={`${
                              currentPath === menuItem.slug
                                ? "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 px-4 text-gray-600 shadow-md shadow-black/5 ring-1 ring-black/10 dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:text-zinc-400 dark:ring-zinc-700/40"
                                : "text-gray-600 hover:bg-zinc-200/40 dark:text-zinc-400 dark:hover:bg-zinc-500/10"
                            } text-md group flex gap-x-4 rounded-full p-4 font-semibold`}
                            onClick={close}
                          >
                            <menuItem.icon
                              aria-hidden="true"
                              className="text-gray-600 dark:text-zinc-400"
                            />
                            {menuItem.title}
                          </CloseButton>
                        )}
                      </li>
                    ))}
                  </ul>
                </PopoverPanel>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};

export default MobileNavigationLinks;
