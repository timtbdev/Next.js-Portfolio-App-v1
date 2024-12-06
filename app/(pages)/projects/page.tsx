import Description from "@/components/ui/description";
import Divider from "@/components/ui/divider";
import Photo from "@/components/ui/photo";
import Title from "@/components/ui/title";
import Wrapper from "@/components/ui/wrapper";
import { projectConfig } from "@/config";

export default async function ProjectPage() {
  const length = projectConfig.length - 1;
  return (
    <div>
      {projectConfig.map((project, index) => (
        <div key={project.id}>
          <Photo src={project.image.src} alt={project.image.alt} />
          <Wrapper>
            <Title title={project.title} />
            <Description content={project.content} />
          </Wrapper>
          {index != length && <Divider />}
        </div>
      ))}
    </div>
  );
}
