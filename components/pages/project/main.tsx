import { mdxComponents } from "@/components/pages/mdx/mdx-components";
import Card from "@/components/ui/card";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { FC } from "react";
import {
  FaGlobeAmericas as EarthIcon,
  FaYoutube as YoutubeIcon,
} from "react-icons/fa";
import { ProjectType } from "types";
import Category from "./category";
import Description from "./description";
import GithubButton from "./github-stars";
import LinkButton from "./link-button";
import Title from "./title";

interface Props {
  project: ProjectType;
  className?: string;
}

const ProjectItem: FC<Props> = ({ project, className }) => (
  <Card className={className}>
    <div className="mx-auto px-8 pt-8 pb-3 text-center sm:px-10 sm:pt-10 sm:pb-0">
      <Category
        category={project.data.category}
        className="text-md mb-2 font-semibold text-gray-600"
      />
      <Title
        title={project.data.title}
        className="text-3xl text-black sm:text-4xl"
      />
      <div className="mx-auto mt-1 flex max-w-xs flex-col items-center justify-center gap-x-2 gap-y-2 text-center sm:flex sm:flex-row">
        {project.data.githubUrl && project.data.slug && (
          <div className="mx-auto flex justify-center">
            <GithubButton
              url={project.data.githubUrl}
              repo={project.data.slug}
            />
          </div>
        )}
      </div>
      <MDXRemote source={project.content} components={mdxComponents} />
      <Description
        description={project.data.description}
        className="mb-4 max-w-2xl text-gray-600"
      />
      {project.data.webUrl && (
        <LinkButton
          title="Live Demo"
          Icon={EarthIcon}
          url={project.data.webUrl}
        />
      )}
      {project.data.youtubeUrl && (
        <LinkButton
          title="Watch on Youtube"
          Icon={YoutubeIcon}
          url={project.data.youtubeUrl}
        />
      )}
    </div>
    {/* Desktop view */}
    <Image
      className="mx-auto mt-6 hidden max-w-full sm:block"
      src={`/images/projects/${project.data.image}`}
      alt={`Screenshot of ${project.data.title}`}
      width={1024}
      height={300}
      quality={100}
    />
    {/* Mobile view */}
    <Image
      className="mx-auto mt-6 block max-w-full sm:hidden"
      src={`/images/projects/mobile/${project.data.image}`}
      alt={`Screenshot of ${project.data.title}`}
      width={512}
      height={384}
      quality={100}
    />
  </Card>
);

export default ProjectItem;
