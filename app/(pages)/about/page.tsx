import Card from "@/components/ui/card";
import LinkButton from "@/components/ui/link-button";
import aboutConfig from "@/config/pages/about";
import { getUrl } from "@/utils/helpers";
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
      className="h-128 w-full object-cover lg:rounded-t-[0.62rem]"
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
  <div className="relative mx-auto flex max-w-3xl flex-col text-pretty px-8 pb-6 pt-4 sm:px-14">
    <Title title={title} />
    <Description description={description} />
    <LinkButton url={getUrl(link)} title="Download Resume" className="mt-4" />
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
