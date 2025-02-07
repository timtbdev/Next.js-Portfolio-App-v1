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

const InfoBarDetailDesktop: FC<Props> = ({
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
        "flex-row items-center justify-start gap-4 pt-2",
        className,
      )}
    >
      <Author authorImage={authorImage} authorName={authorName} />
      <Separator orientation="vertical" />
      <InfoItem
        icon={<FolderIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={category}
      />
      <Separator orientation="vertical" />
      <InfoItem
        icon={<CalendarIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={format(parseISO(date), "MMM dd, yyyy")}
      />
      <Separator orientation="vertical" />
      <InfoItem
        icon={<ClockIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={getMinutes(readTime)}
      />
    </div>
  );
};

export default InfoBarDetailDesktop;
