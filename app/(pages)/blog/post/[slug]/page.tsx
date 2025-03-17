import { allPosts } from "@/.content-collections/generated";
import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import BlogPostDetailHeading from "@/components/pages/blog/detail-blog-post/heading/blog-post-heading";
import DetailBlogPost from "@/components/pages/blog/detail-blog-post/main";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
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
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {
    return notFound();
  }
  return {
    title: post.title || "Blog Post",
    description:
      post.description.slice(0, 100) + ("..." as string) ||
      "Read this insightful blog post.",
    keywords: post.seo?.join(", ") || "blog, mdx, next.js",
    alternates: {
      canonical: getBaseUrlWithSlug(`blog/post/${slug}`),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.title,
      description: post.description.slice(0, 100) + ("..." as string),
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/png",
        },
      ],
      type: "article",
      url: getBaseUrlWithSlug(`blog/post/${slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description.slice(0, 100) + ("..." as string),
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {
    return notFound();
  }

  return (
    <Fragment>
      <Header showProgressBar={true} />
      <Heading type="blog">
        <BlogPostDetailHeading
          title={post.title}
          description={post.description}
          date={post.date}
          authorImage={post.authorAvatar}
          authorName={post.author}
          category={post.category}
          readTime={readingTime(post.content, { wordsPerMinute: 100 }).minutes}
        />
      </Heading>

      <Content>
        <div className="mx-auto -mt-18 w-full max-w-5xl">
          <DetailBlogPost post={post} />
        </div>
      </Content>

      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
