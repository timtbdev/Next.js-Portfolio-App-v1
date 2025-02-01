import { BlogPostType } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import readingTime from "reading-time";
import Header from "./header";

interface Props {
  post: BlogPostType;
}

const BlogPostDetail: FC<Props> = ({ post }) => {
  return (
    <>
      <Header
        slug={post.slug}
        title={post.data.title}
        image={post.data.image}
        authorName={post.data.author}
        authorImage={post.data.authorAvatar}
        date={post.data.date}
        category={post.data.category}
        readTime={readingTime(post.content, { wordsPerMinute: 100 }).minutes}
      />
      <div className="dark:prose-dark prose max-w-none px-6 pb-8 sm:px-8 sm:pb-12">
        <MDXRemote source={post.content} />
      </div>
    </>
  );
};

export default BlogPostDetail;
