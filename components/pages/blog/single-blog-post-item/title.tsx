import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h3 className="line-clamp-2 text-pretty hover:underline">{title}</h3>;
};

export default Title;
