import { BlogPostType } from "@/types";
import { FC } from "react";
import Author from "../author";
import Category from "../category";
import Date from "../date";
import ReadTime from "../read-time";

interface Props {
  post: BlogPostType;
  readTime: any;
}

const MobileInfo: FC<Props> = ({ post, readTime }) => {
  return (
    <div className="mt-2 flex items-center gap-x-3 text-sm sm:hidden">
      <Category category={post.category} />
      <Date date={post.updated_at} />
      <ReadTime minutes={readTime.minutes} />
      <Author name={post.author.name} imageUrl={post.author.image} />
    </div>
  );
};

export default MobileInfo;
