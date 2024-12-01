import { Description, Divider, Photo, Title, Wrapper } from "@/components/ui";
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
