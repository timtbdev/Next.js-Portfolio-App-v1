import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto my-6 max-w-4xl overflow-hidden">
      <div className="mx-6 rounded-lg border-[1px] border-zinc-600/20 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-900">
        {children}
      </div>
    </div>
  );
}
