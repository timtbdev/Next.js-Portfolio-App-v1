import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="group relative w-full rounded-2xl bg-white/20 p-2.5 shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:bg-zinc-900/30 dark:shadow-zinc-800/5 dark:ring-zinc-700/20">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 opacity-[0.15] blur-lg dark:from-zinc-950 dark:to-zinc-900"></div>
      <div className="relative max-w-full rounded-[0.62rem] shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:ring-zinc-700/40">
        <div className="rounded-lg bg-white px-5 py-5 shadow-md shadow-gray-300 ring-1 ring-black/5 dark:bg-zinc-900 dark:shadow-zinc-800/5 sm:gap-8 sm:px-10 sm:py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
