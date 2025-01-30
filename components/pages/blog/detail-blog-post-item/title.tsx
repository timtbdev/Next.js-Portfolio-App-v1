import { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h3 className="my-5 overflow-hidden text-2xl">{title}</h3>;
};

export default Title;
