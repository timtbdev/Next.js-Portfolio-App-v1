import BlogPostDetail from "@/components/pages/blog/detail-blog-post-item/main";
import Card from "@/components/ui/card";
import { generateMetaData, getPostBySlug } from "@/lib/mdx";
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
  return generateMetaData(slug);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { data, content } = getPostBySlug(slug);

  return (
    <Card>
      <BlogPostDetail post={{ slug, data, content }} />
    </Card>
  );
}
