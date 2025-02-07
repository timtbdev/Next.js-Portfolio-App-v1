import Card from "@/components/ui/card";
import { BlogPostType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";
import readingTime from "reading-time";
import InfoBarBottom from "../shared/info-bar-bottom";
import InfoBarTop from "../shared/info-bar-top";
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
    <Card className="hover:bg-gray-100 dark:hover:bg-zinc-900">
      <Link href={url}>
        <article className="flex flex-col gap-4 p-0 sm:flex-row sm:gap-8 sm:px-10 sm:py-6">
          <PostImage slug={slug} imageUrl={image} imageAlt={title} />
          <div className="relative max-w-xl px-8 pb-6 sm:p-0">
            <Title title={title} />
            <Separator orientation="horizontal" className="my-2" />
            <Tags tags={tags} />
            <Separator orientation="horizontal" className="my-2" />
            <div className="flex items-center gap-x-3">
              <InfoBarTop date={date} readTime={readTime} />
            </div>
            <Description description={description} />
            <Separator orientation="horizontal" className="my-2" />
            <div className="flex items-center gap-x-3">
              <InfoBarBottom
                authorName={author}
                authorImage={authorAvatar}
                category={category}
              />
            </div>
          </div>
        </article>
      </Link>
    </Card>
  );
};

export default BlogPostItem;
