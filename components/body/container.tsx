import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className="min-h-full py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div
            className={cn(
              "mx-auto max-w-4xl overflow-hidden border-[1px] border-gray-200 bg-white py-8 dark:border-gray-600 dark:bg-gray-800",
              className,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
