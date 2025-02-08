import Card from "@/components/ui/card";
import { FC } from "react";
import { ProjectType } from "types";
import HandDrawnUnderline from "../ui/hand-drawn-underline";
import Category from "./category";
import Description from "./description";
import GithubButton from "./github-button";
import Screenshots from "./screenshots";
import Title from "./title";
import YoutubeButton from "./youtube-button";

interface Props {
  project: ProjectType;
}

const ProjectItem: FC<Props> = ({
  project: { title, category, youtubeUrl, description, screenshots, url, slug },
}) => (
  <Card>
    <div className="mx-auto px-8 pb-3 pt-8 text-center sm:px-10 sm:pb-0 sm:pt-10">
      <Category
        category={category}
        className="text-md my-2 font-semibold text-gray-600 dark:text-zinc-400"
      />
      <Title
        title={title}
        className="mt-6 text-3xl text-black dark:text-zinc-300 sm:text-4xl"
      />
      <HandDrawnUnderline className="mx-auto h-10 w-64 text-center text-gray-200 dark:text-zinc-600 sm:w-80" />
      {youtubeUrl && (
        <YoutubeButton
          className="mb-2"
          title="Watch on Youtube"
          url={youtubeUrl || ""}
        />
      )}

      <Description
        description={description}
        className="mb-4 text-gray-600 dark:text-zinc-400"
      />
      <div className="mx-auto flex justify-center">
        <GithubButton title="Star on Github" url={url} repo={slug} />
      </div>
    </div>
    <Screenshots className="mt-6" screenshots={screenshots} />
  </Card>
);

export default ProjectItem;
