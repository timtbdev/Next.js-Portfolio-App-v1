import CalendarIcon from "@/icons/pages/blog/calendar-icon";
import ClockIcon from "@/icons/pages/blog/clock-icon";
import { cn, getMinutes } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { format, parseISO } from "date-fns";
import { FC } from "react";

interface Props {
  date: string;
  readTime: number;
  className?: string;
}

const InfoBarTop: FC<Props> = ({ date, readTime, className }) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-start gap-4 pt-2 sm:pt-0",
        className,
      )}
    >
      <div className="inline-flex items-center gap-x-1">
        <CalendarIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">
          {format(parseISO(date), "MMM dd, yyyy")}
        </span>
      </div>
      <Separator orientation="vertical" className="h-4 w-[1px] bg-gray-200" />
      <div className="inline-flex items-center gap-x-1">
        <ClockIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">{getMinutes(readTime)}</span>
      </div>
    </div>
  );
};

export default InfoBarTop;
