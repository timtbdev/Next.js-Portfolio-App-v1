import { cn, shimmer, toBase64 } from "@/utils/helpers";
import Image from "next/image";
import React, { FC } from "react";
import BackButton from "./buttons/back-button";
import ShareButtonDesktop from "./buttons/share-button-desktop";
import ShareButtonMobile from "./buttons/share-button-mobile";

interface Props {
  slug: string;
  title?: string;
  imageUrl: string;
  imageAlt: string;
  detail?: boolean;
  className?: string;
}

const PostImage: FC<Props> = ({
  slug,
  title = "",
  imageUrl,
  imageAlt,
  detail = false,
  className,
}) => {
  return detail ? (
    <div className="flex w-full">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={512}
        height={384}
        className={cn(
          "h-96 w-full object-cover lg:rounded-t-[0.62rem]",
          className,
        )}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(512, 288))}`}
      />
      <BackButton />
      <ShareButtonDesktop
        slug={slug}
        title={title}
        className="hidden sm:flex"
      />
      <ShareButtonMobile slug={slug} title={title} className="sm:hidden" />
    </div>
  ) : (
    <div className="sm:aspect-square relative aspect-[16/9] sm:aspect-[2/1] sm:w-64 sm:shrink-0">
      <Image
        src={imageUrl}
        alt={imageAlt}
        height={256}
        width={256}
        priority
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(256, 256))}`}
        className={cn(
          "absolute inset-0 h-full w-full bg-gray-50 object-cover sm:rounded-2xl",
          className,
        )}
      />
    </div>
  );
};

export default PostImage;
