import menuConfig from "@/config/layout/menu";
import { cn } from "@/utils/helpers";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath }) => (
  <div className="hidden gap-x-5 lg:flex lg:flex-1">
    {menuConfig.map((menuItem) => (
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
    ))}
  </div>
);

export default DesktopNavigationLinks;
