import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  title: string;
  url: string;
}

const Title: FC<Props> = ({ title, url }) => {
  return (
    <Link href={url}>
      <h3 className="line-clamp-2 text-pretty hover:underline">{title}</h3>
    </Link>
  );
};

export default Title;
