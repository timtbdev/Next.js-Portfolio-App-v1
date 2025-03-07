"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { highlightMatches, renderMarkdownContent } from "@/lib/search";
import { cn } from "@/lib/utils";
import { PostType } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeftIcon, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
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
          className="group items-center rounded-full bg-transparent p-2 hover:bg-gray-50 sm:border sm:border-gray-300"
        >
          <SearchIcon className="size-[26px] text-gray-600 group-hover:text-black" />
        </button>
      </DialogTrigger>
      <DialogContent className="fixed top-0 bottom-0 left-[50%] flex -translate-x-1/2 flex-col overflow-hidden border border-gray-300 bg-white p-6 shadow-2xl backdrop-blur-xl sm:top-24 sm:h-fit sm:max-h-[calc(36rem+3.5rem)] sm:max-w-2xl">
        <DialogTitle className="sr-only">Search blog posts</DialogTitle>

        {/* mobile back button */}
        <button
          className="inline-flex items-center self-start p-2 text-sm/6 text-gray-600 hover:text-black sm:hidden"
          onClick={() => setIsOpen(false)}
        >
          <ArrowLeftIcon className="mr-1 size-4" /> Cancel
        </button>

        <div className="relative flex items-center">
          <Input
            ref={inputRef}
            autoFocus
            value={searchTerm ?? ""}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-14 border-gray-300 bg-gray-100 pl-11 text-gray-600 placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-gray-600"
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
                      renderMarkdownContent({ content: result.content }).map(
                        (element, index) =>
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
