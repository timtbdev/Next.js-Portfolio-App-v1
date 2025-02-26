import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
  authorImage: string;
  authorName: string;
  className?: string;
}

const Author: FC<Props> = ({ authorImage, authorName, className }) => {
  return (
    <div className={cn("flex flex-row items-center gap-1", className)}>
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
  );
};

export default Author;
