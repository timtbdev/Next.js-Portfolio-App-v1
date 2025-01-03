import crypto from "crypto";
import { ContentType } from "@/types";
import { shimmer, toBase64 } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

interface Props {
  content: ContentType;
}

export default function PagePostItem({ content }: Props) {
  return (
    <>
      {/* Profile Image */}
      <div className="lg:aspect-square relative mx-auto flex aspect-[16/9] sm:aspect-[2/1] lg:max-w-3xl">
        <Image
          src={content.image?.src || ""}
          alt={content.image?.alt || "Profile picture"}
          fill={true}
          priority={true}
          className="absolute inset-0 h-full w-full rounded-xl object-cover shadow-md md:rounded-2xl"
          unoptimized
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(256, 256),
          )}`}
        />
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col text-pretty px-2 py-4 sm:px-6">
        {/* Profile Title */}
        <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-950 first:mt-0 dark:text-white/90 sm:text-3xl">
          {content.title}
        </h1>
        {/* Profile Content */}
        <div className="leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8">
          {content.text.map((item, index) => (
            <p key={index} className="mt-2 text-wrap">
              {item}
            </p>
          ))}
        </div>
        <div className="mt-4 flex sm:mt-6">
          {content.url?.link?.startsWith("/") ? (
            <Link
              className="group flex w-full items-center justify-center whitespace-nowrap rounded-md border border-zinc-600/20 bg-transparent px-5 py-2.5 text-center text-base font-medium text-zinc-600 shadow-sm transition-all duration-100 ease-in-out hover:bg-zinc-200/40 hover:opacity-90 dark:border-zinc-700/40 dark:text-zinc-400 dark:hover:bg-gray-500/10 sm:w-fit"
              href={content.url?.link || "/"}
            >
              {content.url?.text || "Learn more"}
            </Link>
          ) : (
            <a
              target="_blank"
              className="group flex w-full items-center justify-center whitespace-nowrap rounded-md border border-zinc-600/20 bg-transparent px-5 py-2.5 text-center text-base font-medium text-zinc-600 shadow-sm transition-all duration-100 ease-in-out hover:bg-zinc-200/40 hover:opacity-90 dark:border-zinc-700/40 dark:text-zinc-400 dark:hover:bg-gray-500/10 sm:w-fit"
              href={content.url?.link || "/"}
            >
              {content.url?.text || "Learn more"}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
