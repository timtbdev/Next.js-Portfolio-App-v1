import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const Title: FC<Props> = ({ title, className }) => {
  return (
    <div
      className={cn(
        className,
        "scroll-m-20 pb-1 text-3xl font-semibold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100",
      )}
    >
      {title}
    </div>
  );
};

export default Title;
