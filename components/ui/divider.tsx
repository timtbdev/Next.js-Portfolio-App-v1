import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const Divider: FC<Props> = ({ className }) => {
  return (
    <hr
      className={cn(
        className,
        "my-8 border-b border-gray-200 dark:border-gray-600",
      )}
    />
  );
};

export default Divider;
