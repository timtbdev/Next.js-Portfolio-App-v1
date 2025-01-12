import Card from "@/components/ui/card";
import { ProjectType } from "types";
import Header from "./header";
import Screenshots from "./screenshots";

interface Props {
  project: ProjectType;
}

const SingleProjectItem: React.FC<Props> = ({ project }) => {
  const { title, description, screenshots, created_at, slug } = project;

  return (
    <Card>
      <Header
        createdAt={created_at}
        title={title}
        description={description}
        slug={slug}
      />
      <Screenshots screenshots={screenshots} />
    </Card>
  );
};

export default SingleProjectItem;
