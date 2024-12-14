"use client";

import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  mobile: boolean;
}

export default function ToggleTheme({ mobile }: Props) {
  // Destructure resolvedTheme and setTheme from useTheme hook
  let { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="group flex rounded-full border-none bg-transparent p-2 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-blue-500 dark:ring-gray-600 dark:hover:bg-gray-900 dark:hover:ring-sky-500"
      // Toggle between light and dark themes on button click
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Sun icon for light theme, hidden in dark mode */}
      <SunIcon className="hidden h-6 w-6 text-gray-400 group-hover:text-sky-500 dark:block" />
      {/* Moon icon for dark theme, hidden in light mode */}
      <MoonIcon className="h-6 w-6 text-gray-600 group-hover:text-blue-500 dark:hidden" />
      {/* Visually hidden text for screen readers to describe the toggle theme button */}
      <span className="sr-only">
        {resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"}
      </span>
      {mobile ? (
        <span className="text-md ml-2 flex text-gray-600 group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-sky-500">
          {resolvedTheme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"}
        </span>
      ) : null}
    </button>
  );
}
