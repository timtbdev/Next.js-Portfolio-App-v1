import BlogPostItem from "@/components/blog/single-blog-post-item/main";
import { getAllPostsOrderedByDate } from "@/lib/mdx";
import { PostType } from "@/types";
import { getUrl } from "@/utils/helpers";
import { Metadata } from "next";

const TITLE = "Blog | Next.js, Tailwind CSS, and Supabase | Tim";
const DESCRIPTION =
  "Explore my latest blog posts on Next.js, Tailwind CSS, and Supabase!";
const URL = getUrl("blog");

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export async function generateStaticParams() {
  const posts: PostType[] = getAllPostsOrderedByDate();
  return posts.map((post) => ({
    params: { slug: post.fileName },
  }));
}

export default async function BlogPage() {
  const posts: PostType[] = getAllPostsOrderedByDate();
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-2 py-4 sm:p-0">
      {posts?.map((post, index) => <BlogPostItem key={index} post={post} />)}
    </div>
  );
}
