import { readdirSync, readFileSync } from "fs";
import path from "path";
import categories from "@/config/categories";
import { getUrl } from "@/utils/helpers";
import matter from "gray-matter";
import { Metadata } from "next";

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
      `Error generating file path for basePath: ${basePath}, slug: ${slug}`,
      error,
    );
    throw new Error("Failed to generate file path");
  }
}

function getMarkdownData(filePath: string) {
  try {
    const markdown = readFileSync(filePath, "utf8");
    return matter(markdown);
  } catch (error) {
    console.error(`Error reading markdown data from file: ${filePath}`, error);
    throw new Error("Failed to read markdown data");
  }
}

function getAllFileNames(basePath: string): string[] {
  try {
    return readdirSync(basePath).filter((file) => /\.mdx?$/.test(file));
  } catch (error) {
    console.error(
      `Error reading file names from directory: ${basePath}`,
      error,
    );
    throw new Error("Failed to read file names");
  }
}

// ---------- Page ----------
// Page: Get a page by slug
export function getPageBySlug(slug: string) {
  try {
    const filePath = getFilePath(PAGE_PATH, slug);
    const { content, data } = getMarkdownData(filePath);
    return { content, data };
  } catch (error) {
    console.error(`Error getting page by slug: ${slug}`, error);
    throw new Error("Failed to get page by slug");
  }
}

// ---------- Project ----------
// Project: Get a single project by a file name
export function getSingleProjectByFileName(fileName: string) {
  try {
    const filePath = getFilePath(PROJECT_PATH, fileName);
    const { content, data } = getMarkdownData(filePath);
    return { content, data };
  } catch (error) {
    console.error(`Error getting project by file name: ${fileName}`, error);
    throw new Error("Failed to get project by file name");
  }
}

// Project: Get all projects filtered by order
export function getAllProjectsFilteredByOrder() {
  try {
    const projectFileNames = getAllFileNames(PROJECT_PATH);
    const projects = projectFileNames.map((file) => {
      const { content, data } = getSingleProjectByFileName(
        file.replace(/\.mdx?$/, ""),
      );
      return { content, data };
    });

    return projects
      .filter((project) => project.data.featured)
      .sort((a, b) => a.data.order - b.data.order);
  } catch (error) {
    console.error("Error getting all projects filtered by order", error);
    throw new Error("Failed to get all projects filtered by order");
  }
}

// ---------- Blog Post ----------

// Blog Post: Get all post file names
export function getAllPostFileNames() {
  try {
    return getAllFileNames(POST_PATH).map((file) =>
      file.replace(/\.mdx?$/, ""),
    );
  } catch (error) {
    console.error("Error getting all post file names", error);
    throw new Error("Failed to get all post file names");
  }
}

// Blog Post: Get all posts ordered by date
export function getAllPostsOrderedByDate() {
  try {
    const fileNames = getAllPostFileNames();
    const posts = fileNames.map((fileName) => {
      const { content, data } = getSinglePostByFileName(fileName);
      return { fileName, content, data };
    });

    return posts.sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
  } catch (error) {
    console.error("Error getting all posts ordered by date", error);
    throw new Error("Failed to get all posts ordered by date");
  }
}

// Blog Post: Get a single post by slug
export function getSinglePostByFileName(slug: string) {
  try {
    const fileName = slug;
    const filePath = getFilePath(POST_PATH, slug);
    const { content, data } = getMarkdownData(filePath);
    return { fileName, content, data };
  } catch (error) {
    console.error(`Error getting single post by file name: ${slug}`, error);
    throw new Error("Failed to get single post by file name");
  }
}

// Blog Post: Generate Metadata for a blog post
export async function generateMetaDataForBlogPost(
  slug: string,
): Promise<Metadata> {
  try {
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
  } catch (error) {
    console.error(`Error generating metadata for blog post: ${slug}`, error);
    throw new Error("Failed to generate metadata for blog post");
  }
}

// ---------- Blog Category ----------

// Blog Category: Generate Metadata for a blog category

// Blog Post: Generate Metadata for a blog category
export async function generateMetaDataFoBlogCategory(
  slug: string,
): Promise<Metadata> {
  try {
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
  } catch (error) {
    console.error(
      `Error generating metadata for blog category: ${slug}`,
      error,
    );
    throw new Error("Failed to generate metadata for blog category");
  }
}

// - Blog-Post: Get All Posts By Category

export function getAllPostsByCategory(slug: string) {
  try {
    const fullSlug = `/blog/category/${slug}`;
    const category = categories.find(
      (category) => category.slug === fullSlug,
    )?.title;

    if (!category) {
      return null;
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
  } catch (error) {
    console.error(`Error getting all posts by category: ${slug}`, error);
    throw new Error("Failed to get all posts by category");
  }
}
