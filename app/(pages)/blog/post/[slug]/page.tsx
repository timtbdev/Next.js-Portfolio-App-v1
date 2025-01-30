import BlogPostHeader from "@/components/pages/blog/detail-blog-post-item/header";
import Card from "@/components/ui/card";
import { generateMetaData, getPostBySlug } from "@/lib/mdx";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import readingTime from "reading-time";

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
  const readTime = readingTime(content).minutes;

  return (
    <Card className="px-4 py-3">
      {/* Blog Post Header */}
      <BlogPostHeader
        title={data.title as string}
        image={data.image as string}
        authorName={data.author as string}
        authorImage={data.authorAvatar as string}
        date={format(parseISO(data.date), "MMMM dd, yyyy")}
        category={data.category as string}
        readTime={readTime}
      />
      {/* Blog Post Content */}
      <div className="dark:prose-dark prose max-w-none">
        <MDXRemote source={content} />
      </div>
    </Card>
  );
}
