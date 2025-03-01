"use client";

import { FC, useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa6";

interface Props {
  title?: string;
  url: string;
  repo: string;
  className?: string;
}

const GithubButton: FC<Props> = ({
  title = "Stars on Github",
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
      className="group relative mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center gap-x-1 rounded-md bg-linear-to-br from-blue-500 to-blue-600 font-semibold shadow-md transition hover:scale-[0.98] active:scale-[0.95]"
    >
      <FaGithub className="h-4 w-4 text-white" />
      <span className="text-white">{title}</span>
      <FaStar className="ml-2 h-4 w-4 text-white group-hover:text-yellow-400" />
      <span className="text-white">{stars}</span>
      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
    </a>
  );
};

export default GithubButton;
