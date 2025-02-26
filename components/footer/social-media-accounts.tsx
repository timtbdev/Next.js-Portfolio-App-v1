import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialConfigs } from "@/config/social";
import { FC } from "react";

const getIconClass = (name: string): string => {
  const defaultClass =
    "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out";
  switch (name) {
    case "Twitter":
      return `${defaultClass} hover:text-blue-500`;
    case "GitHub":
      return `${defaultClass} hover:text-black`;
    case "Facebook":
      return `${defaultClass} hover:text-blue-600`;
    case "LinkedIn":
      return `${defaultClass} hover:text-blue-500`;
    case "Resume":
      return `${defaultClass} hover:text-green-600`;
    default:
      return `${defaultClass} hover:text-blue-600`;
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
            <TooltipContent className="rounded-lg border border-gray-200 bg-gray-100 font-sans text-gray-600">
              {account.tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
