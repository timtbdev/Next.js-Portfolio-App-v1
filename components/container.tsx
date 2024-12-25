import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto my-3 max-w-4xl overflow-hidden md:my-6">
      <div className="mx-0 border-[1px] border-zinc-600/20 bg-white px-0 py-0 dark:border-zinc-700/40 dark:bg-zinc-900 md:mx-6 md:rounded-lg md:px-6 md:py-6">
        {children}
      </div>
    </div>
  );
}
