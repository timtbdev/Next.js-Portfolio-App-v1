import NextJsIcon from "@/icons/pages/projects/nextjs-icon";
import { getBaseUrlWithSlug } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaSquareRss } from "react-icons/fa6";

const DesktopCopyright = () => {
  const defaultClass =
    "text-md group inline-flex items-center gap-1.5 text-gray-600 hover:text-black hover:underline hover:underline-offset-4";
  return (
    <div className="mx-auto mt-10 hidden max-w-4xl items-center justify-between lg:flex">
      <div className="text-md flex flex-1 items-center justify-start">
        <Link
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          <FaGithub size={18} />
          Source code
        </Link>
      </div>
      <div className="text-md flex items-center justify-center text-center leading-5 text-gray-600">
        © {new Date().getFullYear()} All rights reserved. |&nbsp;
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          Built with Next.js
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Link
          href={getBaseUrlWithSlug("rss.xml")}
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          <FaSquareRss size={18} />
          RSS Feed
        </Link>
      </div>
    </div>
  );
};

export default DesktopCopyright;
