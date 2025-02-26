import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  authorImage: string;
  authorName: string;
  className?: string;
  size?: number;
}

const Author: FC<Props> = ({ authorImage, authorName, className, size }) => {
  return (
    <div className={cn("flex flex-row items-center gap-1", className)}>
      <Avatar className="h-6 w-6">
        <AvatarImage
          src={authorImage}
          alt={authorImage}
          width={size}
          height={size}
          className="rounded-full"
          loading="lazy"
        />
        <AvatarFallback>{authorName?.charAt(0) || "?"}</AvatarFallback>
      </Avatar>
      <span className="text-md flex font-medium text-gray-600">
        {authorName}
      </span>
    </div>
  );
};

export default Author;
