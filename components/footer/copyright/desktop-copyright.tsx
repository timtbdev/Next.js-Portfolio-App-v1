import { getBaseUrlWithSlug } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaSquareRss } from "react-icons/fa6";

const DesktopCopyright = () => {
  const defaultClass =
    "text-md group inline-flex items-center gap-1.5 text-gray-600 hover:text-black";
  return (
    <div className="mx-auto mt-10 hidden max-w-4xl items-center justify-between lg:flex">
      <div className="text-md flex flex-1 justify-start">
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
      <span className="text-md text-center leading-5 text-gray-600">
        © {new Date().getFullYear()} All rights reserved. | Built with Next.js
      </span>
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
