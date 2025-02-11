import { readdirSync, readFileSync } from "fs";
import path from "path";
import categories from "@/config/categories";
import { getUrl } from "@/utils/helpers";
import matter from "gray-matter";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// ---------- Paths ----------
const POST_PATH = path.join(process.cwd(), "content/posts");
const PAGE_PATH = path.join(process.cwd(), "content/pages");
const PROJECT_PATH = path.join(process.cwd(), "content/projects");

// ---------- Utility Functions ----------
function getFilePath(basePath: string, slug: string): string {
  try {
    return path.join(basePath, `${slug}.mdx`);
  } catch (error) {
    console.error(
      `Error generating file path for basePath: ${basePath} and slug: ${slug}`,
      error,
    );
    return "";
  }
}

function getMarkdownData(filePath: string) {
  try {
    const markdown = readFileSync(filePath, "utf8");
    return matter(markdown);
  } catch (error) {
    console.error(
      `Error reading or parsing markdown file at ${filePath}:`,
      error,
    );
    return null;
  }
}

function getAllFileNames(basePath: string): string[] {
  try {
    return readdirSync(basePath).filter((file) => /\.mdx?$/.test(file));
  } catch (error) {
    console.error(`Error reading directory at ${basePath}:`, error);
    return [];
  }
}

// ---------- Page ----------
// Page: Get a page by slug
export function getPageBySlug(slug: string) {
  const filePath = getFilePath(PAGE_PATH, slug);
  const markdownData = getMarkdownData(filePath);
  if (!markdownData) {
    return notFound();
  }
  const { content, data } = markdownData;

  return { content, data };
}

// ---------- Project ----------
// Project: Get a single project by a file name
export function getSingleProjectByFileName(fileName: string) {
  const filePath = getFilePath(PROJECT_PATH, fileName);
  const markdownData = getMarkdownData(filePath);
  if (!markdownData) {
    return notFound();
  }
  const { content, data } = markdownData;

  return { content, data };
}

// Project: Get all projects filtered by order
export function getAllProjectsFilteredByOrder({
  featured,
}: {
  featured: boolean;
}) {
  const projectFileNames = getAllFileNames(PROJECT_PATH);

  const projects = projectFileNames.map((file) => {
    const { content, data } = getSingleProjectByFileName(
      file.replace(/\.mdx?$/, ""),
    );
    return { content, data };
  });

  if (!featured) {
    return projects.sort((a, b) => a.data.order - b.data.order);
  }
  return projects
    .filter((project) => project.data.featured)
    .sort((a, b) => a.data.order - b.data.order);
}

// ---------- Blog Post ----------

// Blog Post: Get all post file names
export function getAllPostFileNames() {
  return getAllFileNames(POST_PATH).map((file) => file.replace(/\.mdx?$/, ""));
}

// Blog Post: Get all posts ordered by date
export function getAllPostsOrderedByDate() {
  const fileNames = getAllPostFileNames();
  const posts = fileNames.map((fileName) => {
    const { content, data } = getSinglePostByFileName(fileName);
    return { fileName, content, data };
  });

  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

// Blog Post: Get a single post by slug
export function getSinglePostByFileName(slug: string) {
  const fileName = slug;
  const filePath = getFilePath(POST_PATH, slug);
  const markdownData = getMarkdownData(filePath);
  if (!markdownData) {
    return notFound();
  }
  const { content, data } = markdownData;

  return { fileName, content, data };
}

// Blog Post: Generate Metadata for a blog post
export async function generateMetaDataForBlogPost(
  slug: string,
): Promise<Metadata> {
  const { data } = getSinglePostByFileName(slug);

  return {
    title: data.title || "Blog Post",
    description:
      data.description.slice(0, 100) + ("..." as string) ||
      "Read this insightful blog post.",
    keywords: data.seo?.join(", ") || "blog, mdx, next.js",
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

// ---------- Blog Category ----------

// Blog Category: Generate Metadata for a blog category

// Blog Post: Generate Metadata for a blog category
export async function generateMetaDataFoBlogCategory(
  slug: string,
): Promise<Metadata> {
  const fullSlug = `/blog/category/${slug}`;
  const category = categories.find(
    (category) => category.slug === fullSlug,
  )?.title;

  if (!category) {
    return {
      title: "Blog Category",
      description: "Read all blog posts in this category.",
      keywords: "blog, mdx, next.js",
    };
  }

  return {
    title: category,
    description: `Read all blog posts in the ${category} category.`,
    keywords:
      categories
        .find((category) => category.slug === fullSlug)
        ?.keywords?.join(", ") ?? "blog, mdx, next.js",
  };
}

// - Blog-Post: Get All Posts By Category

export function getAllPostsByCategory(slug: string) {
  const fullSlug = `/blog/category/${slug}`;
  const category = categories.find(
    (category) => category.slug === fullSlug,
  )?.title;

  if (!category) {
    return [];
  }

  const allPostFileNames = getAllFileNames(POST_PATH);

  const posts = allPostFileNames.map((fileName) => {
    const { content, data } = getSinglePostByFileName(
      fileName.replace(/\.mdx?$/, ""),
    );
    return { fileName, content, data };
  });

  return posts
    .filter((post) => post.data.category === category)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}
