import Card from "@/components/ui/card";
import { cn, shimmer, toBase64 } from "@/lib/utils";
import { PostType } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { FC } from "react";
import readingTime from "reading-time";
import InfoBarBottom from "./info-bar/info-bar-bottom";
import InfoBarTop from "./info-bar/info-bar-top";

interface Props {
  post: PostType;
  className?: string;
}

const SingleBlogPost: FC<Props> = ({ post, className }) => {
  const slug = post.fileName.replace(/\.mdx?$/, "");
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
  const url = `/blog/post/${slug}`;
  return (
    <Card className={cn("hover:bg-gray-100", className)}>
      <Link href={url}>
        <article className="flex flex-col gap-4 p-0 sm:flex-row sm:gap-8 sm:px-10 sm:py-6">
          <div className="relative aspect-16/9 sm:aspect-square sm:w-64 sm:shrink-0">
            <Image
              src={image}
              alt={title}
              height={256}
              width={256}
              priority
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(256, 256))}`}
              className={cn(
                "absolute inset-0 h-full w-full bg-gray-50 object-cover sm:rounded-2xl",
                className,
              )}
            />
          </div>

          <div className="relative max-w-xl px-8 pb-6 sm:p-0">
            <h3 className="line-clamp-2 text-2xl leading-6 font-bold tracking-tight text-pretty text-black sm:text-xl sm:font-semibold">
              {title}
            </h3>
            <Separator orientation="horizontal" className="my-2" />
            <div className="flex items-center gap-x-3">
              <InfoBarTop date={date} readTime={readTime} />
            </div>
            <p className="text-md mt-3 line-clamp-6 leading-7 text-balance">
              {description}
            </p>
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

export default SingleBlogPost;
