"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

interface Props {
  url: string;
  repo: string;
  className?: string;
}

const GithubStars: FC<Props> = ({ repo, url, className }) => {
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
    <div
      className={`text-md inline-flex items-center gap-x-1 text-gray-600 ${className}`}
    >
      {error ? (
        <span className="text-red-500">{error}</span>
      ) : (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-1 rounded-full px-3 py-1 hover:bg-gray-100"
        >
          <FaStar className="ml-2 h-4 w-4 text-yellow-400" />
          <span className="text-gray-600">Starred on</span>
          <span className="text-gray-600">Github</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">
            {stars}
          </span>
        </Link>
      )}
    </div>
  );
};

export default GithubStars;
