import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import BlogPostDetail from "@/components/pages/blog/detail-blog-post-item/main";
import Card from "@/components/ui/card";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import {
  generateMetaDataForBlogPost,
  getSinglePostByFileName,
} from "@/lib/mdx";
import { Metadata } from "next";
import { Fragment } from "react";

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
    <Fragment>
      <Header showProgressBar={true} />
      <div id="blog-post" className="mx-auto max-w-5xl">
        <Card>
          <BlogPostDetail post={{ fileName, data, content }} />
        </Card>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
