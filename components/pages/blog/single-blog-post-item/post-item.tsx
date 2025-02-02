import LinkButton from "@/components/ui/link-button";
import { BlogPostType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";
import Description from "./description";
import ImageSection from "./image-section";
import Author from "./info-bar/author";
import Date from "./info-bar/date";
import ReadTime from "./info-bar/read-time";
import Tags from "./info-bar/tags";
import Title from "./title";

interface Props {
  post: BlogPostType;
  url: string;
  readingTime: number;
}

const PostItem: FC<Props> = ({ post, url, readingTime }) => {
  return (
    <article className="flex flex-col gap-4 p-0 md:flex-row md:gap-8 md:px-10 md:py-6">
      <ImageSection post={post} />
      <div className="relative max-w-xl px-8 pb-6 md:p-0">
        <Link href={url}>
          <Title title={post.data.title} />
        </Link>

        <Tags tags={post.data.tags} className="hidden sm:flex" />
        <div className="mt-3 flex items-center gap-x-3">
          <Date date={post.data.date} />
          <ReadTime minutes={readingTime} />
          <Author name={post.data.author} imageUrl={post.data.authorAvatar} />
        </div>
        <Description description={post.data.description} />
        <div className="mx-auto mt-3 flex justify-center md:mx-0 md:justify-start">
          <LinkButton title="Read More" url={url} className="w-full" />
        </div>
      </div>
    </article>
  );
};

export default PostItem;
