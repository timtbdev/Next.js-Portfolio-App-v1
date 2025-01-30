import Card from "@/components/ui/card";
import { BlogPostType } from "@/types";
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
  const readTime = readingTime(post.content.compiledSource).minutes;

  return (
    <Card>
      <Link href={`blog/posts/${post.slug}`}>
        <article className="relative isolate flex flex-col gap-2 px-5 py-5 sm:gap-8 sm:px-10 sm:py-6 lg:flex-row">
          <ImageSection post={post} />
          <div className="group relative max-w-xl">
            <Title title={post.title} />
            <div className="mt-1 flex items-center gap-x-3">
              <Category category={post.category} />
              <Author name={post.author} imageUrl={post.authorAvatar} />
            </div>
            <Description description={post.description} />
            <div className="mt-3 flex items-center gap-x-3">
              <Date date={post.date} />
              <ReadTime minutes={readTime} />
            </div>
          </div>
        </article>
      </Link>
    </Card>
  );
};

export default BlogPostItem;
