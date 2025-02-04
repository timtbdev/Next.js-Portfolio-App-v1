import { FC } from "react";

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => {
  return (
    <p className="text-md mt-3 line-clamp-6 text-balance leading-7">
      {description}
    </p>
  );
};

export default Description;
