"use client";

import { DiscussionEmbed } from "disqus-react";
import { FC } from "react";

interface Props {
  disqusShortname: string;
  url: string;
  identifier: string;
  title: string;
}

const DisqusComments: FC<Props> = ({
  disqusShortname,
  url,
  identifier,
  title,
}) => {
  const disqusConfig = {
    url,
    identifier,
    title,
  };

  return (
    <div className="mt-10">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
