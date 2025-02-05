import menuConfig from "@/config/layout/menu";
import { MenuType } from "@/types";
import { Link } from "next-view-transitions";

const NavigationLinks = () => {
  return (
    <nav
      aria-label="Footer"
      className="mx-auto -mb-6 hidden columns-3 gap-x-10 text-center sm:flex sm:justify-center"
    >
      {menuConfig.map((item: MenuType) => (
        <div key={item.title} className="pb-6">
          <Link
            href={item.slug}
            className="text-md font-semibold text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white"
            prefetch={true}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavigationLinks;
