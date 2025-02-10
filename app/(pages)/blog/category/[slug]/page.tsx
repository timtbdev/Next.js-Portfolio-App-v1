import BlogPostItem from "@/components/blog/single-blog-post-item/main";
import {
  generateMetaDataFoBlogCategory,
  getAllPostsByCategory,
} from "@/lib/mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateMetaDataFoBlogCategory(slug);
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  let posts;
  try {
    posts = getAllPostsByCategory(slug);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return notFound();
  }
  if (!posts || posts.length === 0) return notFound();
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-2 py-4 sm:p-0">
      {posts.map((post, index) => (
        <BlogPostItem key={index} post={post} />
      ))}
    </div>
  );
}
