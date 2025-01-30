import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { BlogPostType } from "types";

const POSTS_PATH = path.join(process.cwd(), "posts");

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.promises.readdir(POSTS_PATH);
    return files.filter((file) => /\.mdx?$/.test(file));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPostType | null> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(POSTS_PATH, `${realSlug}.mdx`);

  try {
    const fileContents = await fs.promises.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (!data.title || !data.date) {
      console.warn(`Missing metadata in post: ${realSlug}`);
      return null;
    }

    const mdxSource = await serialize(content);

    return {
      slug: realSlug,
      title: data.title,
      description: data.description || "",
      image: data.image || "",
      author: data.author || "",
      authorAvatar: data.authorAvatar || "",
      tags: data.tags || [],
      category: data.category || "Uncategorized",
      date: new Date(data.date).toISOString(),
      content: mdxSource,
    };
  } catch (error) {
    console.error(`Error reading post "${realSlug}":`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPostType[]> {
  const slugs = await getPostSlugs();
  const posts = (await Promise.all(slugs.map(getPostBySlug))).filter(
    Boolean,
  ) as BlogPostType[];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
