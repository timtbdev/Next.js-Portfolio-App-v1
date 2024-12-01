import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const Photo: FC<Props> = ({ src, alt, className }) => {
  return (
    <div
      className={cn(
        className,
        "shadow-photo lg:aspect-square relative mx-auto flex aspect-[16/9] text-center shadow-md sm:aspect-[2/1] sm:rounded-2xl lg:max-w-3xl",
      )}
    >
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        fill={true}
        priority={true}
        className="absolute inset-0 h-full w-full bg-gray-50 object-cover sm:rounded-2xl"
        unoptimized
      />
    </div>
  );
};

export default Photo;
