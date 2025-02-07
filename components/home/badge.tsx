import { FC } from "react";

interface Props {
  status: string;
  className?: string;
}

const Badge: FC<Props> = ({ status, className = "" }) => {
  return (
    <span className="my-3 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-300 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-700">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
      </span>
      {status}
    </span>
  );
};

export default Badge;
