import { cn } from "@/lib/utils";
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
        "relative flex h-full max-w-full flex-col overflow-hidden bg-white shadow-xs ring-[0.8px] ring-gray-300 lg:rounded-[0.62rem]",
      )}
    >
      {children}
    </div>
  );
};

export default Card;
