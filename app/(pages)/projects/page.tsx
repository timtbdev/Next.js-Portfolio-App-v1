import PagePostItem from "@/components/pages/page-post-item";
import projects from "@/config/pages/projects";

export default async function ProjectPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8">
      {projects.map((item, index) => (
        <PagePostItem key={index} content={item} />
      ))}
    </div>
  );
}
