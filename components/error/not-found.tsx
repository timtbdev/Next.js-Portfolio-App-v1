import Card from "@/components/ui/card";
import { Link } from "next-view-transitions";

const NotFound = () => {
  return (
    <Card className="px-8 py-8 sm:px-12 sm:py-12">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-600 dark:text-zinc-400">
          404
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-600 dark:text-zinc-400 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-600 dark:text-zinc-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="dark:from-brand-300 dark:to-brand-400 group relative inline-flex items-center justify-center gap-x-1 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 px-4 py-2 font-semibold text-white shadow-md transition hover:scale-[0.98] active:scale-[0.95] dark:text-white"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-600 dark:text-zinc-400"
          >
            Contact me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default NotFound;
