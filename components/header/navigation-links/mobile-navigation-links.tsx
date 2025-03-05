import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const MobileNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  return (
    <Popover className={cn(className)}>
      {({ open, close }) => (
        <>
          <PopoverButton
            className="transiton group relative inset-px z-10 inline-flex rounded-md bg-transparent p-2 focus:outline-hidden"
            aria-label="Toggle site navigation"
          >
            <div className="group flex size-6 items-center justify-center">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                  { "rotate-45": open },
                  { "-translate-y-1.5": !open },
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                  { "opacity-0": open },
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
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
                  transition
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 transition duration-100 ease-out data-closed:opacity-0"
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
                  className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl border-b border-gray-300 bg-white px-6 pt-20 pb-10 shadow-xs"
                >
                  <ul className="space-y-4">
                    {menuConfig.map((menuItem) => (
                      <li key={menuItem.slug}>
                        <CloseButton
                          as={Link}
                          href={menuItem.slug}
                          className={cn(
                            "group inline-flex w-full gap-2 rounded-full border border-gray-300 px-6 py-4",
                            {
                              "bg-gray-100 shadow-xs":
                                currentPath === menuItem.slug,
                              "hover:bg-gray-100 hover:shadow-xs":
                                currentPath !== menuItem.slug,
                            },
                          )}
                          onClick={close}
                        >
                          <MenuEmoji
                            currentPath={currentPath === menuItem.slug}
                            emoji={menuItem.emoji}
                            className="mr-4 text-2xl"
                          />
                          <MenuTitle
                            title={menuItem.title}
                            currentPath={currentPath === menuItem.slug}
                          />
                        </CloseButton>
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
