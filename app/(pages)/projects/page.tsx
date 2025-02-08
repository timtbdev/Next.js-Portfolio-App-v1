import ProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { ContentType } from "@/types";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Tim | Projects",
};

export default async function ProjectPage() {
  const projects: ContentType[] = await getAllProjectsFilteredByOrder();
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {projects.map((project, index) => (
        <Fragment key={index}>
          <ProjectItem project={project} />
          {index !== projects.length - 1 && (
            <HandDrawnArrow className="mx-auto size-20 text-center text-gray-200 dark:text-zinc-600" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
