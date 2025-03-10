import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex items-center gap-4">
        {menuConfig.map((menuItem: MenuItemType) => (
          <NavigationMenuItem key={menuItem.title}>
            <Link
              key={menuItem.title}
              href={menuItem.slug}
              legacyBehavior
              passHref
              aria-current={currentPath === menuItem.slug ? "page" : undefined}
              prefetch={true}
            >
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-6",
                )}
              >
                <div className="flex items-center gap-2">
                  <MenuEmoji
                    currentPath={currentPath === menuItem.slug}
                    emoji={menuItem.emoji}
                    className="hidden lg:flex"
                  />
                  <MenuTitle
                    currentPath={currentPath === menuItem.slug}
                    title={menuItem.title}
                  />
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigationLinks;
