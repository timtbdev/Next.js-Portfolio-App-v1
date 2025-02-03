import { cn } from "@/utils/helpers";
import { TagIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  tags: string[];
  className?: string;
  detail?: boolean;
}

const Tags: FC<Props> = ({ tags, className, detail = false }) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {tags.map((tag, index) => (
        <div
          key={index}
          className={cn(
            detail ? "text-md" : "text-sm",
            "flex items-center text-gray-500 dark:text-zinc-400",
          )}
        >
          <TagIcon
            className={cn(
              detail ? "h-4 w-4" : "h-3 w-3",
              "-mt-0.5 mr-1.5 inline-block h-3 w-3",
            )}
          />
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
