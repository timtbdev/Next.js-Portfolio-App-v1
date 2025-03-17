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
      className={cn(
        "bg-transparent text-lg font-semibold hover:bg-transparent",
        {
          className,
        },
      )}
    >
      {title}
    </span>
  );
};

export default MenuTitle;
