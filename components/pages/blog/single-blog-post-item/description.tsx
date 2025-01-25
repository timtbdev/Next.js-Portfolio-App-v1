import { FC } from "react";

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => {
  return <p className="mt-3 text-sm leading-6">{description}</p>;
};

export default Description;
