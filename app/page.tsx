import Card from "@/components/card";
import { ContentType } from "@/types";
import { shimmer, toBase64 } from "@/utils/helpers";
import Image from "next/image";

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
      <article className="relative mx-auto max-w-3xl text-pretty px-6 py-4">
        {/* Profile Title */}
        <h1 className="text-balance text-2xl font-bold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100 md:text-3xl">
          {content.title}
        </h1>
        {/* Profile Content */}
        <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
          {content.text.map((item, index) => (
            <p key={index} className="mt-2 text-wrap md:mt-4">
              {item}
            </p>
          ))}
        </div>
      </article>
    </Card>
  );
}
