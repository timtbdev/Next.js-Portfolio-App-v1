import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import { PopoverGroup } from "@headlessui/react";
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
            "text-md group inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-2 font-semibold",
            {
              "bg-gray-100/80": currentPath === menuItem.slug,
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
