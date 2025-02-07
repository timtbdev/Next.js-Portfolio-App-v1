import React, { FC, JSX, ReactElement } from "react";

interface Props {
  title: string;
  className?: string;
  Icon: ReactElement;
}

const Highlight: FC<Props> = ({ title, Icon, className = "" }) => {
  return (
    <span className="relative whitespace-nowrap">
      <span className="absolute -bottom-2 -left-1 -right-1 -top-3 -rotate-1 bg-gray-200 dark:bg-zinc-400"></span>
      <span className="relative text-xl text-gray-600 dark:text-zinc-900 sm:text-2xl">
        {title}
        {Icon}
      </span>
    </span>
  );
};

export default Highlight;
