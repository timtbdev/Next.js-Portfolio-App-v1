import HandDrawnUnderline from "@/components/ui/hand-drawn-underline";
import { FC } from "react";
import Category from "./category";
import Description from "./description";
import GithubButton from "./github-button";
import Title from "./title";

interface Props {
  createdAt: string;
  title: string;
  category: string;
  description: string;
  url: string;
  slug: string;
}

const Header: FC<Props> = ({
  createdAt,
  title,
  category,
  description,
  url,
  slug,
}) => (
  <div className="mx-auto px-8 pb-3 pt-8 text-center sm:px-10 sm:pb-0 sm:pt-10">
    <Category
      category={category}
      className="text-md my-2 font-semibold text-gray-400 dark:text-zinc-400"
    />
    <Title
      title={title}
      className="mb-2 mt-4 text-4xl text-black dark:text-zinc-300 sm:text-5xl"
    />
    <HandDrawnUnderline className="mx-auto mb-4 h-10 w-64 text-center text-gray-200 dark:text-zinc-600 sm:w-96" />
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
