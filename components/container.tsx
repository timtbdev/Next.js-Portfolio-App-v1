import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="min-h-full py-5">
      {/* Outer container with max width */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Inner container with smaller max width */}
        <div className="mx-auto max-w-5xl">
          {/* Content container with border and background color */}
          <div className="mx-auto max-w-4xl overflow-hidden border-[1px] border-gray-200 bg-white py-8 dark:border-gray-600 dark:bg-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
