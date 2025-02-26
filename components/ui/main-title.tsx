import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

const MainTitle: FC<Props> = ({ title, description, className = "" }) => {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      <h1 className="mb-2 justify-start text-3xl font-bold capitalize tracking-tight text-black md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mb-2 text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default MainTitle;
