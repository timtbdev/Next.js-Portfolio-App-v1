import Card from "@/components/ui/card";
import { FC } from "react";
import { ProjectType } from "types";
import Header from "./header";
import Screenshots from "./screenshots";

interface Props {
  project: ProjectType;
}

const SingleProjectItem: FC<Props> = ({
  project: { title, description, screenshots, created_at, url, slug },
}) => (
  <Card>
    <Header
      createdAt={created_at}
      title={title}
      description={description}
      url={url}
      slug={slug}
    />
    <Screenshots screenshots={screenshots} />
  </Card>
);

export default SingleProjectItem;
