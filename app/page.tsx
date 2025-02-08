import Profile from "@/components/home/main";
import ProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { ContentType } from "@/types";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Tim | Home",
};

export default async function HomePage() {
  const projects: ContentType[] = await getAllProjectsFilteredByOrder();
  return (
    <Fragment>
      <Profile />
      <section id="selected-projects" className="relative mb-8 sm:mb-10">
        {projects.map((project, index) => (
          <Fragment key={index}>
            <ProjectItem project={project} />
            {projects.length !== index + 1 && (
              <HandDrawnArrow className="mx-auto my-6 size-20 text-center text-gray-200 dark:text-zinc-600" />
            )}
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}
