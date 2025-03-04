import { PostType } from "@/types";
import { serialize } from "next-mdx-remote/serialize";
import { getAllPostFileNames, getSinglePostByFileName } from "./mdx";

/**
 * Function to get all posts by search query.
 * @param query - The search query.
 * @returns An array of search results.
 */
export async function getPostsBySearchQuery(query: string) {
  const fileNames = getAllPostFileNames();
  const results: PostType[] = [];

  const posts = fileNames.map(async (fileName) => {
    const { content, data } = getSinglePostByFileName(fileName);

    if (!content) return;

    const mdxContent = await serialize(content);

    if (mdxContent.compiledSource.toLowerCase().includes(query.toLowerCase())) {
      results.push({
        fileName: fileName.replace(/\.mdx$/, ""),
        data: data,
        content: getContextAroundMatch(content, query),
      });
    }
  });

  await Promise.all(posts);

  return results; // Return the filtered results based on the query.
}

/**
 * Function to get the context around the best match of the query in the content.
 * @param content - The content to search within.
 * @param query - The search query.
 * @returns A string containing the context around the best match.
 */
export function getContextAroundMatch(content: string, query: string) {
  // Return the original content if it's empty or the query is empty after trimming.
  if (!content || !query.trim()) return content;

  // Split the query into individual words, convert to lowercase, and filter out empty strings.
  const searchWords = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (searchWords.length === 0) return content;

  const windowSize = 150; // Size of the window to consider for context.
  let bestScore = 0; // Variable to keep track of the best score.
  let bestStart = 0; // Variable to keep track of the start index of the best match.

  // Iterate over the content in steps of 50 characters.
  for (let i = 0; i < content.length - windowSize; i += 50) {
    const window = content.slice(i, i + windowSize).toLowerCase(); // Extract a window of content and convert to lowercase.
    let score = 0; // Initialize the score for the current window.

    // Calculate the score for the current window based on the number of matches of each search word.
    searchWords.forEach((word) => {
      const matches = window.split(word).length - 1;
      score += matches * word.length; // Weight longer word matches more heavily.
    });

    // Update the best score and start index if the current score is higher than the best score.
    if (score > bestScore) {
      bestScore = score;
      bestStart = i;
    }
  }

  // Calculate the start and end indices for the context around the best match.
  const contextStart = Math.max(0, bestStart - 50);
  const contextEnd = Math.min(content.length, bestStart + windowSize);

  let excerpt = content.slice(contextStart, contextEnd).trim(); // Extract the context and trim whitespace.

  // Add ellipsis if the context was truncated.
  if (contextStart > 0) excerpt = "..." + excerpt;
  if (contextEnd < content.length) excerpt = excerpt + "...";

  return excerpt; // Return the context around the best match.
}
