import CalendarIcon from "@/icons/pages/blog/calendar-icon";
import ClockIcon from "@/icons/pages/blog/clock-icon";
import FolderIcon from "@/icons/pages/blog/folder-icon";
import { cn, getMinutes } from "@/utils/helpers";
import { format, parseISO } from "date-fns";
import { FC } from "react";
import Author from "./author";
import InfoItem from "./info-item";
import Separator from "./separator";

interface Props {
  authorImage: string;
  authorName: string;
  date: string;
  category: string;
  readTime: number;
  className?: string;
}

const InfoBarDetailMobile: FC<Props> = ({
  authorImage,
  authorName,
  date,
  category,
  readTime,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 items-center justify-start pt-2",
        className,
      )}
    >
      <Author
        authorImage={authorImage}
        authorName={authorName}
        className="border-b border-r border-gray-300 pb-2 dark:border-zinc-700"
      />
      <InfoItem
        icon={<FolderIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={category}
        className="border-b border-gray-300 px-4 pb-2 dark:border-zinc-700"
      />
      <InfoItem
        icon={<CalendarIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={format(parseISO(date), "MMM dd, yyyy")}
        className="border-r border-gray-300 py-2 dark:border-zinc-700"
      />
      <InfoItem
        icon={<ClockIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={getMinutes(readTime)}
        className="px-4 py-2"
      />
    </div>
  );
};

export default InfoBarDetailMobile;
