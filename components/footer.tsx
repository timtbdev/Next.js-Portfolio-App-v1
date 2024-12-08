import Banner from "@/components/ui/banner";
import ToggleTheme from "@/components/ui/toggleTheme";
import { menuConfig, socialConfig } from "@/config";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
          {/* Navigation Links */}
          <nav
            aria-label="Footer"
            className="mx-auto -mb-6 hidden columns-3 text-center sm:flex sm:justify-center sm:space-x-12"
          >
            {menuConfig.map((item) => (
              <div key={item.title} className="pb-6">
                <Link
                  href={item.slug}
                  className="text-lg text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-sky-500"
                  prefetch={true}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Toggle Theme Button for Small Screens */}
          <div className="mt-2 flex justify-center sm:hidden">
            <ToggleTheme />
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-6">
            {socialConfig.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group rounded-full border-none bg-transparent p-2 shadow-md shadow-black/5 ring-1 ring-black/10 ring-gray-200 transition-transform duration-200 hover:bg-gray-100 hover:ring-blue-500 dark:ring-white/15 dark:hover:bg-gray-900 dark:hover:ring-sky-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-sky-500"
                />
              </Link>
            ))}
          </div>

          {/* Banner Component */}
          <Banner />

          {/* Footer Text */}
          <p className="mt-6 text-center text-lg leading-5 text-gray-600 dark:text-gray-400">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
