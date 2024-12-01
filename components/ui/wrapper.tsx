import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(className, "relative mx-auto max-w-3xl px-6 py-4")}>
      {children}
    </div>
  );
};

export default Wrapper;
