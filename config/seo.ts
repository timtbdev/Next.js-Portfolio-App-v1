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
      "Looking for a top Frontend Developer in San Francisco? Hire Tim, a skilled Frontend Developer, to build fast, reliable, and high-performing web applications.",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "blog",
    title: truncateTitle("Blog | Next.js, Tailwind CSS, and Supabase | Tim"),
    description: truncateDescription(
      "Explore Tim's latest blog posts on Next.js, Tailwind CSS, and Supabase!",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "projects",
    title: truncateTitle("Projects | Showcasing Tim's Work | Tim"),
    description: truncateDescription(
      "Explore Tim's projects that demonstrate his skills in web development, including Next.js, Tailwind CSS, and Supabase!",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
  {
    name: "Contact",
    title: truncateTitle("Contact | Get in Touch with Tim"),
    description: truncateDescription(
      "Get in touch with Tim to discuss potential projects and collaboration opportunities!",
    ),
    openGraphImageUrl: OPENGRAPH_IMAGE,
    twitterImageUrl: TWITTER_IMAGE,
    keywords: KEYWORDS,
    author: AUTHOR,
  },
];

export default PAGES;
