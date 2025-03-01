"use client";

import { getBaseUrlWithSlug } from "@/lib/utils";
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
  const url = getBaseUrlWithSlug(`blog/post/${slug}`);
  const subject = "Check out this article!";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(title + "\n\n" + url)}`;
  const defaultClassName =
    "rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-xs transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200";

  return (
    <div className={className}>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button className="absolute right-[10px] top-[20px] rounded-full border-[1px] border-gray-300 bg-gray-50 p-3 hover:bg-gray-200 active:bg-gray-200 sm:right-[20px]">
            <Share2Icon size={20} className="h-5 w-5 text-gray-600" />
          </button>
        </Drawer.Trigger>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex flex-col rounded-t-[10px] bg-gray-50">
            <div className="flex-1 rounded-t-[10px] p-4">
              <div className="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-zinc-300" />
              <div className="mx-auto max-w-md">
                <Drawer.Title className="mx-auto mb-4 text-center font-sans text-lg font-semibold text-gray-600">
                  Share this page
                </Drawer.Title>
                <div className="my-6 grid grid-cols-3 gap-8">
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={twitterUrl}
                      rel="noopener noreferrer"
                      className={defaultClassName}
                    >
                      <FaTwitter className="h-8 w-8 text-sky-500" />
                    </a>
                  </div>
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={facebookUrl}
                      rel="noopener noreferrer"
                      className={defaultClassName}
                    >
                      <FaFacebook className="h-8 w-8 text-blue-600" />
                    </a>
                  </div>
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={linkedinUrl}
                      rel="noopener noreferrer"
                      className={defaultClassName}
                    >
                      <FaLinkedin className="h-8 w-8 text-blue-500" />
                    </a>
                  </div>
                  <div className="mx-auto flex">
                    <a
                      title={title}
                      target="_blank"
                      href={mailtoLink}
                      rel="noopener noreferrer"
                      className={defaultClassName}
                    >
                      <IoMail className="h-8 w-8 text-gray-500" />
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
