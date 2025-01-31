import ReadMoreButton from "@/components/ui/read-more-button";
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
    <div className="mx-auto flex justify-center">
      <ReadMoreButton url={url} />
    </div>
  </div>
);

export default Header;
