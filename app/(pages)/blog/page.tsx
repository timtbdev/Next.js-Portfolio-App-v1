import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import BlogPostItem from "@/components/pages/blog/single-blog-post-item/main";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { getAllPostsOrderedByDate } from "@/lib/mdx";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { PostType } from "@/types";
import { Metadata } from "next";
import { Fragment } from "react";

const PAGE = "blog";

// SEO Configuration
const seo = PAGES.find((page) => page.name === PAGE);

if (!seo) {
  throw new Error(`SEO configuration for '${PAGE}' page not found`);
}

// Metadata Configuration
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: {
    canonical: getBaseUrlWithSlug(PAGE),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: getBaseUrlWithSlug(PAGE),
    title: seo?.title,
    description: seo?.description,
    images: [
      {
        url: seo?.openGraphImageUrl || "Default Open Graph Image URL",
        width: 1200,
        height: 630,
        alt: seo?.title,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo?.title,
    description: seo?.description,
    site: seo?.author?.twitterAddress,
    images: [
      {
        url: seo?.twitterImageUrl || "Default Twitter Image URL",
        width: 1200,
        height: 675,
        alt: seo?.title,
        type: "image/png",
      },
    ],
    creator: seo?.author?.twitterAddress,
  },
};

export async function generateStaticParams() {
  const posts: PostType[] = getAllPostsOrderedByDate();
  return posts.map((post) => ({
    params: { slug: post.fileName },
  }));
}

export default async function BlogPage() {
  const posts: PostType[] = getAllPostsOrderedByDate();
  return (
    <Fragment>
      <Heading>
        <MainTitle
          title={seo?.name || "Default Title"}
          description={seo?.description}
          className="mx-auto mt-6 mb-12 max-w-3xl"
        />
      </Heading>
      <Content>
        <div className="relative mx-auto -mt-12 mb-6 max-w-4xl px-4 sm:px-6 lg:px-8">
          {posts?.map((post, index) => (
            <BlogPostItem key={index} post={post} className="mb-6" />
          ))}
        </div>
      </Content>
    </Fragment>
  );
}
