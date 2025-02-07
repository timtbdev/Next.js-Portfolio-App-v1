import { BlogPostType } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import readingTime from "reading-time";
import InfoBarDetailDesktop from "../shared/info-bar-detail-desktop";
import InfoBarDetailMobile from "../shared/info-bar-detail-mobile";
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
          <Tags tags={tags} detail={true} />
          <Separator orientation="horizontal" className="my-2" />
          <InfoBarDetailDesktop
            authorImage={authorAvatar}
            authorName={author}
            date={post.data.date}
            category={category}
            readTime={readTime}
            className="hidden sm:flex"
          />
          <InfoBarDetailMobile
            authorImage={authorAvatar}
            authorName={author}
            date={post.data.date}
            category={category}
            readTime={readTime}
            className="sm:hidden"
          />
        </div>
      </div>
      <div className="dark:prose-dark prose max-w-none px-6 pb-8 pt-4 sm:px-8 sm:pb-12 sm:pt-6">
        <MDXRemote source={post.content} />
      </div>
    </>
  );
};

export default BlogPostDetail;
