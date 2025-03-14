import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import { Link } from "next-view-transitions";
import { FC, memo } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const extractActivePath = (path: string): string => {
  return path.split("/")[1] ? `/${path.split("/")[1]}` : path;
};

const DesktopNavigationLinks: FC<Props> = memo(({ currentPath, className }) => {
  const activePath = extractActivePath(currentPath);

  return (
    <NavigationMenu className={cn("hidden md:flex", className)}>
      <NavigationMenuList className="flex items-center gap-4" role="menubar">
        {menuConfig.map((menuItem: MenuItemType) => {
          const isActive = activePath === menuItem.slug;

          return (
            <NavigationMenuItem key={menuItem.slug} role="none">
              <Link
                href={menuItem.slug}
                legacyBehavior
                passHref
                aria-current={isActive ? "page" : undefined}
                prefetch={true}
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "flex items-center gap-6",
                    isActive && "bg-gray-100",
                  )}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2">
                    <MenuEmoji
                      currentPath={isActive}
                      emoji={menuItem.emoji}
                      className="hidden lg:flex"
                    />
                    <MenuTitle currentPath={isActive} title={menuItem.title} />
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
});

DesktopNavigationLinks.displayName = "DesktopNavigationLinks";

export default DesktopNavigationLinks;
