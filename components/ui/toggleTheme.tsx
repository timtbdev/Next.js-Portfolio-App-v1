"use client";

import { cn } from "@/lib/helpers";
import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  mobile: boolean;
  className?: string;
}

export default function ToggleTheme({ mobile, className }: Props) {
  // Destructure resolvedTheme and setTheme from useTheme hook
  let { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "transiton inset-px flex rounded-full border-none bg-transparent p-2 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 hover:bg-gray-100 hover:ring-gray-900/20 dark:ring-white/10 dark:hover:bg-gray-900 dark:hover:ring-white/20",
        className,
      )}
      // Toggle between light and dark themes on button click
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      suppressHydrationWarning
    >
      {/* Sun icon for light theme, hidden in dark mode */}
      <SunIcon className="hidden h-6 w-6 text-gray-400 dark:block" />
      {/* Moon icon for dark theme, hidden in light mode */}
      <MoonIcon className="h-6 w-6 text-gray-600 dark:hidden" />
      {/* Visually hidden text for screen readers to describe the toggle theme button */}

      {mobile ? (
        <span className="text-md ml-2 flex text-gray-600 dark:text-gray-400">
          {resolvedTheme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"}
        </span>
      ) : (
        <span className="sr-only">
          {resolvedTheme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"}
        </span>
      )}
    </button>
  );
}
