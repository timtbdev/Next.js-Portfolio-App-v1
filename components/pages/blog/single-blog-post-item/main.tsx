import Card from "@/components/ui/card";
import LinkButton from "@/components/ui/link-button";
import { BlogPostType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";
import readingTime from "reading-time";
import Author from "../shared/author";
import InfoBar from "../shared/info-bar";
import InfoItem from "../shared/info-item";
import PostImage from "../shared/post-image";
import Separator from "../shared/separator";
import Tags from "../shared/tags";
import Title from "../shared/title";
import Description from "./description";

interface Props {
  post: BlogPostType;
}

const BlogPostItem: FC<Props> = ({ post }) => {
  const slug = post.slug;
  const {
    title,
    description,
    image,
    author,
    authorAvatar,
    date,
    category,
    tags,
  } = post.data;
  const readTime = readingTime(post.content, { wordsPerMinute: 100 }).minutes;
  const url = `/blog/post/${post.slug}`;
  return (
    <Card>
      <article className="flex flex-col gap-4 p-0 sm:flex-row sm:gap-8 sm:px-10 sm:py-6">
        <PostImage slug={slug} imageUrl={image} imageAlt={title} />
        <div className="relative max-w-xl px-8 pb-6 sm:p-0">
          <Link href={url}>
            <Title title={title} />
          </Link>
          <Separator orientation="horizontal" className="my-2" />
          <Tags tags={tags} className="hidden sm:flex" />
          <Separator orientation="horizontal" className="my-2 hidden sm:flex" />

          <div className="flex items-center gap-x-3">
            <InfoBar
              authorImage={authorAvatar}
              authorName={author}
              date={date}
              category={category}
              readTime={readTime}
            />
          </div>
          <Description description={description} />
          <div className="mx-auto mt-3 flex justify-center sm:mx-0 sm:justify-start">
            <LinkButton title="Read More" url={url} className="w-full" />
          </div>
        </div>
      </article>
    </Card>
  );
};

export default BlogPostItem;
