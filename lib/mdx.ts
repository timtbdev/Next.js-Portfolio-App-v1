import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBaseUrlWithSlug } from "./utils";

let readdirSync: typeof import("fs").readdirSync;
let readFileSync: typeof import("fs").readFileSync;

if (typeof window === "undefined") {
  // Only import 'fs' in a Node.js environment
  const fs = require("fs");
  readdirSync = fs.readdirSync;
  readFileSync = fs.readFileSync;
}

// ---------- Paths ----------
const POST_PATH = path.join(process.cwd(), "content/posts");
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

let cachedFileNames: { [key: string]: string[] } = {};

function getAllFileNames(basePath: string): string[] {
  if (cachedFileNames[basePath]) {
    return cachedFileNames[basePath];
  }
  try {
    const fileNames = readdirSync(basePath).filter((file) =>
      /\.mdx?$/.test(file),
    );
    cachedFileNames[basePath] = fileNames;
    return fileNames;
  } catch (error) {
    console.error(`Error reading directory at ${basePath}:`, error);
    return [];
  }
}

function getSingleItemByFileName(basePath: string, fileName: string) {
  const filePath = getFilePath(basePath, fileName);
  const markdownData = getMarkdownData(filePath);
  if (!markdownData) {
    return notFound();
  }
  const { content, data } = markdownData;
  return { fileName, content, data };
}

// ---------- Project ----------
// Project: Get a single project by a file name
export function getSingleProjectByFileName(fileName: string) {
  return getSingleItemByFileName(PROJECT_PATH, fileName);
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
  return getSingleItemByFileName(POST_PATH, slug);
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
    alternates: {
      canonical: getBaseUrlWithSlug(`blog/post/${slug}`),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: data.title,
      description: data.description.slice(0, 100) + ("..." as string),
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
          type: "image/png",
        },
      ],
      type: "article",
      url: getBaseUrlWithSlug(`blog/post/${slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description.slice(0, 100) + ("..." as string),
      images: data.image ? [data.image] : undefined,
    },
  };
}
