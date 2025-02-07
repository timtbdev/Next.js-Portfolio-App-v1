import Card from "@/components/ui/card";
import HandDrawnArrowUp from "@/components/ui/hand-drawn-arrow-up";
import HandDrawnCircle from "@/components/ui/hand-drawn-circle";
import aboutConfig from "@/config/pages/about";
import { Metadata } from "next";
import Image from "next/image";
import { FaFilePdf as PdfIcon } from "react-icons/fa6";
import {
  SiJetpackcompose as Compose,
  SiMercedes as Daimler,
  SiTailwindcss as TailwindCss,
  SiTypescript as TypeScript,
} from "react-icons/si";
import {
  TbBrandAndroid as Android,
  TbBrandKotlin as Kotlin,
  TbBrandNextjs as NextJs,
  TbUserSquareRounded as ResumeIcon,
} from "react-icons/tb";

export const metadata: Metadata = {
  title: "Tim | About",
};

export default async function AboutPage() {
  const { image = "/images/cover.jpg", title = "", link = "" } = aboutConfig;

  const iconClass = "relative -bottom-[1px] size-4";
  const baseClass =
    "inline-flex items-baseline gap-0.5 text-lg font-semibold text-gray-800/90 dark:text-zinc-300/90 whitespace-nowrap";

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
          <HandDrawnCircle className="absolute -left-10 -top-2 mx-auto h-[60px] w-auto items-center text-gray-200 dark:text-zinc-600" />
        </div>
        <div className="mt-4 text-gray-600 dark:text-zinc-400">
          <p className="mt-4 text-pretty text-lg leading-8">
            👋 Hey, I&apos;m <span className={baseClass}>Tim</span>. I&apos;m an{" "}
            <span className={baseClass}>
              <Android className={iconClass} />
              Android
            </span>{" "}
            and{" "}
            <span className={baseClass}>
              <NextJs className={iconClass} />
              Next.js{" "}
            </span>{" "}
            developer based in the{" "}
            <span className={baseClass}>🌉 San-Francisco Bay Area.</span>
          </p>
          <ul className="mt-4 grid gap-4">
            <li className="items-center gap-2 text-lg">
              I grew up <span className={baseClass}>🏇herding</span> livestock
              in a small part of <span className={baseClass}>🇲🇳 Mongolia.</span>
            </li>
            <li className="items-center gap-2 text-lg">
              I studied <span className={baseClass}>👨‍🎓 Computer Science</span>{" "}
              at the University of Applied Sciences of{" "}
              <span className={baseClass}>🇩🇪 Mittweida</span> and did an
              internship at{" "}
              <span className={baseClass}>
                <Daimler className="size-4" />
                Daimler.
              </span>
            </li>
            <li className="items-center gap-3 text-lg">
              I love working with{" "}
              <span className={baseClass}>
                <Kotlin className={iconClass} />
                Kotlin
              </span>{" "}
              and{" "}
              <span className={baseClass}>
                <Compose className={iconClass} />
                Compose
              </span>{" "}
              for{" "}
              <span className={baseClass}>
                <Android className={iconClass} />
                Android
              </span>{" "}
              apps and{" "}
              <span className={baseClass}>
                <TypeScript className={iconClass} />
                TypeScript{" "}
              </span>{" "}
              with{" "}
              <span className={baseClass}>
                <TailwindCss className={iconClass} />
                TailwindCSS{" "}
              </span>{" "}
              for{" "}
              <span className={baseClass}>
                <NextJs className={iconClass} />
                Next.js
              </span>{" "}
              projects.
            </li>
            <li className="items-center gap-2 text-lg">
              Since 2019, I’ve been building{" "}
              <span className={baseClass}>
                <Android className={iconClass} />
                Android
              </span>{" "}
              and{" "}
              <span className={baseClass}>
                <NextJs className={iconClass} />
                Next.js
              </span>{" "}
              apps — <span className={baseClass}>3 mobile apps</span> on Google
              Play and <span className={baseClass}>5 web apps</span> launched.
            </li>
            <li className="items-center gap-2 text-lg">
              When I’m not <span className={baseClass}>🧑‍💻 coding</span>, I love
              going for <span className={baseClass}>🏃 runs</span>.
            </li>
            <li className="items-center gap-2 text-lg">
              I love 🔍 tackling fun{" "}
              <span className={baseClass}>technical challenges</span> and{" "}
              <span className={baseClass}>collaborating</span> with others.
            </li>
            <li className="mx-auto items-center gap-2 text-center text-lg">
              Please feel free to{" "}
              <span className={baseClass}>reach out 🎉</span>
            </li>
          </ul>
        </div>
        <HandDrawnArrowUp className="mx-auto mt-4 size-20 text-center text-gray-200 dark:text-zinc-600" />
        <div className="relative mx-auto mt-4 w-full items-center text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shine dark:from-brand-300 dark:to-brand-400 group relative mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center gap-x-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 font-semibold shadow-md transition hover:scale-[0.98] active:scale-[0.95]"
          >
            <PdfIcon className="h-5 w-5 text-white dark:text-zinc-900" />
            <span className="text-white dark:text-zinc-900">Resume</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
