import { cn } from "@/utils/helpers";
import React, { FC } from "react";

interface Props {
  description: string;
  className?: string;
}

const Description: FC<Props> = ({ description, className }) => {
  return <p className="mx-auto max-w-lg">{description}</p>;
};

export default Description;
