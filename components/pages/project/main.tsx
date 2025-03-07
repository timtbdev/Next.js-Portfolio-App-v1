import { mdxComponents } from "@/components/pages/mdx/mdx-components";
import Card from "@/components/ui/card";
import { EarthIcon, YoutubeIcon } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { FC } from "react";
import { ProjectType } from "types";
import Category from "./category";
import Description from "./description";
import GithubButton from "./github-button";
import LinkButton from "./link-button";
import Title from "./title";

interface Props {
  project: ProjectType;
}

const ProjectItem: FC<Props> = ({ project }) => (
  <Card>
    <div className="mx-auto px-8 pt-8 pb-3 text-center sm:px-10 sm:pt-10 sm:pb-0">
      <Category
        category={project.data.category}
        className="text-md mb-4 font-semibold text-gray-600"
      />
      <Title
        title={project.data.title}
        className="text-3xl text-black sm:text-4xl"
      />
      <div className="mx-auto mt-4 mb-2 flex max-w-xs flex-col items-center justify-center gap-x-2 gap-y-2 text-center sm:flex sm:flex-row">
        {project.data.webUrl && (
          <LinkButton
            title="Live Demo"
            Icon={EarthIcon}
            url={project.data.webUrl || ""}
          />
        )}
        {project.data.webUrl && project.data.youtubeUrl && (
          <span className="hidden sm:flex">|</span>
        )}
        {project.data.youtubeUrl && (
          <LinkButton
            title="Watch on Youtube"
            Icon={YoutubeIcon}
            url={project.data.youtubeUrl || ""}
          />
        )}
      </div>

      <MDXRemote source={project.content} components={mdxComponents} />
      <Description
        description={project.data.description}
        className="mb-4 max-w-2xl text-gray-600"
      />
      {project.data.githubUrl && project.data.slug && (
        <div className="mx-auto flex justify-center">
          <GithubButton
            title="Stars on Github"
            url={project.data.githubUrl}
            repo={project.data.slug}
          />
        </div>
      )}
    </div>
    <Image
      className="mx-auto mt-6 max-w-full"
      src={project.data.image}
      alt={`Screenshot of ${project.data.title}`}
      width={1024} // specify width
      height={300} // specify height
      quality={100} // specify quality
    />
  </Card>
);

export default ProjectItem;
