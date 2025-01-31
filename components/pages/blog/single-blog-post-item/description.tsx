import { FC } from "react";

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => {
  return (
    <p className="mt-3 line-clamp-6 text-balance text-sm leading-6">
      {description}
    </p>
  );
};

export default Description;
