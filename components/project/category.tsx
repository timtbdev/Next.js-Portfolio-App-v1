import AndroidIcon from "@/icons/pages/projects/android-icon";
import HtmlIcon from "@/icons/pages/projects/html-icon";
import NextJsIcon from "@/icons/pages/projects/nextjs-icon";
import { cn } from "@/utils/helpers";
import { FC } from "react";
import HandDrawnFullCirlce from "../ui/hand-drawn-full-circle";

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
        return <HtmlIcon className="size-5" />;
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
      <HandDrawnFullCirlce className="absolute -top-3 mx-auto h-[70px] w-auto items-center text-gray-200 dark:text-zinc-600" />
    </div>
  );
};

export default Category;
