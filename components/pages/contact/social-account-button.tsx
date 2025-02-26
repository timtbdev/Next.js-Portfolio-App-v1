import { cn } from "@/lib/utils";
import { SocialType } from "@/types";
import { ChevronRightIcon, ImportIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  social: SocialType;
  className?: string;
}

const SocialAccountButton: FC<Props> = ({ social, className = "" }) => {
  const defaultClass = "block truncate text-sm font-semibold text-gray-600";
  return (
    <Link
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 px-4 py-2 text-left hover:bg-gray-100",
        className,
      )}
    >
      <span className="flex min-w-0 flex-1 items-center space-x-4">
        <span className="block shrink-0">
          <social.icon className="size-8 text-gray-600" />
        </span>
        <span className="block min-w-0 flex-1">
          <span className={defaultClass}>{social.name}</span>
          <span className={defaultClass}>{social.username}</span>
        </span>
      </span>
      <span className="inline-flex size-10 shrink-0 items-center justify-center">
        <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
      </span>
    </Link>
  );
};

export default SocialAccountButton;
