import { mdxComponents } from "@/components/pages/mdx/mdx-components";
import Card from "@/components/ui/card";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { FC } from "react";
import {
  FaGlobeAmericas as EarthIcon,
  FaYoutube as YoutubeIcon,
} from "react-icons/fa";
import { ProjectDataType, ProjectType } from "types";
import Category from "./category";
import Description from "./description";
import GithubButton from "./github-stars";
import LinkButton from "./link-button";
import Title from "./title";

interface Props {
  project: {
    content: string;
    data: ProjectDataType;
  };
  className?: string;
}

const ProjectImages: FC<{ image: string; title: string }> = ({
  image,
  title,
}) => (
  <>
    <Image
      className="mx-auto mt-6 hidden max-w-full sm:block"
      src={`/images/projects/${image}`}
      alt={`Screenshot of ${title}`}
      width={1024}
      height={300}
      quality={85}
      priority={false}
      loading="lazy"
    />
    <Image
      className="mx-auto mt-6 block max-w-full sm:hidden"
      src={`/images/projects/mobile/${image}`}
      alt={`Screenshot of ${title} - Mobile view`}
      width={512}
      height={384}
      quality={85}
      priority={false}
      loading="lazy"
    />
  </>
);

const ProjectLinks: FC<{ data: ProjectDataType }> = ({ data }) => (
  <div className="flex flex-wrap justify-center gap-4">
    {data.webUrl && (
      <LinkButton title="Live Demo" Icon={EarthIcon} url={data.webUrl} />
    )}
    {data.youtubeUrl && (
      <LinkButton
        title="Watch on Youtube"
        Icon={YoutubeIcon}
        url={data.youtubeUrl}
      />
    )}
  </div>
);

const ProjectItem: FC<Props> = ({ project, className }) => {
  const { data, content } = project;

  return (
    <Card className={className}>
      <div className="mx-auto mt-1 flex max-w-xs flex-col items-center justify-center gap-x-2 gap-y-2 text-center sm:flex sm:flex-row">
        {data.githubUrl && data.slug ? (
          <div className="mx-auto flex justify-center">
            <GithubButton
              url={data.githubUrl}
              repo={data.slug}
              category={data.category}
            />
          </div>
        ) : (
          <Category
            category={data.category}
            className="text-md mt-6 mb-2 font-semibold text-gray-600"
          />
        )}
      </div>

      <article className="mx-auto px-8 pb-3 text-center sm:px-10 sm:pb-0">
        <Title title={data.title} className="text-3xl text-black sm:text-4xl" />

        <div className="prose prose-sm dark:prose-invert mx-auto">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        <Description
          description={data.description}
          className="mb-4 max-w-2xl text-gray-600"
        />

        <ProjectLinks data={data} />
      </article>

      <ProjectImages image={data.image} title={data.title} />
    </Card>
  );
};

export default ProjectItem;
