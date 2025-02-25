import Profile from "@/components/home/main";
import ProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import PAGES from "@/config/seo";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { getBaseUrl, getBaseUrlWithSlug } from "@/lib/utils";
import { ProjectType } from "@/types";
import { Metadata } from "next";
import React, { Fragment } from "react";

const PAGE = "home";

// SEO Configuration
const seo = PAGES.find((page) => page.name === PAGE);

if (!seo) {
  throw new Error(`SEO configuration for '${PAGE}' page not found`);
}

// Metadata Configuration
export const metadata: Metadata = {
  title: seo?.title || "Looking for the Best Frontend Developer? | Hire Tim",
  description:
    seo?.description ||
    "Hire Tim – A Skilled Frontend Developer for Fast, Reliable, and High-Performing Web Applications!",
  alternates: {
    canonical: getBaseUrl(),
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
      <section id="selected-projects" className="relative mb-8 mt-8 sm:mb-10">
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
