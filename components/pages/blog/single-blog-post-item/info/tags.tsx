import { TagIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  tags: string[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-x-1 gap-y-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-500 dark:bg-zinc-800/60 dark:text-zinc-500"
        >
          <TagIcon className="-mt-0.5 mr-1 inline-block h-3 w-3" />
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
