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
    <div className={cn("flex flex-row items-center gap-2", className)}>
      <Avatar>
        <AvatarImage
          src={authorImage}
          alt={authorImage}
          width={20}
          height={20}
          className="rounded-full"
          loading="lazy"
        />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <span className="text-md flex text-gray-600 dark:text-zinc-400">
        {authorName}
      </span>
    </div>
  );
};

export default AuthorInfo;
