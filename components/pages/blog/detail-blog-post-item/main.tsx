import { BlogPostType } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import readingTime from "reading-time";
import InfoBar from "../shared/info-bar";
import PostImage from "../shared/post-image";
import Separator from "../shared/separator";
import Tags from "../shared/tags";
import Title from "../shared/title";

interface Props {
  post: BlogPostType;
}

const BlogPostDetail: FC<Props> = ({ post }) => {
  const { slug } = post;
  const { title, image, tags, author, authorAvatar, category } = post.data;
  const readTime = readingTime(post.content, { wordsPerMinute: 100 }).minutes;
  return (
    <>
      <div
        aria-label="info-bar"
        className="flex flex-col items-start justify-between"
      >
        <PostImage
          slug={slug}
          title={title}
          imageUrl={image}
          imageAlt={title}
          detail={true}
        />
        <div className="w-full px-6 py-1 sm:px-8">
          <Title title={title} detail={true} />
          <Separator orientation="horizontal" className="my-2" />
          <Tags tags={tags} detail={true} className="hidden sm:flex" />
          <Separator orientation="horizontal" className="my-2 hidden sm:flex" />
          <InfoBar
            authorImage={authorAvatar}
            authorName={author}
            date={post.data.date}
            category={category}
            readTime={readTime}
            detail={true}
            className="my-2"
          />
        </div>
      </div>
      <div className="dark:prose-dark prose max-w-none px-6 pb-8 sm:px-8 sm:pb-12">
        <MDXRemote source={post.content} />
      </div>
    </>
  );
};

export default BlogPostDetail;
