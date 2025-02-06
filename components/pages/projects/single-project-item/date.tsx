import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import CalendarIcon from "@/icons/pages/blog/calendar-icon";
import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  date: string;
  className?: string;
}

const Date: FC<Props> = ({ date, className }) => {
  return (
    <div
      className={cn(
        "relative mx-auto inline-flex items-center justify-center gap-x-1 tracking-tight",
        className,
      )}
    >
      <CalendarIcon className="h-5 w-5" />
      {date}
      <HandDrawnCircle className="absolute mx-auto h-[60px] w-auto items-center text-gray-300 dark:text-zinc-500" />
    </div>
  );
};

export default Date;
