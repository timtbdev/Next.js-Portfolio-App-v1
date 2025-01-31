import exp from "constants";
import { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h3 className="line-clamp-2 text-pretty">{title}</h3>;
};

export default Title;
