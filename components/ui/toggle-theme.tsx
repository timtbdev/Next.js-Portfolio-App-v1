"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";

interface Props {
  className?: string;
}

const ToggleTheme: FC<Props> = ({ className }) => {
  let { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        className,
        "rounded-full border-none bg-transparent p-2 shadow-md shadow-black/5 ring-1 ring-black/10 ring-gray-200 transition-transform duration-200 hover:bg-gray-100 dark:ring-white/15 dark:hover:bg-gray-900",
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden h-6 w-6 text-gray-400 dark:block" />
      <Moon className="h-6 w-6 text-gray-600 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ToggleTheme;
