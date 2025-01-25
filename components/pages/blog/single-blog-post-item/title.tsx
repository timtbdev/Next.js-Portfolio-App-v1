import exp from "constants";
import { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h3>{title}</h3>;
};

export default Title;
