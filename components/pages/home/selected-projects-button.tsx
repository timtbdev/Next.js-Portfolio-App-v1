"use client";

import { cn } from "@/utils/helpers";
import { FC } from "react";
import ScrollIntoView from "react-scroll-into-view";

interface Props {
  className?: string;
}

const SelectedProjectsButton: FC<Props> = ({ className = "" }) => (
  <div className={cn("flex flex-col justify-center", className)}>
    <ScrollIntoView selector="#selected-projects">
      <button className="hover:shine dark:from-brand-300 dark:to-brand-400 mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-blue-600 font-semibold text-white shadow-xl transition hover:scale-[0.98] active:scale-[0.95] dark:text-zinc-900 dark:ring-zinc-700">
        Selected Projects ↓
      </button>
    </ScrollIntoView>
  </div>
);

export default SelectedProjectsButton;
