import { Link } from "next-view-transitions";
import React, { FC } from "react";

interface Props {
  url: string;
}

const buttonClasses =
  "group relative flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-gray-300/40 bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-600 transition-all duration-100 ease-in-out hover:bg-gray-100 disabled:shadow-none dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/40 sm:max-w-fit";

const svgClasses =
  "-mr-1 ml-2 stroke-gray-600 stroke-[1.5px] dark:stroke-zinc-400";

const ReadMoreButton: FC<Props> = ({ url }) => {
  const isInternalLink = url.startsWith("/");

  const ButtonContent = () => (
    <>
      Read more
      <svg
        className={svgClasses}
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
    <Link className={buttonClasses} href={url}>
      <ButtonContent />
    </Link>
  ) : (
    <a
      className={buttonClasses}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ButtonContent />
    </a>
  );
};

export default ReadMoreButton;
