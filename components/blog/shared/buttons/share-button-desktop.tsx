"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getUrl } from "@/utils/helpers";
import { Share2Icon } from "lucide-react";
import { FC } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import CopyButton from "./copy-button";

interface Props {
  slug: string;
  title: string;
  className?: string;
}

const ShareButtonDesktop: FC<Props> = ({ slug, title = "", className }) => {
  const url = `${getUrl(`blog/post/${slug}`)}`;
  const subject = "Check out this article!";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(title + "\n\n" + url)}`;
  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger asChild>
          <button className="absolute right-[10px] top-[20px] rounded-full border-[1px] border-gray-300 bg-gray-50 p-3 hover:bg-gray-200 active:bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:active:bg-zinc-500 sm:right-[20px]">
            <Share2Icon
              size={20}
              className="h-5 w-5 text-gray-600 dark:text-zinc-400"
            />
          </button>
        </DialogTrigger>
        <DialogContent className="bg-gray-50 font-sans dark:bg-zinc-900 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="">Share this page</DialogTitle>
            <DialogDescription>Select a platform to share:</DialogDescription>
          </DialogHeader>
          <div className="my-6 grid grid-cols-3 gap-8">
            <div className="mx-auto flex">
              <a
                title={title}
                target="_blank"
                href={twitterUrl}
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
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
                className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
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
                className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
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
                className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-transparent hover:shadow-md active:bg-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:active:bg-zinc-500"
              >
                <IoMail className="h-8 w-8 text-gray-500 dark:text-gray-300" />
              </a>
            </div>

            <div className="mx-auto flex">
              <CopyButton url={url} />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareButtonDesktop;
