import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { JSX } from "react";
import { IconType } from "react-icons/lib";

export type SeoType = {
  title: string;
  subTitle: string;
  ogImage: string;
  twitterImage: string;
  author: {
    name: string;
    twitterUrl: string;
    twitterAddress: string;
    email: string;
  };
  description: string;
  tags: Array<string>;
};

export type SocialType = {
  id: number;
  name: string;
  username?: string;
  href: string;
  icon: IconType;
  tooltip: string;
};

export type MenuType = {
  id: number;
  title: string;
  slug: string;
  icon: React.FC<{ className?: string }>;
};

export type BlogPostType_ = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  content: string;
  created_at: string;
  updated_at: string;
  slug: string;
  author: { name: string; image: string };
  published: boolean;
};

export type ProjectType = {
  id: number;
  title: string;
  category: "Android" | "Next.js";
  youtubeUrl?: string;
  description: string;
  screenshots: Array<string>;
  created_at: string;
  slug: string;
  url: string;
};

export type BlogPostType = {
  slug: string;
  content: string;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};
