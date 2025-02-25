"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="absolute left-[10px] top-[20px] rounded-full border-[1px] border-gray-300 bg-gray-50 p-3 hover:bg-gray-200 active:bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:active:bg-zinc-500 sm:left-[20px]"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeftIcon
        size={20}
        className="h-5 w-5 text-gray-600 dark:text-zinc-400"
      />
    </button>
  );
};

export default BackButton;
