import BlogPostItem from "@/components/pages/blog/single-blog-post-item/main";
import blogPosts from "@/config/pages/blog-posts";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {blogPosts?.map((post, index) => (
        <BlogPostItem key={index} post={post} />
      ))}
    </div>
  );
}
