"use client";

import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaCopy } from "react-icons/fa";

interface Props {
  url: string;
}

const CopyButton: FC<Props> = ({ url }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      toast.success("Copied to clipboard");
      const id = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(id);
    }
  }, [copied]);

  const copy = () => {
    setCopied(true);
    window.navigator.clipboard.writeText(url);
  };

  return (
    <button
      type="button"
      title="Copy url to clipboard"
      onClick={copy}
      className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
    >
      {copied ? (
        <FaCheck className="h-8 w-8 text-gray-500 dark:text-zinc-400" />
      ) : (
        <FaCopy className="h-8 w-8 text-gray-500 dark:text-zinc-400" />
      )}
    </button>
  );
};

export default CopyButton;
