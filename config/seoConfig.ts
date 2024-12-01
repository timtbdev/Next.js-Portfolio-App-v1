// This file contains the core meta data for the application
const seoConfig: SeoConfigType = {
  title: "Tim | Portfolio",
  subTitle: "Welcome to my portfolio",
  author: {
    name: "Tim Baz",
    twitterUrl: "https://twitter.com/timtbdev",
    twitterAddress: "@timtbdev",
  },
  description:
    "Tim is a Frontend developer based in San Francisco Bay Area, California.",
  keywords: [
    "Blogging, applicaiton, admin dashbaord, blog, app, Next.js, Supabase, Supabase Database, Supabase Auth, Supabase Storage, TailwindCSS, TypeScript, Shadcn-ui, Radix-ui, HeadlessUi, NodeMailer, ConvertKit, Vercel OG, React-Hook-Form, React-Drop-Zone, Zod, HeroIcons, Lucide, Novel, Vaul, Uppy",
  ],
  tags: [
    "Tim",
    "Tumur",
    "Bazarragchaa",
    "San Francisco Bay Area",
    "California",
    "San Francisco",
    "Bay Area",
    "Web Developer",
    "Mobile Developer",
    "Software Engineer",
    "Frontend Developer",
    "Android Developer",
    "JavaScript",
    "Typescript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Supabase",
    "Shadcn",
    "Kotlin",
    "Android Jetpack",
    "Jetpack Compose",
  ],
};

// Type for seo data
export type SeoConfigType = {
  title: string;
  subTitle: string;
  author: { name: string; twitterUrl: string; twitterAddress: string };
  description: string;
  keywords: Array<string>;
  tags: Array<string>;
};

export default seoConfig;
