import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Photo({ src, alt }: Props) {
  return (
    <div className="shadow-photo lg:aspect-square relative mx-auto flex aspect-[16/9] text-center shadow-md sm:aspect-[2/1] sm:rounded-2xl lg:max-w-3xl">
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
}
