import Card from "@/components/card";
import { ContentType } from "@/types";
import { shimmer, toBase64 } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

const content: ContentType = {
  title: "Hello, I'm Tim.",
  image: {
    src: "/images/profile_image.jpg",
    alt: "Profile Image",
  },
  url: {
    link: "/about",
    text: "Learn more",
  },
  text: [
    "I’m an Android developer in the Bay Area who loves building modern, user-friendly apps. I got started in 2013 with Java and XML, but now I’m all about Kotlin and Jetpack Compose. I’ve published two apps on the Play Store, and one even got a shoutout from a popular Android YouTuber!.",
    "I have a Bachelor’s degree in Computer Science and speak English, German, and Mongolian. When I’m not coding, you’ll probably find me out running and enjoying the outdoors.",
  ],
};

export default async function HomePage() {
  return (
    <Card>
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
      <article className="relative mx-auto max-w-3xl text-pretty px-2 py-4 sm:px-6">
        {/* Profile Title */}
        <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-950 first:mt-0 dark:text-white/90 sm:text-4xl">
          {content.title}
        </h1>
        {/* Profile Content */}
        <div className="mb-2 leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
          {content.text.map((item, index) => (
            <p key={index} className="mt-2 text-wrap">
              {item}
            </p>
          ))}
        </div>
        {/* Learn More Button */}
        <Link
          className="mt-6 inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-zinc-600/20 bg-transparent px-5 py-2.5 text-center text-base font-medium text-zinc-600 shadow-sm transition-all duration-100 ease-in-out hover:bg-zinc-200/40 hover:opacity-90 dark:border-zinc-700/40 dark:text-zinc-400 dark:hover:bg-gray-500/10 sm:mt-0 sm:w-fit"
          href="/about"
        >
          Learn more
          <svg
            className="-mr-1 ml-1.5 stroke-zinc-600 stroke-[1.5px] dark:stroke-zinc-400"
            fill="none"
            stroke="currentColor"
            width="11"
            height="11"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path
              className="opacity-0 transition group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="transition group-hover:translate-x-[3px]"
              d="M1 1l4 4-4 4"
            ></path>
          </svg>
        </Link>
      </article>
    </Card>
  );
}
