import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const Title: FC<Props> = ({ title, className }) => {
  return (
    <h3
      className={cn(
        "mb-2 text-base/7 font-semibold text-gray-600 dark:text-zinc-400 sm:text-xl",
        className,
      )}
    >
      {title}
    </h3>
  );
};

export default Title;
