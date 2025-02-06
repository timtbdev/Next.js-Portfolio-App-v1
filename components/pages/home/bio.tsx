import { cn } from "@/utils/helpers";
import { FC } from "react";
import {
  TbBrandAndroid as Android,
  TbBrandNextjs as NextJs,
} from "react-icons/tb";

interface Props {
  className?: string;
}

const Bio: FC<Props> = ({ className }) => {
  const baseClass =
    "text-xl text-gray-600 dark:text-zinc-400 sm:text-2xl tracking-tight font-medium";
  return (
    <div className={cn("flex flex-col gap-y-4 text-center", className)}>
      <div className="infline-flex items-center justify-center">
        <span className={cn(baseClass, "mr-3")}>I’m an</span>
        <span className="relative whitespace-nowrap">
          <span className="bg-green-00 dark:bg-brand-200/10 text-pretty0 absolute -bottom-2 -left-1 -right-1 -top-3 -rotate-1 bg-gray-800"></span>
          <span className="dark:text-brand-400 relative text-xl text-white sm:text-2xl">
            Android
            <Android className="relative bottom-0.5 inline-block text-xl sm:text-xl" />
          </span>
        </span>
        <span className="mx-2 text-xl text-gray-600 dark:text-zinc-400 sm:text-2xl">
          and
        </span>
        <span className="relative whitespace-nowrap">
          <span className="dark:bg-brand-200/10 absolute -bottom-2 -left-1 -right-1 -top-3 -rotate-1 text-pretty bg-gray-800"></span>
          <span className="dark:text-brand-400 relative text-xl text-white sm:text-2xl">
            Next.js
            <NextJs className="relative bottom-0.5 inline-block text-xl sm:text-xl" />
          </span>
        </span>
      </div>
      <span className={cn(baseClass)}>developer based in the 🌉 Bay Area.</span>
    </div>
  );
};

export default Bio;
