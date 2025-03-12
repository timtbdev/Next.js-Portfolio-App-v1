import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import BlogPostDetailHeading from "@/components/pages/blog/detail-blog-post/heading/blog-post-heading";
import DetailBlogPost from "@/components/pages/blog/detail-blog-post/main";
import Card from "@/components/ui/card";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import {
  generateMetaDataForBlogPost,
  getSinglePostByFileName,
} from "@/lib/mdx";
import { Metadata } from "next";
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
  return generateMetaDataForBlogPost(slug);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  // slug is the file name of the blog post
  const { fileName, data, content } = getSinglePostByFileName(slug);
  return (
    <Fragment>
      <Header showProgressBar={true} />
      <Heading type="blog">
        <BlogPostDetailHeading
          title={data.title}
          description={data.description}
          date={data.date}
          authorImage={data.authorAvatar}
          authorName={data.author}
          category={data.category}
          readTime={readingTime(content, { wordsPerMinute: 100 }).minutes}
        />
      </Heading>

      <Content>
        <div className="mx-auto -mt-18 w-full max-w-3xl">
          <Card>
            <DetailBlogPost post={{ fileName, data, content }} />
          </Card>
        </div>
      </Content>

      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
