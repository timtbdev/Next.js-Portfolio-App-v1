import { BlogPostType } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import InfoBar from "../shared/info-bar";
import PostImage from "../shared/post-image";
import Separator from "../shared/separator";
import Tags from "../shared/tags";
import Title from "../shared/title";

interface Props {
  post: BlogPostType;
}

const BlogPostDetail: FC<Props> = ({ post }) => {
  const {
    title,
    image,
    slug,
    tags,
    authorName,
    authorImage,
    category,
    readTime,
  } = post.data;
  return (
    <>
      <div
        aria-label="info-bar"
        className="flex flex-col items-start justify-between"
      >
        <PostImage
          slug={slug}
          imageUrl={image}
          imageAlt={title}
          detail={true}
        />
        <div className="w-full px-6 py-1 sm:px-8">
          <Title title={title} detail={true} />
          <Separator orientation="horizontal" className="my-2" />
          <Tags tags={tags} />
          <Separator orientation="horizontal" className="my-2" />
          <InfoBar
            authorImage={authorImage}
            authorName={authorName}
            date={post.data.date}
            category={category}
            readTime={readTime}
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
