"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { getContextAroundMatch } from "@/lib/search";
import { cn, levenshtein } from "@/lib/utils";
import { PostType } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { IoSearch as SearchIcon } from "react-icons/io5";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 150);

  const prevResultsRef = useRef<any>([]);

  const { data: results, isRefetching } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm) return [];

      const res = await fetch(`/api/search?query=${debouncedSearchTerm}`);
      const newResults: PostType[] = await res.json();
      prevResultsRef.current = newResults;
      return newResults;
    },
    initialData: [],
    enabled: debouncedSearchTerm.length > 0,
    placeholderData: () => prevResultsRef.current,
  });

  const displayedResults = isRefetching ? prevResultsRef.current : results;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex < (results?.length ?? 0) - 1 ? prevIndex + 1 : prevIndex,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results?.[selectedIndex]?.data) {
          handleResultClick(results[selectedIndex].fileName);
        }
        break;
      case "Escape":
        e.preventDefault();
        closeSearch();
        break;
    }
  };

  const handleResultClick = (slug: string) => {
    router.push(`/blog/post/${slug}`);
    closeSearch();
  };

  const closeSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  useEffect(() => {
    if (isOpen && resultsRef.current) {
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, isOpen]);

  const highlightMatches = (text: string, query: string) => {
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
            const match = token.slice(
              exactIndex,
              exactIndex + searchWord.length,
            );
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
  };

  // basic mdx renderer for search results, doesnt work perfectly but pretty well
  const renderMarkdownContent = (content: string) => {
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
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);

        if (open === false) {
          queryClient.removeQueries({
            queryKey: ["search", debouncedSearchTerm],
          });
          setSearchTerm("");
          setSelectedIndex(-1);
        }
      }}
    >
      <DialogTrigger asChild>
        <button
          aria-label="Search"
          className="group items-center rounded-full border border-transparent bg-gray-100 p-2 hover:border-dashed hover:border-gray-300"
        >
          <SearchIcon className="size-[26px] text-gray-600 group-hover:scale-105 group-hover:text-black" />
        </button>
      </DialogTrigger>
      <DialogContent className="fixed top-60 bottom-0 left-[50%] flex -translate-x-1/2 flex-col overflow-hidden border border-gray-300 bg-white p-6 shadow-2xl backdrop-blur-xl sm:top-60 sm:h-fit sm:max-h-[calc(36rem+3.5rem)] sm:max-w-2xl">
        <DialogTitle className="sr-only">Search blog posts</DialogTitle>

        {/* mobile back button */}
        <button
          className="self-start p-2 text-sm/6 text-gray-600 hover:text-black sm:hidden"
          onClick={() => setIsOpen(false)}
        >
          &larr; Cancel
        </button>

        <div className="relative flex items-center">
          <Input
            ref={inputRef}
            autoFocus
            value={searchTerm ?? ""}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-14 border-gray-300 bg-gray-100 pl-11 text-gray-600 placeholder:text-gray-600 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500"
            placeholder="Search docs..."
          />
          <Search
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-600"
            aria-hidden="true"
          />
          {searchTerm && (
            <>
              <button
                onClick={() => setSearchTerm("")}
                className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-md border border-gray-600 bg-white px-2 py-1 font-mono text-sm tracking-tight text-gray-600 md:hidden"
                aria-label="Clear search"
              >
                <X className="hidden h-4 w-4" />
              </button>

              <span className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-md border border-gray-300 bg-white px-2 py-1 font-mono text-sm tracking-tight text-gray-600 sm:block">
                esc
              </span>
            </>
          )}
        </div>

        {displayedResults?.length > 0 && (
          <div className="relative min-h-0 flex-1 sm:min-h-fit">
            <ul
              id="search-results"
              ref={resultsRef}
              className="h-full overflow-x-hidden overflow-y-auto pr-2 sm:h-auto sm:max-h-[32rem]"
              role="listbox"
            >
              {displayedResults.map((result: PostType, index: number) => (
                <li
                  key={index}
                  id={`result-${index}`}
                  role="option"
                  aria-selected={index === selectedIndex}
                  className={cn(
                    "cursor-pointer rounded-lg px-4 py-5",
                    index === selectedIndex && "bg-gray-300",
                    index !== selectedIndex && "hover:bg-gray-100",
                  )}
                  onClick={() => handleResultClick(result.fileName)}
                >
                  <h3
                    className={cn("text-lg font-semibold text-black", {
                      "text-gray-600": index === selectedIndex,
                    })}
                  >
                    {highlightMatches(result.fileName || "", searchTerm)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {highlightMatches(result.data?.title || "", searchTerm)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {result.content &&
                      renderMarkdownContent(
                        getContextAroundMatch(result.content, searchTerm),
                      ).map((element, index) =>
                        typeof element === "string" ? (
                          highlightMatches(element, searchTerm)
                        ) : (
                          <span key={index}>{element}</span>
                        ),
                      )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchButton;
