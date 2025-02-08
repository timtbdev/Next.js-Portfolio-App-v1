import Link from "next/link";
import React from "react";

export const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="my-4 text-3xl font-bold" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="my-2 text-pretty text-base/8 leading-relaxed text-gray-600 dark:text-zinc-400"
      {...props}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => {
    const className =
      "text-gray-600 hover:text-blue-600 hover:dark:text-brand-500 dark:text-zinc-400 underline underline-offset-4";
    if (props.href?.startsWith("/")) {
      return (
        <Link href={props.href} className={className} {...props}>
          {props.children}
        </Link>
      );
    }
    if (props.href?.startsWith("#")) {
      return (
        <a href={props.href} className={className} {...props}>
          {props.children}
        </a>
      );
    }
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {props.children}
      </a>
    );
  },
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong
      className="font-semibold text-gray-800/90 dark:text-zinc-300/90"
      {...props}
    />
  ),
};
