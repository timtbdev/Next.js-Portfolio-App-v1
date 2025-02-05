import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  date: string;
  className?: string;
}

const Date: FC<Props> = ({ date, className }) => {
  return <p className={cn("my-2 tracking-tight", className)}>{date}</p>;
};

export default Date;
