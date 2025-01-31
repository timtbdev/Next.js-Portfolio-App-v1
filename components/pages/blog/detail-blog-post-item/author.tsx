import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/utils/helpers";
import { FC } from "react";

interface Props {
  authorImage: string;
  authorName: string;
  className?: string;
}

const AuthorInfo: FC<Props> = ({ authorImage, authorName, className }) => {
  return (
    <div className={cn("flex flex-row items-center gap-1", className)}>
      <Avatar className="h-6 w-6">
        <AvatarImage
          src={authorImage}
          alt={authorImage}
          width={24}
          height={24}
          className="rounded-full"
          loading="lazy"
        />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <span className="flex text-sm font-medium text-gray-600 dark:text-zinc-400">
        {authorName}
      </span>
    </div>
  );
};

export default AuthorInfo;
