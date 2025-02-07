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
      <button className="group relative mx-auto my-6 inline-flex items-center justify-center gap-x-1">
        <h1 className="font-cali text-2xl font-semibold tracking-tight text-gray-800 dark:text-white/90 sm:text-3xl">
          {title}
        </h1>
        <HandDrawnCircle className="dark:group-hover:text-brand-500 absolute -left-20 -top-[26px] mx-auto h-[90px] w-auto items-center text-gray-200 group-hover:text-blue-500 dark:text-zinc-600 sm:-left-14 sm:-top-[22px]" />
      </button>
    </ScrollIntoView>
  </div>
);

export default SelectedProjectsButton;
