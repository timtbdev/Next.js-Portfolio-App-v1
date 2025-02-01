import Card from "@/components/ui/card";
import { BlogPostType } from "@/types";
import { FC } from "react";
import readingTime from "reading-time";
import PostItemDesktop from "./post-item-desktop";
import PostItemMobile from "./post-item-mobile";

interface Props {
  post: BlogPostType;
}

const BlogPostItem: FC<Props> = ({ post }) => {
  const readTime = readingTime(post.content, { wordsPerMinute: 100 }).minutes;
  const url = `/blog/post/${post.slug}`;
  return (
    <Card>
      <PostItemMobile post={post} url={url} readingTime={readTime} />
      <PostItemDesktop post={post} url={url} readingTime={readTime} />
    </Card>
  );
};

export default BlogPostItem;
