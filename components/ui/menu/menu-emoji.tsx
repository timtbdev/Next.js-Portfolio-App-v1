import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  currentPath: boolean;
  emoji: string;
  className?: string;
}

const MenuEmoji: FC<Props> = ({ currentPath, emoji, className = "" }) => {
  return (
    <span
      className={cn(
        "text-lg duration-150 ease-in-out",
        {
          "group-hover:rotate-3 group-hover:scale-150": !currentPath,
          "rotate-3 scale-150": currentPath,
        },
        className,
      )}
    >
      {emoji}
    </span>
  );
};

export default MenuEmoji;
