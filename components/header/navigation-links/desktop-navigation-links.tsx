import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
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
  className?: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  return (
    <PopoverGroup className={cn("max-w-5xl gap-x-5", className)}>
      {menuConfig.map((menuItem: MenuItemType) => (
        <Link
          key={menuItem.title}
          href={menuItem.slug}
          className={cn(
            "text-md group inline-flex items-center gap-2 rounded-full px-6 py-2 font-semibold",
            {
              "border border-transparent text-gray-600 hover:border-dashed hover:border-gray-300 hover:shadow-sm":
                currentPath !== menuItem.slug,
              "border border-gray-300 bg-gray-100 px-4 shadow-sm":
                currentPath === menuItem.slug,
            },
          )}
          aria-current={currentPath === menuItem.slug ? "page" : undefined}
          prefetch={true}
        >
          <MenuEmoji
            currentPath={currentPath === menuItem.slug}
            emoji={menuItem.emoji}
            className="hidden lg:flex"
          />
          <MenuTitle
            currentPath={currentPath === menuItem.slug}
            title={menuItem.title}
          />
        </Link>
      ))}
    </PopoverGroup>
  );
};

export default DesktopNavigationLinks;
