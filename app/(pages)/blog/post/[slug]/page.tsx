import BlogPostDetail from "@/components/blog/detail-blog-post-item/main";
import Card from "@/components/ui/card";
import {
  generateMetaDataForBlogPost,
  getSinglePostByFileName,
} from "@/lib/mdx";
import { PostType } from "@/types";
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
  return generateMetaDataForBlogPost(slug);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  // slug is the file name of the blog post
  const post: PostType = getSinglePostByFileName(slug);
  if (!post) return notFound;
  return (
    <Card>
      <BlogPostDetail post={post} />
    </Card>
  );
}
