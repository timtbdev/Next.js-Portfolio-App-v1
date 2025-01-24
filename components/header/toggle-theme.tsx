import { MoonIcon, SunIcon } from "@/icons/layout/theme";
import { cn } from "@/utils/helpers";
import { useTheme } from "next-themes";

const ToggleTheme = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "transiton group inset-px z-10 flex gap-1 rounded-full bg-gradient-to-t from-gray-100 via-gray-50 to-white p-2.5 shadow-md shadow-black/5 ring-1 ring-black/10 transition duration-200 hover:bg-gradient-to-tr hover:from-gray-100 hover:via-gray-100 hover:to-gray-50 dark:bg-gradient-to-bl dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:ring-zinc-700/40 dark:hover:bg-gradient-to-tr dark:hover:from-zinc-800/20 dark:hover:via-zinc-800/10 dark:hover:to-zinc-800",
        className,
      )}
      onClick={handleToggleTheme}
      suppressHydrationWarning
    >
      <SunIcon className="hidden h-6 w-6 text-zinc-400 dark:block" />
      <MoonIcon className="h-6 w-6 text-zinc-600 dark:hidden" />
    </button>
  );
};

export default ToggleTheme;
