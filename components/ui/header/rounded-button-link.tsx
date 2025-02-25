import Link from "next/link";
import React, { FC } from "react";

interface Props {
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const RoundedButtonLink: FC<Props> = ({ url, Icon }) => {
  return (
    <Link
      href={url}
      className="group items-center rounded-full bg-gray-100 p-2"
    >
      <Icon className="size-[26px] text-gray-600 group-hover:text-black" />
    </Link>
  );
};

export default RoundedButtonLink;
