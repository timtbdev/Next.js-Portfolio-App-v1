import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { JSX } from "react";
import { IconType } from "react-icons/lib";

export type PageType = {
  name: string;
  title: string;
  description: string;
  author: AuthorType;
  openGraphImageUrl: string;
  twitterImageUrl: string;
  publishedDate?: string;
  modifiedDate?: string;
  keywords?: Array<string>;
};

export type AuthorType = {
  name: string;
  twitterUrl: string;
  twitterAddress: string;
  email: string;
};

export type SocialType = {
  id: number;
  name: string;
  username?: string;
  href: string;
  icon: IconType;
  tooltip: string;
};

export type MenuItemType = {
  emoji: string;
  title: string;
  slug: string;
};

export type PostType = {
  fileName: string;
  content: string;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};

export type ProjectType = {
  content: string;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};
