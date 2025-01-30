import { FC } from "react";
import CoverImage from "./cover-image";
import InforBar from "./info-bar";
import Title from "./title";

interface Props {
  title: string;
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
  category: string;
  readTime: number;
}

const Header: FC<Props> = async ({
  title,
  image,
  authorName,
  authorImage,
  date,
  category,
  readTime,
}) => {
  return (
    <section className="flex flex-col items-start justify-between">
      <CoverImage imageUrl={image} />
      <div className="w-full px-6 py-1 sm:px-8">
        <Title title={title} />

        <InforBar
          authorImage={authorImage}
          authorName={authorName}
          date={date}
          category={category}
          readTime={readTime}
        />
      </div>
    </section>
  );
};

export default Header;
