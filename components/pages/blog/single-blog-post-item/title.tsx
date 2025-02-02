import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
    <h3 className="line-clamp-2 text-pretty text-2xl font-bold hover:underline sm:text-xl sm:font-semibold">
      {title}
    </h3>
  );
};

export default Title;
