import { shimmer, toBase64 } from "@/utils/helpers";
import { ArchiveIcon, CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { FC, JSX } from "react";

interface Props {
  title: string;
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
  category: string;
  readTime: number;
}

const AuthorInfo: FC<{ authorImage: string; authorName: string }> = ({
  authorImage,
  authorName,
}) => (
  <div className="inline-flex items-start justify-start">
    <Image
      src={authorImage}
      height={24}
      width={24}
      alt={authorName || "Avatar"}
      className="flex h-[24px] w-[24px] rounded-full object-cover shadow-sm"
      priority
      placeholder="blur"
      blurDataURL={shimmer(24, 24)}
    />
    <div className="ml-2 flex flex-col">
      <span className="text-md flex font-semibold text-gray-900">
        {authorName}
      </span>
    </div>
  </div>
);

const InfoItem: FC<{ icon: JSX.Element; text: string }> = ({ icon, text }) => (
  <div className="inline-flex space-x-2 border-gray-400 border-opacity-50">
    <p className="mt-0.5">{icon}</p>
    <span className="text-sm">{text}</span>
  </div>
);

const BlogPostHeader: FC<Props> = async ({
  title,
  image,
  authorName,
  authorImage,
  date,
  category,
  readTime,
}) => {
  return (
    <section className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={512}
          height={288}
          className="h-[288px] w-full rounded-2xl bg-gray-100 object-cover"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(512, 288),
          )}`}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="w-full">
        <p className="my-5 overflow-hidden text-xl font-semibold leading-6 text-gray-900">
          {title}
        </p>

        {/* Mobile view */}
        <div className="mb-5 grid grid-cols-2 gap-2 rounded-md border border-gray-100 px-3 py-2.5 text-gray-500 sm:hidden">
          <AuthorInfo authorImage={authorImage} authorName={authorName} />
          <InfoItem
            icon={
              <CalendarIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            }
            text={date}
          />
          <InfoItem
            icon={
              <ArchiveIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            }
            text={category}
          />
          <InfoItem
            icon={
              <ClockIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            }
            text={String(readTime)}
          />
        </div>

        {/* Desktop view */}
        <div className="mb-7 hidden justify-start text-gray-500 sm:flex sm:flex-row">
          <div className="mb-5 flex flex-row items-start justify-start pr-3.5 md:mb-0">
            <AuthorInfo authorImage={authorImage} authorName={authorName} />
          </div>
          <div className="flex flex-row items-center">
            <InfoItem
              icon={
                <CalendarIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              }
              text={date}
            />
            <InfoItem
              icon={
                <ArchiveIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              }
              text={category}
            />
            <InfoItem
              icon={
                <ClockIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              }
              text={String(readTime)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHeader;
