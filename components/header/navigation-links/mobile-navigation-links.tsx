import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { FC, useState } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const MobileNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <div
          className="group relative inset-px z-10 flex rounded-md bg-transparent p-2 transition focus:outline-hidden sm:hidden"
          aria-label="Toggle site navigation"
        >
          <div className="group flex size-6 items-center justify-center">
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                { "rotate-45": isOpen },
                { "-translate-y-1.5": !isOpen },
              )}
            ></span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                { "opacity-0": isOpen },
              )}
            ></span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                { "rotate-45": isOpen },
                { "-translate-y-1.5": !isOpen },
              )}
            ></span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                { "opacity-0": isOpen },
              )}
            ></span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-5 bg-current text-gray-600 transition-transform duration-500 ease-in-out group-hover:text-black",
                { "-rotate-45": isOpen },
                { "translate-y-1.5": !isOpen },
              )}
            ></span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="z-5 mt-5">
        <SheetTitle>Mobile menu</SheetTitle>
        <div className="bg-white">
          <ul className="divide-y divide-gray-300">
            {menuConfig.map((menuItem) => (
              <li key={menuItem.slug}>
                <Link
                  href={menuItem.slug}
                  className={cn("group inline-flex w-full gap-2 px-6 py-4", {
                    "bg-gray-100 shadow-xs": currentPath === menuItem.slug,
                    "hover:bg-gray-100 hover:shadow-xs":
                      currentPath !== menuItem.slug,
                  })}
                  onClick={isOpen ? () => setIsOpen(false) : undefined}
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigationLinks;
