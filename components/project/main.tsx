import { mdxComponents } from "@/components/mdx/mdx-components";
import Card from "@/components/ui/card";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { ProjectType } from "types";
import Category from "./category";
import Description from "./description";
import GithubButton from "./github-button";
import Screenshots from "./screenshots";
import Title from "./title";
import YoutubeButton from "./youtube-button";

interface Props {
  project: ProjectType;
}

const ProjectItem: FC<Props> = ({ project }) => (
  <Card>
    <div className="mx-auto px-8 pb-3 pt-8 text-center sm:px-10 sm:pb-0 sm:pt-10">
      <Category
        category={project.data.category}
        className="text-md my-2 font-semibold text-gray-600 dark:text-zinc-400"
      />
      <Title
        title={project.data.title}
        className="mt-6 text-3xl text-black dark:text-zinc-300 sm:text-4xl"
      />
      {project.data.youtubeUrl && (
        <YoutubeButton
          className="mb-4 mt-2"
          title="Watch on Youtube"
          url={project.data.youtubeUrl || ""}
        />
      )}

      <MDXRemote source={project.content} components={mdxComponents} />
      <Description
        description={project.data.description}
        className="mb-4 text-gray-600 dark:text-zinc-400"
      />
      <div className="mx-auto flex justify-center">
        <GithubButton
          title="Stars on Github"
          url={project.data.url}
          repo={project.data.slug}
        />
      </div>
    </div>
    <Screenshots className="mt-6" screenshots={project.data.screenshots} />
  </Card>
);

export default ProjectItem;
