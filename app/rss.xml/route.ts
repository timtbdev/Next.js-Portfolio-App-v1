import { getAllPostsOrderedByDate } from "@/lib/mdx";
import { getBaseUrl, getBaseUrlWithSlug } from "@/lib/utils";
import { Feed } from "feed";

export async function GET() {
  const posts = getAllPostsOrderedByDate();

  const feed = new Feed({
    title: "Tim's Blog's RSS Feed",
    description: "Latest blog posts from Tim",
    id: getBaseUrl(),
    link: getBaseUrl(),
    language: "en",
    image: getBaseUrlWithSlug("favicons/favicon-32x32.png"),
    favicon: getBaseUrlWithSlug("favicons/favicon.ico"),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: getBaseUrlWithSlug(`blog/post/${post.fileName}`),
      link: getBaseUrlWithSlug(`blog/post/${post.fileName}`),
      description: post.data.description,
      content: post.data.description,
      date: new Date(post.data.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
