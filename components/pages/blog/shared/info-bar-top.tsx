import CalendarIcon from "@/icons/pages/blog/calendar-icon";
import ClockIcon from "@/icons/pages/blog/clock-icon";
import { cn, getMinutes } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { FC } from "react";
import InfoItem from "./info-item";
import Separator from "./separator";

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
      <InfoItem
        icon={<CalendarIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={format(parseISO(date), "MMM dd, yyyy")}
      />
      <Separator orientation="vertical" />
      <InfoItem
        icon={<ClockIcon size={20} className="h-4 w-4" aria-hidden="true" />}
        text={getMinutes(readTime)}
      />
    </div>
  );
};

export default InfoBarTop;
