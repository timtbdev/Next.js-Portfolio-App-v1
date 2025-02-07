import { mdxComponents } from "@/components/mdx/mdx-components";
import BigButton from "@/components/ui/big-button";
import Card from "@/components/ui/card";
import HandDrawnArrowUp from "@/components/ui/hand-drawn-arrow-up";
import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import { getPageBySlug } from "@/lib/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { TbUserSquareRounded as ContactIcon } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Tim | About",
};

export default async function AboutPage() {
  const { content, data } = getPageBySlug("about");

  return (
    <Card>
      <div className="shrink-0">
        <Image
          alt="Cover Image"
          src={data.image}
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
            {data.title}
          </h1>
          <HandDrawnCircle className="absolute -left-10 -top-2 mx-auto h-[60px] w-auto items-center text-gray-200 dark:text-zinc-600" />
        </div>
        <div className="mt-8">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
        <HandDrawnArrowUp className="mx-auto mt-2 size-20 text-center text-gray-200 dark:text-zinc-600" />
        <div className="relative mx-auto w-full items-center text-center">
          <BigButton
            title="Get in touch"
            className="dark:from-brand-300 dark:to-brand-400 mt-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white dark:text-zinc-900"
            icon={<ContactIcon className="size-5" />}
            url="/contact"
          />
        </div>
      </div>
    </Card>
  );
}
