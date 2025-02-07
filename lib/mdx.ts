import { readdirSync, readFileSync } from "fs";
import path from "path";
import { getUrl } from "@/utils/helpers";
import matter from "gray-matter";
import { Metadata } from "next";

const POSTS_PATH = path.join(process.cwd(), "posts");
const PAGE_PATH = path.join(process.cwd(), "content");

export function getPageBySlug(slug: string) {
  const filePath = path.join(PAGE_PATH, `${slug}.mdx`);
  const markdown = readFileSync(filePath, "utf8");
  const { content, data } = matter(markdown);

  return { content, data };
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const markdown = readFileSync(filePath, "utf8");
  const { content, data } = matter(markdown);

  return { content, data };
}

export function getAllPostSlugs() {
  const postFilePaths = readdirSync(POSTS_PATH).filter((file) =>
    /\.mdx?$/.test(file),
  );

  return postFilePaths.map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostsByCategory(category: string) {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const { content, data } = getPostBySlug(slug);
    return { slug, content, data };
  });

  return posts
    .filter((post) => post.data.category === category)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const { content, data } = getPostBySlug(slug);
    return { slug, content, data };
  });

  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

export async function generateMetaData(slug: string): Promise<Metadata> {
  const { data } = getPostBySlug(slug);

  return {
    title: data.title || "Blog Post",
    description:
      data.description.slice(0, 100) + ("..." as string) ||
      "Read this insightful blog post.",
    keywords: data.tags?.join(", ") || "blog, mdx, next.js",
    openGraph: {
      title: data.title,
      description: data.description.slice(0, 100) + ("..." as string),
      images: data.image ? [{ url: data.image }] : undefined,
      type: "article",
      url: getUrl(`/blog/post/${slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description.slice(0, 100) + ("..." as string),
      images: data.image ? [data.image] : undefined,
    },
  };
}
