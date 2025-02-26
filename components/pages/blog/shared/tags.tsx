import { cn } from "@/lib/utils";
import { HashIcon } from "lucide-react";
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
        <div key={index} className="text-md flex items-center text-gray-500">
          <HashIcon size={16} className="-mt-0.5 mr-0.5 inline-block h-4 w-4" />
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
