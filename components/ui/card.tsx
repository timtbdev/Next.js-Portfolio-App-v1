import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-white shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 lg:rounded-[calc(2rem+1px)]",
      )}
    >
      {children}
    </div>
  );
};

export default Card;
