import { FC } from "react";

interface Props {
  category: string;
}

const Category: FC<Props> = ({ category }) => {
  return (
    <div className="flex items-center gap-x-3 text-sm">
      <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200 dark:bg-zinc-700 dark:text-zinc-300">
        {category}
      </span>
    </div>
  );
};

export default Category;
