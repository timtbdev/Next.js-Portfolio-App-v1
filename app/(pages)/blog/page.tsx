import BlogPostItem from "@/components/blog/single-blog-post-item/main";
import { getAllPosts } from "@/lib/mdx";
import { ContentType } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim | Blog",
};

export default async function BlogPage() {
  const posts: ContentType[] = getAllPosts();
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-2 py-4 sm:p-0">
      {posts?.map((post, index) => <BlogPostItem key={index} post={post} />)}
    </div>
  );
}
