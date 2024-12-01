import { cn } from "@/lib/utils";
import { UrlType } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface Props {
  url: UrlType;
  className?: string;
}

const Button: FC<Props> = ({ url, className }) => {
  className = cn(
    "text-lg font-semibold tracking-tight text-gray-600 dark:text-gray-400 px-4 py-2 border rounded border-gray-600 antialiased hover:bg-gray-100 dark:hover:bg-gray-900",
    className,
  );
  return (
    <div className="mt-4 flex">
      {url.external ? (
        <a href={url.link} target="_blank" className={className}>
          {url.text} <span aria-hidden="true">&rarr;</span>
        </a>
      ) : (
        <Link href={url.link} className={className} prefetch={true}>
          {url.text} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
};

export default Button;
