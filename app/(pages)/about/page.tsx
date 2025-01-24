import Card from "@/components/ui/card";
import aboutConfig from "@/config/pages/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
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
      <CoverImage src={image} />
      <Content title={title} description={description} link={link} />
    </Card>
  );
}

const CoverImage = ({ src }: { src: string }) => (
  <div className="shrink-0">
    <img
      alt="Cover Image"
      src={src}
      className="h-128 w-full object-cover lg:rounded-t-[calc(2rem+1px)]"
    />
  </div>
);

const Content = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string[];
  link: string;
}) => (
  <div className="relative mx-auto flex max-w-3xl flex-col text-pretty px-8 pb-8 pt-6 sm:px-12 sm:pb-10 sm:pt-8">
    <Title title={title} />
    <Description description={description} />
    <DownloadButton link={link} />
  </div>
);

const Title = ({ title }: { title: string }) => (
  <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-950 first:mt-0 dark:text-white/90 sm:text-3xl">
    {title}
  </h1>
);

const Description = ({ description }: { description: string[] }) => (
  <div className="leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8">
    {description.map((item, index) => (
      <p key={index} className="mt-2 text-wrap">
        {item}
      </p>
    ))}
  </div>
);

const DownloadButton = ({ link }: { link: string }) => (
  <div className="mt-4 flex sm:mt-6">
    <a
      target="_blank"
      className="group flex w-full items-center justify-center whitespace-nowrap rounded-md border border-zinc-600/20 bg-transparent px-5 py-2.5 text-center text-base font-medium text-zinc-600 shadow-sm transition-all duration-100 ease-in-out hover:bg-zinc-200/40 hover:opacity-90 dark:border-zinc-700/40 dark:text-zinc-400 dark:hover:bg-gray-500/10 sm:w-fit"
      href={link}
    >
      Download Resume
    </a>
  </div>
);
