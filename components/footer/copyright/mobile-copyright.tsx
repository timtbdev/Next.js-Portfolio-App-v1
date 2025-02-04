import { getUrl } from "@/utils/helpers";
import { FaGithub, FaSquareRss } from "react-icons/fa6";

const MobileCopyright = () => {
  return (
    <div className="lg:hidden">
      <div className="mx-auto mt-10 flex max-w-4xl justify-center gap-x-2">
        <a
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md inline-flex items-center gap-1.5 text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          <FaGithub size={18} />
          Source code
        </a>
        <span> | </span>
        <a
          href={getUrl("/rss.xml")}
          className="text-md inline-flex items-center gap-1.5 text-gray-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-600"
        >
          <FaSquareRss size={18} />
          RSS Feed
        </a>
      </div>
      <div className="text-md mx-auto mt-6 flex max-w-4xl justify-center text-center leading-5 text-gray-600 dark:text-zinc-400">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default MobileCopyright;
