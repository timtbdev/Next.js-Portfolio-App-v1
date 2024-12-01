import { PostType } from "@/types";

const blogConfig: PostType[] = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    image: {
      src: "/images/placeholder.jpg",
      alt: "Placeholder image",
    },
    content: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
        url: {
          link: "/blog/post/1",
          text: "Learn more",
          external: false,
        },
      },
    ],
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    image: {
      src: "/images/placeholder.jpg",
      alt: "Placeholder image",
    },
    content: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
        url: {
          link: "/blog/post/1",
          text: "Learn more",
          external: false,
        },
      },
    ],
  },
];

export default blogConfig;
