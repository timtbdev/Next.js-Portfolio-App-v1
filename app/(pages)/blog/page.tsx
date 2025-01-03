import BlogPostItem from "@/components/pages/blog/post/blog-post-item";
import BlogPostItemLoading from "@/components/pages/blog/post/blog-post-item-loading";
import blogPosts from "@/config/blog/blog-posts";
import { Suspense } from "react";

export default async function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {blogPosts?.map((post, index) => (
        <Suspense key={index} fallback={<BlogPostItemLoading />}>
          <BlogPostItem post={post} />
        </Suspense>
      ))}
    </div>
  );
}
