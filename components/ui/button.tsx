import { UrlType } from "@/types";
import Link from "next/link";

interface Props {
  url: UrlType;
}

export default function Button({ url }: Props) {
  const _className =
    "text-lg font-semibold tracking-tight text-gray-600 dark:text-gray-400 px-4 py-2 border rounded border-gray-600 antialiased hover:bg-gray-100 dark:hover:bg-gray-900";
  return (
    <div className="mt-4 flex">
      {url.external ? (
        <a href={url.link} target="_blank" className={_className}>
          {url.text} <span aria-hidden="true">&rarr;</span>
        </a>
      ) : (
        <Link href={url.link} className={_className} prefetch={true}>
          {url.text} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
