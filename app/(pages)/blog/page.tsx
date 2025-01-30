import BlogPostItem from "@/components/pages/blog/single-blog-post-item/main";
import { getAllPosts } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {posts?.map((post, index) => <BlogPostItem key={index} post={post} />)}
    </div>
  );
}
