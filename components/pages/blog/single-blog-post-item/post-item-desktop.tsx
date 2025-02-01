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

const PostItemDesktop: FC<Props> = ({ post, url, readingTime }) => {
  return (
    <article className="hidden gap-8 px-10 py-6 md:flex md:flex-col lg:flex lg:flex-row">
      <ImageSection post={post} />
      <div className="relative max-w-xl">
        <Link href={url}>
          <Title title={post.data.title} />
        </Link>

        <Tags tags={post.data.tags} />
        <div className="mt-3 flex items-center gap-x-3">
          <Date date={post.data.date} />
          <ReadTime minutes={readingTime} />
          <Author name={post.data.author} imageUrl={post.data.authorAvatar} />
        </div>
        <Description description={post.data.description} />
        <div className="mt-3 flex max-w-xl justify-start">
          <ReadMoreButton url={url} />
        </div>
      </div>
    </article>
  );
};

export default PostItemDesktop;
