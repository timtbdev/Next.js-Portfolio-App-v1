"use client";

import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import { cn } from "@/utils/helpers";
import { FC } from "react";
import ScrollIntoView from "react-scroll-into-view";

interface Props {
  title: string;
  scrollTo: string;
  className?: string;
}

const SelectedProjectsButton: FC<Props> = ({
  title,
  scrollTo,
  className = "",
}) => (
  <div className={cn("flex flex-col justify-center", className)}>
    <ScrollIntoView selector={scrollTo}>
      <button className="group relative mx-auto mt-4 inline-flex items-center justify-center gap-x-1">
        <h2 className="text-xl font-semibold tracking-tight text-gray-600 dark:text-white/90">
          {title}
        </h2>
        <HandDrawnCircle className="dark:group-hover:text-brand-500 absolute -left-12 -top-[16px] mx-auto h-[70px] w-auto rotate-1 items-center text-gray-300 group-hover:text-blue-500 dark:text-zinc-600" />
      </button>
    </ScrollIntoView>
  </div>
);

export default SelectedProjectsButton;
