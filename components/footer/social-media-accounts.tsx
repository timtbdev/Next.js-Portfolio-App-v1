import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialConfigs } from "@/config/social";
import { FC } from "react";

const getIconClass = (name: string): string => {
  switch (name) {
    case "Twitter":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-sky-500 dark:text-zinc-400 dark:hover:text-sky-500";
    case "GitHub":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-black dark:text-zinc-400 dark:hover:text-white";
    case "Facebook":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-600";
    case "LinkedIn":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-500";
    case "Resume":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-600";
    default:
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-blue-600 dark:text-zinc-400 dark:hover:text-brand-500";
  }
};

const SocialMediaAccounts: FC = () => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {socialConfigs.map((account) => (
        <TooltipProvider key={account.name}>
          <Tooltip>
            <TooltipTrigger>
              <a
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={account.name}
              >
                <account.icon className={getIconClass(account.name)} />
              </a>
            </TooltipTrigger>
            <TooltipContent className="rounded-lg border border-gray-200 bg-gray-100 font-sans text-gray-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
              {account.tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
