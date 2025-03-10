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
import { FC, useState } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const MobileNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex rounded-md p-2 hover:bg-gray-100 md:hidden"
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
            {menuConfig.map((menuItem) => (
              <li key={menuItem.slug}>
                <Link
                  href={menuItem.slug}
                  className={cn("group inline-flex w-full gap-2 px-6 py-4", {
                    "bg-gray-100 shadow-xs": currentPath === menuItem.slug,
                    "hover:bg-gray-100 hover:shadow-xs":
                      currentPath !== menuItem.slug,
                  })}
                  onClick={toggleSheet}
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
