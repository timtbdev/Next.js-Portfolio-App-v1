import Link from "next/link";
import { FC } from "react";
import readingTime from "reading-time";
import { BlogPostType } from "types";
import ContentSection from "./content-section";
import ImageSection from "./image-section";

interface Props {
  post: BlogPostType;
}

const BlogPostItem: FC<Props> = ({ post }) => {
  const readTime = readingTime(post.content);

  return (
    <div className="relative max-w-full rounded-[0.62rem] shadow-sm ring-[0.8px] ring-gray-300 dark:ring-zinc-700">
      <Link href={`/posts/${post.slug}`}>
        <article className="relative isolate flex max-w-3xl flex-col gap-2 rounded-lg bg-white px-5 py-5 shadow-md ring-1 ring-gray-300 dark:bg-zinc-900 dark:ring-zinc-700 sm:gap-8 sm:px-10 sm:py-6 lg:flex-row">
          <ImageSection post={post} />
          <ContentSection post={post} readTime={readTime} />
        </article>
      </Link>
    </div>
  );
};

export default BlogPostItem;
