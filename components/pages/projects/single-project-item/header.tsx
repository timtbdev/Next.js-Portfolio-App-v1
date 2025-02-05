import LinkButton from "@/components/ui/link-button";
import { FC } from "react";
import Date from "./date";
import Description from "./description";
import GithubButton from "./github-button";
import HandDrawnLine from "./hand-drawn-line";
import Title from "./title";

interface Props {
  createdAt: string;
  title: string;
  description: string;
  url: string;
  slug: string;
}

const Header: FC<Props> = ({ createdAt, title, description, url, slug }) => (
  <div className="mx-auto px-8 pb-3 pt-8 text-center sm:px-10 sm:pb-0 sm:pt-10">
    <Date date={createdAt} className="my-2 text-base" />
    <Title
      title={title}
      className="mb-2 mt-4 text-4xl text-black dark:text-zinc-300 sm:text-5xl"
    />
    <HandDrawnLine className="mx-auto mb-4 h-10 w-64 text-center text-gray-300 dark:text-zinc-500 sm:w-96" />
    <Description
      description={description}
      className="mb-4 text-gray-600 dark:text-zinc-400"
    />
    <div className="mx-auto flex justify-center">
      <GithubButton title="Star on Github" url={url} repo={slug} />
    </div>
  </div>
);

export default Header;
