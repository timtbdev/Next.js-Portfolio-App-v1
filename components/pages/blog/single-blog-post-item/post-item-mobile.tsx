import ReadMoreButton from "@/components/ui/read-more-button";
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

const PostItemMobile: FC<Props> = ({ post, url, readingTime }) => {
  return (
    <article className="flex flex-col hover:bg-gray-100 dark:hover:bg-zinc-800 sm:hidden">
      <Link href={url} suppressHydrationWarning>
        <ImageSection post={post} />
        <div className="relative mb-6 mt-4 max-w-xl px-8">
          <Title title={post.data.title} />
          <div className="mt-2 flex items-center gap-x-3">
            <Date date={post.data.date} />
            <ReadTime minutes={readingTime} />
            <Author name={post.data.author} imageUrl={post.data.authorAvatar} />
          </div>
          <Description description={post.data.description} />
        </div>
      </Link>
    </article>
  );
};

export default PostItemMobile;
