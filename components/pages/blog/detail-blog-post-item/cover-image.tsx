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
      <span className="absolute left-[20px] top-[20px] rounded-full bg-white px-[4px] text-xs font-semibold text-gray-500 shadow-sm ring-1 ring-black/5">
        Back
      </span>
    </div>
  );
};

export default CoverImage;
