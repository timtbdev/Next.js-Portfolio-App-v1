import { ContentType } from "@/types";
import Image from "next/image";

const content: ContentType[] = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    image: {
      src: "/images/placeholder.jpg",
      alt: "Placeholder image",
    },
    url: {
      link: "/blog/post/1",
      text: "Continue reading",
    },
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    ],
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    image: {
      src: "/images/placeholder.jpg",
      alt: "Placeholder image",
    },
    url: {
      link: "/blog/post/1",
      text: "Continue reading",
    },
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    ],
  },
];

export default async function BlogPage() {
  return (
    <div>
      {content.map((item, index) => (
        <div key={item.id}>
          {/* Blog Post Image */}
          <div className="shadow-photo lg:aspect-square relative mx-auto flex aspect-[16/9] rounded-2xl text-center shadow-md sm:aspect-[2/1] lg:max-w-3xl">
            <Image
              src={item.image?.src || ""}
              alt={item.image?.alt || "Blog Post Image"}
              fill={true}
              priority={true}
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover sm:rounded-2xl"
              unoptimized
            />
          </div>
          <div className="relative mx-auto max-w-3xl px-6 py-4">
            {/* Blog Post Title */}
            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100">
              {item.title}
            </h1>
            {/* Blog Post Content */}
            <div className="text-wrap border-b border-gray-200 text-lg leading-8 text-gray-600 last:border-b-0 dark:border-gray-600 dark:text-gray-400">
              {content.map((item, index) => (
                <p key={index} className="mt-4">
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
