import Card from "@/components/ui/card";
import { Link } from "next-view-transitions";
import React, { FC } from "react";

const NotFoundPage = () => {
  const title = "404 - Page Not Found";
  const description = "Sorry, we can't find the page you're looking for.";
  const buttonTitle = "Back to Home";
  return (
    <Card className="mx-auto items-center px-8 py-24 text-center">
      <h1 className="text-2xl font-bold text-gray-600 dark:text-zinc-400">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-zinc-400">
        {description}
      </p>
      <Link
        href="/"
        className="dark:from-brand-300 dark:to-brand-400 group relative mt-6 inline-flex items-center justify-center gap-x-1 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 px-3 py-2 font-semibold text-white shadow-md transition hover:scale-[0.98] active:scale-[0.95] dark:text-white"
      >
        {buttonTitle}
      </Link>
    </Card>
  );
};

export default NotFoundPage;
