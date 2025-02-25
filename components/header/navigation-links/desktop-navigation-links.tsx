import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath }) => {
  return (
    <PopoverGroup className="hidden gap-x-5 lg:flex lg:flex-1">
      {menuConfig.map((menuItem) =>
        menuItem.subMenu ? (
          <Popover key={menuItem.title} className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  key={menuItem.title}
                  className={cn(
                    "relative inline-flex items-center rounded-full px-4 py-1.5 text-base font-semibold text-gray-600 ring-1 ring-transparent transition duration-200 active:scale-[96%] active:ring-black/20 dark:text-zinc-400",
                    {
                      "bg-transparent ring-transparent hover:bg-gradient-to-tr hover:from-gray-200 hover:via-gray-100 hover:to-gray-50 hover:shadow-md hover:shadow-black/5 hover:ring-1 hover:ring-black/10 dark:hover:from-zinc-800/20 dark:hover:via-zinc-800/10 dark:hover:to-zinc-800 dark:hover:ring-zinc-700/40":
                        currentPath !== menuItem.slug,
                      "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 px-4 shadow-md shadow-black/5 ring-1 ring-black/10 dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:ring-zinc-700/40":
                        currentPath === menuItem.slug,
                    },
                  )}
                  aria-current={
                    currentPath === menuItem.slug ? "page" : undefined
                  }
                >
                  {menuItem.title}
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-gray-50 p-2 shadow-lg ring-1 ring-gray-300 transition dark:bg-zinc-900 dark:ring-zinc-700"
                >
                  {menuItem.subMenu?.map((subMenuItem) => (
                    <CloseButton
                      as={Link}
                      key={subMenuItem.title}
                      href={subMenuItem.slug}
                      prefetch={true}
                      className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 hover:text-black dark:text-zinc-400 hover:dark:bg-zinc-800 dark:hover:text-white"
                    >
                      {subMenuItem.title}
                    </CloseButton>
                  ))}
                </PopoverPanel>
              </>
            )}
          </Popover>
        ) : (
          <Link
            key={menuItem.title}
            href={menuItem.slug}
            className={cn(
              "relative inline-flex items-center rounded-full px-4 py-1.5 text-base font-semibold text-gray-600 ring-1 ring-transparent transition duration-200 active:scale-[96%] active:ring-black/20 dark:text-zinc-400",
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
        ),
      )}
    </PopoverGroup>
  );
};

export default DesktopNavigationLinks;
