import { cn } from "@/utils/helpers";
import { TagIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  tags: string[];
  className?: string;
}

const Tags: FC<Props> = ({ tags, className }) => {
  return (
    <div
      className={cn(
        "mt-1 flex flex-wrap items-center gap-x-1 gap-y-2",
        className,
      )}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          className="rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-500 dark:bg-zinc-900/40 dark:text-zinc-400"
        >
          <TagIcon className="-mt-0.5 mr-1 inline-block h-3 w-3" />
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
