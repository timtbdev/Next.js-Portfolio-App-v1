import { mdxComponents } from "@/components/pages/mdx/mdx-components";
import { shimmer, toBase64 } from "@/lib/utils";
import { PostType } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { FC } from "react";
import readingTime from "reading-time";

interface Props {
  post: PostType;
}

const DetailBlogPost: FC<Props> = ({ post }) => {
  const { fileName } = post;
  const { title, image, tags, author, authorAvatar, category } = post.data;
  const readTime = readingTime(post.content, { wordsPerMinute: 100 }).minutes;
  return (
    <>
      <div
        aria-label="info-bar"
        className="flex flex-col items-start justify-between"
      >
        <div className="flex w-full">
          <Image
            src={image}
            alt={title}
            width={512}
            height={384}
            className="h-96 w-full object-cover lg:rounded-t-[0.62rem]"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(512, 288))}`}
          />
        </div>
      </div>
      <div className="prose max-w-none px-6 pt-4 pb-8 sm:px-8 sm:pt-6 sm:pb-12">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </>
  );
};

export default DetailBlogPost;
