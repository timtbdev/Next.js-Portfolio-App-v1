import { truncateDescription, truncateTitle } from "@/lib/seo";
import { PageType } from "@/types";

const OPENGRAPH_IMAGE = "/images/opengraph-image.png";
const TWITTER_IMAGE = "/images/twitter-image.png";
const AUTHOR = {
  name: "Tim Baz",
  twitterUrl: "https://x.com/timtbdev",
  twitterAddress: "@timtbdev",
  email: "timtb.dev@gmail.com",
};
const KEYWORDS = [
  "frontend",
  "developer",
  "hire",
  "san francisco",
  "javascript",
  "typescript",
  "node.js",
  "react",
  "next.js",
  "supabase",
  "tailwindcss",
  "css",
  "html",
  "web development",
];

const PAGES: PageType[] = [
  {
    name: "home",
    title: truncateTitle("Looking for the Best Frontend Developer? | Hire Tim"),

    description: truncateDescription(
      "Hire Tim – A Skilled Frontend Developer for Fast, Reliable, and High-Performing Web Applications!",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "about",
    title: truncateTitle("About | Frontend Developer for Hire | Tim"),
    description: truncateDescription(
      "Looking for a top Frontend Developer in San Francisco? Hire Tim.",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "blog",
    title: truncateTitle("Blog | Next.js, Tailwind CSS, and Supabase | Tim"),
    description: truncateDescription("Explore Tim's latest blog posts"),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "projects",
    title: truncateTitle("Projects | Showcasing Tim's Work | Tim"),
    description: truncateDescription("Next.js, Tailwind CSS, and Supabase!"),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "contact",
    title: truncateTitle("Contact | Get in Touch with Tim"),
    description: truncateDescription(
      "Thinking about hiring Tim? Drop him a message.",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
];

export default PAGES;
