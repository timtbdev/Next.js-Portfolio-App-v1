import { allPosts } from "@/.content-collections/generated";
import { PostType } from "@/types";
import { JSX } from "react";
import { levenshtein } from "./utils";

/**
 * Function to get all posts by search query.
 * @param query - The search query.
 * @returns An array of search results.
 */
export async function getPostsBySearchQuery(query: string) {
  if (!query.trim()) return [];

  const results: PostType[] = [];

  for (const post of allPosts) {
    // Search in title, description, and content
    const searchableContent =
      `${post.title} ${post.description} ${post.content}`.toLowerCase();
    const searchQuery = query.toLowerCase();

    if (searchableContent.includes(searchQuery)) {
      results.push({
        fileName: post._meta.path,
        data: {
          title: post.title,
          description: post.description,
          image: post.image,
          author: post.author,
          authorAvatar: post.authorAvatar,
          date: post.date,
          category: post.category,
          tags: post.tags,
          seo: post.seo,
        },
        content: getContextAroundMatch(post.content, query),
        mdx: post.mdx,
      });
    }
  }

  return results;
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

export function highlightMatches(text: string, query: string) {
  if (!query.trim()) return text;

  const searchWords = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length >= 3);
  if (searchWords.length === 0) return text;

  const tokens = text.split(/(\s+|[.,!?;])/g);

  return tokens.map((token, i) => {
    const tokenLower = token.trim().toLowerCase();
    if (!tokenLower) return token;

    let highlightedToken: JSX.Element | string = token;
    let shouldHighlight = false;

    searchWords.forEach((searchWord) => {
      const exactIndex = tokenLower.indexOf(searchWord);
      if (exactIndex !== -1) {
        shouldHighlight = true;
        if (token.length > searchWord.length) {
          const prefix = token.slice(0, exactIndex);
          const match = token.slice(exactIndex, exactIndex + searchWord.length);
          const suffix = token.slice(exactIndex + searchWord.length);
          highlightedToken = (
            <>
              {prefix}
              <mark className="rounded bg-blue-500 px-0.5 text-white">
                {match}
              </mark>
              {suffix}
            </>
          );
        }
        return;
      }

      for (let i = 0; i <= tokenLower.length - searchWord.length; i++) {
        const substring = tokenLower.slice(i, i + searchWord.length);
        if (levenshtein(substring, searchWord) <= 1) {
          shouldHighlight = true;
          const prefix = token.slice(0, i);
          const match = token.slice(i, i + searchWord.length);
          const suffix = token.slice(i + searchWord.length);
          highlightedToken = (
            <>
              {prefix}
              <mark className="rounded bg-blue-500 px-0.5 text-white">
                {match}
              </mark>
              {suffix}
            </>
          );
          return;
        }
      }
    });

    return shouldHighlight ? (
      typeof highlightedToken === "string" ? (
        <mark key={i} className="rounded bg-blue-500 px-0.5 text-white">
          {token}
        </mark>
      ) : (
        <span key={i}>{highlightedToken}</span>
      )
    ) : (
      token
    );
  });
}

export function renderMarkdownContent({ content }: { content: string }) {
  const patterns = [
    {
      regex: /```(?:.*\n)?([\s\S]*?)```/g,
      render: (_: string, code: string) => (
        <code className="rounded bg-gray-300 px-1.5 py-0.5 font-mono whitespace-pre-wrap text-black">
          {code.trim()}
        </code>
      ),
    },
    {
      regex: /`([^`]+)`/g,
      render: (_: string, code: string) => (
        <code className="rounded bg-gray-300 px-1.5 py-0.5 font-mono text-black">
          {code}
        </code>
      ),
    },
    {
      regex: /\[([^\]]+)\]\(([^)]+)\)/g,
      render: (_: string, text: string, href: string) => (
        <span className="inline font-medium text-black underline underline-offset-4">
          {text}
        </span>
      ),
    },
    {
      regex: /\*\*([^*]+)\*\*/g,
      render: (_: string, text: string) => (
        <b className="font-semibold text-black">{text}</b>
      ),
    },
    {
      regex: /(?<=\s)_([^_]+)_(?=\s)/g,
      render: (_: string, text: string) => (
        <i className="text-black italic">{text}</i>
      ),
    },
  ];

  let elements: (string | JSX.Element)[] = [content];

  patterns.forEach(({ regex, render }) => {
    elements = elements
      .map((element) => {
        if (typeof element !== "string") return element;

        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(element)) !== null) {
          if (match.index > lastIndex) {
            parts.push(element.slice(lastIndex, match.index));
          }

          // @ts-expect-error tuple err
          parts.push(render(...match));
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < element.length) {
          parts.push(element.slice(lastIndex));
        }

        return parts;
      })
      .flat();
  });

  return elements;
}
