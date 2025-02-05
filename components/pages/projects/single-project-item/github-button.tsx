"use client";

import { cn } from "@/utils/helpers";
import React, { FC, useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa6";

interface Props {
  title?: string;
  url: string;
  repo: string;
  className?: string;
}

const GithubButton: FC<Props> = ({
  title = "Star on Github",
  url,
  repo,
  className,
}) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!repo) return;

    fetch(`/api/github-stars/${repo}`)
      .then((res) => res.json())
      .then((data) => setStars(data.stars))
      .catch((err) => setError(err.message));
  }, [repo]);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:shine group relative mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center gap-x-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 font-semibold shadow-md transition hover:scale-[0.98] active:scale-[0.95] dark:from-orange-400 dark:to-orange-500"
    >
      <FaGithub className="h-4 w-4 text-white dark:text-white" />
      <span className="text-white dark:text-white">{title}</span>
      <FaStar className="ml-2 h-4 w-4 text-white group-hover:text-yellow-400 dark:text-white dark:group-hover:text-yellow-400" />
      <span className="text-white dark:text-white">{stars}</span>
    </a>
  );
};

export default GithubButton;
