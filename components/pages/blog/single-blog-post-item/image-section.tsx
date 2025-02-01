import exp from "constants";
import { BlogPostType } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { shimmer, toBase64 } from "utils/helpers";

const ImageSection: FC<{ post: BlogPostType }> = ({ post }) => {
  return (
    <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
      <Image
        src={post.data.image ?? "/images/cover-photo.jpg"}
        alt={post.data.title ?? "Cover"}
        height={256}
        width={256}
        priority
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(256, 256))}`}
        className="absolute inset-0 h-full w-full bg-gray-50 object-cover sm:rounded-2xl"
      />
    </div>
  );
};

export default ImageSection;
