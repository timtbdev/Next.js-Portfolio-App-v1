import BlogPostDetail from "@/components/pages/blog/detail-blog-post-item/main";
import Card from "@/components/ui/card";
import { generateMetaData, getPostBySlug } from "@/lib/mdx";
import { getUrl } from "@/utils/helpers";
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
  const disqusShortname = "portfolio-6kdqicqjcg"; // Replace with your Disqus shortname
  const disqusConfig = {
    url: `${getUrl("/blog/post")}${data.slug}`, // Replace with your site URL
    identifier: slug, // Use a unique identifier for the post
    title: data.title,
  };

  return (
    <>
      <Card>
        <BlogPostDetail post={{ slug, data, content }} />
      </Card>
    </>
  );
}
