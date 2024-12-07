import { SparklesIcon } from "lucide-react";

export default function Banner() {
  return (
    <span className="mt-6 flex justify-center">
      <a
        href="https://allyouneed.dev"
        target="_blank"
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-400 dark:hover:bg-gray-900"
      >
        <SparklesIcon
          aria-hidden="true"
          className="size-4 text-gray-600 dark:text-gray-400"
        />
        Built with
        <svg
          width="2"
          height="2"
          aria-hidden="true"
          className="fill-gray-600 dark:fill-gray-400"
        >
          <circle cx="1" cy="1" r="1"></circle>
        </svg>
        AllYouNeed.Dev
      </a>
    </span>
  );
}
