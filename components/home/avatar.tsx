import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarWrapper,
} from "@/components/ui/avatar";
import React, { FC } from "react";

interface Props {
  image: string;
  initials: string;
}

const Avatar: FC<Props> = ({ image, initials }) => {
  return (
    <AvatarWrapper className="mx-auto h-32 w-32 rounded-full shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
      <AvatarImage src={image} alt="Tim's Avatar" title="Tim's Avatar" />
      <AvatarFallback>{initials}</AvatarFallback>
    </AvatarWrapper>
  );
};

export default Avatar;
