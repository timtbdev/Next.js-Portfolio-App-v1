import { UrlType } from "@/types";
import Link from "next/link";

interface Props {
  url: UrlType;
}

export default function Button({ url }: Props) {
  // Define the className for the button
  const _className =
    "text-lg font-semibold tracking-tight text-blue-500 dark:text-sky-500 px-4 py-2 border rounded border-gray-600 hover:border-blue-500 dark:hover:border-sky-500 antialiased hover:bg-gray-100 dark:hover:bg-gray-900";

  return (
    <div className="mt-4 flex">
      {url.external ? (
        // Render an external link
        <a
          href={url.link}
          target="_blank"
          rel="noopener noreferrer"
          className={_className}
          aria-label={`External link to ${url.text}`}
        >
          {url.text} <span aria-hidden="true">&rarr;</span>
        </a>
      ) : (
        // Render an internal link
        <Link href={url.link} className={_className} prefetch={true}>
          {url.text} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
