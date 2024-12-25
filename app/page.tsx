import Card from "@/components/card";
import { ContentType } from "@/types";
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
          className="absolute inset-0 h-full w-full object-cover shadow-md md:rounded-2xl"
          unoptimized
        />
      </div>
      <article className="relative mx-auto max-w-3xl text-pretty px-6 py-4">
        {/* Profile Title */}
        <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100">
          {content.title}
        </h1>
        {/* Profile Content */}
        <div className="text-wrap border-b border-gray-200 text-lg leading-8 text-gray-600 last:border-b-0 dark:border-gray-600 dark:text-gray-400">
          {content.text.map((item, index) => (
            <p key={index} className="mt-4">
              {item}
            </p>
          ))}
        </div>
      </article>
    </Card>
  );
}
