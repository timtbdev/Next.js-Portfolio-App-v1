import { cn } from "@/lib/utils";
import { TypeIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  Icon: typeof TypeIcon;
  className?: string;
}

const LinkButton: FC<Props> = ({ title, url, Icon, className = "" }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative mx-auto inline-flex items-center justify-center gap-x-1 border-b border-gray-600 font-medium tracking-tight text-gray-600 hover:border-blue-600 hover:text-blue-600",
        className,
      )}
    >
      <Icon className="size-5 text-gray-600 group-hover:text-blue-600" />
      {title}
    </Link>
  );
};

export default LinkButton;
