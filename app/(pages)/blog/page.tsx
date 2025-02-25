import BlogPostItem from "@/components/pages/blog/single-blog-post-item/main";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { getAllPostsOrderedByDate } from "@/lib/mdx";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { PostType } from "@/types";
import { Metadata } from "next";

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
    <div className="mx-auto max-w-3xl space-y-8 px-2 py-4 sm:p-0">
      <MainTitle
        title={seo?.name || "Default Title"}
        description={seo?.description}
      />
      {posts?.map((post, index) => <BlogPostItem key={index} post={post} />)}
    </div>
  );
}
