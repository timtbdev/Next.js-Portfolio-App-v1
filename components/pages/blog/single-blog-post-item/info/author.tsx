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
      <Image
        src={imageUrl}
        alt="Author's Avatar"
        className="h-4 w-4 rounded-full"
        width={16}
        height={16}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(16, 16))}`}
      />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Author;
