import menuConfig from "@/config/layout/menu";
import social from "@/config/layout/social";
import { Link } from "next-view-transitions";

export default function Footer() {
  return (
    <>
      <footer className="border-y border-zinc-600/20 bg-white shadow-sm shadow-zinc-800/5 dark:border-zinc-700/40 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl overflow-hidden p-6 sm:py-10 lg:px-8">
          {/* Navigation Links */}
          <nav
            aria-label="Footer"
            className="mx-auto -mb-6 hidden columns-3 gap-x-10 text-center sm:flex sm:justify-center"
          >
            {menuConfig.map((item) => (
              <div key={item.title} className="pb-6">
                <Link
                  href={item.slug}
                  className="text-md font-medium text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-sky-500"
                  prefetch={true}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            {social.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white" />
              </Link>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-md mt-6 text-center leading-5 text-zinc-600 dark:text-zinc-400">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
