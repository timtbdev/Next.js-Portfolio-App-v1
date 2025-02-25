import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  title: string;
  detail?: boolean;
  className?: string;
}

const Title: FC<Props> = ({ title, detail = false, className }) => {
  return detail ? (
    <h3
      className={cn(
        "mt-5 overflow-hidden text-pretty text-2xl font-semibold leading-6 tracking-tight text-black dark:text-zinc-300 sm:text-xl/8",
        className,
      )}
    >
      {title}
    </h3>
  ) : (
    <h3
      className={cn(
        "line-clamp-2 text-pretty text-2xl font-bold leading-6 tracking-tight text-black dark:text-zinc-300 sm:text-xl sm:font-semibold",
        className,
      )}
    >
      {title}
    </h3>
  );
};

export default Title;
