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
    "I’m an Android developer in the Bay Area. I got into app development back in 2013 using Java and XML. Those early apps weren’t big hits, but they taught me a lot. In 2017, I switched to Kotlin and Jetpack Components, and one of my apps got featured by a popular Android YouTuber. Now I focus on Jetpack Compose. I have a Computer Science degree, speak English, German, and Mongolian, and enjoy running when I’m not coding.",
    "Contact: timtb.dev@gmail.com",
  ],
};

export default async function HomePage() {
  return (
    <div>
      {/* Profile Image */}
      <div className="lg:aspect-square relative mx-auto flex aspect-[16/9] sm:aspect-[2/1] lg:max-w-3xl">
        <Image
          src={content.image?.src || ""}
          alt={content.image?.alt || "Profile picture"}
          fill={true}
          priority={true}
          className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-md"
          unoptimized
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-4">
        {/* Profile Title */}
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100">
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
      </div>
    </div>
  );
}
