import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  createdAt: string;
  title: string;
  description: string;
  url: string;
}

const Header: FC<Props> = ({ createdAt, title, description, url }) => (
  <div className="mx-auto px-8 pb-3 pt-8 text-center sm:px-10 sm:pb-0 sm:pt-10">
    <p className="my-2 text-base tracking-tight">{createdAt}</p>
    <h2 className="my-4 text-4xl font-bold">{title}</h2>
    <p className="mx-auto mb-4 max-w-lg text-gray-600">{description}</p>
    <Button
      asChild
      variant="outline"
      className="group mx-auto flex h-10 w-fit items-center justify-center rounded-md bg-transparent px-3 py-2 text-gray-600 transition-all duration-100 ease-in-out dark:text-zinc-400"
    >
      <a href={url} target="_blank" className="flex items-center">
        Read more
        <ChevronRightIcon />
      </a>
    </Button>
  </div>
);

export default Header;
