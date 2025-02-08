import { cn } from "@/utils/helpers";
import { YoutubeIcon } from "lucide-react";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  className?: string;
}

const YoutubeButton: FC<Props> = ({ title, url, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "dark:hover:text-brand-500 group relative mx-auto inline-flex items-center justify-center gap-x-1 rounded-full px-2 py-1 font-medium tracking-tight text-gray-600 hover:text-blue-600 dark:text-zinc-400",
        className,
      )}
    >
      <YoutubeIcon className="dark:group-hover:text-brand-500 h-5 w-5 text-gray-600 underline decoration-wavy group-hover:text-blue-600 dark:text-zinc-400" />
      {title}
    </a>
  );
};

export default YoutubeButton;
