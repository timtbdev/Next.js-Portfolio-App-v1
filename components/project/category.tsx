import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import AndroidIcon from "@/icons/pages/projects/android-icon";
import NextJsIcon from "@/icons/pages/projects/nextjs-icon";
import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  category: string;
  className?: string;
}

const Category: FC<Props> = ({ category, className }) => {
  const renderIcon = () => {
    switch (category) {
      case "Android":
        return <AndroidIcon className="size-5" />;
      case "Next.js":
        return <NextJsIcon className="size-5" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "relative mx-auto inline-flex items-center justify-center gap-x-1 tracking-tight",
        className,
      )}
    >
      {renderIcon()}
      {category}
      <HandDrawnCircle className="absolute mx-auto h-[60px] w-auto items-center text-gray-200 dark:text-zinc-600" />
    </div>
  );
};

export default Category;
