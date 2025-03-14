import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialConfigs } from "@/config/social";
import { FC } from "react";

const SocialMediaAccounts: FC = () => {
  const defaultClass =
    "size-5 text-gray-600 transition-colors duration-100 ease-in-out hover:text-black";
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
                <account.icon className={defaultClass} />
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
