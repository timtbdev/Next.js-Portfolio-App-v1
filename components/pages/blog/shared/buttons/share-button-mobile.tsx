"use client";

import { getUrl } from "@/utils/helpers";
import { Share2Icon } from "lucide-react";
import { FC } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Drawer } from "vaul";
import CopyButton from "./copy-button";

interface Props {
  slug: string;
  title?: string;
  className?: string;
}

const ShareButtonMobile: FC<Props> = ({ slug, title = "", className }) => {
  const url = `${getUrl()}${encodeURIComponent(`blog/post/${slug}`)}`;
  const text = "Check out this article!";

  return (
    <div className={className}>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button className="absolute right-[10px] top-[20px] rounded-full border-[1px] border-gray-300 bg-gray-50 p-3 hover:bg-gray-200 active:bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:active:bg-zinc-500 sm:right-[20px]">
            <Share2Icon
              size={20}
              className="h-5 w-5 text-gray-600 dark:text-zinc-400"
            />
          </button>
        </Drawer.Trigger>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex flex-col rounded-t-[10px] bg-gray-50 dark:bg-zinc-900">
            <div className="flex-1 rounded-t-[10px] p-4">
              <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
              <div className="mx-auto max-w-md">
                <Drawer.Title className="mx-auto mb-4 text-center font-sans text-lg font-semibold text-gray-600 dark:text-zinc-400">
                  Share this page
                </Drawer.Title>
                <div className="my-6 grid grid-cols-3 gap-8">
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(
                        title,
                      )}`}
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
                    >
                      <FaTwitter className="h-8 w-8 text-gray-600 dark:text-zinc-400" />
                    </a>
                  </div>
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
                    >
                      <FaFacebook className="h-8 w-8 text-gray-600 dark:text-zinc-400" />
                    </a>
                  </div>
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
                    >
                      <FaLinkedin className="h-8 w-8 text-gray-600 dark:text-zinc-400" />
                    </a>
                  </div>
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={`mailto:?subject=${encodeURIComponent(
                        title,
                      )}&body=${encodeURIComponent(text + "\n\n")}${url}`}
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
                    >
                      <IoMail className="h-8 w-8 text-gray-600 dark:text-zinc-400" />
                    </a>
                  </div>

                  <div className="mx-auto flex">
                    <CopyButton url={url} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50p-4 mt-auto border-t border-gray-200"></div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default ShareButtonMobile;
