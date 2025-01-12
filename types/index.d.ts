export type ProfileType = {
  title: string;
  greeting: string;
  description: string;
  image: string;
  initials: string;
};

export type SeoType = {
  title: string;
  subTitle: string;
  author: { name: string; twitterUrl: string; twitterAddress: string };
  description: string;
  keywords: Array<string>;
  tags: Array<string>;
};

export type SocialType = {
  id: number;
  name: string;
  username?: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type MenuType = {
  id: number;
  title: string;
  slug: string;
  icon: React.FC<{ className?: string }>;
};

export type BlogPostType = {
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
  description: string;
  screenshots: Array<string>;
  created_at: string;
  slug: string;
  url: string;
};

export type ContentType = {
  title?: string;
  description: string[];
  image?: string;
  link?: string;
};
