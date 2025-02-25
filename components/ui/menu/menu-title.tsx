import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  currentPath: boolean;
  title: string;
  className?: string;
}

const MenuTitle: FC<Props> = ({ currentPath, title, className = "" }) => {
  return (
    <span
      className={cn("text-lg font-semibold", {
        "text-gray-600 group-hover:text-black": !currentPath,
        "text-black": currentPath,
        className,
      })}
    >
      {title}
    </span>
  );
};

export default MenuTitle;
