import Banner from "@/components/ui/banner";
import { menuConfig, socialConfig } from "@/config";
import { Link } from "next-view-transitions";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
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
                  className="text-md font-medium text-gray-600 hover:text-blue-500 hover:underline hover:underline-offset-8 dark:text-gray-400 dark:hover:text-sky-500"
                  prefetch={true}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            {socialConfig.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inset-px rounded-full border-none bg-transparent p-2 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 transition hover:ring-gray-900/20 dark:ring-white/10 dark:hover:ring-white/20"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-600 dark:text-gray-400"
                />
              </Link>
            ))}
          </div>

          {/* Banner Component */}
          <Banner />

          {/* Footer Text */}
          <p className="text-md mt-6 text-center leading-5 text-gray-600 dark:text-gray-400">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
