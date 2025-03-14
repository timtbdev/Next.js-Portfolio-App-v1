import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { Link } from "next-view-transitions";
import { FC, memo, useState } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const extractActivePath = (path: string): string => {
  return path.split("/")[1] ? `/${path.split("/")[1]}` : path;
};

const MobileNavigationLinks: FC<Props> = memo(({ currentPath, className }) => {
  const activePath = extractActivePath(currentPath);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={toggleSheet}
          className="flex rounded-md p-2 hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="size-[26px]" />
          ) : (
            <Menu className="size-[26px]" />
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="z-1 mt-10">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>
        <div className="bg-white">
          <ul className="divide-y divide-gray-300">
            {menuConfig.map((menuItem) => {
              const isActive = activePath === menuItem.slug;
              return (
                <li key={menuItem.slug}>
                  <Link
                    href={menuItem.slug}
                    className={cn("group inline-flex w-full gap-2 px-6 py-4", {
                      "bg-gray-100 shadow-xs": isActive,
                      "hover:bg-gray-100 hover:shadow-xs": !isActive,
                    })}
                    onClick={toggleSheet}
                  >
                    <MenuEmoji
                      currentPath={isActive}
                      emoji={menuItem.emoji}
                      className="mr-4 text-2xl"
                    />
                    <MenuTitle title={menuItem.title} currentPath={isActive} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileNavigationLinks.displayName = "MobileNavigationLinks";

export default MobileNavigationLinks;
