import { BlogPostType } from "@/types";
import { FC } from "react";
import Category from "./category";
import Description from "./description";
import DesktopInfo from "./info/desktop-info";
import MobileInfo from "./info/mobile-info";
import Title from "./title";

const ContentSection: FC<{ post: BlogPostType; readTime: any }> = ({
  post,
  readTime,
}) => (
  <div>
    <Category category={post.category} />
    <div className="group relative max-w-xl">
      <Title title={post.title} />
      <MobileInfo post={post} readTime={readTime} />
      <Description description={post.description} />
      <DesktopInfo post={post} readTime={readTime} />
    </div>
  </div>
);

export default ContentSection;
