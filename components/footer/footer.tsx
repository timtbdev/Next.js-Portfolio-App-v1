import { Banner, ToggleTheme } from "@/components/ui";
import { menuConfig, socialConfig } from "@/config";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-y-[1.2px] border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
          <nav
            aria-label="Footer"
            className="mx-auto -mb-6 hidden columns-3 text-center sm:flex sm:justify-center sm:space-x-12"
          >
            {menuConfig.map((item) => (
              <div key={item.title} className="pb-6">
                <Link
                  href={item.slug}
                  className="text-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  prefetch={true}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-2 flex justify-center sm:hidden">
            <ToggleTheme />
          </div>
          <div className="mt-10 flex justify-center space-x-10">
            {socialConfig.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </a>
            ))}
          </div>
          <Banner />
          <p className="mt-6 text-center text-lg leading-5 text-gray-600 dark:text-gray-400">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
