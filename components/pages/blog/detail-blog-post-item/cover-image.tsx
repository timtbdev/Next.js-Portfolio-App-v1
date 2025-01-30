import { shimmer, toBase64 } from "@/utils/helpers";
import Image from "next/image";
import { FC } from "react";

interface Props {
  imageUrl: string;
}

const CoverImage: FC<Props> = ({ imageUrl }) => {
  return (
    <div className="flex w-full">
      <Image
        src={imageUrl}
        alt="Cover Image"
        width={512}
        height={384}
        className="h-96 w-full object-cover lg:rounded-t-[0.62rem]"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(512, 288))}`}
      />
    </div>
  );
};

export default CoverImage;
