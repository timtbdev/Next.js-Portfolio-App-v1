"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";

export default function ToggleTheme() {
  // Destructure resolvedTheme and setTheme from useTheme hook
  let { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="group rounded-full border-none bg-transparent p-2 shadow-md shadow-black/5 ring-1 ring-black/10 ring-gray-200 transition-transform duration-200 hover:bg-gray-100 hover:ring-blue-500 dark:ring-white/15 dark:hover:bg-gray-900 dark:hover:ring-sky-500"
      // Toggle between light and dark themes on button click
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Sun icon for light theme, hidden in dark mode */}
      <SunIcon className="hidden h-6 w-6 text-gray-400 group-hover:text-sky-500 dark:block" />
      {/* Moon icon for dark theme, hidden in light mode */}
      <MoonIcon className="h-6 w-6 text-gray-600 group-hover:text-blue-500 dark:hidden" />
      {/* Visually hidden text for screen readers to describe the toggle theme button */}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
