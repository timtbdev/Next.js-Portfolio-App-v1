import { Button } from "@/components/ui/button";
import { ArrowUpIcon, CodeIcon } from "lucide-react";

const Copyright = () => {
  return (
    <>
      <div className="mx-auto mt-6 flex max-w-4xl items-center justify-between">
        <div className="z-10 flex flex-1 justify-start text-sm font-semibold text-zinc-600 hover:text-primaryColor dark:text-zinc-400 dark:hover:text-primaryColor">
          <Button
            asChild
            variant="ghost"
            className="group mx-auto flex h-10 w-fit items-center justify-center rounded-md bg-transparent px-3 py-2 text-zinc-600 transition-all duration-100 ease-in-out hover:text-primaryColor"
          >
            <a href="#main" className="flex items-center">
              <ArrowUpIcon />
              Back to top
            </a>
          </Button>
        </div>

        <span className="text-center text-sm leading-5 text-zinc-600 dark:text-zinc-400">
          © 2025 All rights reserved.
        </span>
        <div className="flex flex-1 justify-end">
          <Button
            asChild
            variant="ghost"
            className="group mx-auto flex h-10 w-fit items-center justify-center rounded-md bg-transparent px-3 py-2 text-zinc-600 transition-all duration-100 ease-in-out hover:text-primaryColor"
          >
            <a
              href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <CodeIcon />
              Source code
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Copyright;
