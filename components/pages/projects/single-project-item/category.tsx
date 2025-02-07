import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import { cn } from "@/utils/helpers";
import React, { FC } from "react";
import {
  TbBrandAndroid as Android,
  TbBrandNextjs as NextJs,
} from "react-icons/tb";

interface Props {
  category: string;
  className?: string;
}

const Category: FC<Props> = ({ category, className }) => {
  const renderIcon = () => {
    switch (category) {
      case "Android":
        return <Android className="h-6 w-6" />;
      case "Next.js":
        return <NextJs className="h-6 w-6" />;
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
