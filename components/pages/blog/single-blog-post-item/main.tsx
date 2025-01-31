import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import ReadMoreButton from "@/components/ui/read-more-button";
import { BlogPostType } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { FC } from "react";
import readingTime from "reading-time";
import Description from "./description";
import ImageSection from "./image-section";
import Author from "./info/author";
import Category from "./info/category";
import Date from "./info/date";
import ReadTime from "./info/read-time";
import Title from "./title";

interface Props {
  post: BlogPostType;
}

const BlogPostItem: FC<Props> = ({ post }) => {
  const readTime = readingTime(post.content).minutes;
  return (
    <Card>
      <article className="relative isolate flex flex-col gap-2 px-5 py-5 sm:gap-8 sm:px-10 sm:py-6 lg:flex-row">
        <ImageSection post={post} />
        <div className="group relative max-w-xl">
          <Title title={post.data.title} />
          <div className="mt-3 flex items-center gap-x-3">
            <Date date={post.data.date} />
            <ReadTime minutes={readTime} />
            <Author name={post.data.author} imageUrl={post.data.authorAvatar} />
          </div>
          <Description description={post.data.description} />

          <div className="relative mt-3 max-w-xl justify-start">
            <ReadMoreButton url={`/blog/post/${post.slug}`} />
          </div>
        </div>
      </article>
    </Card>
  );
};

export default BlogPostItem;
