import FolderIcon from "@/icons/pages/blog/folder-icon";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Author from "./author";
import InfoItem from "./info-item";
import Separator from "./separator";

interface Props {
  authorImage: string;
  authorName: string;
  category: string;
  className?: string;
}

const InfoBarBottom: FC<Props> = ({
  authorImage,
  authorName,
  category,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-start gap-4 pt-2 sm:pt-0",
        className,
      )}
    >
      <Author authorImage={authorImage} authorName={authorName} />
      <Separator orientation="vertical" />
      <InfoItem
        icon={<FolderIcon size={20} className="h-5 w-5" aria-hidden="true" />}
        text={category}
      />
    </div>
  );
};

export default InfoBarBottom;
