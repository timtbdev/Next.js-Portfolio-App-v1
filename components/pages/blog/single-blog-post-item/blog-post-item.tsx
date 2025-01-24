import { getMinutes, shimmer, toBase64 } from "@/utils/helpers";
import { CalendarIcon, Clock10Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";
import { BlogPostType } from "types";

interface Props {
  post: BlogPostType;
}

const BlogPostItem: React.FC<Props> = ({ post }) => {
  const readTime = readingTime(post.content);

  return (
    <div className="group relative w-full rounded-2xl bg-white/20 p-2.5 shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 transition duration-200 hover:-translate-y-1">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 opacity-[0.15] blur-lg"></div>
      <div className="relative max-w-full rounded-[0.62rem] shadow-sm shadow-black/5 ring-[0.8px] ring-black/5">
        <Link href={`/posts/${post.slug}`}>
          <article className="relative isolate flex max-w-3xl flex-col gap-2 rounded-lg bg-white px-5 py-5 shadow-md shadow-gray-300 ring-1 ring-black/5 sm:gap-8 sm:px-10 sm:py-6 lg:flex-row">
            <ImageSection post={post} />
            <ContentSection post={post} readTime={readTime} />
          </article>
        </Link>
      </div>
    </div>
  );
};

const ImageSection: React.FC<{ post: BlogPostType }> = ({ post }) => (
  <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
    <Image
      src={post.image ?? "/images/cover-photo.jpg"}
      alt={post.title ?? "Cover"}
      height={256}
      width={256}
      priority
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(256, 256))}`}
      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
    />
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  </div>
);

const ContentSection: React.FC<{ post: BlogPostType; readTime: any }> = ({
  post,
  readTime,
}) => (
  <div>
    <CategoryBadge category={post.category} />
    <div className="group relative max-w-xl">
      <Title title={post.title} />
      <MobileInfo post={post} readTime={readTime} />
      <Description description={post.description} />
      <DesktopInfo post={post} readTime={readTime} />
    </div>
    <AuthorInfo author={post.author} />
  </div>
);

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => (
  <div className="hidden items-center gap-x-3 text-sm sm:flex">
    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200">
      {category}
    </span>
  </div>
);

const Title: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
    <span className="absolute inset-0" />
    {title}
  </h3>
);

const MobileInfo: React.FC<{ post: BlogPostType; readTime: any }> = ({
  post,
  readTime,
}) => (
  <div className="mt-2 flex items-center gap-x-3 text-sm sm:hidden">
    <CategoryBadge category={post.category} />
    <DateInfo date={post.updated_at} />
    <ReadTimeInfo minutes={readTime.minutes} />
  </div>
);

const Description: React.FC<{ description: string }> = ({ description }) => (
  <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
);

const DesktopInfo: React.FC<{ post: BlogPostType; readTime: any }> = ({
  post,
  readTime,
}) => (
  <div className="mt-3 hidden items-center gap-x-3 text-sm sm:flex">
    <DateInfo date={post.updated_at} />
    <ReadTimeInfo minutes={readTime.minutes} />
  </div>
);

const DateInfo: React.FC<{ date: string }> = ({ date }) => (
  <div className="inline-flex items-center text-gray-500">
    <CalendarIcon className="h-4 w-4" />
    <span className="ml-1">{date}</span>
  </div>
);

const ReadTimeInfo: React.FC<{ minutes: number }> = ({ minutes }) => (
  <div className="inline-flex items-center text-gray-500">
    <Clock10Icon className="h-4 w-4" />
    <span className="ml-1">{getMinutes(minutes)}</span>
  </div>
);

const AuthorInfo: React.FC<{ author: { name: string; image: string } }> = ({
  author,
}) => (
  <div className="mt-3 flex border-t border-gray-900/5 pt-2">
    <div className="relative flex items-center gap-x-2">
      <Image
        src={author.image ?? "/images/avatar.jpg"}
        alt="Author's Avatar"
        height={40}
        width={40}
        priority
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(40, 40))}`}
        className="h-[40px] w-[40px] rounded-full bg-gray-50 object-cover"
      />
      <div className="text-sm">
        <p className="font-semibold text-gray-900">{author.name}</p>
      </div>
    </div>
  </div>
);

export default BlogPostItem;
