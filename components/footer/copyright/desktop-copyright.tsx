import { getUrl } from "@/utils/helpers";
import { FaGithub, FaSquareRss } from "react-icons/fa6";

const DesktopCopyright = () => {
  return (
    <div className="mx-auto mt-10 hidden max-w-4xl items-center justify-between lg:flex">
      <div className="text-md flex flex-1 justify-start">
        <a
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md dark:hover:text-brand-400 group inline-flex items-center gap-1.5 text-gray-900 hover:text-blue-600 dark:text-white/80"
        >
          <FaGithub size={18} />
          Source code
        </a>
      </div>
      <span className="text-md text-center leading-5 text-gray-600 dark:text-zinc-400">
        © {new Date().getFullYear()} All rights reserved. | Built with Next.js
      </span>
      <div className="flex flex-1 justify-end">
        <a
          href={getUrl("rss.xml")}
          className="text-md dark:text-brand-400 inline-flex items-center gap-1.5 text-orange-600 hover:text-blue-600 dark:hover:text-white"
        >
          <FaSquareRss size={18} />
          RSS Feed
        </a>
      </div>
    </div>
  );
};

export default DesktopCopyright;
