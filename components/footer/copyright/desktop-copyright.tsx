import { getUrl } from "@/utils/helpers";
import { CodeIcon, RssIcon } from "lucide-react";

const DesktopCopyright = () => {
  return (
    <div className="mx-auto mt-10 hidden max-w-4xl items-center justify-between lg:flex">
      <div className="text-md flex flex-1 justify-start text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-orange-600">
        <a
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md inline-flex items-center gap-1.5 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-orange-600"
        >
          <CodeIcon size={18} />
          Source code
        </a>
      </div>
      <span className="text-md text-center leading-5 text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} All rights reserved.
      </span>
      <div className="flex flex-1 justify-end">
        <a
          href={getUrl("/rss.xml")}
          className="text-md inline-flex items-center gap-1.5 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-orange-600"
        >
          <RssIcon size={18} />
          RSS Feed
        </a>
      </div>
    </div>
  );
};

export default DesktopCopyright;
