import BlogPostDetail from "@/components/pages/blog/detail-blog-post-item/main";
import Card from "@/components/ui/card";
import Section from "@/components/ui/section";
import {
  generateMetaDataForBlogPost,
  getSinglePostByFileName,
} from "@/lib/mdx";
import { Metadata } from "next";

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
  const { fileName, data, content } = getSinglePostByFileName(slug);
  return (
    <Section id="blog-post" className="mx-auto max-w-5xl">
      <Card>
        <BlogPostDetail post={{ fileName, data, content }} />
      </Card>
    </Section>
  );
}
