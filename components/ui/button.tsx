import { UrlType } from "@/types";
import Link from "next/link";

interface Props {
  url: UrlType;
}

export default function Button({ url }: Props) {
  return (
    <div className="mt-4 flex">
      {url.external ? (
        // Render an external link
        <a
          href={url.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-semibold text-blue-500 hover:text-gray-600 dark:text-sky-500 dark:hover:text-gray-400"
          aria-label={`External link to ${url.text}`}
        >
          {url.text} <span aria-hidden="true">&rarr;</span>
        </a>
      ) : (
        // Render an internal link
        <Link
          href={url.link}
          className="text-md font-semibold text-blue-500 hover:text-gray-600 dark:text-sky-500 dark:hover:text-gray-400"
          prefetch={true}
          aria-label={`Internal link to ${url.text}`}
        >
          {url.text} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
