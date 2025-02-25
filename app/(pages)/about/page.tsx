import { mdxComponents } from "@/components/mdx/mdx-components";
import Card from "@/components/ui/card";
import PAGES from "@/config/seo";
import { getPageBySlug } from "@/lib/mdx";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Fragment } from "react";

const PAGE = "about";

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

export default async function AboutPage() {
  const { content, data } = getPageBySlug(PAGE);

  return (
    <Fragment>
      <Card className="pb-2">
        <div className="shrink-0">
          <Image
            title="Cover Image"
            alt="Cover Image"
            src={data.image}
            layout="responsive"
            width={1200}
            height={630}
            quality={100}
            className="h-128 w-full object-cover lg:rounded-t-[0.62rem]"
          />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col text-pretty px-8 pb-6 pt-4 sm:px-14">
          <div className="flex items-center justify-start">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white/90">
              {data.title}
            </h1>
          </div>
          <article id="about-me" className="mt-2">
            <MDXRemote source={content} components={mdxComponents} />
          </article>
        </div>
      </Card>
    </Fragment>
  );
}
