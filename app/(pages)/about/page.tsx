import Card from "@/components/ui/card";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import aboutConfig from "@/config/pages/about";
import { Metadata } from "next";
import Image from "next/image";
import { TbUserSquareRounded as ResumeIcon } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Tim | About",
};

export default async function AboutPage() {
  const {
    image = "/images/cover.jpg",
    title = "",
    description,
    link = "",
  } = aboutConfig;

  return (
    <Card>
      <div className="shrink-0">
        <Image
          alt="Cover Image"
          src={image}
          layout="responsive"
          width={1200}
          height={630}
          quality={100}
          className="h-128 w-full object-cover lg:rounded-t-[0.62rem]"
        />
      </div>
      <div className="relative mx-auto mt-2 flex max-w-3xl flex-col text-pretty px-8 pb-6 pt-4 sm:px-14">
        <div className="relative mx-auto inline-flex items-center justify-center gap-x-1">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-950 dark:text-white/90 sm:text-3xl">
            {title}
          </h1>
          <HandDrawnCircle className="dark:text-brand-400 absolute -left-10 -top-2 mx-auto h-[60px] w-auto items-center text-blue-400" />
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-400">
          {description.map((item, index) => (
            <p key={index} className="mt-4 text-pretty text-lg leading-8">
              {item}
            </p>
          ))}
        </div>
        <HandDrawnArrow className="dark:text-brand-400 mx-auto mt-4 size-20 text-center text-blue-400" />
        <div className="relative mx-auto mt-4 w-full items-center text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shine dark:from-brand-300 dark:to-brand-400 group relative mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center gap-x-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 font-semibold shadow-md transition hover:scale-[0.98] active:scale-[0.95]"
          >
            <ResumeIcon className="h-5 w-5 text-white dark:text-zinc-900" />
            <span className="text-white dark:text-zinc-900">
              View My Resume
            </span>
          </a>
        </div>
      </div>
    </Card>
  );
}
