import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import React, { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const ComponentName: FC<Props> = ({ title, className = "" }) => {
  return (
    <div className="relative mx-auto inline-flex items-center justify-center gap-x-1">
      <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-950 dark:text-white/90 sm:text-3xl">
        {title}
      </h1>
      <HandDrawnCircle className="absolute -left-5 -top-1 mx-auto h-[50px] w-auto items-center text-blue-400 dark:text-zinc-500" />
    </div>
  );
};

export default ComponentName;
