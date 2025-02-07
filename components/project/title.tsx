import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const Title: FC<Props> = ({ title, className }) => {
  return (
    <h2 className={cn("text-pretty font-bold tracking-tight", className)}>
      {title}
    </h2>
  );
};

export default Title;
