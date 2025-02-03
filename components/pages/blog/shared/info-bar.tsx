import { cn, getMinutes } from "@/utils/helpers";
import { Separator as RadixSeparator } from "@radix-ui/react-separator";
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
  detail?: boolean;
}

const InfoBar: FC<Props> = ({
  authorImage,
  authorName,
  date,
  category,
  readTime,
  className,
  detail = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-start gap-4 pt-2 sm:pt-0",
        className,
      )}
    >
      <Author
        authorImage={authorImage}
        authorName={authorName}
        className="hidden sm:flex"
      />

      {detail && (
        <>
          <Separator orientation="vertical" />
          <InfoItem emoji="📁" text={category} />
        </>
      )}
      <Separator orientation="vertical" className="hidden sm:flex" />
      <InfoItem emoji="📅" text={format(parseISO(date), "MMMM dd, yyyy")} />
      <Separator orientation="vertical" />
      <InfoItem emoji="🕙" text={getMinutes(readTime)} />
    </div>
  );
};

export default InfoBar;
