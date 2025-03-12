import CalendarIcon from "@/icons/pages/blog/calendar-icon";
import ClockIcon from "@/icons/pages/blog/clock-icon";
import FolderIcon from "@/icons/pages/blog/folder-icon";
import { cn, getMinutes } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { FC } from "react";

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
      <div className="flex flex-row items-center gap-1">
        <Image
          src={authorImage}
          alt={authorName}
          width="24"
          height="24"
          className="size-6 rounded-full"
          loading="lazy"
        />

        <span className="text-md flex font-medium text-gray-600">
          {authorName}
        </span>
      </div>
      <Separator orientation="vertical" className="h-4 w-[1px] bg-gray-200" />
      <div className="inline-flex items-center gap-x-1">
        <FolderIcon size={20} className="size-5" aria-hidden="true" />
        <span className="text-md">{category}</span>
      </div>
      <Separator orientation="vertical" className="h-4 w-[1px] bg-gray-200" />
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

export default InfoBarDetailDesktop;
