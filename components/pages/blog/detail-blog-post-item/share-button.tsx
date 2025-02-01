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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUrl } from "@/utils/helpers";
import { CheckIcon, CopyIcon, Share2Icon } from "lucide-react"; // Import CheckIcon
import { FC, useState } from "react"; // Import useState
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface Props {
  slug: string;
}

const ShareButton: FC<Props> = ({ slug }) => {
  const url = `${getUrl()}/blog/${slug}`;
  const [copied, setCopied] = useState(false); // State to manage copy action

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
    );
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      "_blank",
    );
  };

  const shareOnWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${url}`, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute right-[20px] top-[20px] rounded-full border-[1px] border-gray-300 bg-gray-50 p-3 hover:bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-900">
          <Share2Icon
            size={20}
            className="h-5 w-5 text-gray-600 dark:text-zinc-400"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="font-sans sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="">Share this page</DialogTitle>
          <DialogDescription>Select a platform to share:</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <Button
            type="button"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            {copied ? <CheckIcon /> : <CopyIcon />}{" "}
            {/* Change icon based on state */}
          </Button>
        </div>
        <div className="mx-auto flex w-full space-x-8 py-4">
          <button onClick={shareOnFacebook} className="text-blue-600">
            <FaFacebook size={48} />
          </button>
          <button onClick={shareOnTwitter} className="text-blue-400">
            <FaTwitter size={48} />
          </button>
          <button onClick={shareOnLinkedIn} className="text-blue-700">
            <FaLinkedin size={48} />
          </button>
          <button onClick={shareOnWhatsapp} className="text-green-500">
            <FaWhatsapp size={48} />
          </button>
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
  );
};

export default ShareButton;
