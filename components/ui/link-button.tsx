import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  className?: string;
}

const LinkButton: FC<Props> = ({ title, url, className }) => {
  const isInternalLink = url.startsWith("/");

  const ButtonContent = () => (
    <>
      {title}
      <svg
        className="-mr-1 ml-2 stroke-gray-600 stroke-[1.5px] group-hover:stroke-black dark:stroke-white dark:group-hover:stroke-zinc-400"
        fill="none"
        stroke="currentColor"
        width="11"
        height="11"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="opacity-0 transition group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </>
  );

  return isInternalLink ? (
    <Link
      href={url}
      className={cn(
        className,
        "group relative flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-gray-300/40 bg-gray-50 px-4 py-6 text-center text-sm font-semibold text-gray-600 transition-all duration-100 ease-in-out hover:border-gray-400 hover:bg-gray-100 hover:text-black active:bg-gray-200 disabled:shadow-none dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white dark:active:bg-zinc-500 sm:max-w-fit sm:py-2",
      )}
    >
      <ButtonContent />
    </Link>
  ) : (
    <a
      className={cn(
        className,
        "group relative flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-gray-300/40 bg-gray-50 px-4 py-6 text-center text-sm font-semibold text-gray-600 transition-all duration-100 ease-in-out hover:border-gray-400 hover:bg-gray-100 hover:text-black active:bg-gray-200 disabled:shadow-none dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white dark:active:bg-zinc-500 sm:max-w-fit sm:py-2",
      )}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ButtonContent />
    </a>
  );
};

export default LinkButton;
