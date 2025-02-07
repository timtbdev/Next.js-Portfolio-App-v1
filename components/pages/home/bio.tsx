import { cn } from "@/utils/helpers";
import { FC } from "react";
import {
  TbBrandAndroid as Android,
  TbBrandNextjs as NextJs,
} from "react-icons/tb";
import Highlight from "./highlight";

interface Props {
  className?: string;
}

const Bio: FC<Props> = ({ className }) => {
  const baseClass =
    "text-xl text-gray-600 dark:text-zinc-400 sm:text-2xl tracking-tight font-normal";
  return (
    <div className={cn("flex flex-col gap-y-4 text-center", className)}>
      <div className="inline-flex items-center justify-center">
        <span className={cn(baseClass, "mr-3")}>I’m an</span>
        <Highlight
          title="Android"
          Icon={
            <Android className="relative bottom-0.5 inline-block text-xl sm:text-xl" />
          }
        />
        <span className="mx-2 text-xl text-gray-600 dark:text-zinc-400 sm:text-2xl">
          and
        </span>
        <Highlight
          title="Next.js"
          Icon={
            <NextJs className="relative bottom-0.5 inline-block text-xl sm:text-xl" />
          }
        />
      </div>
      <div className="mx-auto flex flex-col items-center gap-2 text-center sm:flex-row">
        <span className={cn(baseClass)}>developer based in the</span>
        <span className={cn(baseClass)}>🌉San-Francisco Bay Area.</span>
      </div>
    </div>
  );
};

export default Bio;
