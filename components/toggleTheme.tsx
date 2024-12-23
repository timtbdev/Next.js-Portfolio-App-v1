"use client";

import { cn } from "@/shared/lib/helpers";
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
        "transiton group inset-px flex rounded-full border-none bg-transparent bg-white p-2 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-600/20 hover:bg-zinc-200/40 dark:bg-zinc-900 dark:ring-zinc-700/40 dark:hover:bg-zinc-500/10",
        className,
      )}
      // Toggle between light and dark themes on button click
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      suppressHydrationWarning
    >
      {/* Sun icon for light theme, hidden in dark mode */}
      <SunIcon className="hidden h-6 w-6 text-zinc-400 dark:block" />
      {/* Moon icon for dark theme, hidden in light mode */}
      <MoonIcon className="h-6 w-6 text-zinc-600 dark:hidden" />
      {/* Visually hidden text for screen readers to describe the toggle theme button */}

      {mobile ? (
        <span className="text-md ml-2 flex text-zinc-600 dark:text-zinc-400">
          {resolvedTheme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"}
        </span>
      ) : null}
    </button>
  );
}
