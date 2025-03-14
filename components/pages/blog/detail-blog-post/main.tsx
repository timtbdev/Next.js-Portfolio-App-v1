import { mdxComponents } from "@/components/pages/mdx/mdx-components";
import { getAllPostsOrderedByDate } from "@/lib/mdx";
import { PostType } from "@/types";
import { AlignLeftIcon } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
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
  const posts = getAllPostsOrderedByDate();
  return (
    <div className="relative">
      <div className="absolute top-52 h-[calc(100%-13rem)] w-full border-t border-neutral-200 bg-gradient-to-b from-neutral-50"></div>
      <div className="mx-auto grid w-full max-w-screen-lg grid-cols-4 gap-5 px-0 pt-10 lg:gap-10 lg:px-4 xl:px-0">
        <div className="relative col-span-4 sm:rounded-xl sm:border sm:border-neutral-200 md:col-span-3">
          <div className="bg-white sm:rounded-t-xl">
            <Image
              alt={title}
              draggable={false}
              width={2282}
              height={1198}
              decoding="async"
              data-nimg="1"
              className="blur-0 aspect-[1200/630] overflow-hidden object-cover sm:rounded-t-xl"
              src={image}
            />
            <div className="prose max-w-none px-6 pt-4 pb-8 sm:px-8 sm:pt-6 sm:pb-12">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </div>
          <div className="border-t border-neutral-200 bg-gradient-to-b from-white/50 to-transparent p-10 backdrop-blur-lg">
            <div className="flex flex-col gap-y-4">
              <p className="font-display py-2 text-xl font-medium">Read more</p>
              <ul className="flex flex-col gap-y-6">
                {posts.map((post) => (
                  <li key={post.fileName}>
                    <Link
                      className="group flex flex-col items-center gap-4 sm:flex-row"
                      href={`/blog/post/${post.fileName}`}
                    >
                      <Image
                        alt={post.data.title}
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="blur-0 aspect-video w-full rounded-lg border border-neutral-200 sm:w-[200px]"
                        src={post.data.image}
                      />
                      <div className="flex flex-col space-y-2">
                        <p className="font-display line-clamp-1 font-medium text-neutral-700 underline-offset-4 group-hover:underline">
                          {post.data.title}
                        </p>
                        <p className="line-clamp-2 text-sm text-neutral-500 underline-offset-2 group-hover:underline">
                          {post.data.description}
                        </p>
                        <p className="text-xs text-neutral-400 underline-offset-2 group-hover:underline">
                          {post.data.date}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="sticky mt-48 hidden flex-col sm:flex">
          <div className="flex flex-col gap-y-4 py-5">
            <p className="text-sm text-neutral-500">Written by</p>
            <Image
              alt={author}
              loading="lazy"
              width={36}
              height={36}
              decoding="async"
              data-nimg="1"
              className="blur-0 rounded-full transition-all group-hover:brightness-90"
              src={authorAvatar}
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium whitespace-nowrap text-neutral-700">
                {author}
              </p>
              <p className="text-sm text-neutral-500">Frontend Developer</p>
            </div>
          </div>
          <div className="sticky top-16 col-span-1 self-start pt-4 pb-8">
            <div className="max-h-[58vh] overflow-y-auto pr-4 pb-8">
              <div>
                <p className="-ml-0.5 flex items-center gap-1.5 text-sm text-gray-500">
                  <AlignLeftIcon className="size-4" />
                  On this page
                </p>
                <div className="mt-4 grid gap-4 border-l-2 border-gray-200">
                  <a
                    data-active="true"
                    href="#introduction"
                    className="relative -ml-0.5"
                    style={{ paddingLeft: "16px" }}
                  >
                    <p className="text-sm text-black transition-colors">
                      Introduction
                    </p>
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-black"></div>
                  </a>
                  <a
                    data-active="false"
                    href="#installation"
                    className="relative -ml-0.5"
                    style={{ paddingLeft: "16px" }}
                  >
                    <p className="text-sm text-gray-500 transition-colors">
                      Installation
                    </p>
                  </a>
                  <a
                    data-active="false"
                    href="#configuration"
                    className="relative -ml-0.5"
                    style={{ paddingLeft: "16px" }}
                  >
                    <p className="text-sm text-gray-500 transition-colors">
                      Configuration
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <Link
              className="group relative block rounded-xl border border-neutral-200 bg-white p-4"
              href="/about"
            >
              <div className="absolute top-2 right-2 z-10 rounded-full border border-neutral-200 bg-gradient-to-b from-white/50 to-transparent p-2.5 opacity-0 backdrop-blur-lg transition-opacity group-hover:opacity-100 hover:bg-neutral-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right size-4 -rotate-45"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <Image
                alt="Hire Tim"
                loading="lazy"
                width={1800}
                height={944}
                decoding="async"
                data-nimg="1"
                className="blur-0 rounded-lg border border-neutral-100"
                src="/images/cover.jpg"
              />
              <p className="font-display mt-4 text-lg font-bold">Hire Tim</p>
              <p className="mt-1 text-sm text-neutral-500 underline-offset-4 group-hover:underline">
                Tim is the best developer in the San Francisco Bay Area.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogPost;
