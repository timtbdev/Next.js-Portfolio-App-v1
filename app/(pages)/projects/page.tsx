import ProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { ProjectType } from "@/types";
import { getUrl } from "@/utils/helpers";
import { Metadata } from "next";
import React, { Fragment } from "react";

const TITLE = "Projects | Best Frontend Developer for Hire | Tim";
const DESCRIPTION =
  "Discover my projects showcasing my skills and experience as a frontend developer!";
const URL = getUrl("projects");

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function ProjectPage() {
  const projects: ProjectType[] = await getAllProjectsFilteredByOrder({
    featured: false,
  });
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {projects.map((project, index) => (
        <Fragment key={index}>
          <ProjectItem project={project} />
          {index !== projects.length - 1 && (
            <HandDrawnArrow className="mx-auto size-20 text-center text-gray-300 dark:text-zinc-600" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
