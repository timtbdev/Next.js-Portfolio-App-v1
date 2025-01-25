import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { FC } from "react";
import { shimmer, toBase64 } from "utils/helpers";

interface Props {
  name: string;
  imageUrl: string;
}

const Author: FC<Props> = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center gap-x-1.5">
      <Avatar>
        <AvatarImage
          src={imageUrl}
          alt={name}
          width={20}
          height={20}
          className="rounded-full"
          loading="lazy"
        />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Author;
