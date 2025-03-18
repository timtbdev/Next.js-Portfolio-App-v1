"use client";

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
      <NavigationMenuList
        className="flex items-center gap-4"
        role="menubar"
        aria-label="Main navigation"
      >
        {menuConfig.map((menuItem: MenuItemType) => {
          const isActive = activePath === menuItem.slug;

          return (
            <NavigationMenuItem key={menuItem.slug} role="none">
              <NavigationMenuLink
                href={menuItem.slug}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-6 transition-all duration-200",
                  "hover:bg-gray-100/80 focus-visible:bg-gray-100/90",
                  "focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:outline-none",
                  isActive && "bg-gray-100 shadow-sm",
                )}
                role="menuitem"
                tabIndex={0}
              >
                <div className="flex items-center gap-2">
                  <MenuEmoji
                    currentPath={isActive}
                    emoji={menuItem.emoji}
                    className="hidden transition-transform duration-200 lg:flex"
                  />
                  <MenuTitle
                    currentPath={isActive}
                    title={menuItem.title}
                    className={cn(
                      "transition-colors duration-200",
                      isActive
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900",
                    )}
                  />
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
});

DesktopNavigationLinks.displayName = "DesktopNavigationLinks";

export default DesktopNavigationLinks;
