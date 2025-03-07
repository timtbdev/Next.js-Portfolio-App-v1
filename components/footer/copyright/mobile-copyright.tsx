import NextJsIcon from "@/icons/pages/projects/nextjs-icon";
import { getBaseUrlWithSlug } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaSquareRss } from "react-icons/fa6";

const MobileCopyright = () => {
  const defaultClass =
    "text-md inline-flex items-center gap-1.5 text-gray-600 hover:text-black hover:underline hover:underline-offset-4";
  return (
    <div className="lg:hidden">
      <div className="mx-auto mt-10 flex max-w-4xl justify-center gap-x-2">
        <Link
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          <FaGithub size={18} />
          Source code
        </Link>
        <span> | </span>
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
      <div className="mx-auto mt-4 flex max-w-4xl justify-center gap-x-2">
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass}
        >
          <NextJsIcon className="size-4" />
          Built with Next.js
        </Link>
      </div>
      <div className="text-md mx-auto mt-4 flex max-w-4xl justify-center text-center leading-5 text-gray-600">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default MobileCopyright;
