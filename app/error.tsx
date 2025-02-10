"use client";

import Card from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card className="mx-auto items-center px-8 py-24 text-center">
      <h1 className="text-2xl font-bold text-gray-600 dark:text-zinc-400">
        Error
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-zinc-400">
        Sorry, an error occurred. Please try again later.
      </p>
      <p className="mt-4 text-base text-gray-600 dark:text-zinc-400">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="dark:from-brand-300 dark:to-brand-400 group relative mt-6 inline-flex items-center justify-center gap-x-1 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 px-3 py-2 font-semibold text-white shadow-md transition hover:scale-[0.98] active:scale-[0.95] dark:text-white"
      >
        Try again
      </button>
    </Card>
  );
}
