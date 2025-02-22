import Profile from "@/components/home/main";
import ProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { ProjectType } from "@/types";
import { getUrl } from "@/utils/helpers";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Best Frontend Developer for Hire | 3+ Years Experience | Tim",
  description:
    "Looking for a top Frontend Developer in San Francisco? Hire Tim, a skilled Frontend Developer, to build fast, reliable, and high-performing web applications.",
  alternates: {
    canonical: getUrl(),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function HomePage() {
  const projects: ProjectType[] = await getAllProjectsFilteredByOrder({
    featured: true,
  });
  return (
    <Fragment>
      <Profile />
      <section id="selected-projects" className="relative mb-8 sm:mb-10">
        {projects.map((project, index) => (
          <Fragment key={index}>
            <ProjectItem project={project} />
            {projects.length !== index + 1 && (
              <HandDrawnArrow className="mx-auto my-6 size-20 text-center text-gray-300 dark:text-zinc-600" />
            )}
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}
