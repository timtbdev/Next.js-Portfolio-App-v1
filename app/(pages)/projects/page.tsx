import PagePostItem from "@/components/pages/page-post-item";
import projectContent from "@/config/pages/project-content";

export default async function ProjectPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8">
      {projectContent.map((item, index) => (
        <PagePostItem key={index} content={item} />
      ))}
    </div>
  );
}
