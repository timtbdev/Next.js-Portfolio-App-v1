import { cn } from "@/utils/helpers";
import { TagIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  tags: string[];
  className?: string;
}

const Tags: FC<Props> = ({ tags, className }) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center text-sm text-gray-500 dark:text-zinc-400"
        >
          <TagIcon className="-mt-0.5 mr-1.5 inline-block h-3 w-3" />
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
