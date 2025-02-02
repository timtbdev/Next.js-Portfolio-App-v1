import Card from "@/components/ui/card";
import { BlogPostType } from "@/types";
import { FC } from "react";
import readingTime from "reading-time";
import PostItem from "./post-item";

interface Props {
  post: BlogPostType;
}

const BlogPostItem: FC<Props> = ({ post }) => {
  const readTime = readingTime(post.content, { wordsPerMinute: 100 }).minutes;
  const url = `/blog/post/${post.slug}`;
  return (
    <Card>
      <PostItem post={post} url={url} readingTime={readTime} />
    </Card>
  );
};

export default BlogPostItem;
