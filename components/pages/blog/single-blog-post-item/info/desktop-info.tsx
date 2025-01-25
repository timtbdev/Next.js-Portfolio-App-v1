import { BlogPostType } from "@/types";
import { FC } from "react";
import Author from "../author";
import Date from "../date";
import ReadTime from "../read-time";

interface Props {
  post: BlogPostType;
  readTime: any;
}

const DesktopInfo: FC<Props> = ({ post, readTime }) => {
  return (
    <div className="mt-3 hidden items-center gap-x-3 text-sm sm:flex">
      <Date date={post.updated_at} />
      <ReadTime minutes={readTime.minutes} />
      <Author name={post.author.name} imageUrl={post.author.image} />
    </div>
  );
};

export default DesktopInfo;
