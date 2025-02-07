import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  greeting: string;
  className?: string;
}

const Greeting: FC<Props> = ({ greeting, className }) => {
  return (
    <h1
      className={cn(
        "mb-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-zinc-300 sm:text-7xl",
        className,
      )}
    >
      {greeting}
    </h1>
  );
};

export default Greeting;
