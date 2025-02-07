import SingleProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import projectConfig from "@/config/projects";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Tim | Projects",
};

export default async function ProjectPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {projectConfig.map((project, index) => (
        <Fragment key={index}>
          <SingleProjectItem project={project} />
          {index !== projectConfig.length - 1 && (
            <HandDrawnArrow className="mx-auto size-20 text-center text-gray-200 dark:text-zinc-600" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
