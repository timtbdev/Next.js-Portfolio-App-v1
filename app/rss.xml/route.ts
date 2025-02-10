import { get } from "http";
import { getAllPostsOrderedByDate } from "@/lib/mdx";
import { getUrl } from "@/utils/helpers";
import { Feed } from "feed";

export async function GET() {
  const posts = getAllPostsOrderedByDate();

  const feed = new Feed({
    title: "Tim's Blog's RSS Feed",
    description: "Latest blog posts from Tim",
    id: getUrl(),
    link: getUrl(),
    language: "en",
    image: getUrl("/favicons/favicon-32x32.png"),
    favicon: getUrl("/favicons/favicon.ico"),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: getUrl(`/blog/post/${post.fileName}`),
      link: getUrl(`/blog/post/${post.fileName}`),
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
