import { ArchiveIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { FC } from "react";
import AuthorInfo from "./author";
import InfoItem from "./info-item";

interface Props {
  authorImage: string;
  authorName: string;
  date: string;
  category: string;
  readTime: number;
}

const InforBar: FC<Props> = ({
  authorImage,
  authorName,
  date,
  category,
  readTime,
}) => {
  return (
    <div className="mb-4 flex flex-row items-center justify-start gap-4">
      <AuthorInfo
        authorImage={authorImage}
        authorName={authorName}
        className="hidden sm:flex"
      />
      <InfoItem
        icon={
          <ArchiveIcon
            className="h-4 w-4 text-gray-600 dark:text-zinc-400"
            aria-hidden="true"
          />
        }
        text={category}
      />

      <InfoItem
        icon={
          <CalendarIcon
            className="h-4 w-4 text-gray-600 dark:text-zinc-400"
            aria-hidden="true"
          />
        }
        text={date}
      />

      <InfoItem
        icon={
          <ClockIcon
            className="h-4 w-4 text-gray-600 dark:text-zinc-400"
            aria-hidden="true"
          />
        }
        text={String(readTime)}
      />
    </div>
  );
};

export default InforBar;
