import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: FC<Props> = ({ id, children, className }) => {
  return (
    <section id={id} className={cn("px-6 py-8 lg:px-8", className)}>
      {children}
    </section>
  );
};

export default Section;
