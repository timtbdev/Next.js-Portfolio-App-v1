import { SocialType } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import React, { FC } from "react";

interface Props {
  social: SocialType;
  className?: string;
}

const SocialAccountButton: FC<Props> = ({ social, className = "" }) => {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 px-4 py-2 text-left hover:bg-gray-100 dark:border-zinc-700 dark:border-zinc-700/40 dark:bg-zinc-800 dark:hover:bg-zinc-900"
    >
      <span className="flex min-w-0 flex-1 items-center space-x-4">
        <span className="block shrink-0">
          <social.icon className="size-8 text-gray-600 dark:text-zinc-400" />
        </span>
        <span className="block min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-gray-600 dark:text-zinc-400">
            {social.name}
          </span>
          <span className="block truncate text-sm font-medium text-gray-600 dark:text-zinc-400">
            {social.username}
          </span>
        </span>
      </span>
      <span className="inline-flex size-10 shrink-0 items-center justify-center">
        <ChevronRightIcon
          aria-hidden="true"
          className="size-5 text-gray-400 dark:text-gray-400/10"
        />
      </span>
    </a>
  );
};

export default SocialAccountButton;
