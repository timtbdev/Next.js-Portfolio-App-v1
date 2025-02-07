import Link from "next/link";
import React from "react";

export const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="my-4 text-3xl font-bold" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="my-3 text-pretty text-base/8 leading-relaxed text-gray-600 dark:text-zinc-400"
      {...props}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <Link
      href={props.href || "#"}
      className="text-blue-500 hover:underline"
      {...props}
    />
  ),
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong
      className="font-semibold text-gray-800/90 dark:text-zinc-300/90"
      {...props}
    />
  ),
};
